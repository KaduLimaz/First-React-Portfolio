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
		<NavMenuContainer>
			{/* --Close-Button-- */}

			<PaddingContainer left="5%" right="5%" top="2rem">
				<FlexContainer justify="flex-end" responsiveFlex>
					<MenuIcon onClick={() => setOpenMenu(false)}>
						<AiOutlineClose />
					</MenuIcon>
				</FlexContainer>
			</PaddingContainer>

			{/* --Menu-Itens-- */}

			<PaddingContainer top="8%">
				<FlexContainer direction="column" align="center" responsiveFlex>
					{navLinks.map((link) => (
						<MenuItem
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
