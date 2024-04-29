import {
	Heading,
	PaddingContainer,
	BlueText,
} from "../StyledComponents/Global.styled";
import { projectDetails } from "../stylesTheme/Data";
import { Project } from "./layouts/Project";

export const MyProjects = () => {
	return (
		<PaddingContainer id="projects" top="5%" bottom="5%">
			<Heading as="h4" size="h4">
				MY PROJECTS
			</Heading>
			<Heading as="h2" size="h2">
				What <BlueText>I have built</BlueText>
			</Heading>
			{projectDetails.map((p) => (
				<PaddingContainer key={p.id} top="5rem" bottom="5rem">
					<Project data={p} />
				</PaddingContainer>
			))}
		</PaddingContainer>
	);
};
