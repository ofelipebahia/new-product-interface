import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { MenuBar } from '../components/MenuBar';
import { Products } from '../components/Sections/Products';
import './../style.css';

const pageStyles = {
  color: '#232129',
  maxWidth: '1200px',
  margin: '0 auto',
  height: '100vh', // remove if needed
  padding: '32px 40px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <MenuBar />
      <div style={{ marginTop: 79 }} />
      <Products />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Conecte-se com sua audiência | ZP Media</title>
    <html lang="pt-BR" />
    <meta
      name="description"
      content="O futuro da mídia está na harmonia entre humanos e tecnologia. Construímos inventários para a sua marca com otimizações diárias na compra de mídia contextual dentro da programática garantida."
    />
    <meta
      content="Conecte-se com sua audiência | ZP Media"
      property="og:title"
    />
    <meta
      content="Conecte-se com sua audiência | ZP Media"
      property="twitter:title"
    />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
  </>
);
