import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import { connect } from "react-redux";

import { StyledContainer, StyledButtonSave } from "./StyledForm";
import Input from "../../../components/atoms/Input";
import { saveTodoRequest } from "../action";

const Form = ({ navigation, saveTodo, todo }) => {
  const [data, setData] = useState({
    userId: 1,
    title: "",
    completed: false
  });
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (navigation.state.params !== undefined) {
      setData(navigation.state.params.data);
    }
  }, []);

  useEffect(() => {
    if (!todo.isLoading && !todo.isError && submit) {
      navigation.goBack();
    }
  }, [todo]);

  const updateTask = (value, key) => {
    setData({
      ...data,
      [key]: value
    });
  };

  const saveData = () => {
    setSubmit(true);
    saveTodo(data);
  };

  return (
    <StyledContainer>
      <Input
        label="Title"
        value={data.title}
        autoFocus={true}
        placeholder="To do homework..."
        name="title"
        onTextChange={v => updateTask(v, "title")}
      />

      <StyledButtonSave>
        <Button title="Salvar" onPress={saveData} />
      </StyledButtonSave>
    </StyledContainer>
  );
};

const mapStateToProps = state => ({ todo: state.example });

const mapDispatchToProps = dispatch => ({
  saveTodo: data => dispatch(saveTodoRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
