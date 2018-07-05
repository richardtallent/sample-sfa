module.exports = {
	configureWebpack: config => {
		// Only one JS file output, no folder or hashing to filename
		config.output.filename = "all.js"
		// Inline all images, media files, and fonts
		config.module.rules[1].test = /\.(png|jpe?g|gif|webp|ico)(\?.*)?$/
		config.module.rules[1].use[0].options.limit = 40000000
		config.module.rules[2].use[0].options.limit = 40000000
		config.module.rules[3].use[0].options.limit = 40000000
		config.module.rules[4].use[0].options.limit = 40000000
		// Avoid chunking
		config.performance = {
			maxEntrypointSize: 40000000,
			maxAssetSize: 40000000,
		}
		config.optimization = {
			splitChunks: {
				maxAsyncRequests: 1,
				maxInitialRequests: 1,
				minChunks: 10000,
				minSize: 40000000,
				name() {
					return "all"
				},
				cacheGroups: {
					default: false,
				},
			},
		}
	},

	chainWebpack: config => {
		// Adjust HtmlWebpackPlugin
		config.plugin("html").tap(args => {
			args[0].inject = false
			args[0].cache = false
			return args
		})
		config.plugins.delete("prefetch")
		config.plugins.delete("preload")
	},

	baseUrl: undefined,
	outputDir: undefined,
	assetsDir: undefined,
	runtimeCompiler: undefined,
	productionSourceMap: false,
	parallel: undefined,

	css: {
		extract: false,
	},
}
