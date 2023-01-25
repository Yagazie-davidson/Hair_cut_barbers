import React from "react";
import allTeam from "data/team.json";
import TeamCard from "./TeamCard";
function GetTeam() {
	return (
		<div className="flex justify-between mb-12">
			{allTeam.map(member => (
				<div key={member.id}>
					<TeamCard imageUrl={member.imageUrl} name={member.name} />
				</div>
			))}
		</div>
	);
}

export default GetTeam;
