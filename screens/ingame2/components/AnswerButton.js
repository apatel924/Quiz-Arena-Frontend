import { Image } from 'expo-image';
import React, { useRef } from 'react';
import { Animated, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AnimatedButton from '../../../components/AnimatedButton/AnimatedButton';

const AnswerButton = ({ text, answerCorrect, isSelected, isAnswered, onPress, roundOverData }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const bounceEffect = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1.05,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePress = () => {
    bounceEffect();
    onPress();
  };

  const getButtonStyles = () => {
    let buttonColor = '#EFF8FF';
    let buttonShadowColor = '#CBD9F0';
    let textColor = '#262625';

    if (isAnswered) {
      if (answerCorrect) {
        buttonColor = '#00C48C';
        buttonShadowColor = '#00C48C';
        textColor = '#ffffff';
      } else if (isSelected) {
        buttonColor = '#FF5858';
        buttonShadowColor = '#F73535';
        textColor = '#ffffff';
      }
    } else if (isSelected) {
      buttonColor = answerCorrect ? '#00C48C' : '#FF5858';
      buttonShadowColor = answerCorrect ? '#00C48C' : '#F73535';
      textColor = '#ffffff';
    }

    return { buttonColor, buttonShadowColor, textColor };
  };

  const { buttonColor, buttonShadowColor, textColor } = getButtonStyles();

  // Apply the animated scale to the button's style
  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <AnimatedButton
      onPress={handlePress} // Use the new handlePress function
      style={[
        {
          backgroundColor: buttonColor,
          width: '100%',
          padding: 20,
          borderRadius: 100,
        },
        animatedStyle,
      ]} // Apply animated style
    >
      {roundOverData && (
        <View
          style={{
            position: 'absolute',
            top: -7,
            right: 10,
            flexDirection: 'row',
            gap: 3,
          }}
        >
          {roundOverData.playerDetails.playerInformation.avatar &&
            roundOverData.playerAnswer.answer === text && (
              <Image
                source={{
                  uri:
                    roundOverData.playerDetails.playerInformation.avatar ||
                    'https://skift.com/wp-content/uploads/2023/08/Trivago-Guy-hotel-price-scaled.jpeg',
                }}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#EC80B4',
                }}
              />
            )}

          {roundOverData.opponentDetails.playerInformation.avatar &&
            roundOverData.opponentAnswer.answer === text && (
              <Image
                source={{
                  uri:
                    roundOverData.opponentDetails.playerInformation.avatar ||
                    'https://skift.com/wp-content/uploads/2023/08/Trivago-Guy-hotel-price-scaled.jpeg',
                }}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#3F95F2',
                }}
              />
            )}
        </View>
      )}

      <Text
        style={{
          color: textColor,
          fontFamily: 'poppins-regular',
          fontSize: RFValue(11),
          shadowColor: buttonShadowColor,
          shadowOffset: { width: 0, height: -6 },
          shadowOpacity: 0.2,
          shadowRadius: 8,
          elevation: 5,
        }}
      >
        {text}
      </Text>
    </AnimatedButton>
  );
};

export default AnswerButton;
