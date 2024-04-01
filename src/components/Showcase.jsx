import React from "react";

import {
	FlexContainer,
	Heading,
	PaddingContainer,
	ParaText,
	BlueText,
	IconContainer,
} from "../StyledComponents/Global.styled";
import { BsLinkedin, BsInstagram, BsGithub, BsFacebook } from "react-icons/bs";

export function Showcase() {
	return (
		<PaddingContainer id="Home" left="0.5%" right="10%" top="15%" bottom="10%">
			<FlexContainer align="left" fullWidthChild>
				{/* --left-content--  */}
				<div>
					<Heading as="h4" size="h4" text-align="left">
						Hello!
					</Heading>
					<Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
						Me chamo<BlueText> Kadu</BlueText>
					</Heading>
					<Heading as="h3" size="h3">
						Sou um <BlueText>Full Stack Developer</BlueText>
					</Heading>
					<ParaText as="p" top="2rem" bottom="4rem">
						Olá, meu nome é Kadu e sou um estudante Full Stack Developer,
						cursando ADS e procuro minha primeira oportunidade de estágio.
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
			</FlexContainer>
		</PaddingContainer>
	);
}
