import styled, { css } from "styled-components";
import { CoolCardEmojiProps } from "./CoolCardEmojiTypes";
import { BaseCoolCard } from "../CoolCard/CoolCardStyles";

const Emoji = styled.p<CoolCardEmojiProps>`
  margin: 0;
  font-size: ${props => props.theme.width};
  line-height: ${props => props.theme.height};
  text-align: center;
  z-index: -1;
  user-select: none;

  transition: ${props => props.theme.animationDuration}ms;

  ${props => props.styles && css({ ...props.styles })}

  ${BaseCoolCard}:hover & {
    ${props => props.stylesOnHover && css({ ...props.stylesOnHover })}
  }
`;

export { Emoji };
