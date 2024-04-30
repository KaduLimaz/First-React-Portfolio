import { motion } from "framer-motion";

// import Global Styles
import {
	FlexContainer,
	Heading,
	PaddingContainer,
	ParaText,
	BlueText,
	IconContainer,
	LinkStyled,
} from "../StyledComponents/Global.styled";
//import react-icons
import { BsLinkedin, BsInstagram, BsGithub, BsFacebook } from "react-icons/bs";
//import showcase styles
import {
	ShowcaseParticleContainer,
	ShowcaseImageCard,
	Particle,
} from "../StyledComponents/Showcase.styled";

//import asset
import ShowcaseImg from "../assets/showcase-img.png";
import BackgroundImg from "../assets/particle.png";
import { fadeInLeftVariant, fadeInRightVariant } from "../stylesTheme/Variants";

export function Showcase() {
	return (
		<PaddingContainer
			id="Home"
			left="0.5%"
			right="10%"
			top="15%"
			bottom="10%"
			responsiveLeft="1rem"
			responsiveRight="1rem"
			responsiveTop="8rem"
		>
			<FlexContainer align="left" fullWidthChild>
				{/* --left-content--  */}
				<motion.div
					variants={fadeInLeftVariant}
					initial="hidden"
					whileInView={"visible"}
				>
					<Heading as="h4" size="h4" text-align="left">
						Olá!
					</Heading>
					<Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
						Me chamo<BlueText> Kadu</BlueText>
					</Heading>
					<Heading as="h3" size="h3">
						Sou <BlueText>Full Stack Developer</BlueText>
					</Heading>
					<ParaText as="p" top="2rem" bottom="4rem">
						Olá, meu nome é Kadu e sou um estudante Full Stack Developer,
						cursando ADS e procuro minha primeira oportunidade de estágio. Olá,
						meu nome é Kadu e sou um estudante Full Stack Developer, cursando
						ADS e procuro minha primeira oportunidade de estágio. Olá, meu nome
						é Kadu e sou um estudante Full Stack Developer, cursando ADS e
						procuro minha primeira oportunidade de estágio.
					</ParaText>
					{/* social-icons */}
					<FlexContainer gap="20px" responsiveFlex>
						<IconContainer color="blue" size="1.5rem">
							<LinkStyled
								href="https://www.linkedin.com/in/kadulima01/"
								target="blank"
							>
								<BsLinkedin />
							</LinkStyled>
						</IconContainer>
						<IconContainer color="blue" size="1.5rem">
							<LinkStyled
								href="https://www.instagram.com/kadulima1/"
								target="blank"
							>
								<BsInstagram />
							</LinkStyled>
						</IconContainer>

						<IconContainer color="blue" size="1.5rem">
							<LinkStyled href="https://github.com/KaduLimaz" target="blank">
								<BsGithub />
							</LinkStyled>
						</IconContainer>
						<IconContainer color="blue" size="1.5rem">
							<LinkStyled
								href="https://www.facebook.com/EduuardoLima2/"
								target="blank"
							>
								<BsFacebook />
							</LinkStyled>
						</IconContainer>
					</FlexContainer>
				</motion.div>

				{/* --right-content-- */}
				<FlexContainer
					as={motion.div}
					variants={fadeInRightVariant}
					initial={"hidden"}
					whileInView={"visible"}
					justify="flex-end"
				>
					<ShowcaseParticleContainer>
						<ShowcaseImageCard>
							<img src={ShowcaseImg} alt="showcase" />
						</ShowcaseImageCard>
						<Particle
							as={motion.img}
							animate={{
								x: [0, 100, 0],
								rotate: 360,
								scale: [1, 0.5, 1],
							}}
							transition={{
								duration: 20,
								repeat: Infinity,
							}}
							src={BackgroundImg}
							alt="particle"
							top="-80px"
							left="20px"
							transform="60"
						/>
						<Particle
							as={motion.img}
							animate={{
								y: [0, 100, 0],
								rotate: 360,
								scale: [1, 0.8, 1],
							}}
							transition={{
								duration: 18,
								repeat: Infinity,
							}}
							src={BackgroundImg}
							alt="particle"
							top="50px"
							right="-70px"
							transform="0"
						/>
						<Particle
							as={motion.img}
							animate={{
								y: [0, -100, 0],
								rotate: 360,
								scale: [1, 0.9, 1],
							}}
							transition={{
								duration: 15,
								repeat: Infinity,
							}}
							src={BackgroundImg}
							alt="particle"
							bottom="110px"
							left="-70px"
							transform="50"
						/>
					</ShowcaseParticleContainer>
				</FlexContainer>
			</FlexContainer>
		</PaddingContainer>
	);
}
