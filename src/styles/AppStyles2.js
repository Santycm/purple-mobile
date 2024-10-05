import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles2 = StyleSheet.create({
  width: '100%',
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  navbar: {
    width: '100%',
    diplay: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#6A0DAD',
    flexDirection: 'row',
    height: 70,
    position: 'static',
    top: 0,
  },
  navbarSearchContainer: {
    width: '90%',
  },
  buttonNav: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 2,
  },
  badge: {
    backgroundColor: 'red',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    padding: 5,
  },
  navbarSearch: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 20,
  },
  sideBar: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sideBarUser: {
    backgroundColor: '#B388FF',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    width: '80%',
    gap: 20,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  textTitleCenter: {
    textAlign: 'center',
  },
  sideBarOption: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  btnPrimary: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLove: {
    backgroundColor: '#6A0DAD',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  btnLoveAdded: {
    backgroundColor: 'black',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  iconProfile: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10,
    height: 70,
    width: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideBarUserContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  sideBarUserText: {
    display: 'flex',
    width: '75%',
    flexDirection: 'column',
    gap: 10,
    padding: 10,
    alignItems: 'start',
  },
  sideBarOptions: {
    width: '80%',
    height: '100%',
    backgroundColor: '#2B2B2B',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: 20,
  },
  sliderContainer: {
    height: 200,
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
    height: 175,
    overflow: 'hidden',
    borderRadius: 15,
  },
  categoriesContainerPage: {
    paddingTop: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  initialProm: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    fontSize: 12,
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
    width: 130,
  },
  categoryItemPage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: '#6A0DAD',
    borderRadius: 10,
    margin: 10,
  },
  btnCategoryImg: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 90,
    height: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImg: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    gap: 10,
    borderRadius: 10,
    margin: 10,
    width: 150,
  },
  imgProductContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  imgProduct: {
    width: 90,
    height: 150,
    resizeMode: 'contain',
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionBg: {
    backgroundColor: '#2B2B2B',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '95%',
    padding: 10,
    borderRadius: 10,
  },
  textBtn: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
  textProductContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  bgScreen: {
    backgroundColor: '#2B2B2B',
    height: '100%',
    width: '100%',
  },
  btnBack: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    alignSelf: 'flex-start',
  },
  iconApp: {
    height: 130,
    width: 130,
  },
  signInContainer: {
    backgroundColor: '#6A0DAD',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    paddingVertical: 60,
    paddingHorizontal: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  textInputLabel: {
    textAlign: 'start',
    color: 'white',
    fontSize: 12,
    marginLeft: 10,
  },
  textInput: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },
  textInput2: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 10,
    color: 'white',
    width: '100%',
  },
  btnSecondary: {
    backgroundColor: '#B388FF',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnThird: {
    borderColor: 'white',
    padding: 15,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 10,
    borderWidth: 1,
  },
  btnFourth: {
    backgroundColor: '#B388FF',
    padding: 15,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 10,
  },
  inputSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  inputSectionMid: {
    width: '48%',
  },
  inputSectionGrid: {
    width: '30%',
  },
  btnSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  signUpScreen: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    backgroundColor: '#2B2B2B',
  },
  signUpScreenContainer: {
    padding: 20,
  },
  textPrincipal: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  containerRowWrap: {
    flexWrap: 'wrap',
  },
  txtOffer: {
    color: 'yellow',
  },
  txtPriceInOffer: {textDecorationLine: 'line-through', color: 'white'},
  nameUser: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  birthDate: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'light',
    textAlign: 'center',
  },
  formSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  btnDate: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTimeText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowInputsContainer: {
    display: 'flex',
    gap: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  picker: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'black',
    borderRadius: 10,
  },
  inputError: {
    color: 'red',
    fontSize: 10,
  },
  ageInput: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputLbl: {
    paddingLeft: 10,
    color: '#B388FF',
    fontSize: 10,
    fontWeight: 'light',
  },
  userScreen: {
    height: '100%',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    padding: 20,
  },
  discountContainer: {
    backgroundColor: '#B388FF',
    padding: 5,
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  categoryContainer: {
    backgroundColor: '#B388FF',
    padding: 5,
    borderRadius: 10,
    position: 'absolute',
    bottom: 5,
  },
  containerCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainerPage: {
    backgroundColor: 'black',
    height: '100%',
  },
  containerColumn2: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  textDiscount: {
    color: 'white',
    fontWeight: 'bold',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textSearchResult: {
    marginTop: '10%',
    color: 'white',
    fontSize: 12,
    fontWeight: 'light',
  },
  bgScreen2: {
    backgroundColor: 'black',
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 10,
  },
  productContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 30,
  },
  bgImgProduct: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  imgProductPage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  titleTextPageProduct: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textPricePageProduct: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textDescription: {
    color: 'white',
    marginBottom: 10,
    textAlign: 'justify',
  },
  btnAddCart: {
    backgroundColor: '#B388FF',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 40,
  },
  containerPayment: {
    padding: 10,
  },
  textArea: {
    marginBottom: 10,
    height: 80,
    justifyContent: 'flex-start',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: 'black',
  },
  containerRowStart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'start',
    gap: 10,
  },
  containerComment: {
    marginBottom: 10,
  },
  containerSectionProduct: {
    marginBottom: 10,
  },
  imgCommentProfile: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  textSecondary: {
    color: 'white',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  tableCellValue: {
    flex: 2,
    color: 'white',
  },
  imagePicker: {
    borderWidth: 1,
    borderRadius: 10,
    height: 200,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeImageBtn: {
    marginTop: 10,
    backgroundColor: '#B388FF',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  changeImageTxt: {
    fontWeight: 'bold',
    color: 'white',
  },
  inputProductTxt: {
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
  },
  inputProductTxtArea: {
    textAlignVertical: 'top',
  },
  pickerCategory: {
    backgroundColor: '#B388FF',
    borderColor: 'white',
    borderRadius: 10,
    color: 'white',
  },
  labelInputPr: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  labelInputPr2: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  paymentContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  paymentMethod: {
    backgroundColor: '#B388FF',
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
  offerButton: {
    backgroundColor: '#B388FF',
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btnProduct: {
    marginTop: 10,
    backgroundColor: '#6A0DAD',
    padding: 15,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btnProduct2: {
    marginTop: 10,
    backgroundColor: '#B388FF',
    padding: 15,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btnProductTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
  containerRow2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnresponse: {
    backgroundColor: '#B388FF',
  
  },
  
  

});

export {styles2};
