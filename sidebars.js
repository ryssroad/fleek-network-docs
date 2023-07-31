/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // documentationSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    'index',
    {
      type: 'category',
      label: 'Learn',
      collapsed: true,
      collapsible: true,
      items: [
        'learn/index',
        'learn/why-it-exists',
        'learn/how-it-works',
        'learn/token-and-economics',
        {
          type: 'category',
          label: 'Network',
          items: [
            {
              type: 'category',
              label: 'Overview',
              collapsed: true,
              collapsible: true,
              items: [
                'learn/network/overview/architecture',
                'learn/network/overview/introduction',
                'learn/network/overview/application-layer',
                'learn/network/overview/benchmarks',
                'learn/network/overview/blockstore',
                'learn/network/overview/client-libraries',
                'learn/network/overview/epoch-synchronizer',
                'learn/network/overview/handshake',
              ],
            },
            {
              type: 'category',
              label: 'RPC',
              items: [
                'learn/network/rpc/interface',
              ],
            },
            'learn/ports',
          ],
        },
        {
          type: 'category',
          label: 'Services',
          items: [
            'learn/network/services/index',
            'learn/network/services/development',
            'learn/network/services/support',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Build',
      collapsed: true,
      collapsible: true,
      items: [
        'build/index',
        'build/requirements',
        {
          type: 'category',
          label: 'Install',
          items: [
            'build/install/wizard',
            'build/install/manually',
          ],
        },
        'build/configuration',
        'build/diagnostics',
      ],
    },
    {
      type: 'category',
      label: 'Develop',
      collapsed: true,
      collapsible: true,
      items: [
        'develop/index',
        'develop/client',
        'develop/service-development',
        'develop/json-rpc',
      ],
    },
    'contribute',
    'whitepaper',
  ],
};

module.exports = sidebars;
