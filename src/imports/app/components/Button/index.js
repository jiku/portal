import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { withRouter } from 'react-router'
import Svg, { G, Path } from 'react-native-svg'
// import Svg, { Path, Circle } from '/Users/test/Documents/dev/Projects/jiku/Portal/native/node_modules/react-native-svg/index'
import styled from 'styled-components/native'
import R from 'ramda'

const Group = ({ children, ...props }) =>
  <G
    fillOpacity="0.3"
    fill="#eee"
    fillRule="nonzero"
    strokeOpacity="0.6"
    stroke="#777"
    strokeWidth="1"
    strokeLineCap="butt"
    strokeLineJoin="miter"
    strokeMiterLimit="10"
    strokeDashOffset="0"
    mixBlendMode="normal"
    {...props}>
    {children}
  </G>

const TopSVG = () =>
  <View style={[styles.layer, styles.top]}>
    <Svg style={[styles.svg, styles.svgTop]}>
      <Group>
        <Path
          d="M 0 25 Q 25 0 50 0 L 187.5 0 Q 200 6.25 200 12.5 L 200 25 Q 175 50 150 50 L 12.5 50 Q 0 43.75 0 37.5 Z"/>
      </Group>
    </Svg>
  </View>

const BottomSVG = () =>
  <View style={[styles.layer, styles.top]}>
    <Svg style={styles.svg}>
      <Group
        fillOpacity="0.1"
        fill="#777"
        strokeOpacity="0.3"
        stroke="#333">
        <Path
        d="M 0 25 Q 25 0 50 0 L 187.5 0 Q 200 6.25 200 12.5 L 200 25 Q 175 50 150 50 L 12.5 50 Q 0 43.75 0 37.5 Z" />
      </Group>
    </Svg>
  </View>

const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-vertical: 30px;

  /*
  cursor: pointer;

  &.inactive {
    opacity: 0.5;
    cursor: default;
  }
  */`
const Title = styled.View`
  position: absolute;
  z-index: 3;
  
  /*
  perspective: 1000px;
  perspective-origin: 100px 46px;
  transform-origin: 100px 46px; 
  transform-origin: 0 0;
  :hover:not(.inactive) > &, .active:not(.inactive) > & {
    transform: translate(0, -9px);
    transition-delay: 0.1s;
  }
  */`
const Text = styled.Text`
  font-family: 'jikutype-001-Vector';
  text-align: center;
  font-size: 3;
  color: 'rgba(255, 255, 255, 1)';
  text-shadow-radius: 2;
  text-shadow-offset: { width: 1, height: 1 };
  text-shadow-color: 'rgba(0, 0, 0, .3)';

  /*
  font: 1em stage01;
  font: 1em Electrolize;
  text-size-adjust: 100%;
  text-transform: uppercase;
  */

  /*
  transition: all 0.2s ease 0s;
  :hover:not(.inactive) > &, .active:not(.inactive) > & {
    color: 'rgba(119, 255, 153, 1)';
    text-shadow-color: 'rgba(0, 0, 0, 1)';
    transition-delay: 0.1s;
  }
  */`
const Top = styled(TopSVG)`
  position: absolute;
  z-index: 2;

  /*
  width: 100%;

  :hover:not(.inactive) > &, .active:not(.inactive) > & {
    transform: translate(0, -8px);
  }
  */`
const Bottom = styled(BottomSVG)`
  position: absolute;
  z-index: 1;

  /*
  width: 100%;
  perspective: 1000px;
  perspective-origin: 100px 40px;
  transform-origin: 100px 40px;
  transition: all 0.2s ease 0s;

  :hover:not(.inactive) > &, .active:not(.inactive) > & {
    transform: translate(11px, -8px);
  }
  */`

const styles = StyleSheet.create({
  title: {
    textShadowRadius: 2,
    textShadowOffset: { width: 1, height: 1 },
    textShadowColor: `rgba(0, 0, 0, .3)`
  },
  center: {
    display: `flex`, justifyContent: `center`, alignContent: `center`
  },
  center2: {
    display: `flex`, justifyContent: `center`, alignContent: `center`
  },
  layer: {
    position: `absolute`
  },
  svgTop: {
    top: 7,
    width: 220,
    height: 55
  },
  svg: {
    width: 200,
    height: 50
  },
  top: { 
    zIndex: 2//, padding: 10
  },
  bottom: { // TODO: Add animation somehow, with(out) s-c/n
    zIndex: 1//, padding: 5
  },
})

const clickHandler = (history, path) => e => history.push(path)

const Button = withRouter(({ name, url, history }) =>
  <TouchableOpacity onPress={clickHandler(history, url)}>
    <Wrapper>
      <Title><Text style={[ styles.title ]}>{ name.toLowerCase() }</Text></Title>
      <Top/>
      <Bottom/>
    </Wrapper>
  </TouchableOpacity>)

const Parser = R.compose(Button, R.prop('props'))

export default Parser
