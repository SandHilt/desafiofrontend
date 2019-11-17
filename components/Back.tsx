import {useEffect} from 'react';
import {BackHandler} from 'react-native';

const handleBackAction = (handleBack: () => void): void => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBack);

    return (): void =>
      BackHandler.removeEventListener('hardwareBackPress', handleBack);
  }, []);
};

export {handleBackAction};
