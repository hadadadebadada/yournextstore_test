import { getTranslations } from "@/i18n/server";
import { deslugify } from "@/lib/utils";
import { YnsLink } from "@/ui/yns-link";
import Image, { type ImageProps } from "next/image";

export async function CategoryBox({
	categorySlug,
	src,
}: {
	categorySlug: string;
	src: ImageProps["src"];
}) {
	const t = await getTranslations("Global.actions");
	const categoryName = deslugify(categorySlug);

	return (
		<YnsLink href={`/category/${categorySlug}`} className="group relative">
			{/* Separator Line */}
			<div className="h-px w-full bg-neutral-300 my-4"></div>

			<div className="relative overflow-hidden rounded-lg">
				<Image
					alt="Cover image"
					className="w-full scale-105 object-cover transition-all group-hover:scale-100 group-hover:opacity-75"
					sizes="(max-width: 512px) 50vw, (max-width: 1280px) 50vw, 620px"
					src={src}
				/>
			</div>
			<div className="justify-end gap-2 px-4 py-2 text-neutral-600">
				<h3 className="text-lg font-bold tracking-tight">{categoryName}</h3>
				<p>{categoryName === "Verkaufen" ? "Jetzt verkaufen" : t("shopNow")}</p>
			</div>
		</YnsLink>
	);
}
