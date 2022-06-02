import styled, { css } from 'styled-components';
import { colors } from '../../utils/colors';

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
  color: ${colors.white};
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
  grid-template: repeat(3, 1fr) / repeat(24, 1fr);
  gap: 4px 2px;
  justify-content: end;
  align-items: end;
`;

const yellowBtn = css`
  background: ${colors.yellow};
  color: ${colors.black};

  :active {
    background: ${colors.darkYellow};
    color: ${colors.white};
  }
`;

const greyBtn = css`
  background: ${colors.grey};
  color: ${colors.white};

  :active {
    background: ${colors.darkGray};
    color: ${colors.white};
  }
`;

const whiteBtn = css`
  background: ${colors.white};
  color: ${colors.black};

  :active {
    background: ${colors.lightGrey};
    color: ${colors.white};
  }
`;

const styleTypes: Record<string, any> = {
  marginLeft: css`
    grid-column: 2 / 4;
  `,
  large: css`
    grid-column: span 3;
  `,
  yellow: yellowBtn,
  grey: greyBtn,
  white: whiteBtn,
};

const BaseBtn = styled.div``;

export const BaseLetter = styled.div`
  border: 1px solid ${colors.yellow};
  min-height: 60px;
  min-width: 60px;
  border-radius: 4px;
  color: ${colors.white};
`;

export const BaseKeyButton = styled.button<{ styleType?: string }>`
  border: 1px solid ${colors.grey};
  padding: 10px 4px;
  min-height: 35px;
  min-width: 20px;
  border-radius: 6px;
  background: transparent;
  color: ${colors.white};
  font-size: 18px;
  grid-column: span 2;
  user-select: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  :active {
    transition: 0.1s ease-in-out;
    background: ${colors.darkGray};
    color: ${colors.white};
  }

  ${({ styleType }) => styleType && styleType.split(' ').map((type) => styleTypes[type])}
`;
