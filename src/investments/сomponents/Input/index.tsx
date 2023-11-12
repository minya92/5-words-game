import React from 'react';
import * as Styled from './styled'

interface TextInputProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string | null;
  placeholder?: string;
}

const Input: React.FC<TextInputProps> = ({label, value, onChange, error, placeholder}) => {
  const showError = !!error;

  return (
    <Styled.InputContainer>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.InputField
        type="text"
        value={value || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
        placeholder={placeholder}
        error={showError}
      />
      {showError && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
    </Styled.InputContainer>
  );
};

export default Input;
