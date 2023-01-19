import Image from "next/image";
import HeroImage from "assets/HeroImage.png";

const Hero = () => {
	return (
		<div className="mb-14 mt-7">
			<div className="flex items-center justify-between">
				<div className="flex justify-center">
					<p className="text-4xl w-96 text-pri">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis
					</p>
				</div>
				<Image src={HeroImage} alt="Hero-Image" placeholder="blur" />
			</div>
		</div>
	);
};

export default Hero;
