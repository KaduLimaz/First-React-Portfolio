import {
	FlexContainer,
	PaddingContainer,
	BlueText,
	Container,
} from "../StyledComponents/Global.styled";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavMenu } from "./layouts/NavMenu";
//import state
import { useState, useEffect } from "react";

//import navbar style
import { theme } from "../stylesTheme/Theme";
import {
	Logo,
	MenuIcon,
	NavbarContainer,
} from "../StyledComponents/Navbar.styled";

export const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [sticky, setSticky] = useState(false);

	useEffect(() => {
		//onScroll function
		const onScroll = () => {
			window.scrollY > 50 ? setSticky(true) : setSticky(false);
		};
		window.addEventListener("scroll", onscroll);

		//cleanup
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<NavbarContainer bgColor={sticky ? "tranparent" : theme.colors.primary}>
			<PaddingContainer
				top="1.2rem"
				bottom="1.2rem"
				responsiveLeft="1rem"
				responsiveRight="1rem"
			>
				<Container>
					<FlexContainer justify="space-between" responsiveFlex>
						{/* --left-logo-- */}
						<Logo>
							JustA<BlueText>Dev</BlueText>
						</Logo>

						{/* --right-menu-icon-- */}
						<MenuIcon
							onClick={() => {
								setOpenMenu(true);
							}}
						>
							<GiHamburgerMenu />
						</MenuIcon>
					</FlexContainer>
				</Container>

				{openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
			</PaddingContainer>
		</NavbarContainer>
	);
};
