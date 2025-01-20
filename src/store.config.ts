// import AccessoriesImage from "@/images/accessories.jpg";
// import ApparelImage from "@/images/apparel.jpg";

import FitnessImage from "@/images/fitness.png";
import MobileImage from "@/images/mobile.png";

export const config = {
	categories: [
		{ name: "Gebrauchten Mobilvertrag Kaufen", slug: "kaufen", image: MobileImage },
		{ name: "Mobilvertrag verkaufen", slug: "verkaufen", image: FitnessImage },
	],

	social: {
		x: "https://x.com/yourstore",
		facebook: "https://facebook.com/yourstore",
		instagram: "https://www.instagram.com/botschmiede/",
	},

	contact: {
		email: "info@vertragsmarkt.de",
		phone: "+49 177 2266449",
		address: "Gustav-Adolf-Straße 7 - 01219 Dresden",
	},
};

export type StoreConfig = typeof config;
export default config;
