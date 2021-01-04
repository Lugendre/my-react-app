module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        bugfixes: true,
        corejs: require('core-js/package.json').version,
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/typescript',
  ],
  plugins: [
    [
      '@babel/transform-runtime',
      { version: require('@babel/runtime/package.json').version },
    ],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
};
