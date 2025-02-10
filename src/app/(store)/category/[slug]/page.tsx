import { publicUrl } from "@/env.mjs";
import { deslugify } from "@/lib/utils";
import { ProductList } from "@/ui/products/product-list";
import { notFound } from "next/navigation";
import type { Metadata } from "next/types";
// import fs from "fs";
// import path from "path";

// -----------------------------------------------------------------
// Utility function: Write log entries to a file.
const logToFile = (data: any, context: string, fileName: string = "product_logs.txt") => {
	// const logFilePath = path.join(process.cwd(), fileName);
	// const logEntry = `\n[${new Date().toISOString()}] ${context}:\n${JSON.stringify(data, null, 2)}\n`;
	// fs.appendFile(logFilePath, logEntry, (err) => {
	// 	if (err) console.error("Error writing log file:", err);
	// });
};

// -----------------------------------------------------------------
// Fetch all products for a given category using Stripe’s Search API.
// Uses the "page" parameter for pagination. Logs errors and each batch.
const fetchAllProducts = async (category: string): Promise<any[]> => {
	let allProducts: any[] = [];
	let nextPage: string | undefined = undefined;
	let batchNumber = 1;
	// Build the search query string.
	const query = `active:"true" AND metadata["category"]:"${category}"`;

	do {
		// Build URL parameters using URLSearchParams.
		const params = new URLSearchParams();
		params.set("limit", "100");
		params.set("query", query);
		// Append the expand parameter as required by Stripe.
		params.append("expand[0]", "data.default_price");
		if (nextPage) {
			params.set("page", nextPage);
		}
		const url = `https://api.stripe.com/v1/products/search?${params.toString()}`;

		try {
			const res = await fetch(url, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
					"Content-Type": "application/x-www-form-urlencoded",
				},
			});

			if (!res.ok) {
				// Read error response.
				const errorBody = await res.text();
				// Log the error details.
				logToFile(
					{ status: res.status, statusText: res.statusText, body: errorBody },
					`Batch #${batchNumber} - Stripe API request failed`,
					`stripe_error_log_batch_${batchNumber}.txt`
				);
				throw new Error(`Stripe API request failed: ${res.statusText}`);
			}

			const json = await res.json();
			// Log the full JSON response for this batch.
			logToFile(
				json,
				`Batch #${batchNumber} (page cursor: ${nextPage || "none"}) - Full Response`,
				`product_logs_batch_${batchNumber}.txt`
			);

			// Append this batch of products.
			//@ts-ignore
			allProducts = allProducts.concat(json.data);
			// Update the nextPage cursor (if any) for the next iteration.
			//@ts-ignore
			nextPage = json.next_page;
			batchNumber++;
		} catch (error) {
			// Log any caught exceptions.
			logToFile(
				error,
				`Batch #${batchNumber} encountered an exception`,
				`stripe_exception_log_batch_${batchNumber}.txt`
			);
			throw error;
		}
	} while (nextPage);

	// Log the combined result of all batches.
	logToFile(allProducts, "Fetched All Products", "product_logs_all.txt");
	return allProducts;
};

// -----------------------------------------------------------------
// Deduplicate products by product name so that each name appears only once.
const deduplicateProducts = (products: any[]): any[] => {
	const seenNames = new Set();
	return products.filter((product) => {
		if (seenNames.has(product.name)) {
			return false;
		}
		seenNames.add(product.name);
		return true;
	});
};

// -----------------------------------------------------------------
// generateMetadata: Uses fetchAllProducts to obtain products,
// deduplicates them by name, and logs the result.
export const generateMetadata = async (props: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
	const params = await props.params;
	const products = await fetchAllProducts(params.slug);
	const uniqueProducts = deduplicateProducts(products);

	if (uniqueProducts.length === 0) {
		return notFound();
	}
	// Optionally log the deduplicated products.
	logToFile(uniqueProducts, "generateMetadata - Unique Products", "product_logs_generateMetadata.txt");

	return {
		title: params.slug,
		alternates: { canonical: `${publicUrl}/category/${params.slug}` },
	};
};

// -----------------------------------------------------------------
// CategoryPage: Fetches all products, deduplicates them by name,
// logs the final unique product list, and renders them.
export default async function CategoryPage(props: {
	params: Promise<{ slug: string }>;
}) {
	const params = await props.params;
	const products = await fetchAllProducts(params.slug);
	const uniqueProducts = deduplicateProducts(products);

	if (uniqueProducts.length === 0) {
		return notFound();
	}
	logToFile(uniqueProducts, "CategoryPage - Unique Products", "product_logs_CategoryPage.txt");

	return (
		<main className="pb-8">
			<h1 className="text-3xl font-bold leading-none tracking-tight text-foreground">
				{deslugify(params.slug)}
			</h1>
			<ProductList products={uniqueProducts} />
		</main>
	);
}
