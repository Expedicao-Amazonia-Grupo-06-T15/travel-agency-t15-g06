import styled from 'styled-components';
import backgroundImage from '../../assets/images/landingpagebg.jpg';
import backgroundGastronomy from '../../assets/images/pirarucu.jpg';
import backgroundCulture from '../../assets/images/cultura.jpg';
import macacos from '../../assets/images/macacos.jpg';
import hotels from '../../assets/images/hotels.svg';

export const MainImgContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 208px;
  font-family: var(--font-body);

  h1 {
    color: white;
    font-size: 3.688rem;
    font-weight: 900;
    justify-self: center;
    width: fit-content;
    justify-self: center;
    align-self: center;
    margin-top: 30px;
  }

  span {
    font-size: 0.375rem;
    color: white;
    justify-self: center;
    width: fit-content;
    justify-self: center;
    align-self: center;
    margin-top: -22px;
  }

  button {
    color: white;
    background-color: var(--color-primary);
    width: 163px;
    align-self: center;
    justify-self: center;
    font-size: 0.688rem;
    padding: 20px 0px;
    border-radius: 12px;
    margin-bottom: 19px;
  }

  @media (min-width: 769px) {
    height: 908px;

    h1 {
      font-size: 13.438rem;
      margin-top: 150px;
    }

    span {
      font-size: var(--body-1);
      margin-top: -255px;
    }

    button {
      width: 244px;
      font-size: var(--body-2);
    }
  }
`;

export const MainOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  display: grid;
`;

export const TourSectionWrapper = styled.div`
  margin: 35px 0px 28px 0px;
  display: flex;
  flex-direction: column;
  gap: 19px;
  justify-content: center;
  align-items: center;

  h2 {
    color: var(--color-primary);
    font-weight: 500;
    font-family: var(--font-title);
    font-size: var(--body-1);
    width: 145px;
    line-height: 28.44px;

    span {
      font-weight: 400;
    }
  }

  p {
    font-family: var(--font-body);
    font-size: 0.75rem;
    width: 72.18%;
    text-align: justify;
    line-height: 190%;
    color: var(--grey-100);

    span {
      color: var(--color-primary);
      font-weight: 500;
    }
  }

  @media only screen and (min-width: 769px) {
    display: block;

    margin: 104px 0px 28px 0px;
    gap: 55.71px;
    width: 50%;
    margin-left: 191px;

    h2 {
      color: var(--color-primary);
      font-weight: 500;
      font-family: var(--font-title);
      font-size: var(--title-3);
      width: 100%;
    }

    p {
      font-size: var(--body-3);
      margin: 55.95px 0px 93.29px 0px;
      position: relative;

      ::after {
        content: '';
        display: block;
        position: absolute;
        top: 15px;
        right: -602px;
        width: 500px;
        height: 285.83px;
        background-image: url(${macacos});
        background-size: cover;
        border-radius: 50px;
      }

      span {
        color: var(--color-primary);
        font-weight: 500;
      }
    }
  }
`;

export const GastronomySection = styled.div`
  background-image: url(${backgroundGastronomy});
  background-size: cover;
  background-position: center;
  height: 258px;
  color: white;

  h2 {
    font-family: var(--font-title);
    font-size: var(--body-1);
    width: 77.5%;
    justify-self: center;
    align-self: center;
    line-height: 28.44px;
    font-weight: 500;
  }

  p {
    line-height: 190%;
    font-family: var(--font-body);
    font-size: 0.688rem;
    justify-self: center;
    text-align: justify;
    width: 74.06%;
    color: #f5f5fa;
  }

  span {
    line-height: 190%;
    font-family: var(--font-body);
    font-size: 0.688rem;
    justify-self: center;
    text-align: justify;
    width: 74.06%;
    color: #f5f5fa;

    button {
      background-color: transparent;
      outline: none;
      border: none;
      color: var(--color-primary-2);
      font-weight: bold;
    }
  }

  @media (min-width: 769px) {
    height: 978px;

    h2 {
      font-size: 3.125rem;
      width: 872px;
    }

    p {
      font-size: var(--body-1);
      width: 700px;
    }

    span {
      font-size: var(--body-1);
      width: 700px;
      margin-top: -200px;
    }
  }
`;

export const ThisSectionOverlay = styled.div`
  background-color: rgba(33, 33, 33, 0.6);
  height: 100%;
  display: grid;
`;

export const HotelsSectionWrapper = styled.div`
  margin: 35px 0px 28px 0px;
  display: flex;
  flex-direction: column;
  gap: 19px;
  justify-content: center;
  align-items: center;

  h2 {
    color: var(--color-primary);
    font-weight: 500;
    font-family: var(--font-title);
    font-size: var(--body-1);
    width: 145px;
    line-height: 28.44px;
  }

  p {
    font-family: var(--font-body);
    font-size: 0.75rem;
    width: 72.18%;
    text-align: justify;
    line-height: 190%;
    color: var(--grey-100);
  }

  @media only screen and (min-width: 769px) {
    display: block;

    margin: 104px 0px 28px 0px;
    gap: 55.71px;
    width: 50%;
    margin-left: 191px;

    h2 {
      color: var(--color-primary);
      font-weight: 500;
      font-family: var(--font-title);
      font-size: var(--title-3);
      width: 100%;
    }

    p {
      font-size: var(--body-3);
      margin: 55.95px 0px 93.29px 0px;
      position: relative;

      ::after {
        content: '';
        display: block;
        position: absolute;
        top: 15px;
        right: -602px;
        width: 500px;
        height: 285.83px;
        background-image: url(${hotels});
        background-size: cover;
        border-radius: 50px;
      }

      span {
        color: var(--color-primary);
        font-weight: 500;
      }
    }
  }
`;

export const OurMissionSection = styled.div`
  background-image: url(${backgroundCulture});
  background-size: cover;
  background-position: center;
  height: 390px;
  color: #f5f5fa;

  h2 {
    font-family: var(--font-title);
    font-weight: 500;
    font-size: var(--body-1);
    justify-self: center;
    align-self: center;
  }

  p {
    width: 81.25%;
    font-family: var(--font-body);
    font-size: 0.688rem;
    line-height: 190%;
    text-align: justify;
    justify-self: center;
    align-self: center;
  }
`;

export const ThisSectionOverlay2 = styled.div`
  background-color: rgba(33, 33, 33, 0.4);
  height: 100%;
  display: grid;
`;
