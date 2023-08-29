import { Image, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

import { useFonts, Silkscreen_400Regular } from '@expo-google-fonts/silkscreen';
import { Arizonia_400Regular } from '@expo-google-fonts/arizonia';
import { AmaticSC_400Regular } from '@expo-google-fonts/amatic-sc';
import { Bilbo_400Regular } from '@expo-google-fonts/bilbo';
import { CoveredByYourGrace_400Regular } from '@expo-google-fonts/covered-by-your-grace';
import { Niconne_400Regular } from '@expo-google-fonts/niconne';
import { Arsenal_700Bold_Italic } from '@expo-google-fonts/arsenal';
import { Eater_400Regular } from '@expo-google-fonts/eater';
import { KiteOne_400Regular } from '@expo-google-fonts/kite-one';
import { Archivo_800ExtraBold_Italic } from '@expo-google-fonts/archivo';
import { RubikGemstones_400Regular } from '@expo-google-fonts/rubik-gemstones';

export default function App() {

  let [ fontsLoaded, fontError ] = useFonts({
    Silkscreen_400Regular, 
    Arizonia_400Regular,
    AmaticSC_400Regular, 
    Bilbo_400Regular,
    CoveredByYourGrace_400Regular, 
    Niconne_400Regular,
    Arsenal_700Bold_Italic, 
    Eater_400Regular,
    KiteOne_400Regular, 
    Archivo_800ExtraBold_Italic,
    RubikGemstones_400Regular
  })

  if (!fontsLoaded && !fontError) { return null; }

  return (

    <ScrollView>

      <SafeAreaView style={estilos.body}>

        <SafeAreaView style={estilos.header}>
          <Image style={estilos.cabecario} resizeMode="center" source={require("./assets/cabecario.jpg")} />
          <Text style={estilos.introducao}>Confira aqui algumas frases motivacionais depois de um dia cansativo de trabalho de TI</Text>
        </SafeAreaView>

        <SafeAreaView style={estilos.frases}>
          <Text style={estilos.frase1}>
            “Algumas pessoas acham que foco significa dizer sim para a coisa em que você vai se focar. Mas não é nada disso. Significa dizer não às centenas de outras boas ideias que existem. Você precisa selecionar cuidadosamente.” - Steve Jobs
          </Text>
          <Image style={estilos.foto} resizeMode="center" source={require("./assets/jobs1.jpg")} />
        </SafeAreaView>

        <SafeAreaView style={estilos.frases}>
            <Text style={estilos.frase2}>
              “Você quer passar o resto da sua vida vendendo água com açúcar ou quer uma chance de mudar o mundo?” - Steve Jobs
            </Text>
            <Image style={estilos.foto} resizeMode="center" source={require("./assets/jobs2.jpg")} />
        </SafeAreaView>

        <SafeAreaView style={estilos.frases}>
            <Text style={estilos.frase3}>
              “Quando eu estava na escola, o computador era uma coisa muito assustadora. As pessoas falavam em desafiar aquela máquina do mal que estava sempre fazendo contas que não pareciam corretas. E ninguém pensou naquilo como uma ferramenta poderosa.” - Bill Gates
            </Text>
            <Image style={estilos.foto} resizeMode="center" source={require("./assets/gates1.jpg")} />
        </SafeAreaView>

        <SafeAreaView style={estilos.frases}>
            <Text style={estilos.frase4}>
              “Acho que vírus de computador deve contar como vida. Creio que dizem algo sobre a natureza humana que a única forma de vida que criamos até agora é puramente destrutiva. Nós criamos vida à nossa própria imagem.” - Stephen Hawking
            </Text>
            <Image style={estilos.foto} resizeMode="center" source={require("./assets/hawking.jpg")} />
        </SafeAreaView>

        <SafeAreaView style={estilos.frases}>
            <Text style={estilos.frase5}>
              “O verdadeiro perigo não é que computadores começarão a pensar como homens, mas que homens começarão a pensar como computadores.” - Sydney J. Harris
            </Text>
            <Image style={estilos.foto} resizeMode="center" source={require("./assets/harris.jpg")} />
        </SafeAreaView>

        <SafeAreaView style={estilos.frases}>
            <Text style={estilos.frase6}>
              “Se não der certo da primeira vez, chame de versão 1.0.” - Não confirmado
            </Text>
        </SafeAreaView>
        
        <SafeAreaView style={estilos.frases}>
            <Text style={estilos.frase7}>
              “A informática está interligada ao mundo sobre as reações intergalaxias!” - Não confirmado
            </Text>
        </SafeAreaView>

        <SafeAreaView style={estilos.frases}>
            <Text style={estilos.frase8}>
              “É melhor esperar que um programador produtivo se torne disponível do que esperar que o primeiro programador disponível se torne produtivo” - Bill Gates
            </Text>
            <Image style={estilos.foto} resizeMode="center" source={require("./assets/gates2.jpg")} />
        </SafeAreaView>

        <SafeAreaView style={estilos.frases}>
            <Text style={estilos.frase9}>
              “Se algo é importante o suficiente, você deve tentar. Mesmo se o resultado provável for o fracasso.” - Steve McConnell
            </Text>
            <Image style={estilos.foto} resizeMode="center" source={require("./assets/mcconnell.jpg")} />
        </SafeAreaView>

        <SafeAreaView style={estilos.frases}>
            <Text style={estilos.frase10}>
              “Os seus clientes mais insatisfeitos são a sua maior fonte de aprendizagem.” - Bill Gates
            </Text>
            <Image style={estilos.foto} resizeMode="center" source={require("./assets/gates3.jpg")} />
        </SafeAreaView>

      </SafeAreaView>

    </ScrollView>

  );

}

const estilos = StyleSheet.create({

  body: { flex: 1, justifyContent: "center", padding: 10, margin: 45, backgroundColor: '#000000' },

  header: { backgroundColor: '#00ace6', alignItems: 'center', borderRadius: 50, marginTop: 20, marginBottom: 20, padding: 20 },

  cabecario: { width: 250, height: 150, margin: 20, borderRadius: 50, },

  introducao: { fontFamily: 'RubikGemstones_400Regular' },

  foto: { width: 150, height: 150, margin: 20 },

  frases: { margin: 2, padding: 20, width: 280, borderRadius: 50, marginTop: 20, marginBottom: 20, borderColor: '#0000b3', 
  borderWidth: 12, alignItems: 'center', backgroundColor: '#3399ff' },

  frase1: { fontFamily: 'Silkscreen_400Regular' },
  frase2: { fontFamily: 'Arizonia_400Regular' }, 
  frase3: { fontFamily: 'AmaticSC_400Regular' },
  frase4: { fontFamily: 'Bilbo_400Regular' },
  frase5: { fontFamily: 'CoveredByYourGrace_400Regular' },
  frase6: { fontFamily: 'Niconne_400Regular' },
  frase7: { fontFamily: 'Arsenal_700Bold_Italic' },
  frase8: { fontFamily: 'Eater_400Regular' },
  frase9: { fontFamily: 'KiteOne_400Regular' },
  frase10: { fontFamily: 'Archivo_800ExtraBold_Italic' },

});
