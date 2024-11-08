import {Button, Image, StyleSheet, TextInput} from 'react-native';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {useState} from "react";
import {useColorScheme} from "@/hooks/useColorScheme";
import {Colors} from "@/constants/Colors";

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const [hours, setHours] = useState('');

  const hoursHandler = (hours: string) => {
    console.log(`Handling hours ${hours}...`);
    setHours(hours);
  }

  const addInvoiceHandler = () => {
    console.log(`Adding invoice with hours ${hours}...`);
  }

  const themedStyles = StyleSheet.create({
    input: {
      borderWidth: 1,
      padding: 8,
      borderRadius: 4,
      color: Colors[colorScheme ?? 'dark'].text, // Set text color based on theme
    },
  });

  return (
      <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={
            <Image
                source={require('@/assets/images/partial-react-logo.png')}
                style={styles.reactLogo}
            />
          }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Add Invoice</ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <TextInput placeholder="Hours" style={themedStyles.input} onChangeText={hoursHandler}/>
          <Button title={"Add"} onPress={addInvoiceHandler}/>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText>Etc..</ThemedText>
        </ThemedView>
      </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
