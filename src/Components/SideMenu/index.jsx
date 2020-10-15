import React, { useState } from 'react';

import Logo from 'Components/Icons/Logo.jsx';
import Plus from 'Components/Icons/Plus.jsx';

import {
  Container,
  ContentWrapper,
  ButtonWrapper,
  Button,
  Divisor,
  LogoBox,
  ActionIcon,
  ServerIcon
} from './styles';

export default function SideMenu() {
  const [ active, setActive ] = useState('0-0');

  const src = 'https://cdn.discordapp.com/icons/670106577533141002/c6fb757a7cbebbff63a180cd23782421.png?size=128';

  const menuItens = [{
    items: [
      {
        content: <Logo width="28" />,
        link: '',
      }
    ]
  }, {
    items: [
      {
        serverImg: src,
        link: '',
      },{
        serverImg: src,
        link: '',
      },{
        serverImg: src,
        link: '',
      },{
        content: <Plus width="24" />,
        link: '',
      }
    ],
  }, {
    items: [
      {
        content: <Logo width="28" />,
        link: '',
      }
    ],
  }];

  return (
    <Container>
      {menuItens.map(({ items }, index1) => (
        <ContentWrapper key={`menu-group-${index1}`}>
          {items.map(({ content, link, serverImg }, index2) => (
            <ButtonWrapper
              key={`buttom-item-${index2}`}
              active={active === `${index1}-${index2}`}
              onClick={() => setActive(`${index1}-${index2}`)}
            >
              <Button background={serverImg}>
                {content && content}
              </Button>
              <span />
            </ButtonWrapper>
          ))}
        </ContentWrapper>
      ))}
    </Container>
  );
};
