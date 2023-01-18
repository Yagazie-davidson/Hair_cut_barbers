import Image from "next/image";
import HeroImage from "assets/HeroImage.png";

const Hero = () => {
	return (
		<div>
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis
				</p>
			</div>
			<Image src={HeroImage} alt="Hero-Image" />
		</div>
	);
};

export default Hero;
