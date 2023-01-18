import Image from "next/image";
import Link from "next/link";
import navLinks from "data/NavItems";

import logoImage from "assets/Logo.png";
function NavBar() {
	return (
		<div>
			<header className="flex items-center justify-between">
				<Link href="/">
					<Image src={logoImage} alt="Logo" />
				</Link>
				<div className="flex gap-x-5">
					{navLinks.map((navItem, index) => {
						return (
							<Link key={index} href={navItem.href} className="">
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
