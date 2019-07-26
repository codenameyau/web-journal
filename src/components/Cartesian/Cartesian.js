import React from 'react';
import PropTypes from 'prop-types';

export const getCartesianProduct = arrays => {
	if (!arrays || !arrays.length) {
		return [];
	}

	return arrays.reduce(
		(acc, value) =>
			acc
				.map(x => value.map(y => x.concat(y)))
				.reduce((acc, b) => acc.concat(b), []),
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

export const Cartesian = ({ component, ...props }) => {
	const Component = component;

	const cartesianProps = getCartesianProps(props);
	console.log(props, cartesianProps);

	return <Component>{props.children}</Component>;
};

Cartesian.propTypes = {
	component: PropTypes.elementType,
	props: PropTypes.object,
};

export default Cartesian;
