import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  padding: 1em;
`;

const LinkContainer = styled.div`
  margin-bottom: 1.2em;
`;

export const Description = (props) => {
  return (
    <Container>
      <Content>
        <LinkContainer>
          <h3>
            {props.name}
          </h3>
          <div>
            {props.children}
          </div>
        </LinkContainer>
      </Content>
    </Container>
  );
};

Description.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element,
};

Description.defaultProps = {
  name: 'Description',
};

export default Description;
