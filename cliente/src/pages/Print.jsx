import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Button, Container, Box } from "@material-ui/core";
import { PDFDownloadLink } from "@react-pdf/renderer";
import GafetePDF from "../components/GafetePDF";

export default function Print() {
  const location = useLocation();
  const userData = location.state ? location.state.userData : null;
  const [printing, setPrinting] = useState(false);

  const handlePrint = () => {
    setPrinting(true); // Marcar que estamos imprimiendo
    window.print(); // Imprimir la página actual
    // Después de imprimir, restablecer el estado para mostrar toda la página
    setTimeout(() => {
      setPrinting(false);
    }, 1000); // Esperar 1 segundo antes de restablecer, ajusta según sea necesario
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h3" align="center" gutterBottom>Credencial</Typography>
        <Box mt={4} className={`border-2 border-gray-500 m-10 p-3  ${printing ? 'print-only' : ''}`}>
          <Typography variant="h3" align="center" gutterBottom>{userData.name} {userData.last_name}</Typography>
          {userData ? (
            <div>
              <img src={process.env.PUBLIC_URL + "/images/paz.png"} alt="paz" className="w-30" />
              <Typography variant="body1">Número de Teléfono: {userData.number}</Typography>
              <Typography variant="body1">Correo Electrónico: {userData.email}</Typography>
            </div>
          ) : (
            <Typography variant="body1">No se han recibido datos del usuario.</Typography>
          )}
        </Box>
      </Box>
      <Box mt={4} display="flex" justifyContent="center">
        {userData && (
          <PDFDownloadLink document={<GafetePDF userData={userData} />} fileName="gafete.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Cargando documento..." : <Button variant="contained" color="primary">Descargar PDF</Button>
            }
          </PDFDownloadLink>
        )}
      </Box>
    </Container>
  );
}
