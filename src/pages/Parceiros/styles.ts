import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 100vw;
  height: auto;

  padding-top: 64px;
  padding-left: 24px;
  padding-bottom: 45px;

  @media only screen and (min-width: 300px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const Title = styled.span`
  width: auto;
  border-bottom: 5px solid ${props => props.theme.colors.light.lightBlue};

  padding-top: 18px;

  font-size: 30px;
  font-weight: bold;

  color: #333;

  text-transform: uppercase;
`;

export const ParceirosDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 30vw;

  margin-top: 15px;

  @media only screen and (max-width: 1639px) {
    width: 40vw;
  }

  @media only screen and (max-width: 1424px) {
    width: 50vw;
  }

  @media only screen and (max-width: 1139px) {
    width: 60vw;
  }

  @media only screen and (max-width: 949px) {
    width: 70vw;
  }

  @media only screen and (max-width: 814px) {
    width: 80vw;
  }
`;

export const Parceiro = styled(motion.img)`
  width: 150px;

  margin: 20px;

  &:hover {
    transform: translateY(-4px);
  }
`;
