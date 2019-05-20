import styled from "styled-components";

import Icon from "react-native-vector-icons/Ionicons";

const StyledContainer = styled.View`
  /* flex: 1; */
`;

const StyledFooter = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 5;
  padding-right: 5;
  padding-bottom: 5;
  padding-left: 5;
  background-color: #bdc3c7;
  border-top-color: #95a5a6;
  border-top-width: 1;
  align-items: center;
`;

const StyledAddButton = styled.TouchableOpacity``;

// const StyledAddButtonIcon = styled.Icon`
//   text-align: center;
// `;

const StyledButtonText = styled.Text`
  color: #7f8c8d;
  font-size: 14;
`;

export { StyledContainer, StyledFooter, StyledAddButton, StyledButtonText };
