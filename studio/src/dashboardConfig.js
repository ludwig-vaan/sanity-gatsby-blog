export default {
  widgets: [
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
                  buildHookId: '5e4c50490b32761262263972',
                  title: 'Sanity Studio',
                  name: 'ludwig-blog-studio',
                  apiId: '130e694c-5841-4543-929f-606d08f597ee'
                },
                {
                  buildHookId: '5e579d1cf6dc7e7bf94cf48f',
                  title: 'Blog Website',
                  name: 'ludwig',
                  apiId: '4c63fc33-496f-4f3a-8706-2ff1a61df601'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ludwig-vaan/ludwig-portofolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'ludwigvaan.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
