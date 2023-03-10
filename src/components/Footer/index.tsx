import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

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
    <footer>
      <nav>
        <div>
          <p>
            Equipe 6 - Germano Hanna Luana Mariana Noelle Projeto Final M3
            Kenzie Academy Brasil
          </p>
        </div>
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
          <li>
            <Link to='/about'>Sobre nós</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
