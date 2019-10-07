import React from 'react';
import {
  Animated,
} from 'react-native';

interface Props {
  duration: number;
}

const useAnimation = ({ duration }: Props) => {
  const [animation] = React.useState(new Animated.Value(0));
  
  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration,
    }).start();
  }, []);

  return animation;
}

export default useAnimation;