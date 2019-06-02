import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  image: {
    height: 200,
    width: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  row: {
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  content: {
    fontSize: 16,
  }
});
