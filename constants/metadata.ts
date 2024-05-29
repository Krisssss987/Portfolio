import PROJECTS from "./projects";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const metadata = {
	home: {
		title: "Krishna Lokhande: Software Developer (Full Stack Developer)",
		description: `Krishna Lokhande is a Software Developer.`,
		url: `${BASE_URL}`,
		image: `${BASE_URL}/images/covers/home.png`,
	},
	projects: {
		title: "Krishna Lokhande: Projects",
		description: "A list of projects, replicas, and experiments from Krishna Lokhande",
		url: `${BASE_URL}/projects`,
		image: `${BASE_URL}/images/covers/projects.png`,
	},
	singleproject: ({ id }: { id: string }) => {
		const project = PROJECTS.find((item) => item.id === id);

		if (project) {
			const { title, media } = project;
			return {
				title: `Krishna Lokhande | Project | ${title}`,
				description: `${title} Project`,
				url: `${BASE_URL}/project/${id}`,
				image: media[0] ? `${BASE_URL}${media[0].source}` : `${BASE_URL}/images/covers/projects.png`,
			};
		} else {
			return {
				title: `Krishna Lokhande | Project`,
				description: `Invalid Project`,
				url: `${BASE_URL}/project/${id}`,
				image: `${BASE_URL}/images/covers/invalid-project.png`,
			};
		}
	},
};

export default metadata;
