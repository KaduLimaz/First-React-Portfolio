// import Global Styles
import {
	FlexContainer,
	Heading,
	PaddingContainer,
	ParaText,
	BlueText,
	IconContainer,
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

export function Showcase() {
	return (
		<PaddingContainer id="Home" left="0.5%" right="10%" top="15%" bottom="10%">
			<FlexContainer align="left" fullWidthChild>
				{/* --left-content--  */}
				<div>
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
					<FlexContainer gap="20px">
						<IconContainer color="blue" size="1.5rem">
							<BsLinkedin />
						</IconContainer>
						<IconContainer color="blue" size="1.5rem">
							<BsInstagram />
						</IconContainer>
						<IconContainer color="blue" size="1.5rem">
							<BsGithub />
						</IconContainer>
						<IconContainer color="blue" size="1.5rem">
							<BsFacebook />
						</IconContainer>
					</FlexContainer>
				</div>
				<FlexContainer justify="flex-end">
					<ShowcaseParticleContainer>
						<ShowcaseImageCard>
							<img src={ShowcaseImg} alt="showcase" />
						</ShowcaseImageCard>
						<Particle
							src={BackgroundImg}
							alt="particle"
							top="-80px"
							left="20px"
							transform="60"
						/>
						<Particle
							src={BackgroundImg}
							alt="particle"
							top="50px"
							right="-70px"
							transform="0"
						/>
						<Particle
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
