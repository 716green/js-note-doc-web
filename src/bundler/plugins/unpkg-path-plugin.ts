import * as esbuild from 'esbuild-wasm';

// TODO - replace me
const namespace = 'a';

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      // Handle root entry file of 'index.js'
      build.onResolve({ filter: /(^index\.js$)/ }, () => {
        return {
          namespace,
          path: 'index.js',
        };
      });

      // Handle relative paths in a module
      build.onResolve({ filter: /^\.+\// }, (args: any) => {
        return {
          namespace,
          path: new URL(args.path, 'https://unpkg.com' + args.resolveDir + '/')[
            'href'
          ],
        };
      });

      // Handle main file of a module
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        return {
          namespace,
          path: `https://unpkg.com/${args.path}`,
        };
      });
    },
  };
};
