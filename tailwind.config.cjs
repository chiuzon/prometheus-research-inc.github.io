module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					1: '#1c1c1c',
					2: '#adadad'
				},
				secondary: {
					1: '#000'
				},
				shell: {
					1: '#ddd'
				}
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			padding: {},
			width: {
				'50px': ''
			},
			height: {
				'55px': '55px'
			}
		}
	},
	plugins: []
};
