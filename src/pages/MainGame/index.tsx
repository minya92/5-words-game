import React, { memo } from 'react';

import * as Styled from './styled';

interface IMainGameProps {}

const MainGame: React.FC<IMainGameProps> = (props) => {
  return (
    <Styled.Content>
      <Styled.CloseButton onClick={window.close}>Закрыть</Styled.CloseButton>

      <Styled.Game>
        <Styled.Header>
          <Styled.Logo>Logo</Styled.Logo>
          <Styled.Help>Help</Styled.Help>
        </Styled.Header>

        <Styled.Field>
          {Array.from({ length: 5 }).map((key) => Array.from({ length: 5 }).map((key) => <Styled.BaseLetter />))}
        </Styled.Field>

        <Styled.Keyboard>
          {Array.from({ length: 12 }).map((key) =>
            Array.from({ length: 3 }).map((key) => <Styled.BaseKeyButton>Й</Styled.BaseKeyButton>),
          )}
        </Styled.Keyboard>
      </Styled.Game>
    </Styled.Content>
  );
};

export default memo(MainGame);
