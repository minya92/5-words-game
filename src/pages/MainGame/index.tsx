import React, { memo } from 'react';

import * as Styled from './styled';
import { CloseButton, Field, Header, Help, Keyboard } from './styled';

interface IMainGameProps {}

const MainGame: React.FC<IMainGameProps> = (props) => {
  return (
    <Styled.Content>
      <Styled.CloseButton>Закрыть</Styled.CloseButton>

      <Styled.Game>
        <Styled.Header>
          <Styled.Logo>Logo</Styled.Logo>
          <Styled.Help>Help</Styled.Help>
        </Styled.Header>

        <Styled.Field>Field</Styled.Field>

        <Styled.Keyboard>Keyboard</Styled.Keyboard>
      </Styled.Game>
    </Styled.Content>
  );
};

export default memo(MainGame);
