import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { lighten, shade } from 'polished';

export const NEXT = 'NEXT';
export const PREV = 'PREV';

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: auto;

  overflow: hidden;

  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

interface IContainerProps {
  sliding: number;
  dir: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 100vw;
  height: calc(100vh - 104px);

  margin-top: 64px;

  cursor: grab;

  transition: transform 1s ease;
  transform: ${props =>
    props.sliding ? `translateX(calc(-100vw * ${props.sliding}))` : `translateX(0%)`};

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Imagem = styled.img`
  height: auto;
  width: auto;

  overflow: hidden;

  object-fit: cover;

  pointer-events: none;
  transition: 0.5s all;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

export const Describe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 40%;
  padding: 30px;
  cursor: grab;

  @media only screen and (max-width: 1000px) {
    width: 90%;
    min-width: 350px;
  }
`;

export const Title = styled.span`
  color: ${props => props.theme.color};
  font-size: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s all;

  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }

  &:hover {
    transition: 0.5s all;
    color: ${props => props.theme.primary};
  }
`;

export const CreatedBy = styled.span`
  color: ${props => props.theme.color};
  margin-top: 50px;

  b {
    cursor: pointer;
    transition: 0.5s all;

    &:hover {
      transition: 0.5s all;
      color: ${props => props.theme.primary};
    }
  }
`;

export const ListTag = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Tag = styled.span`
  color: ${props => props.theme.background};
  background-color: ${props => props.theme.color};
  padding: 5px 20px;
  font-weight: 600;
  font-size: 12px;
  border-radius: 50px;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.5s all;

  &:hover {
    transition: 0.5s all;
    background-color: ${props => props.theme.primary};
  }
`;

export const ButtonNext = styled.span`
  display: flex;
  position: absolute;
  right: 20px;
  font-size: 50px;
  color: ${props => props.theme.color}5;
  padding: 0;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
    right: 10px;
  }

  .icon {
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.color}8;
    }
  }
`;

export const ButtonBack = styled.span`
  display: flex;
  position: absolute;
  left: 20px;
  font-size: 50px;
  color: ${props => props.theme.color}5;
  padding: 0;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
    left: 10px;
  }

  .icon {
    cursor: pointer;
  }

  &:hover {
    color: ${props => props.theme.color}8;
  }
`;

export const FloatDiv = styled.div`
  position: absolute;
  left: 60px;
  bottom: 80px;

  min-height: 128px;
  height: auto;
  width: 400px;

  z-index: 3;

  @media (max-width: 474px) {
    width: 300px;

    left: 16px;
    bottom: 90px;
  }
`;

export const FloatContent = styled.div`
  display: flex;

  height: 100%;
  flex-direction: column;

  background-color: rgba(0, 0, 0, 0.65);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  > div {
    margin: 16px 16px;
  }

  > div span:first-child {
    margin: 0;
    padding-top: 8px;
    text-transform: uppercase;
    font-size: 14px;
    color: #fff;
  }

  > div span {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #fff;
    text-shadow: 0px 0px 2px black;
    width: 80%;
    height: auto;
  }

  > div p {
    margin: 0;
    padding: 6px 0;
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => lighten(0.1, props.theme.colors.light.lightBlue)};
    text-shadow: 0px 0px 1px ${props => shade(0.6, props.theme.colors.light.lightBlue)};
  }

  @media (max-width: 663px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      font-size: 14px;
    }

    > div span {
      font-size: 14px;
    }

    > div p {
      font-size: 26px;
    }
  }

  @media (max-width: 414px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      font-size: 14px;
    }

    > div span {
      font-size: 14px;
    }

    > div p {
      font-size: 26px;
    }
  }

  @media (max-width: 411px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      font-size: 14px;
    }

    > div span {
      font-size: 14px;
    }

    > div p {
      font-size: 26px;
    }
  }

  @media (max-width: 360px) {
    > div {
      margin: 2px 6px 4px 6px;
    }

    > div span:first-child {
      font-size: 14px;
    }

    > div span {
      font-size: 14px;
    }

    > div p {
      font-size: 22px;
    }
  }
`;

export const FloatButton = styled.button`
  width: 100%;
  height: 32px;

  background-color: ${props => props.theme.colors.light.lightBlue};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  margin: 4px 0 0 0;

  transition: all 300ms ease-in-out;

  &:hover {
    background-color: ${props => shade(0.4, props.theme.colors.light.lightBlue)};
  }

  &:focus {
    outline: 0;
  }

  > span {
    color: #f5f5f5;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

export const DivIcons = styled.div`
  position: absolute;
  bottom: 30px;
  right: 0;
`;

export const LeftArrow = styled(IoIosArrowBack)`
  color: #fff;
  font-size: 32px;

  width: 24px;

  transition: all 300ms ease-in-out;

  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.light.lightBlue};
  }
`;

export const RightArrow = styled(IoIosArrowForward)`
  color: #fff;
  font-size: 32px;

  width: 24px;

  transition: all 300ms ease-in-out;

  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.light.lightBlue};
  }
`;
