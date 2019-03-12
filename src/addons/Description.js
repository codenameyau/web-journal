import React from 'react';
import PropTypes from 'prop-types';


export const Description = (props) => {
  return (
    <div>
      <h3>
        {props.name}
      </h3>
      <div>
        {props.children}
      </div>
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
