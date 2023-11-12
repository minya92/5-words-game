import styled, { css } from 'styled-components';
import numberToPx from 'utils/styles/numberToPx';
import { loadingAnimationMixin } from 'utils/styles/keyframes';
import React, { CSSProperties, FC, HTMLAttributes, PropsWithChildren, Ref } from 'react';
import makePropsTransient from 'utils/styles/makePropsTransient';
import { blockTransientSet } from 'components/Block/constants';
import { StyledTransient } from '../../types/styles';

export interface BlockTransientProps {
  display?: CSSProperties['display'];
  margin?: CSSProperties['margin'];
  marginTop?: CSSProperties['marginTop'];
  marginRight?: CSSProperties['marginRight'];
  marginBottom?: CSSProperties['marginBottom'];
  marginLeft?: CSSProperties['marginLeft'];
  gridTemplateCols?: string;
  gridTemplateRows?: string;
  gridColsGap?: number;
  gridRowsGap?: number;
  gridTemplateAreas?: string;
  gridArea?: string;
  gap?: CSSProperties['gap'];
  justifyContent?: CSSProperties['justifyContent'];
  justifySelf?: CSSProperties['justifySelf'];
  alignItems?: CSSProperties['alignItems'];
  alignSelf?: CSSProperties['alignSelf'];
  flexDirection?: CSSProperties['flexDirection'];
  flexShrink?: CSSProperties['flexShrink'];
  flexWrap?: CSSProperties['flexWrap'];
  overflow?: string;
  relative?: boolean;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  flex?: boolean | string;
  align?: string;
  padding?: CSSProperties['padding'];
  paddingTop?: CSSProperties['paddingTop'];
  paddingRight?: CSSProperties['paddingRight'];
  paddingBottom?: CSSProperties['paddingBottom'];
  paddingLeft?: CSSProperties['paddingLeft'];
  position?: CSSProperties['position'];
  top?: CSSProperties['top'];
  right?: CSSProperties['right'];
  bottom?: CSSProperties['bottom'];
  left?: CSSProperties['left'];
  inset?: CSSProperties['inset'];
  transform?: CSSProperties['transform'];
  pointerEvents?: CSSProperties['pointerEvents'];
  background?: CSSProperties['background'];
  boxShadow?: CSSProperties['boxShadow'];
  borderRadius?: CSSProperties['borderRadius'];
  visibility?: CSSProperties['visibility'];
  skeleton?: boolean;
  zIndex?: CSSProperties['zIndex'];
  cursor?: CSSProperties['cursor'];
  color?: string | (() => string);
  centerFlex?: boolean;
  borderTop?: CSSProperties['borderTop'];
  borderRight?: CSSProperties['borderRight'];
  borderBottom?: CSSProperties['borderBottom'];
  borderLeft?: CSSProperties['borderLeft'];
}

export type TBlockProps = PropsWithChildren<BlockTransientProps> &
  Pick<
    HTMLAttributes<HTMLDivElement>,
    'onClick' | 'onMouseOver' | 'onMouseOut' | 'style' | 'id' | 'title' | 'className'
  > & {
    forwardedRef?: Ref<HTMLElement>;
    forwardedAs?: any;
  };

