import styled from "styled-components";
import { CoolCardProps } from "./CoolCardTypes";

export const generateStyled = ({
  image,
  title,
  imageAlt,
  description,
  Contents,
  color,
  size,
  expandSize
}: CoolCardProps) => {
  const CoolCardWrapper = styled.div`
    position: relative;
    width: ${size ? size.width : "400px"};
    height: ${size ? size.height : "300px"};
    display: inline-block;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 5px 5px 10px -5px;
    box-sizing: border-box;
    font-family: "Helvetica", "Arial", "Hiragino Kaku Gothic ProN",
      "ヒラギノ角ゴ ProN W3", "メイリオ", Meiryo, "ＭＳ Ｐゴシック",
      "MS PGothic" sans-serif;

    transition: 200ms ease-in;

    &:hover {
      box-shadow: 10px 10px 15px -10px;
      width: ${expandSize ? expandSize.width : "100%"};
      height: ${expandSize ? expandSize.height : "100%"};
      z-index: 2;
    }
  `;

  const Header = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `;

  const HeaderImage = styled.img`
    width: 100%;
    height: 100%;
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

  return {
    CoolCardWrapper,
    Header,
    HeaderImage,
    HeaderText,
    HeaderTitle,
    HeaderDescription,
    ContentWrapper
  };
};
