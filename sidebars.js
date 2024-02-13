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
  sideBar: [
    'profile',
    'cv',
    'overview',
    'codebase',
    'git_tutorial',
    {
      type: 'category',
      label: 'Udacity Data Analyst Projects',
      collapsible: true,
      collapsed: true,
      items: [{type: 'autogenerated', dirName: 'data_analyst_projects'}]
    },
    {
      type: 'category',
      label: 'Udacity Intermediate Python Projects',
      collapsible: true,
      collapsed: true,
      items: [{type: 'autogenerated', dirName: 'intermediate_python_projects'}]
    },
    {
      type: 'category',
      label: 'Udacity Data Structures and Algorithms Projects',
      collapsible: true,
      collapsed: true,
      items: [{type: 'autogenerated', dirName: 'data_structures_and_algorithms'}]
    },
    {
      type: 'category',
      label: 'Udacity Intro ML with Pytorch Projects',
      collapsible: true,
      collapsed: true,
      items: [{type: 'autogenerated', dirName: 'intro_ml_pytorch'}]
    },
    {
      type: 'category',
      label: 'Udacity Fullstack Web Developer Projects',
      collapsible: true,
      collapsed: true,
      items: [{type: 'autogenerated', dirName: 'fullstack_web_projects'}]
    },
    {
      type: 'category',
      label: 'Udacity Data Scientist Projects',
      collapsible: true,
      collapsed: true,
      items: [{type: 'autogenerated', dirName: 'data_scientist'}]
    },
    {
      type: 'category',
      label: 'Udacity ML Engineer Projects',
      collapsible: true,
      collapsed: true,
      items: [{type: 'autogenerated', dirName: 'ml_engineer_projects'}]
    },
    {
      type: 'category',
      label: 'Udacity ML DevOps Projects',
      collapsible: true,
      collapsed: true,
      items: [{type: 'autogenerated', dirName: 'ml_devops_projects'}]
    },
  ],
};

module.exports = sidebars;
