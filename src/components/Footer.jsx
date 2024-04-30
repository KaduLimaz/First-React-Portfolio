//animação

import { motion } from "framer-motion";
import { fadeInTBottomVariant } from "../stylesTheme/Variants";

// import global styles

import {
	FlexContainer,
	Heading,
	PaddingContainer,
	BlueText,
	Button,
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
			<Heading
				align="center"
				as={motion.h4}
				variants={fadeInTBottomVariant}
				initial="hidden"
				whileInView={"visible"}
				size="h4"
			>
				CONTATO
			</Heading>

			<Heading
				align="center"
				as={motion.h2}
				variants={fadeInTBottomVariant}
				initial="hidden"
				whileInView={"visible"}
				size="h2"
			>
				Contate-me <BlueText>aqui</BlueText>
			</Heading>

			<PaddingContainer top="3rem">
				<FlexContainer justify="center">
					<ContactForm
						as={motion.form}
						variants={fadeInTBottomVariant}
						initial="hidden"
						whileInView={"visible"}
					>
						<PaddingContainer bottom="2rem">
							<FormLabel>Name</FormLabel>
							<FormInput
								type="text"
								placeholder="Enter your name"
								padding="10px"
							></FormInput>
						</PaddingContainer>

						<PaddingContainer bottom="2rem">
							<FormLabel>Email</FormLabel>
							<FormInput
								type="email"
								placeholder="Enter your email"
								padding="10px"
							></FormInput>
						</PaddingContainer>

						<PaddingContainer bottom="2rem">
							<FormLabel>Message</FormLabel>
							<FormInput
								as="textarea"
								placeholder="Enter your message"
								padding="20px"
							></FormInput>
						</PaddingContainer>
						<FlexContainer justify="center" responsiveFlex>
							<Button>Send Message</Button>
						</FlexContainer>
					</ContactForm>
				</FlexContainer>
			</PaddingContainer>
		</PaddingContainer>
	);
};
