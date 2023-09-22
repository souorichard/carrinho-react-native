import { StatusBar, SafeAreaView, ScrollView } from 'react-native'
import { Car } from './src/pages/Car'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

export default function App() {
  const [fontLoaded] = useFonts({
    MontRegular: Montserrat_400Regular,
    MontRegularItalic: Montserrat_400Regular_Italic,
    MontSemiBold: Montserrat_600SemiBold,
    MontBold: Montserrat_700Bold
  })

  if (!fontLoaded) {
    return null
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Car />
    </SafeAreaView>
  )
}
