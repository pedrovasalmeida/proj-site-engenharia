import React, { useState } from "react";

import {
  Container,
  LeftMenu,
  DadosAdmin,
  Avatar,
  Name,
  Login,
  Permissao,
  OpcaoMenu,
  Separator,
  Data,
  Adicionar,
  Atualizar,
  Remover,
} from "./styles";

import Add from "../AdicionarEmp";
import List from "../ListarEmp";

const Painel: React.FC = () => {
  const [adicionar, setAdicionar] = useState(false);
  const [atualizar, setAtualizar] = useState(false);
  const [remover, setRemover] = useState(false);
  const [listar, setListar] = useState(true);

  const handleAdicionar = () => {
    setAdicionar(true);
    setAtualizar(false);
    setRemover(false);
    setListar(false);
  };

  const handleAtualizar = () => {
    setAdicionar(false);
    setAtualizar(true);
    setRemover(false);
    setListar(false);
  };

  const handleRemover = () => {
    setAdicionar(false);
    setAtualizar(false);
    setRemover(true);
    setListar(false);
  };
  const handleListar = () => {
    setAdicionar(false);
    setAtualizar(false);
    setRemover(false);
    setListar(true);
  };

  const handleComponentRender = () => {};

  return (
    <Container>
      <LeftMenu>
        <DadosAdmin>
          <Avatar />
          <div>
            <Name>Teste</Name>
            <Login>Login: Teste</Login>
            <Permissao>Admin</Permissao>
          </div>
        </DadosAdmin>

        <OpcaoMenu onClick={() => handleAdicionar()}>
          Adicionar empreendimento
        </OpcaoMenu>

        <Separator />

        <OpcaoMenu onClick={() => handleRemover()}>
          Remover empreendimento
        </OpcaoMenu>

        <Separator />

        <OpcaoMenu onClick={() => handleAtualizar()}>
          Atualizar empreendimento
        </OpcaoMenu>

        <Separator />

        <OpcaoMenu onClick={() => handleListar()}>
          Listar empreendimentos
        </OpcaoMenu>
      </LeftMenu>
      <Data>
        {adicionar && (
          <>
            <span>Adicionar Empreendimento</span>
            <Add />
          </>
        )}
        {remover && (
          <>
            <span>Remover Empreendimento</span>
            <Remover />
          </>
        )}
        {atualizar && (
          <>
            <span>Atualizar Empreendimento</span>
            <Atualizar />
          </>
        )}
        {listar && (
          <>
            <span>Listar Empreendimentos</span>
            <List />
          </>
        )}
      </Data>
    </Container>
  );
};

export default Painel;
