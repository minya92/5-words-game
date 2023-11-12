import React, { memo } from 'react';
import styled from 'styled-components';
import SearchPage from './pages/SearchPage';

const StyledInvestments = styled.div`
  color: yellow;
`;

interface IInvestmentsProps {}

const Investments: React.FC<IInvestmentsProps> = (props) => {
  return (
    <StyledInvestments>
      <SearchPage />
    </StyledInvestments>
  );
};

export default memo(Investments);
