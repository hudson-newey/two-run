import { compileRust } from './runtime-interop';

const rustFileRegex = /\.(rs)$/;

export default function twoRunPlugin() {
  return {
    name: 'two-run',
    transform: {
      filter: {
        id: rustFileRegex,
      },
      handler(src: string, id: string) {
        return {
          code: compileRust(src, id),
          map: null,
        }
      },
    },
  };
}
