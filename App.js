import React from 'react';
import {View, Text} from 'react-native';
//const stores an arrow function called ModuleInfo.
// The function directly returns what to display, so it does not need render() or extends React.Component.
const Welcome = ({code ,name })=> {
  return (
      <View>
        <Text></Text>
        <Text>Welcome to {code} - {name}</Text>
      </View>
  );
};
//class defines a class.
// extends React.Component makes it inherit React’s component features.
// render() tells React what to display.
class ModuleInfo extends React.Component {
  render() {
    return (
        <View>
          <Text></Text>
          <Text>These are my modules this semester:</Text>
          <Welcome code ="C346" name = "Welcome to C346 - Mobile App Development"/>
          <Welcome code = "C105" name = "Introduction to programming" />
          <Welcome code = "C337" name = "Immersive Technologies" />
        </View>
    );
  }
}
// this is new line
//to display both components
// const App = () => {
//   return (
//       <View>
//         <Text></Text>
//
//         <ModuleInfo />
//       </View>
//   );
// };

export default ModuleInfo;
//export default Welcome;
