import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import logo from '../../assets/images/logo.svg';
import {
  ContactInfos,
  FooterContainer,
  FooterNavigation,
  LogoAndList,
  MembersContainer,
} from './style';

interface IFooter {
  instagramLink: string;
  youtubeLink: string;
  tiktokLink: string;
}

export const Footer: React.FC<IFooter> = ({
  instagramLink,
  youtubeLink,
  tiktokLink,
}) => {
  return (
    <FooterContainer>
      <FooterNavigation>
        <MembersContainer>
          <p>
            Equipe 6 - Germano Hanna Luana Mariana Noelle Projeto Final M3
            Kenzie Academy Brasil
          </p>
        </MembersContainer>
        <LogoAndList>
          <img src={logo} alt='' />
          <ul>
            <li>
              <a href={instagramLink}>
                <FaInstagram />{' '}
              </a>
            </li>
            <li>
              <a href={youtubeLink}>
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href={tiktokLink}>
                <FaTiktok />
              </a>
            </li>
          </ul>
        </LogoAndList>
        <ContactInfos>
          <span>Contate-nos</span>
          <span>+55 (11) 2234-9876</span>
          <span>expedicaoamazonia@mail.com</span>
        </ContactInfos>
      </FooterNavigation>
    </FooterContainer>
  );
};
