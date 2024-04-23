import React from 'react';
import {
  Container,
  ContentContainer,
  DesktopMenu,
  MenuItem,
  MobileContentContainer,
} from './style';
import { products } from './constants';
import { motion } from 'framer-motion';
import { useScreenWidth } from '../../../hooks/useScreenWidth';

type ProductItemProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<{
      id: string;
      icon: React.JSX.Element;
      name: string;
      link: string;
      content: React.JSX.Element;
    } | null>
  >;
  selectedItem?: {
    id: string;
    icon: React.JSX.Element;
    name: string;
    link: string;
    content: React.JSX.Element;
  } | null;
};

const DesktopLayout = ({
  selected,
  setSelected,
  setSelectedItem,
  selectedItem,
}: ProductItemProps) => (
  <>
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
  </>
);

const MobileLayout = ({
  selected,
  setSelected,
  setSelectedItem,
}: ProductItemProps) => (
  <>
    <DesktopMenu>
      {products.map((product, index) => (
        <>
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
          {selected === product.id && (
            <motion.div
              initial={{
                opacity: 0,
                transform: 'translateX(-20px)',
              }}
              animate={{
                opacity: 1,
                transform: 'translateX(0px)',
              }}>
              <MobileContentContainer>{product.content}</MobileContentContainer>
            </motion.div>
          )}
        </>
      ))}
    </DesktopMenu>
  </>
);

export const Products = () => {
  const { breakpoints } = useScreenWidth();
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
      {breakpoints.greaterThan.tablet
        ? DesktopLayout({
            selected,
            setSelected,
            setSelectedItem,
            selectedItem,
          })
        : MobileLayout({ selected, setSelected, setSelectedItem })}
    </Container>
  );
};
