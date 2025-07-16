export type Size = "small" | "large";
export type Orientation = "left" | "right";
export interface ButtonProps {
  onClick?: () => void;
  className?: string;
}
