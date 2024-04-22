import React from 'react';
import {
  FaTv,
  FaImage,
  FaDesktop,
  FaGamepad,
  FaBullseye,
  FaChartArea,
  FaMobileAlt,
  FaNewspaper,
  FaPlayCircle,
  FaWaveSquare,
} from 'react-icons/fa';
import laptopImage from '../../../images/notebook2.jpeg';
import createImage from '../../../images/create2.jpeg';

export const products = [
  {
    id: 'push',
    icon: <FaMobileAlt />,
    name: 'Push',
    link: '/native-push',
    content: <img src={laptopImage} />,
  },
  {
    id: 'native',
    icon: <FaDesktop />,
    name: 'Native',
    link: '/native-push',
    content: <img src={createImage} />,
  },
  {
    id: 'display-programatica',
    icon: <FaChartArea />,
    name: 'Display Programática',
    link: '/display-programatica',
    content: <img src={laptopImage} />,
  },
  {
    id: 'audio-digital',
    icon: <FaWaveSquare />,
    name: 'Audio Digital',
    link: '/audio-digital',
    content: <img src={createImage} />,
  },
  {
    id: 'video',
    icon: <FaPlayCircle />,
    name: 'Video',
    link: '/video',
    content: <img src={laptopImage} />,
  },
  {
    id: 'tv-conectada',
    icon: <FaTv />,
    name: 'TV Conectada',
    link: '/tv-conectada',
    content: <img src={createImage} />,
  },
  {
    id: 'in-game',
    icon: <FaGamepad />,
    name: 'In-Game',
    link: '/in-game',
    content: <img src={laptopImage} />,
  },
  {
    id: 'rich-media',
    icon: <FaImage />,
    name: 'Rich Media',
    link: '/rich-media',
    content: <img src={createImage} />,
  },
  {
    id: 'isto-digital',
    icon: <FaNewspaper />,
    name: 'Istoé Digital',
    link: '/isto-digital',
    content: <img src={laptopImage} />,
  },

  {
    id: 'brand-lift',
    icon: <FaBullseye />,
    name: 'Brand Lift',
    link: '/brand-lift',
    content: <img src={createImage} />,
  },
];
