import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Pressable, Image, TextInput} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import {UserContext} from '../context/UserContext';

export const ProductInfo = ({route, navigation}) => {
  const [userState, dispatch] = useContext(UserContext);
  const [rating, setRating] = useState(0);
  const [newQuestion, setNewQuestion] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newResponseQuestion, setNewResponseQuestion] = useState('');
  const [newResponseComment, setNewResponseComment] = useState('');
  const [responseCommentVisibleIndex, setResponseCommentVisibleIndex] = useState(null);


  const [productQuestions, setProductQuestions] = useState([]);
  const [productComments, setProductComments] = useState([]);

  const [responseVisibleIndex, setResponseVisibleIndex] = useState(null);

  const {product} = route.params;
  const {state} = route.params;

  useEffect(() => {
    setProductQuestions(product.questions);
    setProductComments(product.comments);
  }, [product]);

  const handleStarPress = newRating => {
    setRating(newRating);
  };

  const isInCart = userState.cart.find(
    item => item.id === product.id || item.product === product.name,
  );
  const isUserLogged = state.user !== null;

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

  const handleAddFavorite = () => {
    if (state.user === null) {
      return;
    }

    const user = state.dbMarket.find(
      user => user.userName === state.user.userName,
    );

    if (user) {
      if (!isFavorite) {
        user.favoriteProducts.push({
          id: product.id,
          name: product.name,
          img: product.img,
          offer: product.offer,
          description: product.description,
          status: product.status,
          price: product.price,
        });
        setIsFavorite(true);
      }
    }
  };

  let isFav = false;

  if (state.user) {
    if (state.user.favoriteProducts) {
      isFav = state.user.favoriteProducts.some(
        favorite => favorite.id === product.id,
      );
    }
  }

  const [isFavorite, setIsFavorite] = useState(isFav ? true : false);

  const loadFavoriteComponent = () => {
    if (isFavorite) {
      return (
        <Pressable style={styles2.btnLoveAdded}>
          <Icon name="heart" size={20} color="white" />
        </Pressable>
      );
    } else {
      return (
        <Pressable style={styles2.btnLove} onPress={handleAddFavorite}>
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


  const handleAddQuestion = () => {
    if (newQuestion.trim() === '') {
      return;
    }

    if (!state.user) {
      alert("Por favor, inicia sesión para hacer preguntas.");
      return;
    }
  
    setProductQuestions(updatedQuestions);
    setNewQuestion('');
    const user = state.dbMarket.find((user) => user.userName === state.user.userName);
    if (user) {
      const productData = user.products.find((item) => item.id === product.id);
      if (productData) {
        productData.questions = updatedQuestions;
      } else {
        user.products.push({ id: product.id, questions: updatedQuestions, comments: [] });
      }
    }
  };
  

  const handleAddComment = () => {
    if (newComment.trim() === '') {
      return;
    }
    if (!state.user) {
      alert("Por favor, inicia sesión para hacer preguntas.");
      return;
    }

    setProductComments(updatedComments);
    setNewComment('');
    setRating(0);
    const user = state.user ? state.dbMarket.find((user) => user.userName === state.user.userName) : null; 
    if (user) {
      const productData = user.products.find((item) => item.id === product.id);
      if (productData) {
        productData.comments = updatedComments;
      } else {
        user.products.push({ id: product.id, comments: updatedComments, questions: [] });
      }
    }
  };

  const handleAddResponse = (questionIndex) => {
    if (newResponseQuestion.trim() === '') {
      return;
    }

    if (!state.user) {
      alert("Por favor, inicia sesión para responder.");
      return;
    }

    const updatedQuestions = [...productQuestions];
    updatedQuestions[questionIndex].responses = updatedQuestions[questionIndex].responses || [];
    updatedQuestions[questionIndex].responses.push({
      user: state.user.userName,
      response: newResponseQuestion,
    });

    setProductQuestions(updatedQuestions);
    setNewResponseQuestion('');
    setResponseVisibleIndex(null);

    const user = state.dbMarket.find((user) => user.userName === state.user.userName);
    if (user) {
      const productData = user.products.find((item) => item.id === product.id);
      if (productData) {
        productData.questions = updatedQuestions;
      } else {
        user.products.push({ id: product.id, questions: updatedQuestions, comments: [] });
      }
    }
  };

  const toggleResponseInput = (index) => {
    setResponseVisibleIndex(responseVisibleIndex === index ? null : index);
  };
  const handleAddCommentResponse = (commentIndex) => {
    if (newResponseComment.trim() === '') {
      return;
    }
  
    if (!state.user) {
      alert("Por favor, inicia sesión para responder.");
      return;
    }
  
    const updatedComments = [...productComments];
    updatedComments[commentIndex].responses = updatedComments[commentIndex].responses || [];
    updatedComments[commentIndex].responses.push({
      user: state.user.userName,
      response: newResponseComment,
    });
  
    setProductComments(updatedComments);
    setNewResponseComment('');
    setResponseCommentVisibleIndex(null);
  
    const user = state.dbMarket.find((user) => user.userName === state.user.userName);
    if (user) {
      const productData = user.products.find((item) => item.id === product.id);
      if (productData) {
        productData.comments = updatedComments;
      } else {
        user.products.push({ id: product.id, comments: updatedComments, questions: [] });
      }
    }
  };
  

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
        <Pressable onPress={handleCartPress} style={styles2.buttonNav}>
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
            <Image source={{ uri: product.img }} style={styles2.imgProductPage} />
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
                      dispatch({ type: 'INCREMENT_ITEM', payload: product.id });
                    } else {
                      dispatch({ type: 'ADD_TO_CART', payload: product });
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

            <View style={styles2.containerSectionProduct}>
              <Text style={styles2.textTitle}>Haz una pregunta</Text>
              <TextInput
                style={styles2.textArea}
                placeholder="Escribe tu pregunta aquí..."
                multiline={true}
                numberOfLines={3}
                maxLength={100}
                value={newQuestion}
                onChangeText={setNewQuestion}
              />
              <Pressable style={styles2.btnAddCart} onPress={handleAddQuestion}>
                <Text style={styles2.textBtn}>Enviar</Text>
              </Pressable>
              {productQuestions.length > 0 && (
                <View>
                  <Text>Últimas preguntas</Text>
                  {productQuestions.map((question, index) => (
                    <View
                      key={index}
                      style={[styles2.containerRowStart, styles2.containerComment]}>
                      <Image
                        source={require('../assets/userProfile.webp')}
                        style={styles2.imgCommentProfile}
                      />
                      <View>
                        <Text style={styles2.textTitle}>{question.user}</Text>
                        <Text>{question.question}</Text>
                        <Pressable onPress={() => toggleResponseInput(index)}>
                          <Text style={styles2.btnresponse}>Responder</Text>
                        </Pressable>
                        {responseVisibleIndex === index && (
                          <View>
                            <TextInput
                              style={styles2.textArea}
                              placeholder="Escribe tu respuesta aquí..."
                              multiline={true}
                              numberOfLines={3}
                              maxLength={100}
                              value={newResponseQuestion}
                              onChangeText={setNewResponseQuestion}
                            />
                            <Pressable style={styles2.btnAddCart} onPress={() => handleAddResponse(index)}>
                              <Text style={styles2.textBtn}>Enviar</Text>
                            </Pressable>
                          </View>
                        )}
                        <View style={styles2.containerRow}>
                          {question.responses && question.responses.map((response, responseIndex) => (
                            <Text key={responseIndex} style={styles2.textSecondary}>
                              {response.user}: {response.response}
                            </Text>
                          ))}
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </View>

            <View>
  <Text style={styles2.textTitle}>Comentarios</Text>
  <Text>Deja tu reseña</Text>
  <View style={styles2.containerRow}>
    {Array.from({ length: 5 }, (_, i) => (
      <Pressable
        key={i}
        onPress={() => handleStarPress(i + 1)}
        style={styles2.starContainer}>
        <Icon
          name="star"
          size={30}
          color={i < rating ? '#FFD700' : '#E0E0E0'}
        />
      </Pressable>
    ))}
  </View>
  <TextInput
    style={styles2.textArea}
    placeholder="Escribe tu comentario aquí..."
    multiline={true}
    numberOfLines={3}
    maxLength={100}
    value={newComment}
    onChangeText={setNewComment}
  />
  <Pressable style={styles2.btnAddCart} onPress={handleAddComment}>
    <Text style={styles2.textBtn}>Enviar</Text>
  </Pressable>
  {productComments.length > 0 && (
    <View>
      <Text>Últimos comentarios</Text>
      {productComments.map((comment, index) => (
        <View
          key={index}
          style={[styles2.containerRowStart, styles2.containerComment]}>
          <Image
            source={require('../assets/userProfile.webp')}
            style={styles2.imgCommentProfile}
          />
          <View>
            <Text style={styles2.textTitle}>{comment.user}</Text>
            <Text>{comment.comment}</Text>
            <Pressable onPress={() => setResponseCommentVisibleIndex(responseCommentVisibleIndex === index ? null : index)}>
              <Text style={styles2.btnresponse}>Responder</Text>
            </Pressable>
            {responseCommentVisibleIndex === index && (
              <View>
                <TextInput
                  style={styles2.textArea}
                  placeholder="Escribe tu respuesta aquí..."
                  multiline={true}
                  numberOfLines={3}
                  maxLength={100}
                  value={newResponseComment}
                  onChangeText={setNewResponseComment}
                />
                <Pressable style={styles2.btnAddCart} onPress={() => handleAddCommentResponse(index)}>
                  <Text style={styles2.textBtn}>Enviar</Text>
                </Pressable>
              </View>
            )}
            <View style={styles2.containerRow}>
              {comment.responses && comment.responses.map((response, responseIndex) => (
                <Text key={responseIndex} style={styles2.textSecondary}>
                  {response.user}: {response.response}
                </Text>
              ))}
            </View>
          </View>
        </View>
      ))}
    </View>
  )}
</View>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};