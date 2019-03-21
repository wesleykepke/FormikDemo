import styled from "styled-components";

export const RootWrapper = styled.section`
  padding: 2em;
`;

export const Title = styled.h1`
  color: dodgerblue;
`;

export const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const InputWrapper = styled.input`
  margin: 0.5em;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 1px solid dodgerblue;
  border-radius: 3px;
`;

export const SubmitButtonWrapper = styled.button`
  margin: 0.5em;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 1px solid dodgerblue;
  border-radius: 3px;
`;

export const ErrorWrapper = styled.span`
  margin: 0.5em;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 1px solid red;
  border-radius: 3px;
`;
