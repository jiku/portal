import React from 'react'
import R from 'ramda'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
  height: 80px;
  display: block;
  position: relative;

  &.inactive {
    opacity: 0.5;
    cursor: default;
  }
`;

const Top = styled.span`
  background-position: 50% -10px;
  bottom: -12px;
  cursor: pointer;
  display: block;
  height: 50px;
  justify-self: stretch;
  left: 0px;
  position: absolute;
  right: 0px;
  text-align: center;
  text-decoration: none solid rgb(0, 247, 255);
  text-shadow: rgb(0, 0, 0) 1px 2px 0px;
  text-size-adjust: 100%;
  text-transform: uppercase;
  top: 0px;
  width: 200px;
  z-index: 2;
  column-rule-color: rgb(0, 247, 255);
  perspective: 1000px;
  perspective-origin: 100px 46px;
  transform-origin: 100px 46px;
  background: rgba(0, 0, 0, 0) url("/halo-add-cart-btn.png") no-repeat scroll 50% -10px / auto padding-box border-box;
  border: 0px none rgb(0, 247, 255);
  font: normal normal normal normal 12px / 16.8px Electrolize;
  outline: rgb(0, 247, 255) none 0px;
  padding: 42px 0px 0px;
  transition: all 0.2s ease 0s;

  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  transform-origin: 0 0;
  :hover:not(.inactive) > &, .active:not(.inactive) > & {
    color: #fff;
    transform: translate(16px, 0);
    transition-delay: 0.2s;
  }

  font-family: 'Electrolize', Arial, Helvetica, sans-serif;
  color: #00f7ff;
  font-size: 12px;
`;

const Bottom = styled.span`
  background-position: 50% -110px;
  bottom: -8px;
  cursor: pointer;
  display: block;
  height: 80px;
  justify-self: stretch;
  left: 5px;
  position: absolute;
  right: -5px;
  text-decoration: none solid rgb(255, 255, 255);
  text-size-adjust: 100%;
  top: 8px;
  width: 200px;
  z-index: 1;
  column-rule-color: rgb(255, 255, 255);
  perspective: 1000px;
  perspective-origin: 100px 40px;
  transform-origin: 100px 40px;
  background: rgba(0, 0, 0, 0) url("/halo-add-cart-btn.png") no-repeat scroll 50% -110px / auto padding-box border-box;
  border: 0px none rgb(255, 255, 255);
  font: normal normal normal normal 12px / 16.8px Electrolize;
  outline: rgb(255, 255, 255) none 0px;
  transition: all 0.2s ease 0s;

  :hover:not(.inactive) > &, .active:not(.inactive) > & {
    transform: translate(11px, -8px);
  }
`;

const Container = children => (<div className="panel panel-default">
  <div className="panel-body">
    { children }
  </div>
</div>)

const Button = props => {
  return (<div>
    <a href={props.url}>
    <Wrapper>
      <Top>{ props.name }</Top>
      <Bottom />
    </Wrapper>
    </a>
  </div>)
}

const Parser = R.compose(Container, Button, R.prop('props'))

export default Parser
