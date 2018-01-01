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
  position: absolute;
  bottom: 1.2em;
  left: 50%;
  transform: translateX(-50%);
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

const Content = styled.div`
  padding: 1.2em;
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
      <H2>{propName}</H2>
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
