import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  FlatList
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import {
  StyledContainer,
  StyledFooter,
  StyledAddButton,
  StyledButtonText
} from "./StyledExample";

import ListItem from "../../components/organisms/ListItem";
import { exampleRequest, completedTodoRequest } from "./action";

class Example extends PureComponent {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  goToNewData() {
    const { navigation } = this.props;
    navigation.navigate("Create");
  }

  goToEditData(data) {
    const { navigation } = this.props;
    navigation.navigate("Edit", {
      data: data
    });
  }

  changeDone(done, data) {
    data.completed = done;
    this.props.completedTodo(data);
  }

  render() {
    const { data } = this.props;
    const Spinner = (
      <ActivityIndicator size="large" color="red" style={styles.indicator} />
    );

    return (
      <View style={{ flex: 1 }}>
        {data.isLoading ? (
          Spinner
        ) : (
          <StyledContainer>
            <FlatList
              data={data.todos}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <ListItem
                  data={item}
                  onPress={() => this.goToEditData(item)}
                  changeDone={completed => this.changeDone(completed, item)}
                />
              )}
            />
            <StyledFooter>
              <StyledAddButton onPress={() => this.goToNewData()}>
                <Icon
                  style={{ textAlign: "center" }}
                  name="ios-add-circle-outline"
                  size={40}
                  color="#7f8c8d"
                />

                <StyledButtonText>New Data</StyledButtonText>
              </StyledAddButton>
            </StyledFooter>
          </StyledContainer>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: { padding: 25 },
  indicator: { marginVertical: Dimensions.get("window").height / 2.5 }
});

const mapStateToProps = state => ({ data: state.example });

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(exampleRequest()),
  completedTodo: data => dispatch(completedTodoRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
