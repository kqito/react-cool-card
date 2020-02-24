import React from "react";
import { CoolCardEmojiProps } from "./CoolCardEmojiTypes";
import { Emoji } from "./CoolCardEmojiStyles";

function emojiCount(emoji: string) {
  return Array.from(emoji.split(/[\ufe00-\ufe0f]/).join("")).length;
}

export const CoolCardEmoji: React.FC<CoolCardEmojiProps> = (
  props: CoolCardEmojiProps
) => {
  const { emoji } = props;
  if (emojiCount(emoji) !== 1) {
    return null;
  }

  return (
    <Emoji {...props} style={{}}>
      {emoji}
    </Emoji>
  );
};

CoolCardEmoji.defaultProps = {
  styles: {},
  stylesOnHover: {}
};
