import React, { Component } from "react";
import Heroes from "./Heroes";
import PropTypes from "prop-types";
import { Query, compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import { ActivityIndicator, AsyncStorage, Text } from "react-native";

class HeroesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { userID: null };
  }
  componentDidMount = () => {
    AsyncStorage.getItem("id").then(value => {
      this.setState({ userID: value });
    });
  };
  render() {
    return (
      <Query
        query={gql`
          query User {
            allUsers {
              id
              programCode
              name
              point
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>{error}</Text>;

          const currentStudent = data.allUsers.filter(
            a => a.id === this.state.userID
          );
          if (!currentStudent[0].programCode) {
            return <Text> you are no in any program</Text>;
          }
          const listOfStudents = data.allUsers.filter(
            a => a.programCode === currentStudent[0].programCode
          );
          const sortedList = listOfStudents
            .sort((a, b) => b.point - a.point)
            .slice(0, 5);

          return <Heroes data={sortedList} />;
        }}
      </Query>
    );
  }
}

HeroesContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default HeroesContainer;
