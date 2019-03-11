import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import OctocatSVG from '../assets/icon/octocat.svg';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const GithubIcon = styled.div`
  display: inline-block;
  vertical-align: text-top;
  background: url(${OctocatSVG});
  background-repeat: no-repeat;
  background-size: cover;
  height: 1em;
  width: 1em;
  cursor: pointer;
  margin-right: 0.25em;
`;

const Content = styled.div`
  padding: 1em;
`;

const LinkContainer = styled.div`
  margin-bottom: 1.2em;
`;

export const GithubLink = (props) => {
  return (
    <Container>
      <Content>
        <LinkContainer>
          <h3>
            <GithubIcon />
            {props.name}
          </h3>
          <a target="_blank" rel="noopener noreferrer" href={props.url}>
            {props.url}
          </a>
        </LinkContainer>
      </Content>
    </Container>
  );
};

GithubLink.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string,
};

GithubLink.defaultProps = {
  name: 'Source Code',
};

export default GithubLink;
