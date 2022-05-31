import styled from 'styled-components';

const BasePadding = `15px`;

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
  padding: ${BasePadding} ${BasePadding} 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: #252525;

  > * {
    margin-bottom: ${BasePadding};
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: green;
`;

export const Logo = styled.div``;

export const Help = styled.button``;

export const Field = styled.main`
  background: blueviolet;
`;

export const Keyboard = styled.footer`
  background: blue;
`;
