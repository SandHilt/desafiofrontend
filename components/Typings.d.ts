interface LoginProp {
  nextIndex: () => void;
}

interface OptionsProp {
  nextIndex: () => void;
  prevIndex: () => void;
  handleBack: () => void;
}

interface WheelProp {
  handleBack: () => void;
  prevIndex: () => void;
  nextIndex: () => void;
  setTheme: (themeId: number) => void;
}

interface MenuProps {
  prevIndex: () => void;
}

interface QuestionProps {
  handleBack: () => void;
  backToOptions: () => void;
  prevIndex: () => void;
  questionIndex: number;
  nextQuestion: () => void;
  themeIndex: number;
}
