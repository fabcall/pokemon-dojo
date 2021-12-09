import {ActivityIndicator} from 'react-native';
import {Container} from './styles';
import React from 'react';

const LoadingView = () => {
  return (
    <Container>
      <ActivityIndicator />
    </Container>
  );
};

export default LoadingView;
