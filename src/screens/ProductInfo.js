import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Pressable, Image, TextInput} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/FontAwesome';

import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {UserContext} from '../context/UserContext';

import {QuestionComponent} from '../components/QuestionComponent';
import {CommentComponent} from '../components/CommentComponent';

export const ProductInfo = ({route, navigation}) => {
  const {product} = route.params;
  const {state} = route.params;

  const [userState, dispatch] = useContext(UserContext);
  const [rating, setRating] = useState(0);

  const [question, setQuestion] = useState('');
  const [questionList, setQuestionList] = useState(product.questions || []);

  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState(product.comments || []);

  let isFav = false;

  if (state.user) {
    if (state.user.favoriteProducts) {
      isFav = state.user.favoriteProducts.some(
        favorite => favorite.id === product.id,
      );
    }
  }

  const [isFavorite, setIsFavorite] = useState(isFav ? true : false);

  const handleStarPress = newRating => {
    setRating(newRating);
  };

  const isInCart = userState.cart.find(
    item => item.id === product.id || item.product === product.name,
  );
  const isUserLogged = state.user !== null;

  const renderQuestionComponent = ({item}) => {
    return (
      <QuestionComponent
        question={item}
        product={product}
        state={userState}
        dispatch={dispatch}
      />
    );
  };

  const renderCommentComponent = ({item}) => {
    return <CommentComponent comment={item} />;
  };

  const handleSubmitQuestion = () => {
    if (question === '') return;
    dispatch({
      type: 'ADD_QUESTION',
      payload: {
        productInfo: product,
        question,
        productDistribuitor: state.dbMarket.find(user =>
          user.products.some(prod => prod.id === product.id),
        ).userName,
      },
    });
    setQuestion('');
    setQuestionList([
      ...questionList,
      {
        id: questionList.length + 1,
        user: `${state.user.name} ${state.user.lastName}`,
        question,
      },
    ]);
  };

  const handleSubmitComment = () => {
    if (comment === '') return;
    dispatch({
      type: 'ADD_COMMENT',
      payload: {
        productInf: product,
        comment,
        rating,
        productDistrib: state.dbMarket.find(user =>
          user.products.some(prod => prod.id === product.id),
        ).userName,
      },
    });
    setComment('');
    setRating(0);
    setCommentList([
      ...commentList,
      {
        id: commentList.length + 1,
        user: `${state.user.name} ${state.user.lastName}`,
        comment,
        rating,
      },
    ]);
  };

  const getPaymentIcon = payment => {
    switch (payment) {
      case 'Débito':
        return 'credit-card';
      case 'Crédito':
        return 'credit-card';
      case 'Efecty':
        return 'money';
      case 'PSE':
        return 'arrows-alt';
      default:
        return 'money';
    }
  };

  const formatPrice = price => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleFavoritePress = () => {
    if (state.user === null) {
      return;
    }

    const user = state.dbMarket.find(
      user => user.userName === state.user.userName,
    );

    if (user) {
      if (isFavorite) {
        user.favoriteProducts = user.favoriteProducts.filter(
          favorite => favorite.id !== product.id,
        );
        setIsFavorite(false);
      } else {
        let productFav = {
          id: product.id,
          name: product.name,
          img: product.img,
          offer: product.offer,
          description: product.description,
          status: product.status,
          price: product.price,
        };
        dispatch({
          type: 'ADD_FAVORITE',
          payload: {productFav: productFav, userProduct: user},
        });
        setIsFavorite(true);
      }
    }
  };

  const loadFavoriteComponent = () => {
    if (isFavorite) {
      return (
        <Pressable style={styles2.btnLoveAdded} onPress={handleFavoritePress}>
          <Icon name="heart" size={20} color="white" />
        </Pressable>
      );
    } else {
      return (
        <Pressable style={styles2.btnLove} onPress={handleFavoritePress}>
          <Icon name="heart" size={20} color="white" />
        </Pressable>
      );
    }
  };

  useEffect(() => {
    loadFavoriteComponent();
  }, [isFavorite]);

  const handleCartPress = () => {
    if (userState.user) {
      navigation.navigate('Cart');
    } else {
      navigation.navigate('Login');
    }
  };

  const totalItemsInCart = userState.cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <View style={styles2.bgScreen2}>
      <View style={styles2.containerRow2}>
        <Pressable
          style={styles2.btnBack}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon name="arrow-left" size={30} color="white" />
        </Pressable>
        <Pressable onPress={handleCartPress} style={styles2.buttonNav2}>
          <Icon name="shopping-cart" size={25} color="white" />
          <View style={styles2.badge}>
            <Text style={styles2.badgeText}>
              {userState.user ? totalItemsInCart : 0}
            </Text>
          </View>
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles2.productContainer}>
          <View style={styles2.bgImgProduct}>
            <Image source={{uri: product.img}} style={styles2.imgProductPage} />
            {product.offer.isOffer && (
              <View style={styles2.discountContainer}>
                <Text style={styles2.textDiscount}>
                  -{product.offer.discount}%
                </Text>
              </View>
            )}
          </View>
          <View>
            <Text style={styles2.titleTextPageProduct}>{product.name}</Text>
            <Text style={styles2.textCategory}>{product.category}</Text>
            <View style={styles2.containerRow}>
              <View>
                <Text style={styles2.textPricePageProduct}>
                  {formatPrice(product.price)}
                </Text>
                {product.offer.isOffer && (
                  <Text style={styles2.txtOffer}>
                    {formatPrice(product.offer.priceInOffer)}
                  </Text>
                )}
              </View>

              <Pressable
                style={styles2.btnFourth}
                onPress={() => {
                  if (!isUserLogged) {
                    navigation.navigate('Login');
                    return;
                  } else {
                    if (isInCart) {
                      dispatch({type: 'INCREMENT_ITEM', payload: product.id});
                    } else {
                      dispatch({type: 'ADD_TO_CART', payload: product});
                    }
                  }
                }}>
                <Icon
                  name="shopping-cart"
                  size={25}
                  color={isInCart ? 'black' : 'white'}
                />
              </Pressable>
              {loadFavoriteComponent()}
            </View>
            <Text style={styles2.textDescription}>{product.description}</Text>

            <Text style={styles2.textTitle}>Caracteristicas</Text>
            <View style={styles2.table}>
              {product.features.map((char, index) => (
                <View key={index} style={styles2.tableRow}>
                  <Text style={styles2.tableCellValue}>{char}</Text>
                </View>
              ))}
            </View>
            <Text style={styles2.textTitle}>Medios de pago aceptados</Text>
            <View style={[styles2.containerRow, styles2.containerRowWrap]}>
              {product.paymentAccepted.map((payment, index) => (
                <View
                  key={index}
                  style={[styles2.containerRow, styles2.containerPayment]}>
                  <Icon
                    name={getPaymentIcon(payment)}
                    size={20}
                    color="white"
                  />
                  <Text style={styles2.textPayment}>{payment}</Text>
                </View>
              ))}
            </View>
            <View style={styles2.containerSectionProduct}>
              <Text style={styles2.textTitle}>Haz una pregunta</Text>
              {userState.user ? (
                <View>
                  <TextInput
                    style={styles2.textArea}
                    placeholder="Escribe tu pregunta aquí..."
                    multiline={true}
                    numberOfLines={3}
                    maxLength={100}
                    value={question}
                    onChangeText={setQuestion}
                  />
                  <Pressable
                    style={styles2.btnAddCart}
                    onPress={handleSubmitQuestion}>
                    <Text style={styles2.textBtn}>Enviar</Text>
                  </Pressable>
                </View>
              ) : (
                <View>
                  <Text>Debes iniciar sesión para hacer una pregunta</Text>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Login');
                    }}>
                    <Text style={styles2.txtInternalLogin}>Iniciar Sesión</Text>
                  </Pressable>
                </View>
              )}
              {product.questions && (
                <View style={styles2.questionsContainer}>
                  <Text>Ultimas preguntas</Text>
                  <FlatList
                    data={questionList}
                    renderItem={renderQuestionComponent}
                    scrollEnabled={false}
                    inverted={true}
                  />
                </View>
              )}
            </View>
            <View>
              <Text style={styles2.textTitle}>Comentarios</Text>
              <Text>Dejar un comentario</Text>
              {userState.user ? (
                <View>
                  <TextInput
                    style={styles2.textArea}
                    placeholder="Escribe tu comentario aquí..."
                    multiline={true}
                    numberOfLines={3}
                    maxLength={200}
                    value={comment}
                    onChangeText={setComment}
                  />
                  <Text>Calificar</Text>
                  <View
                    style={[
                      styles2.containerRow,
                      styles2.containerSectionProduct,
                    ]}>
                    {[...Array(5)].map((_, i) => (
                      <Pressable key={i} onPress={() => handleStarPress(i + 1)}>
                        <Icon
                          name={i < rating ? 'star' : 'star-o'}
                          type="font-awesome"
                          color="gold"
                          size={30}
                        />
                      </Pressable>
                    ))}
                  </View>

                  <Pressable
                    style={[
                      styles2.btnAddCart,
                      styles2.containerSectionProduct,
                    ]}
                    onPress={handleSubmitComment}>
                    <Text style={styles2.textBtn}>Enviar</Text>
                  </Pressable>
                </View>
              ) : (
                <View>
                  <Text>Debes iniciar sesión para hacer una pregunta</Text>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Login');
                    }}>
                    <Text style={styles2.txtInternalLogin}>Iniciar Sesión</Text>
                  </Pressable>
                </View>
              )}

              {product.comments && (
                <View style={styles2.questionsContainer}>
                  <Text>Ultimos comentarios</Text>
                  <FlatList
                    data={commentList}
                    renderItem={renderCommentComponent}
                    scrollEnabled={false}
                    inverted={true}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
