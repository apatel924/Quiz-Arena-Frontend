import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const AnswerOptions = ({ answersOptions, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftBar}>
        <View style={{ height: '50%', backgroundColor: '#adf2bc', borderRadius: 5 }}></View>
      </View>
      <View style={styles.rightBar}>
        <View style={{ height: '50%', backgroundColor: '#f2adad', borderRadius: 5 }}></View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ-FvbbAq5IaJUhtwxXEwY0D-jiZju02ejnNHx_bQWL_27GF3srhwJgqusMAqKh3QqU',
          }}
        />
      </View>
      <View style={styles.answersContainer}>
        {answersOptions.map((answerOption, index) => {
          return (
            <Pressable style={styles.option} onPress={onPress} key={index}>
              <Text style={styles.text}>{answerOption.text}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginBottom: 10,
    border: '1px solid #000',
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    textAlign: 'center',
  },
  answersContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginTop: 20,
    gap: '1rem',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  leftBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 10,
    height: '100%',
    backgroundColor: '#01ff38',
    borderRadius: 5,
  },
  rightBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: '100%',
    backgroundColor: '#ff0101',
    borderRadius: 5,
  },
});

export default AnswerOptions;
