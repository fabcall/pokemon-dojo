import {ExtendedTheme} from '../../../typings/styled-components';
import {TextProps as RNTextProps} from 'react-native';
import React from 'react';
import {StyledText} from './styles';

export type TextProps = RNTextProps & {
  color?: string;
  variant?: keyof ExtendedTheme['textVariants'];
};

const Text = ({color, children, variant, ...props}: TextProps) => {
  return (
    <StyledText color={color} variant={variant} {...props}>
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  variant: 'body1',
};

export default Text;
