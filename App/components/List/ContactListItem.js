import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

export default props => {
  let uri = {uri: props.thumbnailPath}
  if(!props.thumbnailPath) uri = require('./images/ic_user.png')

  return (
  <View style={styles.row}>
    <Image style={styles.image} source={uri}/>
    <View style={styles.text_block}>
      <Text style={styles.name}>{props.givenName}</Text>
      <View style={styles.phone_block}>
        {props.phoneNumbers.map(el => (
          <Text key={el.id} style={styles.text}>{el.number}</Text>
        ))}
      </View>
    </View>
  </View>)
};
