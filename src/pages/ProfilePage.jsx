import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const StyledDiv = styled.div`
  display: block;
  text-align: center;
`;

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledDiv>
        <Header userHandle="@yourname" />
        <Footer />
      </StyledDiv>
    );
  }
}
