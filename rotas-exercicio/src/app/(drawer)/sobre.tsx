import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function Sobre() {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={styles.container}
    >
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.smallTitle}>CONHEÇA MAIS</Text>

        <Text style={styles.title}>Sobre o MPB</Text>

        <View style={styles.line} />

        <Text style={styles.subtitle}>
          A história da Música Popular Brasileira
        </Text>
      </View>

      {/* Frase de destaque */}
      <View style={styles.highlight}>
        <Text style={styles.quote}>
          "A MPB é feita de encontros, misturas e histórias."
        </Text>
      </View>

      {/* O que é MPB */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.number}>
            <Text style={styles.numberText}>01</Text>
          </View>

          <Text style={styles.cardTitle}>O que é MPB?</Text>
        </View>

        <Text style={styles.text}>
          A Música Popular Brasileira, conhecida como MPB, é um
          gênero musical que reúne diferentes influências e
          estilos presentes na cultura brasileira.
        </Text>

        <Text style={styles.text}>
          Suas raízes estão relacionadas a diversos ritmos
          brasileiros, como o samba, a bossa nova, o baião e
          outros estilos que ajudaram a construir a identidade
          musical do país.
        </Text>
      </View>

      {/* História */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.number}>
            <Text style={styles.numberText}>02</Text>
          </View>

          <Text style={styles.cardTitle}>Uma história de misturas</Text>
        </View>

        <Text style={styles.text}>
          A MPB ganhou força principalmente a partir da década
          de 1960, quando novos artistas começaram a combinar
          diferentes elementos da música brasileira.
        </Text>

        <Text style={styles.text}>
          Com o passar dos anos, a MPB continuou se transformando,
          incorporando novas sonoridades e refletindo diferentes
          momentos da sociedade brasileira.
        </Text>
      </View>

      {/* Artistas */}
      <View style={styles.artistSection}>
        <Text style={styles.sectionTitle}>Grandes nomes</Text>

        <Text style={styles.sectionText}>
          Muitos artistas ajudaram a construir a história da MPB.
          Entre eles estão nomes como Rita Lee, Elis Regina,
          Djavan, Caetano Veloso, Cazuza, Gal Costa e muitos
          outros.
        </Text>

        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      {/* Final */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>A música continua...</Text>

        <Text style={styles.footerText}>
          A MPB continua sendo transformada por novos artistas,
          mantendo viva a diversidade e a criatividade da música
          brasileira.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#f4f1f5",
  },

  container: {
    padding: 22,
    paddingBottom: 40,
     backgroundColor: "#f8f5b7"
  },

  header: {
    paddingTop: 20,
    marginBottom: 25,
  },

  smallTitle: {
    fontSize: 13,
    fontFamily: "CaacupeOne_400Regular",
    letterSpacing: 2,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },

  title: {
    fontSize: 36,
    fontFamily: "CaacupeOne_400Regular",
    color: "#000000",
  },

  line: {
    width: 55,
    height: 4,
    backgroundColor: "#10407e",
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 5,
  },

  subtitle: {
    fontSize: 16,
    fontFamily: "CaacupeOne_400Regular",
    color: "#100c0c",
  },

  highlight: {
    backgroundColor: "#076481",
    borderRadius: 18,
    padding: 22,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },

  quote: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    lineHeight: 27,
  },

  card: {
    backgroundColor: "#d3e1f4",
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  number: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#040962",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  numberText: {
    color: "#398fcd",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "CaacupeOne_400Regular",
  },

  cardTitle: {
    flex: 1,
    fontFamily: "CaacupeOne_400Regular",
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    
  },

  text: {
    fontSize: 16,
    fontFamily: "CaacupeOne_400Regular",
    color: "#000000",
    lineHeight: 25,
    marginBottom: 12,
  },

  artistSection: {
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },

  sectionText: {
    fontSize: 16,
    fontFamily: "CaacupeOne_400Regular",
    color: "#000000",
    lineHeight: 25,
  },

  dots: {
    flexDirection: "row",
    marginTop: 18,
    gap: 7,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#3f7bc1",
  },

  footer: {
    backgroundColor: "#3f7bc1",
    borderRadius: 18,
    padding: 22,
  },

  footerTitle: {
    fontFamily: "CaacupeOne_400Regular",
    color: "#fff",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 10,
  },

  footerText: {
    fontFamily: "CaacupeOne_400Regular",
    color: "#ddd",
    fontSize: 15,
    lineHeight: 23,
  },
});