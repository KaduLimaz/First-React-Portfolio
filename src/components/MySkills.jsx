/* eslint-disable react/jsx-key */
// animação import
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../stylesTheme/Variants";

//global styles
import {
	FlexContainer,
	Heading,
	PaddingContainer,
	ParaText,
	BlueText,
	IconContainer,
	LinkStyled,
} from "../StyledComponents/Global.styled";
// import My Skills styles
import {
	SkillsCard,
	SkillsCardContainer,
} from "../StyledComponents/MySkills.styled";
import { Skills } from "../stylesTheme/Data";

export const MySkills = () => {
	return (
		<PaddingContainer
			id="skills"
			top="10%"
			bottom="10%"
			responsiveLeft="1rem"
			responsiveRight="1rem"
		>
			<FlexContainer
				fullWidthChild
				responsiveFlex
				responsiveDirection="column-reverse"
			>
				{/* --left-section-- */}
				<SkillsCardContainer
					as={motion.div}
					variants={fadeInLeftVariant}
					initial={"hidden"}
					whileInView={"visible"}
				>
					{Skills.map((skill) => (
						<SkillsCard>
							<LinkStyled>
								<IconContainer size="5rem" color="blue">
									{skill.icon}
								</IconContainer>
							</LinkStyled>

							<Heading as="h4" size="h4">
								{skill.tech}
							</Heading>
						</SkillsCard>
					))}
				</SkillsCardContainer>

				{/* --right section */}
				<motion.div
					as={motion.div}
					variants={fadeInRightVariant}
					initial={"hidden"}
					whileInView={"visible"}
				>
					<Heading as="h4" size="h4">
						Minhas Skills
					</Heading>
					<Heading as="h2" size="h2" top="0.5rem">
						Meu <BlueText>Objetivo</BlueText>
					</Heading>

					<ParaText top="2rem" bottom="1.5rem">
						Estou buscando uma oportunidade na área da Programação onde possa
						aplicar minhas habilidades em JavaScript e TypeScript para
						contribuir com o desenvolvimento de software inovador e de alta
						qualidade. Possuo conhecimento sólido de ambas as linguagens,
						incluindo seus principais conceitos, frameworks e ferramentas.Também
						estou familiarizado com o versionamento de código Git e GitHub, sou
						um profissional dedicado, proativo e com grande capacidade de
						aprendizado e estou aberto a aprender novas linguagens além de ter
						forte interesse em trabalhar em equipe e colaborar com outros
						desenvolvedores.
					</ParaText>
				</motion.div>
			</FlexContainer>
		</PaddingContainer>
	);
};
