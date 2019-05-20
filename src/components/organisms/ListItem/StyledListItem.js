import styled from "styled-components";

const StyledContainer = styled.View`
  flex-direction: row;
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 10;
  padding-left: 10;
  border-bottom-color: #bdc3c7;
  border-bottom-width: 1;
  flex-wrap: nowrap;
`;

const StyledListItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  margin-right: 10;
`;

const StyledSwitch = styled.Switch`
  width: 50;
  height: 50;
`;

const StyledTitle = styled.Text`
  font-weight: bold;
  font-size: 16;
`;

const StyledDescription = styled.Text`
  font-size: 14;
`;

export {
  StyledContainer,
  StyledListItem,
  StyledSwitch,
  StyledTitle,
  StyledDescription
};
