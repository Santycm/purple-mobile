import { StyleSheet } from 'react-native';

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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  imageContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 45,
  },
  cartItemImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
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
    color: '#B0B0B0',
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
});





export default AppStyles;
