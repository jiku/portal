import React from 'react'
import R from 'ramda'
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  position: relative;
  width: auto;
  height: auto;
  padding: 3em 3em 1em 3em;

  cursor: pointer;

  &.inactive {
    opacity: 0.5;
    cursor: default;
  }
`;

const Text = styled.span`
  z-index: 3;
  text-align: center;
  text-shadow: rgba(0, 0, 0, .3) 0 0 .05em;
  text-size-adjust: 100%;
  text-transform: uppercase;
  // font: 1em 'jikutypeVector';
  // font: 1em stage01;
  font: 1em Electrolize;
  transition: all 0.2s ease 0s;

  perspective: 1000px;
  perspective-origin: 100px 46px;
  transform-origin: 100px 46px;

  transform-origin: 0 0;
  :hover:not(.inactive) > &, .active:not(.inactive) > & {
    color: #ff7;
    text-shadow: rgba(0, 0, 0, 1) 0 0 .05em;
    transform: translate(0, -9px);
    transition-delay: 0.1s;
  }

  color: #fff;

`;

const Top = styled.span`
  position: absolute;
  width: 100%;
  z-index: 2;

  :hover:not(.inactive) > &, .active:not(.inactive) > & {
    transform: translate(0, -8px);
  }
`;

const Bottom = styled.span`
  position: absolute;
  width: 100%;
  z-index: 1;

  perspective: 1000px;
  perspective-origin: 100px 40px;
  transform-origin: 100px 40px;
  transition: all 0.2s ease 0s;

  :hover:not(.inactive) > &, .active:not(.inactive) > & {
    transform: translate(11px, -8px);
  }
`;

const StyleTopSVG = styled.g`
  fill-opacity: 0.3;
  fill: #eee;
  fill-rule: nonzero;
  stroke-opacity: 0.6;
  stroke: #777;
  stroke-width: 1;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-miterlimit: 10;
  stroke-dashoffset: 0;
  mix-blend-mode: normal;
`;

const StyleBottomSVG = styled.g`
  fill-opacity: 0.1;
  fill: #777;
  fill-rule: nonzero;
  stroke-opacity: 0.3;
  stroke: #333;
  stroke-width: 1;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-miterlimit: 10;
  stroke-dashoffset: 0;
  mix-blend-mode: normal;
`;

const Container = children => (<div className="panel panel-default">
  <div className="panel-body">
    { children }
  </div>
</div>)

/*
const Button = ({name, url, button}) => {
    console.log(name, url, button)
  return (<div>
    <a href={url}>{name}</a>
    {button}
  </div>)
}
*/

const TopSVG = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-500,-100,1000,200">
    <StyleTopSVG>
      <path d="M-306.4,-95.2c3.2,-2.4 10.4,-4.8 14.4,-4.8l784,0c4,0 8,4 8,8l0,34c0,4 -3.2,10.4 -6.4,12.8l-187.2,140.4c-3.2,2.4 -10.4,4.8 -14.4,4.8l-784,0c-4,0 -8,-4 -8,-8l0,-34c0,-4 3.2,-10.4 6.4,-12.8z" />
    </StyleTopSVG>
  </svg>
)

const BottomSVG = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-500,-100,1000,200">
    <StyleBottomSVG>
      <path d="M-306.4,-95.2c3.2,-2.4 10.4,-4.8 14.4,-4.8l784,0c4,0 8,4 8,8l0,34c0,4 -3.2,10.4 -6.4,12.8l-187.2,140.4c-3.2,2.4 -10.4,4.8 -14.4,4.8l-784,0c-4,0 -8,-4 -8,-8l0,-34c0,-4 3.2,-10.4 6.4,-12.8z" />
    </StyleBottomSVG>
  </svg>
)

const Button = ({ name, url }) => (<div>
  <a href={url}>
  <Wrapper>
    <Text>
      { name }
    </Text>
    <Top>
      <TopSVG />
    </Top>
    <Bottom>
      <BottomSVG />
    </Bottom>
  </Wrapper>
  </a>
</div>)

const Parser = R.compose(Container, Button, R.prop('props'))

export default Parser
