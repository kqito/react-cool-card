import React from "react";
import { StyleController } from "../utils/StyleController";
import { generateDefaultStyle } from "./CoolCardStyles";

interface Props {
  text: string;
  title?: string;
  image?: string;
  alt?: string;
}

export class CoolCard extends React.PureComponent<Props> {
  componentDidMount(): void {
    CoolCard.styleController.incrementMountCount();
  }

  componentWillUnmount(): void {
    CoolCard.styleController.decrementMountCount();
  }

  private static styleController = new StyleController(
    "cool-card",
    generateDefaultStyle()
  );

  render(): JSX.Element {
    const { text, title, image, alt } = this.props;

    return (
      <div className="CoolCard">
        {image && (
          <img className="CoolCard-image" src={image} alt={alt || ""} />
        )}
        <div className="CoolCard-descriptions">
          {title && <p className="CoolCard-title">{title}</p>}
          <p className="CoolCard-text">{text}</p>
        </div>
      </div>
    );
  }
}
