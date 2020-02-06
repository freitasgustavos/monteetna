import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Parallax from "components/Parallax/Parallax.js";

export default function Construction() {
  return (
    <Parallax image={require("assets/img/top.jpg")}>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          style={{ height: "100vh", padding: 10, color: "#4bc0a0" }}
        >
          <img src={require("assets/img/logo.png")} alt="" width={400} />
          <h1>
            Página em <strong>construção</strong>
          </h1>
        </Box>
      </Container>
    </Parallax>
  );
}
