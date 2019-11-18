import React, {useState} from 'react';
import {
  Alert,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Menu from './Menu';
import rand from 'lodash/random';
import {handleBackAction} from './Back';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  containerHeader: {
    flex: 1,
    backgroundColor: 'rgb(2,0,36)',
    alignItems: 'center',
  },
  header: {
    fontSize: 48 / PixelRatio.getFontScale(),
    color: 'white',
    flex: 1,
  },
  subheader: {
    fontSize: 36 / PixelRatio.getFontScale(),
    color: 'white',
    flex: 1,
  },
  question: {
    fontSize: 22 / PixelRatio.getFontScale(),
    color: 'white',
    textAlign: 'justify',
    flex: 2,
  },
  responses: {
    flex: 1,
    width: '100%',
  },
  answer: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
  },
  answerText: {
    fontSize: 18 / PixelRatio.getFontScale(),
  },
});

const Question: React.FC<QuestionProps> = ({
  questionIndex,
  themeIndex,
  prevIndex,
  handleBack,
  nextQuestion,
  backToOptions,
}) => {
  handleBackAction(handleBack);
  const correctAnswer = rand(1, 4);
  const [, setAnswerChoosen] = useState(-1);

  const handlePressAnswer = (value: number): void => {
    if (value === correctAnswer) {
      Alert.alert('Parabens', 'Você acertou!');
    } else {
      Alert.alert('Poxa que pena!', 'Tente na proxima');
    }
    setAnswerChoosen(value);
    setTimeout(() => {
      nextQuestion();
      prevIndex();
    }, 2000);
  };

  return (
    <View style={styles.wrapper}>
      <Menu prevIndex={backToOptions} />
      <View style={styles.containerHeader}>
        <Text style={styles.header}>Tema {themeIndex}</Text>
        <Text style={styles.subheader}>Questão nº{questionIndex}</Text>
        <Text style={styles.question}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          aperiam assumenda autem consectetur cum dicta dolorum ducimus
        </Text>
      </View>
      <View style={styles.responses}>
        {[1, 2, 3, 4].map(value => (
          <TouchableHighlight
            underlayColor={correctAnswer === value ? 'green' : 'red'}
            onPress={(): void => handlePressAnswer(value)}
            key={value}
            style={styles.answer}>
            <Text style={styles.answerText}>Resposta {value}</Text>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
};

export default Question;
