import {StyleSheet} from 'react-native';
import {Colors} from './colors';

const Spacing = {
  /**
   * size: 0
   */
  none: 0,
  /**
   * size: 4
   */
  XXS: 4,
  /**
   * size: 8
   */
  XS: 8,
  /**
   * size: 12
   */
  SM: 12,
  /**
   * size: 16
   */
  MD: 16,
  /**
   * size: 24
   */
  LG: 24,
  /**
   * size: 32
   */
  XL: 32,
};

export const typography = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  body: {
    fontSize: 14,
  },
  button: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export const theme = {colors: Colors.main, spacing: Spacing};
