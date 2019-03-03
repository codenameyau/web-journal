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
  background: url(${OctocatSVG});
  background-repeat: no-repeat;
  background-size: cover;
  height: 3.5em;
  width: 3.5em;
  transition: transform .3s;
  cursor: pointer;
  margin-bottom: 1em;

  &:hover {
    transform: rotate(360deg);
  }
`;

const Content = styled.div`
  padding: 1.2em;
`;

const LinkContainer = styled.div`
  margin-bottom: 1.2em;
`;

const H3 = styled.h3`
  text-transform: capitalize;
`;

export const GithubLinks = (props) => {
  const showLink = (propName) => (
    props[propName] &&
    <LinkContainer key={propName}>
      <H3>{propName}</H3>
      <a target="_blank" href={REPO_LINK + props[propName]}>
        {REPO_LINK + props[propName]}
      </a>
    </LinkContainer>
  );

  return (
    <Container>
      <Content>
        <GithubIcon />
        {Object.keys(props).map((key) => showLink(key))}
      </Content>
    </Container>
  );
};

export default GithubLinks;
