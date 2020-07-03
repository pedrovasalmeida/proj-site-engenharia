import React from "react";

/** Componentes */
import Header from "../../components/Header";
import Infos from "../../components/Infos";

import { Container } from "./styles";

const QuemSomos: React.FC = () => {
  return (
    <Container>
      <Header />
      <Infos />
    </Container>
  );
};

export default QuemSomos;
