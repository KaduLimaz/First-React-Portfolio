/* eslint-disable react/jsx-key */
import {
	FlexContainer,
	Heading,
	PaddingContainer,
	ParaText,
	BlueText,
	IconContainer,
} from "../StyledComponents/Global.styled";
// import My Skills styles
import {
	SkillsCard,
	SkillsCardContainer,
} from "../StyledComponents/MySkills.styled";
import { Skills } from "../stylesTheme/Data";

export const MySkills = () => {
	return (
		<PaddingContainer id="skills" top="10%" bottom="10%">
			<FlexContainer fullWidthChild>
				{/* --left-section-- */}
				<SkillsCardContainer>
					{Skills.map((skill) => (
						<SkillsCard>
							<IconContainer size="5rem" color="blue">
								{skill.icon}
							</IconContainer>

							<Heading as="h4" size="h4">
								{skill.tech}
							</Heading>
						</SkillsCard>
					))}
				</SkillsCardContainer>
				<div></div>
			</FlexContainer>
		</PaddingContainer>
	);
};
