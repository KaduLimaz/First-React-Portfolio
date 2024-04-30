import { FaReact, FaNode, FaCss3 } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import Project1 from "../assets/API_rick.png";

export const Skills = [
	{
		id: 0,
		tech: "React JS",
		icon: <FaReact />,
	},
	{
		id: 1,
		tech: "Node JS",
		icon: <FaNode />,
	},
	{
		id: 3,
		tech: "CSS",
		icon: <FaCss3 />,
	},

	{
		id: 4,
		tech: "JavaScript",
		icon: <SiJavascript />,
	},
	{
		id: 5,
		tech: "TypeScript",
		icon: <SiTypescript />,
	},
];

export const projectDetails = [
	{
		id: 0,
		project_name: "API Rick-Morty",
		project_desc:
			"A API do Rick and Morty fornece informações sobre personagens, episódios e locais da série de animação Rick and Morty. Este projeto demonstra como fazer solicitações à API utilizando Axios e processar os dados retornados.",
		tech_stacks: ["JavaScript", "CSS", "HTML", "Axios"],
		project_img: Project1,
		project_url: "https://front-end-iii-ativiade-final.vercel.app/",
		reverse: true,
	},
];

export const navLinks = [
	{
		id: 0,
		name: "Home",
		href: "Home",
	},
	{
		id: 1,
		name: "My Skills",
		href: "skills",
	},
	{
		id: 2,
		name: "My Projects",
		href: "projects",
	},
	{
		id: 3,
		name: "My Contact",
		href: "Contact",
	},
];
