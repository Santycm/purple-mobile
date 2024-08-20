import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles2 = StyleSheet.create({
  navbar: {
    width: '100%',
    diplay: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A0DAD',
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 15,
    position: 'static',
    top: 0,
  },
  navbarSearch: {
    height: 40,
    width: '80%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 20,
  },
  slider: {
    width: width,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    padding: 10,
    gap: 10,
  },
  sliderImg: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
    overflow: 'hidden',
    borderRadius: 15,
  },
  initialProm: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    fontSize:12,
  },
  categoryItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: '#6A0DAD',
    borderRadius: 10,
    margin: 10,
  },
  btnCategoryImg:{
    backgroundColor: 'white',
    borderRadius: 100,
    width: 90,
    height: 90,
  }
});

export {styles2};
