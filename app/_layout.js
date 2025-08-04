import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // Add any custom fonts here if needed
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen 
        name="splash" 
        options={{ 
          title: 'Splash',
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="auth" 
        options={{ 
          title: 'Authentication',
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="profile" 
        options={{ 
          title: 'Profile',
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="details" 
        options={{ 
          title: 'Details',
          headerShown: false 
        }} 
      />
    </Stack>
  );
} 