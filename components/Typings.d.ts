interface LoginProp {
  nextIndex: () => void;
}

interface OptionsProp {
  nextIndex: () => void;
  prevIndex: () => void;
  handleBack: () => void;
}

interface WheelProp {
  prevIndex: () => void;
}
