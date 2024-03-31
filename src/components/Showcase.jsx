import React from "react";

import {
	FlexContainer,
	Heading,
	PaddingContainer,
	ParaText,
	BlueText,
	IconContainer,
} from "../StyledComponents/Global.styled";

export function Showcase() {
	return (
		<PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
			<FlexContainer align="center" fullWidthChild>
				{/* --left-content--  */}
				<div>
					<Heading size="h4">Hello!</Heading>
				</div>
			</FlexContainer>
		</PaddingContainer>
	);
}
