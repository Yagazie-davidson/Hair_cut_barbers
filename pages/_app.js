import "styles/global.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600"],
	subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
	return (
		<div className={poppins.className}>
			<Component {...pageProps} />
		</div>
	);
}
