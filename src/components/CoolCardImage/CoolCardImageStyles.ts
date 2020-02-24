import styled from "styled-components";

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.theme.height};
  object-fit: cover;
  z-index: -1;
  user-select: none;

  transition: ${props => props.theme.animationDuration}ms;
`;

export { Image };
