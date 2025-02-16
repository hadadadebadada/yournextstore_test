// // import { ProductModel3D } from "@/app/(store)/product/[slug]/product-model3d";
// import { ProductImageModal } from "@/app/(store)/product/[slug]/product-image-modal";
// import {
// 	Breadcrumb,
// 	BreadcrumbItem,
// 	BreadcrumbLink,
// 	BreadcrumbList,
// 	BreadcrumbPage,
// 	BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { publicUrl } from "@/env.mjs";
// import { getLocale, getTranslations } from "@/i18n/server";
// import { getRecommendedProducts } from "@/lib/search/trieve";
// import { cn, deslugify, formatMoney, formatProductName } from "@/lib/utils";
// import type { TrieveProductMetadata } from "@/scripts/upload-trieve";
// import { AddToCartButton } from "@/ui/add-to-cart-button";
// import { JsonLd, mappedProductToJsonLd } from "@/ui/json-ld";
// import { Markdown } from "@/ui/markdown";
// import { MainProductImage } from "@/ui/products/main-product-image";
// import { StickyBottom } from "@/ui/sticky-bottom";
// import { YnsLink } from "@/ui/yns-link";
// import * as Commerce from "commerce-kit";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next/types";
// import { Suspense } from "react";

// export const generateMetadata = async (props: {
// 	params: Promise<{ slug: string }>;
// 	searchParams: Promise<{ variant?: string }>;
// }): Promise<Metadata> => {
// 	const searchParams = await props.searchParams;
// 	const params = await props.params;
// 	const variants = await Commerce.productGet({ slug: params.slug });

// 	const selectedVariant = searchParams.variant || variants[0]?.metadata.variant;
// 	const product = variants.find((variant) => variant.metadata.variant === selectedVariant);
// 	if (!product) {
// 		return notFound();
// 	}
// 	const t = await getTranslations("/product.metadata");

// 	const canonical = new URL(`${publicUrl}/product/${product.metadata.slug}`);
// 	if (selectedVariant) {
// 		canonical.searchParams.set("variant", selectedVariant);
// 	}

// 	const productName = formatProductName(product.name, product.metadata.variant);

// 	return {
// 		title: t("title", { productName }),
// 		description: product.description,
// 		alternates: { canonical },
// 	} satisfies Metadata;
// };

// export default async function SingleProductPage(props: {
// 	params: Promise<{ slug: string }>;
// 	searchParams: Promise<{ variant?: string; image?: string }>;
// }) {
// 	const params = await props.params;
// 	const searchParams = await props.searchParams;

// 	const variants = await Commerce.productGet({ slug: params.slug });
// 	const selectedVariant = (variants.length > 1 && searchParams.variant) || variants[0]?.metadata.variant;
// 	const product = variants.find((variant) => variant.metadata.variant === selectedVariant);

// 	if (!product) {
// 		return notFound();
// 	}


// 	const t = await getTranslations("/product.page");
// 	const locale = await getLocale();

// 	const category = product.metadata.category;
// 	const images = product.images;

// 	return (
// 		<article className="pb-12">
// 			<Breadcrumb>
// 				<BreadcrumbList>
// 					<BreadcrumbItem>
// 						<BreadcrumbLink asChild className="inline-flex min-h-12 min-w-12 items-center justify-center">
// 							<YnsLink href="/products">{t("allProducts")}</YnsLink>
// 						</BreadcrumbLink>
// 					</BreadcrumbItem>
// 					{category && (
// 						<>
// 							<BreadcrumbSeparator />
// 							<BreadcrumbItem>
// 								<BreadcrumbLink className="inline-flex min-h-12 min-w-12 items-center justify-center" asChild>
// 									<YnsLink href={`/category/${category}`}>{deslugify(category)}</YnsLink>
// 								</BreadcrumbLink>
// 							</BreadcrumbItem>
// 						</>
// 					)}
// 					<BreadcrumbSeparator />
// 					<BreadcrumbItem>
// 						<BreadcrumbPage>{product.name}</BreadcrumbPage>
// 					</BreadcrumbItem>
// 					{selectedVariant && (
// 						<>
// 							<BreadcrumbSeparator />
// 							<BreadcrumbItem>
// 								<BreadcrumbPage>{deslugify(selectedVariant)}</BreadcrumbPage>
// 							</BreadcrumbItem>
// 						</>
// 					)}
// 				</BreadcrumbList>
// 			</Breadcrumb>

