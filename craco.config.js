const marked = require('marked');
const renderer = new marked.Renderer();

function findOneOf(rules) {
  return (matchedRule = rules.find((rule) => !!rule.oneOf));
}
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const matchedRule = findOneOf(webpackConfig.module.rules);
      matchedRule.oneOf.unshift({
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              pedantic: true,
              renderer,
            },
          },
        ],
      });

      webpackConfig.resolve.extensions.push('.md');
      return webpackConfig;
    },
  },
  eslint: {
    loaderOptions: {
      formatter: require.resolve('react-dev-utils/eslintFormatter'),
      eslintPath: require.resolve('eslint'),
      resolvePluginsRelativeTo: __dirname,
    },
  },
  style: {
    sass: {
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        return sassLoaderOptions;
      },
    },
  },
};
