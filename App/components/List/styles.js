import { StyleSheet } from "react-native";
import {border} from '../../config/colors'

export default StyleSheet.create({
  separator: {
    marginLeft: 20,
    backgroundColor: border,
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 10
  },
  image: {
    width: 64,
    height: 64,
    backgroundColor: "transparent",
    borderRadius: 32,
  },
  phone_block: {
    flexDirection: "column",
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  text_block: {
      flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 10,
  }
});
