import styled from "styled-components";
import { CoolCardDiv } from "../CoolCard/CoolCardStyled";

const Image = styled.img`
  & {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.theme.height};
    object-fit: cover;
    z-index: -1;
    user-select: none;

    transition: ${props => props.theme.animationDuration}ms;
  }
  ${CoolCardDiv}:hover & {
    transform: scale(1.1);
  }
`;

export { Image };
