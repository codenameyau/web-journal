import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const GraphContainer = styled.div``;

const GraphComponent = () => {
  return <div>hello graph</div>
};

export class BasicLineGraph extends React.Component {
  static propTypes = {
    clippyState: PropTypes.string,
  };

  static defaultProps = {
    aspectRatio: 2,
  };

  render() {

    return (
      <GraphContainer>
        <GraphComponent />
      </GraphContainer>
    );
  }
}

export default BasicLineGraph;
