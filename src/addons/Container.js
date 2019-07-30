import styled from 'styled-components';
import { space } from 'styled-system';

export const Container = styled.div`
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
  ${space}
`;

Container.defaultProps = {
  maxWidth: 'none',
  width: '100%',
  padding: '1em',
};

export default Container;