// 			<StickyBottom product={product} locale={locale}>
// 				<div className="mt-4 grid gap-4 lg:grid-cols-12">
// 					<div className="lg:col-span-5 lg:col-start-8">
// 						<h1 className="text-3xl font-bold leading-none tracking-tight text-foreground">{product.name}</h1>
// 						{product.default_price.unit_amount && (
// 							<p className="mt-2 text-2xl font-medium leading-none tracking-tight text-foreground/70">
// 								{formatMoney({
// 									amount: product.default_price.unit_amount,
// 									currency: product.default_price.currency,
// 									locale,
// 								})}
// 							</p>
// 						)}
// 						<div className="mt-2">{product.metadata.stock <= 0 && <div>Out of stock</div>}</div>
// 					</div>

// 					<div className="lg:col-span-7 lg:row-span-3 lg:row-start-1">
// 						<h2 className="sr-only">{t("imagesTitle")}</h2>

// 						<div className="grid gap-4 lg:grid-cols-3 [&>*:first-child]:col-span-3">
// 							{/* {product.metadata.preview && (
// 								<ProductModel3D model3d={product.metadata.preview} imageSrc={product.images[0]} />
// 							)} */}
// 							{images.map((image, idx) => {
// 								const params = new URLSearchParams({
// 									image: idx.toString(),
// 								});
// 								if (searchParams.variant) {
// 									params.set("variant", searchParams.variant);
// 								}
// 								return (
// 									<YnsLink key={idx} href={`?${params}`} scroll={false}>
// 										{idx === 0 && !product.metadata.preview ? (
// 											<MainProductImage
// 												key={image}
// 												className="w-full rounded-lg bg-neutral-100 object-cover object-center transition-opacity"
// 												src={image}
// 												loading="eager"
// 												priority
// 												alt=""
// 											/>
// 										) : (
// 											<Image
// 												key={image}
// 												className="w-full rounded-lg bg-neutral-100 object-cover object-center transition-opacity"
// 												src={image}
// 												width={700 / 3}
// 												height={700 / 3}
// 												sizes="(max-width: 1024x) 33vw, (max-width: 1280px) 20vw, 225px"
// 												loading="eager"
// 												priority
// 												alt=""
// 											/>
// 										)}
// 									</YnsLink>
// 								);
// 							})}
// 						</div>
// 					</div>

// 					<div className="grid gap-8 lg:col-span-5">
// 						<section>
// 							<h2 className="sr-only">{t("descriptionTitle")}</h2>
// 							<div className="prose text-secondary-foreground">
// 								<Markdown source={product.description || ""} />
// 							</div>
// 						</section>

// 						{variants.length > 1 && (
// 							<div className="grid gap-2">
// 								<p className="text-base font-medium" id="variant-label">
// 									{t("variantTitle")}
// 								</p>
// 								<ul role="list" className="grid grid-cols-4 gap-2" aria-labelledby="variant-label">
// 									{variants.map((variant) => {
// 										const isSelected = selectedVariant === variant.metadata.variant;
// 										return (
// 											variant.metadata.variant && (
// 												<li key={variant.id}>
// 													<YnsLink
// 														scroll={false}
// 														prefetch={true}
// 														href={`/product/${variant.metadata.slug}?variant=${variant.metadata.variant}`}
// 														className={cn(
// 															"flex cursor-pointer items-center justify-center gap-2 rounded-md border p-2 transition-colors hover:bg-neutral-100",
// 															isSelected && "border-black bg-neutral-50 font-medium",
// 														)}
// 														aria-selected={isSelected}
// 													>
// 														{deslugify(variant.metadata.variant)}
// 													</YnsLink>
// 												</li>
// 											)
// 										);
// 									})}
// 								</ul>
// 							</div>
// 						)}

// 						<AddToCartButton productId={product.id} disabled={product.metadata.stock <= 0} />
// 					</div>
// 				</div>
// 			</StickyBottom>

// 			<Suspense>
// 				<SimilarProducts id={product.id} />
// 			</Suspense>

// 			<Suspense>
// 				<ProductImageModal images={images} />
// 			</Suspense>

// 			<JsonLd jsonLd={mappedProductToJsonLd(product)} />
// 		</article>
// 	);
// }

