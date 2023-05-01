import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const baseUrl = 'https://api.otaviolube.com'

export default function CardFilme({ filme }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: baseUrl + filme.poster.data.attributes.url }}
      />
      <Text style={styles.title}>{filme.titulo}</Text>
      <Text style={styles.sinopse}>Sinopse: {filme.sinopse}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8D3B6',
    margin: 15,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: '200px',
    width: '150px',
    resizeMode: 'cover'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10
  },
  sinopse: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 10
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#3a4f35',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e9f5e6'
  }
})
