import React from 'react';
import {Text, View} from 'react-native';
import {config} from '../../config';

export const ErrorNotification = ({
  text,
  color,
  fontSize,
  isBold,
  marginVertical,
  marginHorizontal,
}) => {
  return (
    <View>
      {text !== '' && (
        <Text
          style={{
            fontSize: fontSize || 14,
            color: color || config.colors.primaryColor,
            fontWeight: isBold ? 'bold' : 'normal' || 'normal',
            marginHorizontal: marginHorizontal || 0,
            marginVertical: marginVertical || 0,
          }}>
          {text}
        </Text>
      )}
    </View>
  );
};
