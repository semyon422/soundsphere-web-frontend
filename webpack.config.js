const path = require('path')
module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, './static/js'),
		filename: 'bundle.js'
	}
}