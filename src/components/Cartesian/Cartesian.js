import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { space } from 'styled-system';

export const CartesianGrid = styled.div`
	display: grid;
	grid-template-columns: ${({ cols = 4 }) => `repeat(${cols}, 1fr)`};
	gap: 0.1em;
	margin: auto;
	${space}
`;

export const CartesianGridItem = styled.div`
	border: 1px solid #eee;
	padding: 0.5em;
`;

export const getCartesianProduct = arrays => {
	if (!arrays || !arrays.length) {
		return [];
	}

	return arrays.reduce(
		(acc, value) =>
			acc
				.map(x => value.map(y => x.concat(y)))
				.reduce((acc, val) => acc.concat(val), []),
		[[]]
	);
};

export const getCartesianProps = (props = {}) => {
	const keys = Object.keys(props);
	const cartesianProduct = getCartesianProduct(Object.values(props));

	return cartesianProduct.map(result => {
		return result.reduce((acc, value, idx) => {
			return {
				...acc,
				[keys[idx]]: value,
			};
		}, {});
	});
};

// TODO: Use third party solution.
export const getJSX = (displayName, { children, ...props}) => {
	const propsAttrs = Object.keys(props).reduce((acc, prop) => {
		const propValue = props[prop];
		const propAttr = typeof propValue === 'string' ? `"${propValue}"` : `{${propValue}}`;

		return [
			...acc,
			`${prop}=`+ propAttr
		]
	}, []);

	const jsx = `<${displayName} ${propsAttrs.join(' ')}>${children}</${displayName}>`;
	return jsx;
};

export const Cartesian = ({ component, props, ...restProps }) => {
	const Component = component;
	const cartesianProps = getCartesianProps(props);
	const cols = restProps.cols || 4;

	const copyComponent = (e, idx) => {
		const jsx = getJSX(component.displayName, cartesianProps[idx]);
		navigator.clipboard.writeText(jsx);
	};

	return (
		<CartesianGrid cols={cols} {...restProps}>
			{cartesianProps.map(({ children, ...cartesianProps }, idx) => (
				<CartesianGridItem
					key={idx}
					onClick={e => {
						copyComponent(e, idx)
					}}
				>
					<Component {...cartesianProps}>{children}</Component>
				</CartesianGridItem>
			))}
		</CartesianGrid>
	);
};

Cartesian.propTypes = {
	component: PropTypes.elementType,
	props: PropTypes.object,
	cols: PropTypes.number,
};

export default Cartesian;
