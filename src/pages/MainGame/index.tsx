import React, { memo } from 'react';

import * as Styled from './styled';
import { Content } from './styled';

interface IMainGameProps {
}

const MainGame: React.FC<IMainGameProps> = (props) => {

    return (
        <Styled.Content>
            123
        </Styled.Content>
    );
};

export default memo(MainGame);
