import Image from "next/image";
import React from "react";
import GetTeam from "./GetTeam";

function TeamCard({ imageUrl, name }) {
	return (
		<div className="bg-pri h-auto w-72 text-white pb-16 mb-5">
			<Image
				src={imageUrl}
				alt="member 1"
				width={288}
				height={413}
				placeholder="blur"
			/>
			<div className="flex justify-center items-center text-center">
				<h2 className="">{name}</h2>
			</div>
		</div>
	);
}

export default TeamCard;
