import {Text} from 'react-native';
import {TextProps} from '.';
import styled from 'styled-components/native';

export const StyledText = styled(Text)<TextProps>`
  ${({theme, variant}) => theme.textVariants[variant!]}
  ${({color}) => color && `color: ${color}`}
`;
