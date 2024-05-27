import { TMediaFile, TMediaFormats, TProject, TRoles, TProjectType } from "#/types";
import { StaticImageData } from "next/image";
import TECH_STACKS from "#/constants/tech-stacks";
import tms from "#/public/tms-home.png";
import emshome from "#/public/ems-home.png";
import emslogin from "#/public/ems-login.png";
import emsfour from "#/public/ems-f.png";
import emsthree from "#/public/ems-t.png";
import bill from "#/public/Bill.png";
import pizza from "#/public/pizza.png";
import steps from "#/public/steps.png";
import task from "#/public/task.png";
import watch from "#/public/watchlist.png";
import weather from "#/public/weather.png";

class Project {
	id = "";
	title = "";
	details = "";
	responsibilities = "";
	roles: TRoles[] = [];
	tech: Array<keyof typeof TECH_STACKS> = [];
	type: TProjectType;
	bgColor = "";
	media: TMediaFile[] = [];

	constructor({ id, title, details, responsibilities, roles, tech, type, bgColor, media }: TProject) {
		this.id = id;
		this.title = title;
		this.details = details;
		this.responsibilities = responsibilities;
		this.roles = roles;
		this.tech = tech;
		this.type = type;
		this.bgColor = bgColor || "";
		this.media = media;
	}
}

function createMediaFile(type: TMediaFormats) {
	return function (source: StaticImageData) {
		return {
			type,
			source,
		};
	};
}

const createImageFile = createMediaFile("image");

