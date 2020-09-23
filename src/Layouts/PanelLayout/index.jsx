import React from 'react';

import SideMenu from 'Components/SideMenu';

import { Container, Content } from './styles';

export default function PanelLayout({ children }) {
  return (
    <Container>
      <SideMenu />
      <Content>
        { children }
      </Content>
    </Container>
  );
};
