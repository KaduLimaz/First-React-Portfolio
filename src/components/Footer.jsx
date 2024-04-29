// import global styles

import {
	FlexContainer,
	Heading,
	PaddingContainer,
	ParaText,
	BlueText,
	IconContainer,
	LinkStyled,
} from "../StyledComponents/Global.styled";

//import Footer Styles
import {
	ContactForm,
	FormInput,
	FormLabel,
} from "../StyledComponents/Footer.styled";

export const Footer = () => {
	return (
		<PaddingContainer id="Contact" top="5%" bottom="10%">
			<Heading align="center" as="h4" size="h4">
				MY CONTACT
			</Heading>

			<Heading align="center" as="h2" size="h2">
				Contact <BlueText>Me Here</BlueText>
			</Heading>

			<PaddingContainer top="3rem">
				<FlexContainer justify="center">
					<ContactForm>
						<PaddingContainer bottom="2rem">
							<FormLabel>Name</FormLabel>
							<FormInput type="text" placeholder="Enter your name"></FormInput>
						</PaddingContainer>
					</ContactForm>
				</FlexContainer>
			</PaddingContainer>
		</PaddingContainer>
	);
};
