import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { MenuBar } from '../components/MenuBar';
import { Products } from '../components/Sections/Products';
import './../style.css';

const pageStyles = {
  color: '#232129',
  maxWidth: '1024px',
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

export const Head: HeadFC = () => <title>Home Page</title>;
