import styled from "styled-components";

const Text = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  padding: 1rem 1.25rem;
  padding: ${props => props.theme.fontSize}
    calc(${props => props.theme.fontSize} * 1.25);
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  text-align: left;
  font-size: 1rem;
  font-size: ${props => props.theme.fontSize};
`;

const SubTitle = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.7;
  margin: 0 0 0.3rem 0;
  margin: 0 0 calc(${props => props.theme.fontSize} * 0.3) 0;
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
  margin: calc(${props => props.theme.fontSize} * 0.3) 0 0 0;
`;

export { Text, SubTitle, Title, DescriptionWrapper, Description };
