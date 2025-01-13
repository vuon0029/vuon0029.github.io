import React, { ReactNode } from "react";
import { ThemeColor, ThemeSize } from "../consts/ThemeValues";

const defaultStyle: {
  banner: React.CSSProperties;
  header: React.CSSProperties;
  body: React.CSSProperties;
} = {
  banner: {
    fontSize: ThemeSize.banner.fontSize,
    fontWeight: ThemeSize.banner.fontWeight,
    color: ThemeColor.primary,
    margin: 0,
  },
  header: {
    fontSize: ThemeSize.header.fontSize,
    fontWeight: ThemeSize.header.fontWeight,
    color: ThemeColor.paragraph,
    margin: 0,
  },
  body: {
    fontSize: ThemeSize.body.fontSize,
    fontWeight: ThemeSize.body.fontWeight,
    color: ThemeColor.paragraph,
    lineHeight: 1.7,
    margin: 0,
  },
};

const Text: React.FC<{
  tag?: "banner" | "header" | "body" | "caption" | "small";
  bold?: boolean;
  children: ReactNode;
  color?: string;
  style?: React.CSSProperties;
}> = ({
  tag = "body",
  children: textContent,
  bold,
  style = {},
  color = undefined,
}) => {
  const tagMap: Record<string, keyof JSX.IntrinsicElements> = {
    banner: "h1",
    header: "h2",
    body: "p",
    caption: "span",
    small: "small",
  };

  const Tag = tagMap[tag] || "p"; // Fallback to <p> for safety

  return (
    <Tag
      style={{
        ...(defaultStyle[tag as keyof typeof defaultStyle] || {}),
        ...(bold
          ? {
              fontWeight: 900,
            }
          : undefined),
        ...(color !== undefined
          ? {
              color: color,
            }
          : undefined),
        ...style,
      }}
    >
      {textContent}
    </Tag>
  );
};

export default Text;
