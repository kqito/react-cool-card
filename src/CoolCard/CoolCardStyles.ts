import styled from "styled-components";
import { rgba } from "polished";

const Image = styled.img`
  width: 100%;
  height: ${props => props.theme.height};
  object-fit: cover;
  z-index: -1;

  transition: ${props => props.theme.animationDuration}ms;
`;

const Text = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  padding: 1.25rem;
  background-color: ${props => props.theme.backgroundColor};
  text-align: left;
  font-size: 1rem;
  font-size: ${props => props.theme.fontSize};
`;

const SubTitle = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.7;
  margin: 0 0 0.3rem 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  font-size: calc(${props => props.theme.fontSize} * 1.8);
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const DescriptionWrapper = styled.div`
  transition: ${props => props.theme.animationDuration}ms;
  opacity: 0;
  max-height: 0;
`;

const Description = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
  margin: 0.3rem 0 0 0;
`;

const BaseCoolCard = styled.div`
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
  text-decoration: none;
`;

export {
  CoolCardDiv,
  CoolCardA,
  Image,
  Text,
  SubTitle,
  Title,
  DescriptionWrapper,
  Description
};
