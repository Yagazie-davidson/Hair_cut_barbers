import Image from "next/image";
import React from "react";
import GetTeam from "./GetTeam";

function TeamCard({ imageUrl, name }) {
	return (
		<div className="">
			<Image
				src={imageUrl}
				alt="member 1"
				width={288}
				height={413}
				// placeholder="blur"
			/>
			<div className="bg-pri text-white h-20 flex justify-center items-center">
				<h2 className="">{name}</h2>
			</div>
		</div>
	);
}

export default TeamCard;
