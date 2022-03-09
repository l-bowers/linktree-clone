import PropTypes from 'prop-types';
import React from 'react';
import picture from '../../assets/profile-picture.png';
import styled from 'styled-components';

import ProfilePicture from '../ProfilePicture/ProfilePicture';

const StyledDiv = styled.div`
  display: block;
  text-align: center;
`;

const UserHandle = styled.p`
  display: inline-block;
  margin: 8px 0;
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.32px;
  color: #263238;
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledDiv>
        <ProfilePicture pictureUrl={picture} />
        <UserHandle>{this.props.userHandle}</UserHandle>
      </StyledDiv>
    );
  }
}

Header.propTypes = {
  userHandle: PropTypes.string.isRequired,
};