// async function SimilarProducts({ id }: { id: string }) {
// 	const products = await getRecommendedProducts({ productId: id, limit: 4 });

// 	if (!products) {
// 		return null;
// 	}

// 	return (
// 		<section className="py-12">
// 			<div className="mb-8">
// 				<h2 className="text-2xl font-bold tracking-tight">You May Also Like</h2>
// 			</div>
// 			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// 				{products.map((product) => {
// 					const trieveMetadata = product.metadata as TrieveProductMetadata;
// 					return (
// 						<div key={product.tracking_id} className="bg-card rounded overflow-hidden shadow group">
// 							{trieveMetadata.image_url && (
// 								<YnsLink href={`${publicUrl}${product.link}`} className="block" prefetch={false}>
// 									<Image
// 										className={
// 											"w-full rounded-lg bg-neutral-100 object-cover object-center group-hover:opacity-80 transition-opacity"
// 										}
// 										src={trieveMetadata.image_url}
// 										width={300}
// 										height={300}
// 										sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
// 										alt=""
// 									/>
// 								</YnsLink>
// 							)}
// 							<div className="p-4">
// 								<h3 className="text-lg font-semibold mb-2">
// 									<YnsLink href={product.link || "#"} className="hover:text-primary" prefetch={false}>
// 										{trieveMetadata.name}
// 									</YnsLink>
// 								</h3>
// 								<div className="flex items-center justify-between">
// 									<span>
// 										{formatMoney({
// 											amount: trieveMetadata.amount,
// 											currency: trieveMetadata.currency,
// 										})}
// 									</span>
// 								</div>
// 							</div>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</section>
// 	);
// }

// import { ProductModel3D } from "@/app/(store)/product/[slug]/product-model3d";
import { ProductImageModal } from "@/app/(store)/product/[slug]/product-image-modal";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { publicUrl } from "@/env.mjs";
import { getLocale, getTranslations } from "@/i18n/server";
import { getRecommendedProducts } from "@/lib/search/trieve";
import { cn, deslugify, formatMoney, formatProductName } from "@/lib/utils";
import type { TrieveProductMetadata } from "@/scripts/upload-trieve";
import { AddToCartButton } from "@/ui/add-to-cart-button";
import { JsonLd, mappedProductToJsonLd } from "@/ui/json-ld";
import { Markdown } from "@/ui/markdown";
import { MainProductImage } from "@/ui/products/main-product-image";
import { StickyBottom } from "@/ui/sticky-bottom";
import { YnsLink } from "@/ui/yns-link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next/types";
import { Suspense } from "react";

/*──────────────────────────────────────────────────────────────
  TypeScript Interfaces for Stripe Data
──────────────────────────────────────────────────────────────*/

interface StripePrice {
	id: string;
	object: "price";
	active: boolean;
	billing_scheme: string;
	created: number;
	currency: string;
	custom_unit_amount: null;
	livemode: boolean;
	lookup_key: string | null;
	metadata: Record<string, string>;
	nickname: string | null;
	product: string;
	recurring: null;
	tax_behavior: string;
	tiers_mode: null;
	transform_quantity: null;
	type: string;
	unit_amount: number;
	unit_amount_decimal: string;
}

export interface StripeProductMetadata {
	category?: string;
	monthly_price?: string;
	order?: string;
	slug?: string;
	total_months?: string;
	variant?: string;
	[key: string]: string | undefined;
}

export interface StripeProduct {
	id: string;
	object: "product";
	active: boolean;
	attributes: any[];
	created: number;
	default_price: StripePrice;
	description: string;
	features: any[];
	images: string[];
	livemode: boolean;
	marketing_features: any[];
	metadata: StripeProductMetadata;
	name: string;
	package_dimensions: null;
	shippable: null;
	statement_descriptor: null;
	tax_code: null;
	type: string;
	unit_label: null;
	updated: number;
	url: null;
}

/*──────────────────────────────────────────────────────────────
  Helper: Get Variants by Slug via Search API
──────────────────────────────────────────────────────────────*/

/**
 * Searches for all Stripe products whose metadata.slug matches the given slug.
 * The search query uses Stripe’s Search Query Language.
 */
