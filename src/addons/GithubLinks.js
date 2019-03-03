import React from 'react';
import styled from 'styled-components';

import OctocatSVG from '../assets/icon/octocat.svg';

const REPO_LINK = 'https://github.com/codenameyau/web-components/blob/master/';

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

const H2 = styled.h2`
  text-transform: capitalize;
`;

export const GithubLinks = (props) => {
  const showLink = (propName) => (
    props[propName] &&
    <LinkContainer key={propName}>
      <H2>
        <GithubIcon />
        {propName}
      </H2>
      <a target="_blank" href={REPO_LINK + props[propName]}>
        {REPO_LINK + props[propName]}
      </a>
    </LinkContainer>
  );

  return (
    <Container>
      <Content>
        {Object.keys(props).map((key) => showLink(key))}
      </Content>
    </Container>
  );
};

export default GithubLinks;
