import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Container,
  DivLogo,
  Button,
  MenuIcon,
  DivMenu,
  HiddenMenu,
  LinkRRDHiddenMenu,
  HorizontalSeparator,
} from './styles';

import Logo from '../../assets/logo.png';

const HeaderMobile: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const menuOptions = [
    { rota: '/', nome: 'HOME' },
    { rota: '/quem-somos', nome: 'QUEM SOMOS' },
    { rota: '/empreendimentos', nome: 'EMPREENDIMENTOS' },
    { rota: '/contato', nome: 'CONTATO' },
    { rota: '/painel', nome: 'PAINEL' },
  ];

  const handleVisible = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  };

  const handleOutsideClick = () => {
    setIsVisible(false);
  };

  return (
    <>
      <HiddenMenu onClick={() => handleOutsideClick()} isVisible={isVisible}>
        {menuOptions.map((option) => (
          <>
            <LinkRRDHiddenMenu
              to={option.rota}
              selected={option.rota === location.pathname ? true : false}
            >
              <Button
                selected={option.rota === location.pathname ? true : false}
              >
                {option.nome}
              </Button>
            </LinkRRDHiddenMenu>

            <HorizontalSeparator />
          </>
        ))}
      </HiddenMenu>
      <Container>
        <DivLogo animate={{ x: 25 }} transition={{ duration: 1 }}>
          <img src={Logo} alt="Logo" />
        </DivLogo>

        <DivMenu onClick={() => handleVisible()} isVisible={isVisible}>
          <span>{isVisible ? 'Close' : 'Menu'}</span>
          <MenuIcon />
        </DivMenu>
      </Container>
    </>
  );
};

export default HeaderMobile;