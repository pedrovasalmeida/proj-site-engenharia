import React from 'react';

import { Preloader, ThreeDots } from 'react-preloader-icon';
import useAxios from '../../hooks/useAxios';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import {
  Container,
  DivTitle,
  Subtitle,
  DivProjects,
  Project,
  FullImage,
  FloatDiv,
  FloatContent,
  FloatButton,
  LinkRRD,
} from './styles';

interface Empreendimentos {
  id: number;
  nome: string;
  descricao_curta: string;
  banner: string;
  poster: string;
}

const ProjectsMobile: React.FC = () => {
  const { results } = useAxios('/show-all');
  const isArray = results instanceof Array;

  const { width } = useWindowDimensions();

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <Container>
      <DivTitle animate={{ x: 0 }} transition={{ duration: 1.2 }}>
        <Subtitle>NOSSOS EMPREENDIMENTOS</Subtitle>
      </DivTitle>

      <DivProjects>
        {!isArray ? (
          <Preloader
            use={ThreeDots}
            size={120}
            strokeWidth={6}
            strokeColor="#0e6387"
            duration={800}
          />
        ) : (
          results.map(item => {
            return (
              <LinkRRD to={`/empreendimentos/detalhes/${item.id}`} key={item.id}>
                <Project
                  animate={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    y: -7,
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))',
                  }}
                >
                  <FullImage width={width}>
                    <img src={item.banner} alt={item.nome} />
                  </FullImage>
                  <FloatDiv
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 0.25 }}
                  >
                    <FloatContent>
                      <div>
                        <span>{item.descricao_curta}</span>
                        <p>{item.nome}</p>
                      </div>
                    </FloatContent>
                    <FloatButton>
                      <span>Clique aqui para conferir</span>
                    </FloatButton>
                  </FloatDiv>
                </Project>
              </LinkRRD>
            );
          })
        )}
      </DivProjects>
    </Container>
  );
};

export default ProjectsMobile;
