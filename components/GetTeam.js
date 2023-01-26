import React from "react";
import allTeam from "data/team.json";
import TeamCard from "./TeamCard";
function GetTeam() {
	return (
		<div className="flex justify-center gap-x-36 mb-12 flex-wrap items-center">
			{allTeam.map(member => (
				<div key={member.id}>
					<TeamCard imageUrl={member.imageUrl} name={member.name} />
				</div>
			))}
		</div>
	);
}

export default GetTeam;
