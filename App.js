import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/wallpaper.jpg')}
        style={styles.background}
      >
        <Image
          source={require('./assets/images/back.jpg')}
          style={styles.image}
        />
        <Text style={styles.text}>Plutão</Text>
        <Text style={styles.subtitle}>O menor planeta</Text>
        <View style={styles.line}></View>
        <Text style={styles.description}>
          Descoberto em 1930, pelo astrônomo estadunidense Clyde Tombaugh, Plutão está localizado na região denominada Cinturão de Kuiper, que abriga milhões de corpos celestes gelados, com distâncias do Sol que variam entre 4,5 bilhões a 7,5 bilhões de quilômetros. Essa distância para o Sol faz com que Plutão registre temperaturas baixíssimas, girando em torno de 200° Celsius negativos.
        </Text>
        <View style={styles.line}></View>
        <Text style={styles.galleryText}>Galeria</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/images/backimage1.jpg')}
            style={styles.galleryImage}
          />
          <Image
            source={require('./assets/images/backimage2.jpg')}
            style={styles.galleryImage}
          />
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 230,
    marginBottom: -30,
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'left', // Alinha o texto à esquerda
    marginRight: 270, // Adiciona um pequeno espaço à esquerda
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'left', // Alinha o texto à esquerda
    marginRight: 230, // Adiciona um pequeno espaço à esquerda
  },

  description: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'justify',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  line: {
    width: '90%',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  galleryText: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    marginRight: 295,
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  galleryImage: {
    width: 150,
    height: 150,
    marginHorizontal: 15,
    borderRadius: 20,
  },
});
