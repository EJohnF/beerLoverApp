import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    height: 70,
  },
  innerItemContainer: {
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  itemImage: {
    width: 50,
    height: 70,
    marginRight: 8,
    resizeMode: 'contain',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
});
