import {View, Text, Image, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/Ionicons';

export const QuestionComponent = ({question, state, dispatch, product}) => {
  const [showAnswerInput, setShowAnswerInput] = useState(false);
  const [answer, setAnswer] = useState('');
  const [answerUser, setAnswerUser] = useState(question.answer);
  const handleAnswer = () => {
    dispatch({
      type: 'ADD_ANSWER',
      payload: {
        questionInfo: question,
        answer,
        productQInfo: product,
        productDistri: state.dbMarket.find(user =>
          user.products.some(prod => prod.id === product.id),
        ).userName,
      },
    });
    setShowAnswerInput(false);
    setAnswer('');
    setAnswerUser(answer);
  };

  const isProductAdmin = () => {
    if (state.user) {
      const user = state.dbMarket.find(
        user => user.userName === state.user.userName,
      );
      if (user && user.products.some(prod => prod.id === product.id)) {
        return true;
      }
    }
    return false;
  };

  return (
    <View style={[styles2.containerRowStart, styles2.containerComment]}>
      <Image
        source={require('../assets/userProfile.webp')}
        style={styles2.imgCommentProfile}
      />
      <View>
        <Text style={styles2.textTitle}>{question.user}</Text>
        <Text>{question.question}</Text>
        {isProductAdmin() && !answerUser && (
          <View style={styles2.containerAnswer}>
            <Pressable
              style={styles2.btnResponse}
              onPress={() => {
                setShowAnswerInput(true);
              }}>
              <Text style={styles2.textBtn}>Responder</Text>
            </Pressable>
            {showAnswerInput && (
              <View style={styles2.containerAnswer}>
                <TextInput
                  style={styles2.textInputAnswer}
                  placeholder="Responder"
                  onChangeText={setAnswer}
                  multiline={true}
                  numberOfLines={3}
                  maxLength={100}
                  value={answer}
                />
                <Pressable
                  style={styles2.btnPrimary}
                  onPress={() => {
                    handleAnswer();
                  }}>
                  <Icon name="send" size={20} color="white" />
                </Pressable>
              </View>
            )}
          </View>
        )}
        <View style={styles2.containerRow}>
          {answerUser && (
            <Text style={styles2.textSecondary}>{answerUser}</Text>
          )}
        </View>
      </View>
    </View>
  );
};
