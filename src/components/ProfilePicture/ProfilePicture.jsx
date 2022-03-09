import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Picture = styled.img`
  display: block;
  width: 64px;
  height: 64px;
  margin: 0 auto;
`;

export default class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Picture src={this.props.pictureUrl} />
      </div>
    );
  }
}

ProfilePicture.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
};
