import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  display: block;
`;

export const InputField = styled.input<{error?: boolean}>`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  ${({error}) => error && `
    border-color: #f00;
  `}

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const ErrorMessage = styled.div`
  color: #f00;
  font-size: 14px;
  margin-top: 5px;
`;
