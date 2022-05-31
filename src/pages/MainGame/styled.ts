import styled from 'styled-components';

const BasePadding = `20px`;

export const Content = styled.div`
  height: 100%;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  align-self: flex-start;
  margin: 10px ${BasePadding};
  background: transparent;
  font-weight: 500;
  color: white;
  border: none;

  :focus,
  :active,
  :hover {
    color: #858585;
    transition: 0.1s ease-in-out;
  }
`;

export const Game = styled.div`
  flex: 1;
  padding: ${BasePadding} ${BasePadding} 10px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: #141414;

  > * {
    margin-bottom: ${BasePadding};
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: blueviolet;
`;

export const Logo = styled.div``;

export const Help = styled.button``;

export const Field = styled.main`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 6px;
  grid-row-gap: 6px;
`;

export const Keyboard = styled.footer`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 4px;
`;

export const BaseLetter = styled.div`
  border: 1px solid #fade56;
  min-height: 60px;
  min-width: 60px;
  border-radius: 4px;
`;

export const BaseKeyButton = styled.button`
  border: 1px solid #5f5f5f;
  padding: 14px 4px;
  min-height: 35px;
  min-width: 20px;
  border-radius: 6px;
  background: transparent;
  color: white;
  font-size: 14px;

  :focus,
  :active,
  :hover {
    background: #262626;
    transition: 0.1s ease-in-out;
  }
`;
