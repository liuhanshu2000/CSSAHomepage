import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
            <li><Link to="/" onClick={()=>props.handleNavbar()}><a>PM</a></Link></li>
            <li><a href="/">学术</a></li>
            <li><a href="/">宣传</a></li>
            <li><a href="/">外联</a></li>
            <li><Link to="/tech" onClick={()=>props.handleNavbar()}><a>技术</a></Link></li>
            <li><a href="/">文体</a></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 9rem;
  left: 0;
  right: 0;
  z-index: 99;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    display: block;
    width: 100%;
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #89aac5;
      border-bottom: 1px solid #89aac5;
    }
  }
`;