async function getVariantsBySlug(slug: string): Promise<StripeProduct[]> {
	// Use a query that returns only active products with a matching slug.
	const query = `active:"true" AND metadata["slug"]:"${slug}"`;
	const url = `https://api.stripe.com/v1/products/search?limit=100&query=${encodeURIComponent(query)}&expand[0]=data.default_price`;
	console.log(url);

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
		},
		next: { revalidate: 3600 }, // cache for one hour
	});

	if (!res.ok) {
		console.error(`Error fetching products for slug ${slug}: ${res.statusText}`);
		return [];
	}

	const data = await res.json();
	//@ts-ignore

	return data.data as StripeProduct[];
}




/*──────────────────────────────────────────────────────────────
  generateMetadata
──────────────────────────────────────────────────────────────*/

export const generateMetadata = async (props: {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ variant?: string }>;
}): Promise<Metadata> => {
	const searchParams = await props.searchParams;
	console.log("searchParams:", searchParams);
	const params = await props.params;
	console.log("params:", params);

	const variants = await getVariantsBySlug(params.slug);
	console.log("Fetched variants:", variants);
	console.log("Number of fetched variants:", variants.length);

	// Use searchParams.variant if provided; otherwise fall back to the first variant.
	const selectedVariant: string =
		searchParams.variant ?? variants[0]?.metadata.variant ?? "";
	const product = variants.find(
		(variant) => variant.metadata.variant === selectedVariant
	);
	if (!product) {
		return notFound();
	}
	const t = await getTranslations("/product.metadata");

	// Use metadata.slug if available, otherwise fallback to the product id.
	const canonicalSlug = product.metadata.slug ?? product.id;
	const canonical = new URL(`${publicUrl}/product/${canonicalSlug}`);
	if (selectedVariant) {
		canonical.searchParams.set("variant", selectedVariant);
	}

	const productName = formatProductName(
		product.name,
		product.metadata.variant ?? ""
	);

	return {
		title: t("title", { productName }),
		description: product.description,
		alternates: { canonical },
	};
};

/*──────────────────────────────────────────────────────────────
  SingleProductPage Component
──────────────────────────────────────────────────────────────*/

