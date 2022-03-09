import React from 'react';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';

const Logo = styled.img`
  display: block;
  width: 85px;
  height: 16px;
  margin: 32px auto;
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Logo src={logo} />
      </div>
    );
  }
}
