import {View, Text, Image, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/FontAwesome';

export const CommentComponent = ({comment}) => {
  return (
    <View
      style={[styles2.containerRowStart, styles2.containerComment]}>
      <Image
        source={require('../assets/userProfile.webp')}
        style={styles2.imgCommentProfile}
      />
      <View>
        <Text style={styles2.textTitle}>{comment.user}</Text>
        <Text>{comment.comment}</Text>
        <View style={styles2.containerRow}>
          <Text style={styles2.textSecondary}>Calificación:</Text>

          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name={i < comment.rating ? 'star' : 'star-o'}
              type="font-awesome"
              color="gold"
            />
          ))}
        </View>
      </View>
    </View>
  );
};
