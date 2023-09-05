import React, { memo } from 'react';

import * as Styled from './styled';
import { keyboard } from './dry';

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
          {Array.from({ length: 25 }).map((key) => (
            <Styled.BaseLetter />
          ))}
        </Styled.Field>

        <Styled.Keyboard>
          {keyboard.map(({ label, styleType }) => (
            <Styled.BaseKeyButton styleType={styleType} key={label}>
              {label}
            </Styled.BaseKeyButton>
          ))}
        </Styled.Keyboard>
      </Styled.Game>
    </Styled.Content>
  );
};

export default memo(MainGame);
