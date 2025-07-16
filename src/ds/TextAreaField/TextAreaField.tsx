import { useId, type FC, type Ref } from "react";
import styled from "styled-components";
import type { HTMLTextareaProps } from "../../types/react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

const Label = styled.label`
  white-space: nowrap;
  font: var(--subhead-semibold);
  color: var(--light-50);
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  margin-bottom: 18px;

  & span {
    margin-left: 4px;
    color: var(--primary-100);
  }
`;

const TextArea = styled.textarea`
  cursor: text;
  width: 100%;
  border: 1px solid var(--light-30);
  border-radius: 4px;
  padding: 15px;
  font: var(--body-semibold);
  color: var(--light-100);
  outline: none;
  resize: none;
`;

interface Props extends HTMLTextareaProps {
  label?: string;
  required?: boolean;
  ref: Ref<HTMLTextAreaElement>;
}

export const TextAreaField: FC<Props> = ({
  label,
  required,
  ref,
  ...props
}: Props) => {
  const id = `text-area-field-${useId()}`;
  return (
    <Container>
      <Label htmlFor={id}>
        {label}
        {required && <span>*</span>}
      </Label>
      <TextArea id={id} {...props} ref={ref} value={props.value} />
    </Container>
  );
};
