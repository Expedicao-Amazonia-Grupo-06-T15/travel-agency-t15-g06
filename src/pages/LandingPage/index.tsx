import {
  GastronomySection,
  HotelsSectionWrapper,
  MainImgContainer,
  MainOverlay,
  OurMissionSection,
  ThisSectionOverlay,
  ThisSectionOverlay2,
  TourSectionWrapper,
} from './style';

export const LandingPage = () => {
  return (
    <div>
      <MainImgContainer>
        <MainOverlay>
          <h1>Aventura</h1>
          <span>
            Comece agora a sua jornada pelas belezas e sabores exuberantes da
            amazônia
          </span>
          <button>Reservar um pacote</button>
        </MainOverlay>
      </MainImgContainer>

      <TourSectionWrapper>
        <h2>
          Jungle Tour <span>e muito mais</span>
        </h2>
        <p>
          A Expedição Amazônia te leva para conhecer a maravilhosa natureza
          tropical, suas cachoeiras, rios e uma fauna e flora abundantes e
          coloridas. Acompanhado de nossos guias experientes e apaixonados pela
          natureza, você irá se aventurar por trilhas ecológicas, atravessar
          rios em <span>catamarãs</span> e nadar em <span>igarapés</span>{' '}
          naturais, e ao fim do dia observar o singular pôr-do-sol amazônico. Se
          você é um amante da natureza e busca um passeio encantador e
          emocionante, não perca a chance de viver essa experiência
          inesquecível!
        </p>
      </TourSectionWrapper>

      <GastronomySection>
        <ThisSectionOverlay>
          <h2>Gastronomia rica de cores e sabores</h2>
          <p>
            Não deixe de experimentar os mais deliciosos pratos típicos como
            Pirarucu a casaca, tacacá e açaí na tigela, e as nossas frutas
            exóticas!
          </p>
          <span>
            Conheça mais sobre a cozinha amazônica em nosso{' '}
            <button>blog {'->'}</button>
          </span>
        </ThisSectionOverlay>
      </GastronomySection>

      <HotelsSectionWrapper>
        <h2>Hospedagem</h2>
        <p>
          Conforto e tranquilidade em meio à natureza. Para sua comodidade,
          nossos hotéis parceiros contam com equipes atenciosas e prestativas,
          prontas para atender todas as suas necessidades durante a sua estadia
          e de sua família. Com arquiteturas modernas que integram o
          ecossistema, todas as nossas acomodações são equipadas com ar
          condicionado, frigobar, TV e banheiro privativo. Além disso, café da
          manhã típico amazônico é servido todos os dias gratuitamente. Venha se
          hospedar conosco e viva momentos inesquecíveis na Amazônia!
        </p>
      </HotelsSectionWrapper>

      <OurMissionSection>
        <ThisSectionOverlay2>
          <h2>Nossa missão</h2>
          <p>
            Acreditamos que o turismo comunitário é uma ferramenta poderosa para
            a promoção do desenvolvimento sustentável, quando feito com respeito
            e responsabilidade. Nossa missão é valorizar as comunidades locais,
            preservar a cultura e a biodiversidade da região, e proporcionar aos
            nossos visitantes experiências únicas de contato com a natureza e
            com as tradições amazônicas, sua arte, música e culinária.
            Proporcionamos uma outra maneira de viajar: viajar com propósito,
            viver experiências transformadoras, e deixar um legado positivo para
            as futuras gerações.
          </p>
        </ThisSectionOverlay2>
      </OurMissionSection>
    </div>
  );
};
