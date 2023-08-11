import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Carrinho } from './src/pages/Carrinho';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Carrinho /> 
    </SafeAreaView>
  );
}