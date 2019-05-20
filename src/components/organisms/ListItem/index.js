import React from "react";
import {
  StyledContainer,
  StyledListItem,
  StyledTitle,
  StyledDescription,
  StyledSwitch
} from "./StyledListItem";

const ListItem = ({ data, onPress, changeDone }) => {
  return (
    <StyledContainer>
      <StyledListItem onPress={onPress}>
        <StyledTitle>{data.title}</StyledTitle>
        <StyledDescription>
          {data.completed ? "true" : "false"}
        </StyledDescription>
      </StyledListItem>
      <StyledSwitch value={data.completed} onValueChange={changeDone} />
    </StyledContainer>
  );
};

export default ListItem;
