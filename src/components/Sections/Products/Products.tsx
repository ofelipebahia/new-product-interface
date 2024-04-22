import React from 'react';
import { Container, ContentContainer, DesktopMenu, MenuItem } from './style';
import { products } from './constants';
import { motion } from 'framer-motion';

export const Products = () => {
  const [selected, setSelected] = React.useState<string>('push');
  const [selectedItem, setSelectedItem] = React.useState<{
    id: string;
    icon: React.JSX.Element;
    name: string;
    link: string;
    content: React.JSX.Element;
  } | null>(products[0]);

  return (
    <Container>
      <DesktopMenu>
        {products.map((product, index) => (
          <MenuItem
            selected={selected === product.id}
            onClick={() => {
              setSelected(product.id);
              setSelectedItem(null);
              setTimeout(() => setSelectedItem(product), 200);
            }}
            key={index}>
            {product.icon}
            <p>{product.name}</p>
          </MenuItem>
        ))}
      </DesktopMenu>
      {selectedItem?.content && (
        <motion.div
          initial={{
            opacity: 0,
            transform: 'translateX(-20px)',
          }}
          animate={{
            opacity: 1,
            transform: 'translateX(0px)',
          }}>
          <ContentContainer>{selectedItem.content}</ContentContainer>
        </motion.div>
      )}
    </Container>
  );
};
