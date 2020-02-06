import Stylis from "@emotion/stylis";

const stylis = new Stylis();

/* eslint @typescript-eslint/no-explicit-any: 0 */
export const generateDefaultStyle = (): any =>
  stylis(
    ".CoolCard",
    `
      &, & * {
        box-sizing: border-box;
        font-family: 'Helvetica','Arial','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic'sans-serif;
      }

      position: relative;
      display: inline-block;
      width: 400px;
      height: 300px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 5px 5px 10px -5px;

      transition: 200ms ease-in;
      &:hover {
        box-shadow: 10px 10px 15px -10px;
      }


      &-descriptions {
        position: relative;
        top: 100%;
        left: 0%;
        padding: 10px;
        background-color: rgba(244,244,244, 0.9);
        transition: 200ms ease-in;
      }
      &:hover > &-descriptions {
        transform: translateY(-100%);
      }

      &-text {
        overflow-wrap: break-word;
        word-wrap: break-word;
      }

      &-title {
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
        font-size: 1.2rem;
      }

      &-image {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        transition: 300ms ease-out;
      }
      &:hover > &-image {
        transform: scale(1.1)
      }
    `
  );
