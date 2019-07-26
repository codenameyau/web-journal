import { getCartesianProduct, getCartesianProps } from './Cartesian';

describe('getCartesianProduct', () => {
	it('should return empty array for empty array input', () => {
		const input = [];
		const output = [];
		expect(getCartesianProduct(input)).toEqual(output);
	});

	it('should return cartesian product', () => {
		const input = [[1, 2], [10, 20], [100, 200, 300]];
		const output = [
			[1, 10, 100],
			[1, 10, 200],
			[1, 10, 300],
			[1, 20, 100],
			[1, 20, 200],
			[1, 20, 300],
			[2, 10, 100],
			[2, 10, 200],
			[2, 10, 300],
			[2, 20, 100],
			[2, 20, 200],
			[2, 20, 300],
		];
		expect(getCartesianProduct(input)).toEqual(output);
	});
});

describe('getCartesianProps', () => {
	it('should return empty object for empty props', () => {
		const input = {};
		const output = [];
		expect(getCartesianProps(input)).toEqual(output);
	});

	it('should return cartesian product', () => {
		const input = {
			color: ['red', 'green', 'blue'],
			fontWeight: ['normal', 'bold'],
			fontSize: ['14px', '16px'],
		};
		const output = [
			{ color: 'red', fontSize: '14px', fontWeight: 'normal' },
			{ color: 'red', fontSize: '16px', fontWeight: 'normal' },
			{ color: 'red', fontSize: '14px', fontWeight: 'bold' },
			{ color: 'red', fontSize: '16px', fontWeight: 'bold' },
			{ color: 'green', fontSize: '14px', fontWeight: 'normal' },
			{ color: 'green', fontSize: '16px', fontWeight: 'normal' },
			{ color: 'green', fontSize: '14px', fontWeight: 'bold' },
			{ color: 'green', fontSize: '16px', fontWeight: 'bold' },
			{ color: 'blue', fontSize: '14px', fontWeight: 'normal' },
			{ color: 'blue', fontSize: '16px', fontWeight: 'normal' },
			{ color: 'blue', fontSize: '14px', fontWeight: 'bold' },
			{ color: 'blue', fontSize: '16px', fontWeight: 'bold' },
    ];
		expect(getCartesianProps(input)).toEqual(output);
	});
});
