import GetTeam from "@/components/GetTeam";
import Layout from "@/components/Layout";
import TeamCard from "@/components/TeamCard";

const Team = () => {
	return (
		<Layout>
			<h2 className="text-pri text-xl mobile:text-3xl text-center underline underline-offset-8 mb-10">
				BOOK YOUR BARBER TODAY
			</h2>
			<GetTeam />
		</Layout>
	);
};

export default Team;
