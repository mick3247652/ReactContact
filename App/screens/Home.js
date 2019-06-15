import React, { Component } from "react";
import { View, Text, FlatList, PermissionsAndroid } from "react-native";
import Contacts from "react-native-contacts";
import { connect } from "react-redux";

import { Container } from "../components/Container";
import { connectAlert } from "../components/Alert";
import { Separator, ContactListItem } from "../components/List";

import { loadContacts } from "../actions/contacts";

class Home extends Component {
  componentDidMount() {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: "Contacts",
      message: "This app would like to view your contacts."
    }).then(() => {
      Contacts.getAll((err, contacts) => {
        if (err === "denied") {
          this.props.alertWithType("error", "Error", "Error loading contacts");
        } else {
          //this.props.alertWithType('info','Info','Load contacts OK')
          //console.log(contacts)
          this.props.dispatch(loadContacts(contacts));
        }
      });
    });
  }
  
  componentWillReceiveProps(nextProps) {
    //console.log(`recived contacts ${nextProps.contacts}`);
    //console.log(`recived contacts length ${nextProps.contacts.length}`);
    if (nextProps.contacts && nextProps.contacts.length > 0) {
      console.log(nextProps.contacts);
    }
  }

  render() {
    return (
      <Container>
        <FlatList 
        data = {this.props.contacts}
        renderItem={({ item }) => (
          <ContactListItem {...item}/>
        )}
        keyExtractor={item => item.rawContactId}
        ItemSeparatorComponent={Separator}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state)
  return {
    contacts: state.contacts.contacts
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
