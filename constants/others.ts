import { TProjectType } from "#/types";

const ABOUT_NOTE = [
	"Hi, I'm Krishna Lokhande! I'm a fresh graduate ",
	"passionate about converting designs into pixel-perfect, ",
	"performant, accessible, and responsive applications and websites. ",
	"I'm excited about the entire development spectrum, ",
	"so I often explore backend development as well. ",
	"and responsive applications/websites.",
	"I have always been excited about the entire development spectrum,",
	"so I frequently engage in backend.",
	"What can I say? ",
	"I sincerely love working on ambitious projects with positive people ",
	"in a conducive work environment.",
];

const CREDIT_NOTE = [
	`I am not a "professional designer" by skill`,
	`so in order to bring this portfolio's design to what
	it is,`,
	"I had to research,",
	"draw inspiration",
	"and also learn from what others have done.",
	"For that I would like to acknowledge",
	"works and people",
	"who contributed to the design of this portfolio",
];

const FOCUSABLE_ELEMENT_STRING =
	'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

const ROLES = {
	design: {
		label: "UI/UX Designer",
		key: "design",
	},
	fe: {
		label: "Front End Developer",
		key: "fe",
	},
	be: {
		label: "Back End Developer",
		key: "fe",
	},
	teamlead: {
		label: "Team Lead",
		key: "teamlead",
	},
	fsd: {
		label: "Full-Stack Developer",
		key: "fsd",
	},
};

const others = { ABOUT_NOTE, CREDIT_NOTE, FOCUSABLE_ELEMENT_STRING, ROLES };

export default others;
