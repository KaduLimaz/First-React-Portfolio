//animação

import { motion } from "framer-motion";
import { slideInLeft } from "../../stylesTheme/Variants";

//import global styles

import {
	FlexContainer,
	PaddingContainer,
} from "../../StyledComponents/Global.styled";

import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../../stylesTheme/Data";

//import NavBar style

import {
	MenuIcon,
	MenuItem,
	NavMenuContainer,
} from "../../StyledComponents/Navbar.styled";

// eslint-disable-next-line react/prop-types
export function NavMenu({ setOpenMenu }) {
	return (
		<NavMenuContainer
			as={motion.div}
			variants={slideInLeft}
			initial="hidden"
			whileInView={"visible"}
			exit="exit"
		>
			{/* --Close-Button-- */}

			<PaddingContainer left="5%" right="5%" top="2rem">
				<FlexContainer justify="flex-end" responsiveFlex>
					<MenuIcon
						as={motion.a}
						whileHover={{ scale: 1.4 }}
						onClick={() => setOpenMenu(false)}
					>
						<AiOutlineClose />
					</MenuIcon>
				</FlexContainer>
			</PaddingContainer>

			{/* --Menu-Itens-- */}

			<PaddingContainer top="8%">
				<FlexContainer direction="column" align="center" responsiveFlex>
					{navLinks.map((link) => (
						<MenuItem
							as={motion.a}
							whileHover={{ scale: 1.4 }}
							key={link.id}
							href={`#${link.href}`}
							onClick={() => setOpenMenu(false)}
						>
							{link.name}
						</MenuItem>
					))}
				</FlexContainer>
			</PaddingContainer>
		</NavMenuContainer>
	);
}
