/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"user-images.githubusercontent.com",
			"cdn.discordapp.com",
			"i.ibb.co",
			"i.postimg.cc",
			"images2.imgbox.com",
			"raw.githubusercontent.com",
			"img.youtube.com",
		],
		formats: ["image/webp"],
		unoptimized: process.env.NODE_ENV === "development",
	},
};

module.exports = nextConfig;
