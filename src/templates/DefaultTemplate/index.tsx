import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

interface DefaultTemplateProps {
  children: React.ReactNode;
}

export const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer
        instagramLink='https://www.instagram.com/'
        youtubeLink='https://www.youtube.com/'
        tiktokLink='https://www.tiktok.com/'
      />
    </>
  );
};
