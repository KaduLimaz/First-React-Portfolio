/* eslint-disable react/prop-types */
// animação
import { motion } from "framer-motion";
import {
	fadeInLeftVariant,
	fadeInTopVariant,
} from "../../stylesTheme/Variants";

//Import global styles
import {
	FlexContainer,
	Heading,
	PaddingContainer,
	ParaText,
	IconContainer,
	Button,
	LinkStyled,
} from "../../StyledComponents/Global.styled";

//import assets
import { FaGithub } from "react-icons/fa";

//import project styles
import {
	ProjectImage,
	ProjectImageContainer,
	TechStackCard,
} from "../../StyledComponents/MyProject.styled";

// import { Data } from "../../stylesTheme/Data";

export const Project = ({ data }) => {
	return (
		<FlexContainer fullWidthChild>
			{/* left section project content */}
			<motion.div
				variants={fadeInLeftVariant}
				initial="hidden"
				whileInView={"visible"}
			>
				<FlexContainer align="center" gap="1rem">
					<Heading as="h3" size="h3" bottom="1rem">
						{data.project_name}
					</Heading>

					<IconContainer color="blue" size="2rem">
						<LinkStyled
							href="https://github.com/KaduLimaz/FrontEnd-III-Ativiade-FInal"
							target="_blank"
						>
							<FaGithub />
						</LinkStyled>
					</IconContainer>
				</FlexContainer>

				<PaddingContainer top="1rem">
					<FlexContainer gap="1.5rem">
						{data.tech_stacks.map((stack) => (
							<TechStackCard key={data.id}>{stack}</TechStackCard>
						))}
					</FlexContainer>
				</PaddingContainer>
				<ParaText top="1.5rem" bottom="2rem">
					{data.project_desc}
				</ParaText>
				<Button href={data.project_url} target="_blank">
					Visitar Site
				</Button>
			</motion.div>
			{/* --right-section-project-image-- */}
			<ProjectImageContainer
				as={motion.div}
				variants={fadeInTopVariant}
				initial="hidden"
				whileInView={"visible"}
				justify="flex-end"
			>
				<ProjectImage src={data.project_img} alt={data.project_name} />
			</ProjectImageContainer>
		</FlexContainer>
	);
};
