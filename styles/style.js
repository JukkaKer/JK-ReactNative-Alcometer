import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  field: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 50,
    marginTop: 30,
    color: 'skyblue',
    flexDirection: 'row',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  result: {
    color: 'gold',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10
  }
});