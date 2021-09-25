import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fullContainer: {
    width: '100%',
    height: '100%'
  },
  centeredContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    backgroundColor: '#fff',
    padding: "10%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  cardStyles: {
    margin: 5,
    padding: 10,
    paddingBottom: -20,
    width: '100%',
    maxHeight: '30%',
    borderRadius: 10,
  }
});

export default styles;