import styled, { keyframes } from "styled-components";

const CoolCardWrapper = styled.div`
  position: relative;
  width: ${props => props.theme.size.width};
  max-height: ${props => props.theme.size.height};
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 5px 5px 10px -5px;

  transition: 200ms ease-in;

  &.active {
    box-shadow: 10px 10px 15px -10px;
    width: ${props => props.theme.expandSize.width};
    max-height: ${props => props.theme.expandSize.height};
    transition: width 400ms ease-in, max-height 300ms 300ms ease-in;
    z-index: 2;
  }

  * {
    box-sizing: border-box;
    font-family: "Helvetica", "Arial", "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "メイリオ", Meiryo, "ＭＳ Ｐゴシック",
      "MS PGothic" sans-serif;
  }
`;

const Header = styled.div`
  position: relative;
  width: 100%;
`;

const HeaderImage = styled.img`
  width: 100%;
  height: ${props => props.theme.size.height};
  border-radius: 20px;
  object-fit: cover;
  z-index: -1;
`;

const HeaderText = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(244, 244, 244, 0.9);
`;

const HeaderTitle = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  font-size: 1.2rem;
`;

const HeaderDescription = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const ContentWrapper = styled.div``;

export {
  CoolCardWrapper,
  Header,
  HeaderImage,
  HeaderText,
  HeaderTitle,
  HeaderDescription,
  ContentWrapper
};
