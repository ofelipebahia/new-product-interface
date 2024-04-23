import React, { useEffect } from 'react';
import {
  Nav,
  MenuPageContainer,
  ListMenu,
  ListOption,
  NavContainer,
  PageImages,
} from './style';
import logo from '../../images/logo.svg';
import linkedin from '../../images/linkedin.svg';
import whatsapp from '../../images/whatsapp.svg';
import email from '../../images/email.svg';
import lgpdSelo from '../../images/lgpd-selo.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import FocusTrap from 'focus-trap-react';
import Hamburger from 'hamburger-react';

const MenuPage = () => {
  const { breakpoints } = useScreenWidth();

  return (
    <MenuPageContainer>
      <PageImages>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(-20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ delay: 0.2 }}
            exit={{ opacity: 0 }}>
            <div style={{ display: 'flex', gap: 16 }}>
              <a
                href="https://www.linkedin.com/in/zpmedia"
                target="_blank"
                rel="noreferrer">
                <img src={linkedin} height={24} alt="Linkedin" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5511982847260"
                target="_blank"
                rel="noreferrer">
                <img src={whatsapp} height={24} alt="Whatsapp" />
              </a>
              <a
                href="mailto:contact@zpmedia.com.br"
                target="_blank"
                rel="noreferrer">
                <img src={email} height={24} alt="Email" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ delay: 0.5 }}>
            <img
              src={lgpdSelo}
              height={breakpoints.greaterThan.tablet ? 122.27 : 97.81}
            />
          </motion.div>
        </AnimatePresence>
      </PageImages>
      <div>
        <ListMenu>
          <AnimatePresence>
            {[
              'Cases e Conexões',
              'Formatos Criativos',
              'Programação é commodity?',
              'Método HFO',
              'Contato',
            ].map((item, index) => (
              <ListOption
                initial={{ opacity: 0, transform: 'translateX(-20px)' }}
                animate={{ opacity: 1, transform: 'translateX(0px)' }}
                transition={{ delay: index * 0.1 }}
                exit={{ opacity: 0 }}
                key={item}>
                {item}
              </ListOption>
            ))}
          </AnimatePresence>
        </ListMenu>
      </div>
    </MenuPageContainer>
  );
};

export const MenuBar = () => {
  const [isOpen, setOpen] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <Nav isOpen={isOpen}>
      <FocusTrap active={isOpen}>
        <NavContainer isOpen={isOpen}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <img src={logo} className="logo" height={35.7} />
            <Hamburger
              color={isOpen ? '#fff' : '#000'}
              hideOutline={false}
              onToggle={() => {
                setOpen(!isOpen);
              }}
            />
          </div>

          {isOpen && <MenuPage />}
        </NavContainer>
      </FocusTrap>
    </Nav>
  );
};
