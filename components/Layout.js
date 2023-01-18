import { NextSeo } from "next-seo";
import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";
import config from "haircut.config";
const Layout = ({ header, children }) => {
	return (
		<>
			<div className="mx-20">
				<NavBar />
				<Head>
					<title>Hair Cut Barbers</title>
				</Head>
				<NextSeo
					title={config.title.short}
					description={config.description.short}
					openGraph={{
						// url: config.url,
						title: config.title.long,
					}}
				/>
				{children}
			</div>
			<Footer />
		</>
	);
};

export default Layout;
