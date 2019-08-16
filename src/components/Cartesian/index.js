import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';

export const CartesianGrid = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: ${({ cols = 4 }) => `repeat(${cols}, 1fr)`};
  grid-auto-rows: minmax(50px, auto);
  justify-items: stretch;
  align-items: stretch;
  background: ${({ background }) => background};
  gap: 0.1em;
  ${space}
`;

export const CartesianGridItem = styled.div`
  border: 1px solid #eee;
  padding: 1em;
  transition: background 0.3s;
  position: relative;
  cursor: pointer;

  &:hover {
    background: #eee;

    ${({ showProps }) =>
      showProps &&
      css`
			&::before {
				content: '${({ content }) => `hello\n${content}`}';
				white-space: pre;
				transition : all .5s ease;
				text-indent: 1em;
				background: rgba(0, 0, 0, 0.5);
				border-radius: 4px;
				padding: 0.5em;
				display: block;
				unicode-bidi: embed;
				font-family: monospace;
				font-size: 14px;
				color: #fff;
				position: absolute;
				bottom: -2em;
				left: 1em;
				z-index: 1;
			}
		`}

    &::after {
      content: 'Click to copy';
      font-size: 12px;
      color: #aaa;
      position: absolute;
      top: 2px;
      right: 2px;
    }
  }

  &:active {
    background: #bbb;
  }
`;

export const getCartesianProduct = (arrays) => {
  if (!arrays || !arrays.length) {
    return [];
  }

  return arrays.reduce(
    (acc, value) =>
      acc
        .map((x) => {
          return value.map((y) => {
            return Array.isArray(y) ? x.concat([y]) : x.concat(y);
          });
        })
        .reduce((acc, val) => acc.concat(val), []),
    [[]]
  );
};

export const getCartesianProps = (props = {}) => {
  const keys = Object.keys(props);
  const cartesianProduct = getCartesianProduct(Object.values(props));

  return cartesianProduct.map((result) => {
    return result.reduce((acc, value, idx) => {
      return {
        ...acc,
        [keys[idx]]: value,
      };
    }, {});
  });
};

// TODO: add formatting.
export const getJSX = (Component, { children, ...props }) => {
  const name = Component.type.displayName || Component.type.name;

  const propsAttrs = Object.keys(props).reduce((acc, prop) => {
    const propValue =
      typeof props[prop] === 'object'
        ? JSON.stringify(props[prop])
        : props[prop];

    const propAttr =
      typeof props[prop] === 'string' ? `"${propValue}"` : `{${propValue}}`;

    return [...acc, `${prop}=` + propAttr];
  }, []);

  const propsString = propsAttrs.join(' ');

  return children
    ? `<${name} ${propsString}>${children}</${name}>`
    : `<${name} ${propsString} />`;
};

export const Cartesian = ({ component, props, ...restProps }) => {
  const Component = component;
  const cartesianProps = getCartesianProps(props);
  const { cols, showProps, background } = restProps;

  const copyComponent = (e, idx) => {
    const jsx = getJSX(<Component />, cartesianProps[idx]);
    navigator.clipboard.writeText(jsx);
  };

  return (
    <CartesianGrid cols={cols} background={background}>
      {cartesianProps.map(({ children, ...restCartesianProps }, idx) => (
        <CartesianGridItem
          key={idx}
          showProps={showProps}
          content={JSON.stringify(restCartesianProps, null, 2)}
          onClick={(e) => {
            copyComponent(e, idx);
          }}
        >
          <Component {...restCartesianProps}>{children}</Component>
        </CartesianGridItem>
      ))}
    </CartesianGrid>
  );
};

Cartesian.propTypes = {
  component: PropTypes.elementType,
  props: PropTypes.object,
  cols: PropTypes.number,
  showProps: PropTypes.bool,
  background: PropTypes.string,
};

Cartesian.defaultProps = {
  cols: 4,
  showProps: false,
  background: 'none',
};

export default Cartesian;
