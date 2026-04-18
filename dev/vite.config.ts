import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import twoRun from '../vite-extension/two-run-plugin';

export default {
  devtools: {
    build: {
      withApp: true,
    }
  },
  plugins: [
    twoRun(),
    vue(),
    Inspect(),
  ],
};
