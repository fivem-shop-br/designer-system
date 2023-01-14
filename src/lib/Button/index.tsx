import React, { ComponentPropsWithRef, ElementType, forwardRef } from "react";
import { CSS } from "@stitches/react";
import { Container, mode, size } from "./styles.css";

export interface buttonProps extends ComponentPropsWithRef<typeof Container> {
  children: React.ReactNode;
  mode: keyof typeof mode;
  size?: keyof typeof size;
  backgroundColor?: string;
  hoverColor?: string;
  disabled?: boolean;
  css?: CSS;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ref?: React.MutableRefObject<HTMLButtonElement>;
  as?: ElementType;
}

const button = (
  {
    children,
    size = "small",
    backgroundColor,
    hoverColor,
    css,
    style,
    ...rest
  }: buttonProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  return (
    <Container
      size={size}
      css={{
        backgroundColor,
        css,
        "&:hover:not([disabled])": hoverColor && {
          backgroundColor: hoverColor,
        },
      }}
      style={style}
      ref={ref}
      {...rest}
    >
      {children}
    </Container>
  );
};

export const Button = forwardRef(button);
