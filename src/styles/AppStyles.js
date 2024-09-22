import {StyleSheet} from 'react-native';

const AppStyles = StyleSheet.create({
  //------------------------- ESTILOS DE EL CARRITO DE COMPRA(CART.JS)-------------------------------------
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
    justifyContent: 'space-between',
  },
  backButtonCart: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    flex: 1,
  },
  address: {
    fontSize: 16,
    color: '#B0B0B0',
    textAlign: 'center',
    marginTop: 5,
    flex: 1,
  },
  cartList: {
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#6A0DAD',
    borderRadius: 10,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  cartItemImage: {
    padding: 10,
    width: 70,
    height: 70,
    overflow: 'hidden',
    objectFit: 'scale-down',
  },
  cartItemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cartItemDescription: {
    fontSize: 14,
    color: '#B0B0B0',
    marginVertical: 5,
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#B0B0B0',
    marginVertical: 5,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#B388FF',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: '#FFFFFF',
  },
  deleteButton: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  detailsContainer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#B0B0B0',
  },
  detailsText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D4A5FF',
    marginVertical: 10,
    textAlign: 'right',
  },
  checkoutButton: {
    backgroundColor: '#B388FF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },

  // -------------------------------------ESTILOS DELIVERYSCREEN------------------------------------------
  modalContainerDelivery: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backButtonModal: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  modalContent: {
    width: '80%',
    height: 100,
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D4A5FF',
    marginBottom: 20,
  },
  selectionContainer: {
    width: '100%',
  },
  drawer: {
    width: '100%',
    backgroundColor: '#2B2B2B',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    position: 'relative',
  },
  drawerContent: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B388FF',
  },
  addressText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 5,
  },
  pickupDetails: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  editButton: {
    backgroundColor: '#B388FF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  mapButton: {
    backgroundColor: '#B388FF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#6A0DAD',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  advanceButton: {
    position: 'absolute',
    right: 15,
    top: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //-------------------------------------ESTILOS ARRIVALDAY -------------------------------
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
  },
  backButtonArrival: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
  },
  deliveryInfo: {
    marginBottom: 20,
  },
  deliveryText: {
    fontSize: 16,
    color: '#B0B0B0',
  },
  productContainer: {
    marginBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#6A0DAD',
    borderRadius: 10,
  },
  productImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    marginRight: 20,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productDetails: {
    flex: 1,
    paddingHorizontal: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D4A5FF',
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  datePickerContainer: {
    marginBottom: 10,
  },
  dateLabel: {
    fontSize: 14,
    color: '#B0B0B0',
  },
  picker: {
    height: 50,
    width: 150,
    color: '#FFFFFF',
  },
  freeShipping: {
    fontSize: 14,
    color: '#00FF00',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  footer: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#B0B0B0',
    backgroundColor: '#000000',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    width: '100%',
  },
  continueButton: {
    backgroundColor: '#B388FF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },

  //------------------------------------ESTILOS PAYMENT--------------------------------------
  modalContainerPayment: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backButtonPayment: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 20,
    color: '#D4A5FF',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D4A5FF',
    marginBottom: 20,
  },
  paymentContainer: {
    width: '100%',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  paymentImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  paymentText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  closeButton: {
    backgroundColor: '#6A0DAD',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  //-------------mas de payment ----

  scrollViewContainerPaymentScreen: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#120907',
    padding: 20,
  },
  modalContainerPaymentScreen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#120907',
  },
  backButtonPaymentScreen: {
    marginBottom: 20,
  },
  modalContentScreen: {
    width: '100%',
    alignItems: 'center',
  },
  modalTitleScreen: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productsContainerScreen: {
    width: '100%',
    marginBottom: 20,
  },
  productItemScreen: {
    flexDirection: 'row',
    backgroundColor: '#6A0DAD',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    alignItems: 'center',
  },
  productImageScreen: {
    width: 80,
    height: 80,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    marginRight: 10,
  },
  productDetailsScreen: {
    flex: 1,
    justifyContent: 'center',
  },
  productNameScreen: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescriptionScreen: {
    fontSize: 14,
    color: '#7D7D7D',
    marginVertical: 5,
  },
  productPriceScreen: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productQuantityScreen: {
    fontSize: 14,
    color: '#7D7D7D',
  },
  totalAmountScreen: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  addressInputScreen: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  paymentOptionsContainerScreen: {
    width: '100%',
  },
  paymentOptionScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  paymentImageScreen: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  paymentOptionInactiveScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#B0B0B0',
    marginVertical: 5,
    marginHorizontal: 10,
  },

  paymentOptionActiveScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#6A0DAD',
    marginVertical: 5,
    marginHorizontal: 10,
  },

  paymentTextScreen: {
    marginLeft: 10,
    color: '#FFFFFF',
  },
  captchaContainerScreen: {
    marginVertical: 50,
    alignItems: 'center',
  },
  captchaImageScreen: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  captchaCheckboxContainerScreen: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  captchaCheckboxScreen: {
    marginRight: 10,
  },
  captchaTextScreen: {
    fontSize: 16,
  },
  continueButtonScreen: {
    marginTop: 20,
    backgroundColor: '#6A0DAD',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonTextScreen: {
    color: '#FFFFFF',
    fontSize: 18,
  },

  //------------------------------------ESTILOS MyPurchases--------------------------------------

  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  purchaseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  purchaseDetails: {
    flex: 1,
  },
  productName: {
    color: '#D4A5FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#B0B0B0',
    fontSize: 14,
  },
  productStatus: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  reorderButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  reorderButton: {
    backgroundColor: '#6A0DAD',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  reorderButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  productStatus: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusEntregado: {
    color: '#B388FF',
  },
  statusEnTransito: {
    color: '#B388FF',
  },
  statusCancelado: {
    color: 'red',
  },
  productStatusLabel: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  productStatusValue: {
    color: '#6A0DAD',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#B0B0B0',
    fontSize: 12,
    marginBottom: 5,
  },

  imageSmall: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  statusDisponible: {
    color: 'green',
  },
  statusNoDisponible: {
    color: 'red',
  },
  productDescriptionFavorite: {
    color: '#FFFFFF',
    marginVertical: 5,
  },
  productPrice: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginVertical: 5,
  },

  //------------------------------ConfirmPurchase----------------

  containerConfirm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  innerContainerConfirm: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  successImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  successMessageConfirm: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  continueButtonScreen: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  continueButtonTextScreen: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  //------------------Estilos HelpSupport---------------------------
  containerHelp: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerHelp: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#6A0DAD',
  },
  titleHelp: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentHelp: {
    padding: 16,
  },
  labelHelp: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
  },
  pickerHelp: {
    backgroundColor: '#B388FF',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  textInputHelp: {
    height: 100,
    borderColor: '#B0B0B0',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
    color: '#2B2B2B',
    marginBottom: 16,
  },
  footerHelp: {
    padding: 16,
    borderTopColor: '#B0B0B0',
    borderTopWidth: 1,
  },
  backButtonHelp: {
    marginRight: -20,
  },
  checkoutButtonHelp: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  successImageHelp: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center',
  },
  imageContainerHelp: {
    alignItems: 'center',
    marginVertical: 30,
  },
  imageHelp: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  faqItem: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  faqAnswer: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default AppStyles;
