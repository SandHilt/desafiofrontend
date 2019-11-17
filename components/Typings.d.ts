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
}

interface MenuProps {
  prevIndex: () => void;
}
