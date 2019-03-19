import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Content = styled.div`
  line-height: 1.25em;
`;

export const Description = (props) => {
  return (
    <div>
      <h3>
        {props.name}
      </h3>
      <Content>
        {props.children}
      </Content>
    </div>
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