const PROJECTS: TProject[] = [
	new Project({
		id: "ems",
		title: "EnerSense",

		roles: ["teamlead","design","fsd"],
		type: "Web Application",
		bgColor: "#1F032C",
		tech: [
			"html",
			"css",
			"angular",
			"nodejs",
			"typescript",
			"javascript",
			"bootstrap",
			"git"
		],
		media: [
			createImageFile(emshome),
			createImageFile(emslogin),
			createImageFile(emsthree),
			createImageFile(emsfour)
		],
		details: `
			<p>Energy uses tracking System made specially for Industries and big Factories to enhance their work and lower the cost of production</p>
			<p>Different UI's and Analysis for different types of Industries</p>
		`,
		responsibilities: `
		<ul>
		 <li>Converted over 20+ UI/UX designs into fully responsive (desktop, laptop, tablets), browser compatible web application pages</li>
		 <li>Connected over 70+ Restful APIs in order to make the application dynamic</li>
		 <li>Hooked up MQTT connection</li>
		 <li>Created dark mode for all pages in the application</li>
		 <li>Added Progressive Web Application feature to the application</li>
		 <li>Created 30+ APIs and Integrated them for Server side interaction.</li>
		 <li>Used effective caching strategies to improve performance of the application by 50%, due to reduction in frequency of API calls to the backend</li>
		 <li>Structured and architected the entire frontend codebase with over 3000+ files for maximum scalability and maintainability</li>
		</ul>
		`,
	}),
	{
		id: "tms",
		title: "Senso",
		details: `
		<p>Temperature Monitoring Application for tracking temperature of machineries in Industries for limitless production </p>
		`,
		responsibilities: `
		<ul>
		 <li>Created super Admin panel for server usage</li>
		 <li>Converted over 8+ UI/UX designs into fully responsive (desktop, laptop, tablets), browser compatible web application pages</li>
		 <li>Connected over 30+ Restful APIs in order to make the application dynamic</li>
		 <li>Added Progressive Web Application feature to the application</li>
		 <li>Created 14+ APIs and Integrated them for Server side interaction.</li>
		 <li>Used effective caching strategies to improve performance of the application by 50%, due to reduction in frequency of API calls to the backend</li>
		 <li>Structured and architected the frontend codebase with over 760+ files for maximum scalability and maintainability with team</li>
		</ul>
		`,
		roles: ["fsd"],
		tech: [
			"html",
			"css",
			"angular",
			"nodejs",
			"typescript",
			"javascript",
			"git"
		],
		type: "Web Application",
		bgColor: "#f4efe7",
		media: [
			createImageFile(tms),
		],
	},
	{
		id: "weather",
		title: "Classy Weather",
		details: `
		<p>I created this weather application from design to coding, as a test. A user can check the weather of various places, after which they can monitor weather for entire week. </p>
		`,
		responsibilities: `
		<ul>
			<li>Created the design for the web applicatio.</li>
			<li>Converted designs into responsive web application</li>
			<li>Integrated weather API</li>
		</ul>
		`,
		roles: ["design","fsd",],
		githublink: "https://github.com/Krisssss987/Classy-Weather",
		tech: [
			"html",
			"css",
			"bootstrap",
			"react",
			"javascript",
			"git"
		],
		type: "Github Repository",
		bgColor: "#f4efe7",
		media: [
			createImageFile(weather),
		],
	},
	{
		id: "eatnsplit",
		title: "Eat-N-Split",
		details: `
		<p>Web apllication made for practice for footing the bill with friend and be able to add new friend as required. </p>
		`,
		responsibilities: `
		<ul>
		<li>Created the design for the web application</li>
		<li>Converted designs into responsive web application</li>
		<li>Created multiple modules for smooth usage</li>
		<li>Created logic for bill footing and user adding</li>
		</ul>
		`,
		roles: ["fe"],
		githublink: "https://github.com/Krisssss987/Eat-N-Split",
		tech: [
			"html",
			"css",
			"bootstrap",
			"react",
			"javascript",
			"git"
		],
		type: "Github Repository",
		bgColor: "#f4efe7",
		media: [
			createImageFile(bill),
		],
	},
	{
		id: "travel",
		title: "Far Awway",
		details: `
		<p>Web application made to create travel list for users with completion and ordering features</p>
		`,
		responsibilities: `
		<ul>
		<li>Created the design for the web application</li>
		<li>Converted designs into responsive web application</li>
		<li>Created user-friendly UI/UX for site</li>
		</ul>
		`,
		roles: ["fe"],
		githublink: "https://github.com/Krisssss987/Far-Away---Travel-List",
		tech: [
			"html",
			"css",
			"bootstrap",
			"react",
			"javascript",
			"git"
		],
		type: "Github Repository",
		bgColor: "#f4efe7",
		media: [
			createImageFile(task),
		],
	},
	{
		id: "pizza",
		title: "PizzaMenu",
		details: `
		<p>Web page showing Pizza Menu</p>
		`,
		responsibilities: `
		<ul>
		<li>Created the design for the web application</li>
		<li>Genrated coding logics and state-management</li>			
		</ul>
		`,
		roles: ["fe"],
		githublink: "https://github.com/Krisssss987/Pizza-Menu",
		tech: [
			"html",
			"css",
			"react",
			"javascript",
			"git"
		],
		type: "Github Repository",
		bgColor: "#f4efe7",
		media: [
			createImageFile(pizza),
		],
	},
	{
		id: "stepper",
		title: "Steps",
		details: `
		<p>Static Stepper for responsive design</p>
		`,
		responsibilities: `
		<ul>
			<li>Created UI</li>
			<li>Created reusable stepper module for general purpose use with hardcoding</li>
		</ul>
		`,
		roles: ["fe"],
		githublink: "https://github.com/Krisssss987/Steps-Stepper",
		tech: [
			"html",
			"css",
			"react",
			"javascript",
			"git"
		],
		type: "Github Repository",
		bgColor: "#f4efe7",
		media: [
			createImageFile(steps),
		],
	},
	{
		id: "usePopcorn",
		title: "UsePopcorn",
		details: `
		<p>I created this app to keep track of movies watched previously with the use of external API </p>
		`,
		responsibilities: `
		<ul>
		<li>Created the design for the web application</li>
		<li>Converted designs into responsive web application</li>
		<li>Created multiple modules for smooth usage</li>
		<li>Intgrated external oMDB API for movies finding</li>
		<li>Connected API with search bar to get required movie info as user need</li>
		<li>Created reusable star-system module</li>
		<li>Created logic for storing and analyzing watchlist</li>
		</ul>
		`,
		roles: ["fsd","design"],
		githublink: "https://github.com/Krisssss987/usePopcorn",
		tech: [
			"html",
			"css",
			"bootstrap",
			"react",
			"javascript",
			"git"
		],
		type: "Github Repository",
		bgColor: "#f4efe7",
		media: [
			createImageFile(watch),
		],
	},
];

export default PROJECTS;
