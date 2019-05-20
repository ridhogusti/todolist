import React from "react";
import { StyledContainer, StyledLabel, StyledInput } from "./StyledInput";

const Input = ({
  placeholder,
  label,
  onTextChange,
  value,
  autoFocus,
  name
}) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        autoFocus={autoFocus}
        value={value}
        underlineColorAndroid="#3498db"
        onChangeText={onTextChange}
        name={name}
      />
    </StyledContainer>
  );
};

export default Input;
