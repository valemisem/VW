export type UseStateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
export type HOCProps = {
  children?: React.ReactNode;
};
export type HTMLProps = React.HTMLAttributes<HTMLElement>;
export type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type HTMLAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>;
export type HTMLFormProps = React.HTMLAttributes<HTMLFormElement>;
export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type HTMLTextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export type SVG = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
export type HTMLSVGProps = React.SVGProps<SVGSVGElement>;
