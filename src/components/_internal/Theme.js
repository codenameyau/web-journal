export const colors = {
	purple: '#3D1A85',
	brookPurple: '#5A2CCA',
	recommendedPurple: '#401E99',
	lightPurple: '#F7F3FF',
	orange: '#FCAE00',
	teal: '#02CCCE',
	green: '#1B9798',
	white: '#ffffff',
	offWhite: '#fafafa',
	softGray: '#f7f8f8',
	grayDivider: '#e5e5e5',
	lightGray: '#CCCCCC',
	borderGray: '#b8b8b8',
	mediumGray: '#595959',
	softBlack: '#272727',
	red: '#A80200',
};

export const shadows = {
	one:
		'0 0 0 1px hsla(0, 0%, 15%, 0.05), 0 8px 24px -10px hsla(0, 0%, 15%, 0.2)',
	two: '0 2px 6px 0 hsla(0, 0%, 0%, 0.1)',
};

export const gradients = {
	stashGradient: `linear-gradient(136deg, ${colors.purple}, ${colors.teal})`,
};

export const fonts = {
	heading: "Helvetica, Arial, sans-serif",
	body: "Helvetica, Arial, sans-serif",
	monospace: 'SFMono-Regular, Consolas, Liberation Mono, monospace',
};

export const fontWeights = {
	normal: 400,
	bold: 700,
};

export default {
	colors,
	shadows,
	gradients,
	fonts,
	fontWeights,
}
