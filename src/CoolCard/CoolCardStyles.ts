import { StyleGenerator } from "../utils/StyleGenerator";
import { CoolCardProps } from "./CoolCardTypes";

const generator = new StyleGenerator(".CoolCard");

export const generateDefaultStyle = () =>
  generator.generateStyle(
    `
      &, & * {
        box-sizing: border-box;
        font-family: 'Helvetica','Arial','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic'sans-serif;
      }

      position: relative;
      width: 400px;
      height: 300px;
      display: inline-block;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 5px 5px 10px -5px;

      transition: 200ms ease-in;
      &:hover {
        box-shadow: 10px 10px 15px -10px;
      }


      &-header {
        position: relative;
        width: 100%;
        height: 100%;

        &-image {
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        &-text {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          padding: 10px;
          background-color: rgba(244,244,244, 0.9);

          &__title {
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: bold;
            font-size: 1.2rem;
          }

          &__description {
            overflow-wrap: break-word;
            word-wrap: break-word;
          }
        }
      }
    `
  );
