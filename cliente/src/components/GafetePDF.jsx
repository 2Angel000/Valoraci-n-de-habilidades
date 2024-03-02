import React from "react";
import { Page, Document, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

// Estilos para el documento PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  card: {
    margin: 20,
    width: 400, 
    height: 460,
    padding: 4,
    borderWidth: 2,
    borderColor: "#2D2D2D",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  credential:{
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  imageContainer: {
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 300, 
    height: 300, 
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 4,
  },
});

const GafetePDF = ({ userData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.credential}>Credencial Oficial</Text>
        <Text style={styles.header}>{userData.name} {userData.last_name}</Text>
        {userData ? (
          <View>
            <View style={styles.imageContainer}>
              <Image src={process.env.PUBLIC_URL + "/images/paz.png"} style={styles.image} />
            </View>
            <Text style={styles.text}>Número de Teléfono: {userData.number}</Text>
            <Text style={styles.text}>Correo Electrónico: {userData.email}</Text>
          </View>
        ) : (
          <Text style={styles.text}>No se han recibido datos del usuario.</Text>
        )}
      </View>
    </Page>
  </Document>
);

export default GafetePDF;