export default async function SingleProductPage(props: {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ variant?: string; image?: string }>;
}) {
	const params = await props.params;
	const searchParams = await props.searchParams;

	// Use the search API to fetch all variants sharing the same slug.
	const variants = await getVariantsBySlug(params.slug);
	//@ts-ignore
	const selectedVariant: string =
		(searchParams.variant && variants.length > 1 && searchParams.variant) ??
		variants[0]?.metadata.variant ??
		"";
	const product = variants.find(
		(variant) => variant.metadata.variant === selectedVariant
	);

	if (!product) {
		return notFound();
	}

	const t = await getTranslations("/product.page");
	const locale = await getLocale();

	const category = product.metadata.category ?? "";
	const images = product.images;

	return (
		<article className="pb-12">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild className="inline-flex min-h-12 min-w-12 items-center justify-center">
							<YnsLink href="/products">{t("allProducts")}</YnsLink>
						</BreadcrumbLink>
					</BreadcrumbItem>
					{category && (
						<>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink className="inline-flex min-h-12 min-w-12 items-center justify-center" asChild>
									<YnsLink href={`/category/${category}`}>{deslugify(category)}</YnsLink>
								</BreadcrumbLink>
							</BreadcrumbItem>
						</>
					)}
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{product.name}</BreadcrumbPage>
					</BreadcrumbItem>
					{selectedVariant && (
						<>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>{deslugify(selectedVariant)}</BreadcrumbPage>
							</BreadcrumbItem>
						</>
					)}
				</BreadcrumbList>
			</Breadcrumb>
			{/*@ts-ignore */}
			<StickyBottom product={product} locale={locale}>
				<div className="mt-4 grid gap-4 lg:grid-cols-12">
					<div className="lg:col-span-5 lg:col-start-8">
						<h1 className="text-3xl font-bold leading-none tracking-tight text-foreground">
							{product.name}
						</h1>
						{product.default_price.unit_amount && (
							<p className="mt-2 text-2xl font-medium leading-none tracking-tight text-foreground/70">
								{formatMoney({
									amount: product.default_price.unit_amount,
									currency: product.default_price.currency,
									locale,
								})}
							</p>
						)}
						<div className="mt-2">
							{product.metadata.stock &&
								Number(product.metadata.stock) <= 0 ? (
								<div>Out of stock</div>
							) : null}
						</div>
					</div>

					<div className="lg:col-span-7 lg:row-span-3 lg:row-start-1">
						<h2 className="sr-only">{t("imagesTitle")}</h2>
						<div className="grid gap-4 lg:grid-cols-3 [&>*:first-child]:col-span-3">
							{images.map((image, idx) => {
								const urlParams = new URLSearchParams({
									image: idx.toString(),
								});
								if (searchParams.variant) {
									urlParams.set("variant", searchParams.variant);
								}
								return (
									<YnsLink key={idx} href={`?${urlParams}`} scroll={false}>
										{idx === 0 && !product.metadata.preview ? (
											<MainProductImage
												key={image}
												className="w-full rounded-lg bg-neutral-100 object-cover object-center transition-opacity"
												src={image}
												loading="eager"
												priority
												alt=""
											/>
										) : (
											<Image
												key={image}
												className="w-full rounded-lg bg-neutral-100 object-cover object-center transition-opacity"
												src={image}
												width={700 / 3}
												height={700 / 3}
												sizes="(max-width: 1024px) 33vw, (max-width: 1280px) 20vw, 225px"
												loading="eager"
												priority
												alt=""
											/>
										)}
									</YnsLink>
								);
							})}
						</div>
					</div>

					<div className="grid gap-8 lg:col-span-5">
						<section>
							<h2 className="sr-only">{t("descriptionTitle")}</h2>
							<div className="prose text-secondary-foreground">
								<Markdown source={product.description || ""} />
							</div>
						</section>

						{variants.length > 1 && (
							<div className="grid gap-2">
								<p className="text-base font-medium" id="variant-label">
									{t("variantTitle")}
								</p>
								<ul role="list" className="grid grid-cols-4 gap-2" aria-labelledby="variant-label">
									{variants.map((variant) => {
										const isSelected = variant.metadata.variant === selectedVariant;
										return (
											variant.metadata.variant && (
												<li key={variant.id}>
													<YnsLink
														scroll={false}
														prefetch={true}
														href={`/product/${variant.metadata.slug}?variant=${variant.metadata.variant}`}
														className={cn(
															"flex cursor-pointer items-center justify-center gap-2 rounded-md border p-2 transition-colors hover:bg-neutral-100",
															isSelected && "border-black bg-neutral-50 font-medium"
														)}
														aria-selected={isSelected}
													>
														{deslugify(variant.metadata.variant)}
													</YnsLink>
												</li>
											)
										);
									})}
								</ul>
							</div>
						)}

						<AddToCartButton
							productId={product.id}
							disabled={
								product.metadata.stock ? Number(product.metadata.stock) <= 0 : false
							}
						/>
					</div>
				</div>
			</StickyBottom>

			<Suspense>
				<SimilarProducts id={product.id} />
			</Suspense>

			<Suspense>
				<ProductImageModal images={images} />
			</Suspense>
			{/*@ts-ignore */}
			<JsonLd jsonLd={mappedProductToJsonLd(product)} />
		</article>
	);
}

/*──────────────────────────────────────────────────────────────
  SimilarProducts Component
──────────────────────────────────────────────────────────────*/

async function SimilarProducts({ id }: { id: string }) {
	const products = await getRecommendedProducts({ productId: id, limit: 4 });

	if (!products) {
		return null;
	}

	return (
		<section className="py-12">
			<div className="mb-8">
				<h2 className="text-2xl font-bold tracking-tight">You May Also Like</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{products.map((product) => {
					const trieveMetadata = product.metadata as TrieveProductMetadata;
					return (
						<div key={product.tracking_id} className="bg-card rounded overflow-hidden shadow group">
							{trieveMetadata.image_url && (
								<YnsLink href={`${publicUrl}${product.link}`} className="block" prefetch={false}>
									<Image
										className="w-full rounded-lg bg-neutral-100 object-cover object-center group-hover:opacity-80 transition-opacity"
										src={trieveMetadata.image_url}
										width={300}
										height={300}
										sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
										alt=""
									/>
								</YnsLink>
							)}
							<div className="p-4">
								<h3 className="text-lg font-semibold mb-2">
									<YnsLink href={product.link || "#"} className="hover:text-primary" prefetch={false}>
										{trieveMetadata.name}
									</YnsLink>
								</h3>
								<div className="flex items-center justify-between">
									<span>
										{formatMoney({
											amount: trieveMetadata.amount,
											currency: trieveMetadata.currency,
										})}
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
