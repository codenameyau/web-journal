import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

Container.defaultProps = {
  margin: '0',
  padding: '1em',
};

export default Container;
