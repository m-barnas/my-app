import {StyleSheet, Text, type TextProps, useColorScheme} from 'react-native';

import {useThemeColor} from '@/hooks/useThemeColor';
import {Colors} from "@/constants/Colors";
import {ColorSchemeName} from "react-native/Libraries/Utilities/Appearance";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const scheme = useColorScheme();
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles(scheme).default : undefined,
        type === 'title' ? styles(scheme).title : undefined,
        type === 'defaultSemiBold' ? styles(scheme).defaultSemiBold : undefined,
        type === 'subtitle' ? styles(scheme).subtitle : undefined,
        type === 'link' ? styles(scheme).link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = (scheme: ColorSchemeName) => StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: Colors[scheme ?? 'light'].link,
  },
});
