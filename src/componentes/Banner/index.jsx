import { styled } from "styled-components";

const FigureEstilizada = styled.figure`
  background-image: ${(props) => `url(${props.$bannerBackground})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`;

const TituloEstilizado = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;
`;

const Banner = ({ texto, bannerBackground }) => {
  return (
    <FigureEstilizada $bannerBackground={bannerBackground}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
  );
};

export default Banner;
