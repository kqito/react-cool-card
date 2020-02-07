import React from "react";
import { StyleController } from "../utils/StyleController";
import { generateDefaultStyle } from "./CoolCardStyles";
import { CoolCardProps } from "./CoolCardTypes";

export class CoolCard extends React.PureComponent<CoolCardProps> {
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
    const {
      image,
      title,
      imageAlt,
      description,
      Contents,
      color,
      size,
      expandSize
    } = this.props;

    return (
      <div className="CoolCard">
        <div className="CoolCard-header">
          <img
            className="CoolCard-header-image"
            src={image}
            alt={imageAlt || ""}
          />
          <div className="CoolCard-header-text">
            <p className="CoolCard-header-text__title">{title}</p>
            {description && (
              <p className="CoolCard-header-description">{description}</p>
            )}
          </div>
        </div>
        <div className="CoolCard-content">
          <Contents />
        </div>
      </div>
    );
  }
}
