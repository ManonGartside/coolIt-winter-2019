import React, { Component } from "react";
import { View, Text, AsyncStorage, ActivityIndicator } from "react-native";
import Impact from "./Impact";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import moment from "moment";
const USER_INFO = gql`
  query USER($id: ID!) {
    allUsers(filter: { id: $id }) {
      id
      email
      point
      ghPoint
      quizScore
      createdAt
    }
  }
`;

export default class ImpactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null
    };
  }
  componentDidMount = () => {
    AsyncStorage.getItem("id").then(value => {
      this.setState({ userID: value });
    });
  };
  render() {
    return (
      <Query query={USER_INFO} variables={{ id: this.state.userID }}>
        {({ loading, error, data, refetch }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>error</Text>;

          if (data.allUsers) {
            let b = moment(data.allUsers[0].createdAt, "DD/MM/YYYY");
            let today = new Date();
            let date = moment(today, "DD/MM/YYYY");
            let days = b.diff(date, "days");
            if (!days) {
              days = 1;
            }

            return (
              <View>
                <Impact data={data.allUsers[0]} days={days} />
              </View>
            );
          }
          if (!data.allUsers) {
            refetch();
            return <ActivityIndicator />;
          }
        }}
      </Query>
    );
  }
}
