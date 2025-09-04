const { withExpo } = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await withExpo(env, argv);

  // Garante que o React Refresh está ativo no modo dev
  if (env.mode === 'development') {
    try {
      const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
      config.plugins.push(new ReactRefreshWebpackPlugin());
    } catch (e) {
      console.warn('React Refresh plugin não encontrado:', e.message);
    }
  }

  return config;
};
