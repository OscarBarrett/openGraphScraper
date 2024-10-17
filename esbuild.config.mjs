/* eslint-disable import/no-extraneous-dependencies */
import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['index.ts'],
  bundle: true,
  minify: true,
  platform: 'node',
  format: 'esm',
  packages: 'external',
  outfile: 'dist/esm/index.mjs',
  logLevel: 'info',
});
