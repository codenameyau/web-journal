import React from 'react';
import styled from 'styled-components';

import OctocatSVG from '../assets/svg/octocat.svg';

const REPO_LINK = 'https://github.com/codenameyau/web-components/blob/master/';

const Container = styled.div`
  position: relative;
  padding: 1em;
`;

const GithubIcon = styled.div`
  position: absolute;
  top: 1.2em;
  right: 1.2em;
  background: url(${OctocatSVG});
  background-repeat: no-repeat;
  background-size: cover;
  height: 5em;
  width: 5em;
  transition: transform .3s;
  cursor: pointer;

  &:hover {
    transform: rotate(45deg);
  }
`;

const GithubLinkContainer = styled.div`
  margin-bottom: 1.5em;
`;

const H2 = styled.h2`
  text-transform: capitalize;
`;

export const GithubLinks = (props) => {
  const showLink = (propName) => (
    props[propName] &&
    <GithubLinkContainer key={propName}>
      <H2>{propName}</H2>
      <a target="_blank" href={REPO_LINK + props[propName]}>
        {REPO_LINK + props[propName]}
      </a>
    </GithubLinkContainer>
  );

  return (
    <Container>
      <GithubIcon/>
      {Object.keys(props).map((key) => showLink(key))}
    </Container>
  );
};

export default GithubLinks;
