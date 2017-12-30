import React from 'react';
import styled from 'styled-components';

const REPO_LINK = 'https://github.com/codenameyau/web-components/blob/master/';

const Container = styled.div`

`;

const StyledLink = styled.a`

`;

export const GithubLinks = (props) => {
  return (
    <Container>
      {
        props.componentLink &&
        <StyledLink target="_blank" href={REPO_LINK + props.componentLink}>
          {REPO_LINK + props.componentLink}
        </StyledLink>
      }
    </Container>
  );
};

export default GithubLinks;
