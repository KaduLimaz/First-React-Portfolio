/* eslint-disable react/prop-types */
//Import global styles
import {
	FlexContainer,
	Heading,
	PaddingContainer,
	ParaText,
	IconContainer,
	Button,
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
			<div>
				<FlexContainer align="center" gap="1rem">
					<Heading as="h3" size="h3" bottom="1rem">
						{data.project_name}
					</Heading>

					<IconContainer color="blue" size="2rem">
						<FaGithub />
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
				<Button>Visit Website</Button>
			</div>
			{/* --right-section-project-image-- */}
			<ProjectImageContainer justify="flex-end">
				<ProjectImage src={data.project_img} alt={data.project_name} />
			</ProjectImageContainer>
		</FlexContainer>
	);
};
