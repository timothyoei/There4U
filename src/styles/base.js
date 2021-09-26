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
  },
  fixToText: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '20%',
    borderRadius: 0,
  },
  buttonText: {
    justifyContent: 'center',
    fontSize: 50,
  },
  title: {
    height: '20%',
    backgroundColor: '#fae789',
    borderRadius: 0,
    fontSize: 50,
    padding: 50,
    textAlign: 'center',
  },
});

export default styles;
