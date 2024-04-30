//animação

import { motion } from "framer-motion";
import { fadeInTopVariant } from "../stylesTheme/Variants";

// global styles
import {
	Heading,
	PaddingContainer,
	BlueText,
} from "../StyledComponents/Global.styled";
import { projectDetails } from "../stylesTheme/Data";
import { Project } from "./layouts/Project";

export const MyProjects = () => {
	return (
		<PaddingContainer
			id="projects"
			top="5%"
			bottom="5%"
			responsiveTop="20%"
			responsiveLeft="1rem"
			responsiveRight="1rem"
		>
			<Heading
				as={motion.h4}
				variants={fadeInTopVariant}
				initial="hidden"
				whileInView={"visible"}
				size="h4"
			>
				Meus Projetos
			</Heading>
			<Heading
				as={motion.h2}
				variants={fadeInTopVariant}
				initial="hidden"
				whileInView={"visible"}
				size="h2"
			>
				O que <BlueText>eu construí</BlueText>
			</Heading>
			{projectDetails.map((p) => (
				<PaddingContainer key={p.id} top="5rem" bottom="5rem">
					<Project data={p} />
				</PaddingContainer>
			))}
		</PaddingContainer>
	);
};
