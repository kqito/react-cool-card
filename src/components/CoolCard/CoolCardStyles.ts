import styled from "styled-components";
import { rgba } from "polished";
import { Image } from "../CoolCardImage/CoolCardImageStyles";
import { DescriptionWrapper } from "../CoolCardText/CoolCardTextStyles";

export const BaseCoolCard = styled.div`
  position: relative;
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  display: inline-block;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 5px 5px 10px -5px black;

  transition: ${props => props.theme.animationDuration}ms;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: ${props => props.theme.animationDuration}ms;
  }

  &:hover {
    box-shadow: 10px 10px 15px -10px black;

    &:after {
      background-color: ${props => rgba(props.theme.backgroundColor, 0.3)};
    }

    ${Image} {
      transform: scale(1.1);
    }

    ${DescriptionWrapper} {
      opacity: 1;
      max-height: ${props => props.theme.height};
    }
  }

  * {
    box-sizing: border-box;
    color: ${props => props.theme.color};
  }
`;

const CoolCardDiv = styled(BaseCoolCard)``;

const CoolCardA = styled(BaseCoolCard.withComponent("a"))`
  cursor: pointer;
`;

export { CoolCardDiv, CoolCardA };
