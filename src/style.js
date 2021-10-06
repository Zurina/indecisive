const React = require("react-native");
import { Dimensions } from 'react-native';

const { StyleSheet } = React;

export default {

container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: "center",
  justifyContent: "center"
},
text: {
  marginTop: 25,
  marginBottom: 25
},
categoryButton: {
  backgroundColor: '#40eb34',
  borderRadius: 5,
  height: 45,
  marginTop: 10,
  marginRight: 7,
},
logoText: {
  fontSize: 40,
  fontWeight: "800",
  marginTop: 150,
  marginBottom: 150,
  textAlign: 'center',
},
loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
loginButton: {
  backgroundColor: '#3897f1',
  borderRadius: 5,
  height: 45,
  marginTop: 10,
},
inDecisiveButton: {
  backgroundColor: '#f564a8',
  borderRadius: 5,
  height: 45,
  marginTop: 10,
},
backButton: {
  backgroundColor: '#f564a8',
  borderRadius: 5,
  height: 45,
  marginBottom: 100,
  marginTop: -5
},
map: {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  zIndex: -1
},
};