const StyledBlock = styled.div<StyledTransient<BlockTransientProps>>`
  ${({
    $flex = false,
    $margin,
    $marginTop,
    $marginRight,
    $marginBottom,
    $marginLeft,
    $gridTemplateCols,
    $gridTemplateRows,
    $gridRowsGap = 0,
    $gridColsGap = 0,
    $gridTemplateAreas,
    $gridArea,
    $gap,
    $justifyContent,
    $justifySelf,
    $alignItems,
    $alignSelf,
    $flexShrink,
    $flexWrap,
    $overflow,
    $padding,
    $paddingTop,
    $paddingRight,
    $paddingBottom,
    $paddingLeft,
    $flexDirection,
    $width,
    $display,
    $height,
    $relative = false,
    $maxWidth,
    $minWidth,
    $align,
    $position,
    $top,
    $right,
    $bottom,
    $left,
    $inset,
    $transform,
    $pointerEvents,
    $background,
    $boxShadow,
    $borderRadius,
    $visibility,
    $skeleton,
    $zIndex,
    $cursor,
    $color,
    $centerFlex,
    $borderTop,
    $borderRight,
    $borderBottom,
    $borderLeft,
  }) => css`
    text-align: ${$align};
    margin: ${numberToPx($margin)};
    margin-top: ${numberToPx($marginTop)};
    margin-right: ${numberToPx($marginRight)};
    margin-bottom: ${numberToPx($marginBottom)};
    margin-left: ${numberToPx($marginLeft)};
    max-width: ${numberToPx($maxWidth)};
    min-width: ${numberToPx($minWidth)};
    width: ${numberToPx($width)};
    height: ${numberToPx($height)};
    padding: ${numberToPx($padding)};
    padding-top: ${numberToPx($paddingTop)};
    padding-right: ${numberToPx($paddingRight)};
    padding-bottom: ${numberToPx($paddingBottom)};
    padding-left: ${numberToPx($paddingLeft)};
    position: ${$relative ? 'relative' : $position};
    top: ${numberToPx($top)};
    right: ${numberToPx($right)};
    bottom: ${numberToPx($bottom)};
    left: ${numberToPx($left)};
    inset: ${numberToPx($inset)};
    transform: ${$transform};
    overflow: ${$overflow};
    pointer-events: ${$pointerEvents};
    background: ${$background};
    box-shadow: ${$boxShadow};
    border-radius: ${numberToPx($borderRadius)};
    visibility: ${$visibility ?? ''};
    z-index: ${$zIndex};
    cursor: ${$cursor};
    color: ${$color};
    ${!!$gap && `gap: ${numberToPx($gap)};`}

    ${(!!$gridTemplateCols || !!$gridTemplateRows || !!$gridTemplateAreas || !!$gridArea) && 'display: grid;'}
    ${!!$gridTemplateCols && `grid-template-columns ${$gridTemplateCols};`}
    ${!!$gridTemplateRows && `grid-template-rows: ${$gridTemplateRows};`}
    ${!!$gridColsGap && `grid-column-gap: ${$gridColsGap}px;`}
    ${!!$gridRowsGap && `grid-row-gap: ${$gridRowsGap}px;`}
    ${!!$gridTemplateAreas && `grid-template-areas: ${$gridTemplateAreas};`}
    ${!!$gridArea && `grid-area: ${$gridArea};`}

    ${!!$display && `display: ${$display};`}
    ${!!$justifyContent && `justify-content: ${$justifyContent};`}
    justify-self: ${$justifySelf};
    ${!!$alignItems && `align-items: ${$alignItems};`}
    align-self: ${$alignSelf};
    flex-shrink: ${$flexShrink};
    flex-wrap: ${$flexWrap};
    ${!!$flexDirection && `flex-direction: ${$flexDirection};`}
    ${$flex && typeof $flex==='string' ? `flex: ${$flex};` : ''}
    ${$flex && 'display: flex;'}
    ${$skeleton ? loadingAnimationMixin : ''}
    ${$centerFlex ? 'display: flex; align-items: center; justify-content: center;' : ''}
    border-top: ${$borderTop};
    border-right: ${$borderRight};
    border-bottom: ${$borderBottom};
    border-left: ${$borderLeft};
  `}
`;

const Block: FC<TBlockProps> = ({ forwardedRef, forwardedAs, ...props }) => {
  return <StyledBlock ref={forwardedRef} as={forwardedAs} {...makePropsTransient(props, blockTransientSet)} />;
};

export const BlockWithDefaults = (defaultProps: TBlockProps) => (props: TBlockProps) =>
  <Block {...defaultProps} {...props} />;

export default Block;
