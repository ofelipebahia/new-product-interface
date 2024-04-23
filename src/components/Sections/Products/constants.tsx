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
    content: <img alt="alternative image" src={laptopImage} />,
  },
  {
    id: 'native',
    icon: <FaDesktop />,
    name: 'Native',
    link: '/native-push',
    content: <img alt="alternative image" src={createImage} />,
  },
  {
    id: 'display-programatica',
    icon: <FaChartArea />,
    name: 'Display Programática',
    link: '/display-programatica',
    content: <img alt="alternative image" src={laptopImage} />,
  },
  {
    id: 'audio-digital',
    icon: <FaWaveSquare />,
    name: 'Audio Digital',
    link: '/audio-digital',
    content: <img alt="alternative image" src={createImage} />,
  },
  {
    id: 'video',
    icon: <FaPlayCircle />,
    name: 'Video',
    link: '/video',
    content: <img alt="alternative image" src={laptopImage} />,
  },
  {
    id: 'tv-conectada',
    icon: <FaTv />,
    name: 'TV Conectada',
    link: '/tv-conectada',
    content: <img alt="alternative image" src={createImage} />,
  },
  {
    id: 'in-game',
    icon: <FaGamepad />,
    name: 'In-Game',
    link: '/in-game',
    content: <img alt="alternative image" src={laptopImage} />,
  },
  {
    id: 'rich-media',
    icon: <FaImage />,
    name: 'Rich Media',
    link: '/rich-media',
    content: <img alt="alternative image" src={createImage} />,
  },
  {
    id: 'isto-digital',
    icon: <FaNewspaper />,
    name: 'Istoé Digital',
    link: '/isto-digital',
    content: <img alt="alternative image" src={laptopImage} />,
  },

  {
    id: 'brand-lift',
    icon: <FaBullseye />,
    name: 'Brand Lift',
    link: '/brand-lift',
    content: <img alt="alternative image" src={createImage} />,
  },
];
