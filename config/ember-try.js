/* eslint-env node */
module.exports = {
  useYarn: true,
  scenarios: [
    {
      name: 'ember-1.11',
      bower: {
        dependencies: {
          ember: '~1.11.0',
          'ember-cli-shims': 'ember-cli/ember-cli-shims#0.0.5',
        },
        resolutions: {
          ember: '~1.11.0',
          'ember-cli-shims': '0.0.5',
        },
      },
      npm: {
        devDependencies: {
          'ember-cli-shims': null,
          'ember-source': null,
        },
      },
    },
    {
      name: 'ember-1.13',
      bower: {
        dependencies: {
          ember: '~1.13.0',
          'ember-cli-shims': '0.0.6',
        },
        resolutions: {
          ember: '~1.13.0',
          'ember-cli-shims': '0.0.6',
        },
      },
      npm: {
        devDependencies: {
          'ember-cli-shims': null,
          'ember-source': null,
        },
      },
    },
    {
      name: 'ember-lts-2.4',
      bower: {
        dependencies: {
          ember: 'components/ember#lts-2-4',
        },
        resolutions: {
          ember: 'lts-2-4',
        },
      },
      npm: {
        devDependencies: {
          'ember-source': null,
        },
      },
    },
    {
      name: 'ember-lts-2.8',
      bower: {
        dependencies: {
          ember: 'components/ember#lts-2-8',
        },
        resolutions: {
          ember: 'lts-2-8',
        },
      },
      npm: {
        devDependencies: {
          'ember-source': null,
        },
      },
    },
    {
      name: 'ember-lts-2.12',
      npm: {
        devDependencies: {
          'ember-source': '~2.12.0',
        },
      },
    },
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          ember: 'components/ember#release',
        },
        resolutions: {
          ember: 'release',
        },
      },
      npm: {
        devDependencies: {
          'ember-source': null,
        },
      },
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          ember: 'components/ember#beta',
        },
        resolutions: {
          ember: 'beta',
        },
      },
      npm: {
        devDependencies: {
          'ember-source': null,
        },
      },
    },
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          ember: 'components/ember#canary',
        },
        resolutions: {
          ember: 'canary',
        },
      },
      npm: {
        devDependencies: {
          'ember-source': null,
        },
      },
    },
    {
      name: 'ember-default',
      npm: {
        devDependencies: {},
      },
    },
  ],
};
