import React from 'react';
import {
  Animated, Text, View,
} from 'react-native';

interface AnimatedChildProps {
  children: any;
  anim: any;
  atParent: boolean;
  url: string;
}

const duration = 500;

class AnimatedChild extends React.Component<AnimatedChildProps> {

  state = {
    animating: false,
    atParent: this.props.atParent,
    // we're going to save the old children so we can render
    // it when it doesn't actually match the location anymore
    previousChildren: null,
    url: this.props.url
  };

  componentDidMount() {
    Animated.timing(this.props.anim, {
      toValue: 1,
      duration: 0,
    }).start();
  }

  static getSnapshotBeforeUpdate(prevProps: AnimatedChildProps) {
    return prevProps.children;
  }

  componentDidUpdate(prevProps: AnimatedChildProps, prevState: any, snapshot: any) {
    if (this.props.url !== prevProps.url && snapshot !== null) {
      if (this.state.animating) {
        this.props.anim.stopAnimation();
      } else {
        if (this.props.anim !== 1) {
          this.startAnimation(snapshot);
        }
      }
    } else if (this.props.anim === 0 && snapshot === null) {
      this.props.anim.setOffset(1);
    }
  }

  startAnimation = (snapshot: any) => {
    this.setState({
      animating: true,
      previousChildren: snapshot,
    }, () => {
      Animated.timing(this.props.anim, {
        toValue: 1,
        duration,
      }).start();
    });
    this.props.anim.addListener((value: any) => {
      if (value.value === 1) {
        const st = setTimeout(() => {
          this.setState({
            animating: false,
            previousChildren: null
          });
          clearTimeout(st);
        }, duration);
        this.props.anim.setOffset(0);
      }
    });
  }

  render() {
    const { anim, children } = this.props;
    const { previousChildren } = this.state;
    return (
      <>
        {/* {previousChildren && (
          <Animated.View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              // top: anim.interpolate({
              //   inputRange: [0, 1],
              //   outputRange: [0, -100]
              // }),
              opacity: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0]
              })
            }}>
            {previousChildren}
          </Animated.View>
        )} */}
        {previousChildren}
        <Animated.View
          style={{
            position: "absolute",
            backgroundColor: '#FFF',
            left: 0,
            right: 0,
            bottom: 0,
            // top: 0,
            top: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0]
            }),
            opacity: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1]
            })
          }}
        >
          {/* render the old ones if we have them */}
          {children}
        </Animated.View>
      </>
    );
  }
}

export default AnimatedChild;