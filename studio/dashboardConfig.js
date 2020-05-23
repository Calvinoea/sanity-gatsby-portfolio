export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec95a2df5ea885d4dd60f0d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vdny1vqu',
                  apiId: 'c8981a96-8bee-4a2e-a2c2-b915802fbe02'
                },
                {
                  buildHookId: '5ec95a2df5ea88492dd61379',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-77mbo3j4',
                  apiId: '2c91a844-dba7-4805-94fd-74f0434c068a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Calvinoea/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-77mbo3j4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
