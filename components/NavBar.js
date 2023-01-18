import Image from "next/image";
import Link from "next/link";
import navLinks from "data/NavItems";

import logoImage from "assets/Logo.png";
function NavBar() {
	return (
		<div>
			<header className="">
				<Link href="/">
					<Image src={logoImage} alt="Logo" />
				</Link>
				<div className="flex">
					{navLinks.map((navItem, index) => {
						return (
							<Link key={index} href={navItem.href} className="text-red-400">
								{navItem.pageName}
							</Link>
						);
					})}
				</div>
			</header>
		</div>
	);
}

export default NavBar;
