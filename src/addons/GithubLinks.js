import React from 'react';
import styled from 'styled-components';

const REPO_LINK = 'https://github.com/codenameyau/web-components/blob/master/';

const Container = styled.div`
  padding: 10px 20px;
`;

const H2 = styled.h2`
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const GithubLinks = (props) => {
  const showLink = (propName) => (
    props[propName] &&
    <div>
      <H2>{propName}</H2>
      <a target="_blank" href={REPO_LINK + props[propName]}>
        {REPO_LINK + props[propName]}
      </a>
    </div>
  );

  return (
    <Container>
      {
        Object.keys(props).map((key) => showLink(key))
      }
    </Container>
  );
};

export default GithubLinks;
