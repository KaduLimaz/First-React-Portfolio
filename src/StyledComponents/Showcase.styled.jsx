import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
	position: relative;
`;

export const ShowcaseImageCard = styled.div`
	border: 1px solid white;
	width: max-content;
	padding-top: 2rem;
	border-radius: 1rem;
	position: relative;
	overflow: hidden;
	& img {
		width: 317px;
		height: 338px;
	}
`;

export const Particle = styled.img`
	position: absolute;
	top: ${({ top }) => top};
	left: ${({ left }) => left};
	right: ${({ right }) => right};
	bottom: ${({ bottom }) => bottom};
	transform: ${({ transform }) => `rotate(${transform}deg)`};
`;