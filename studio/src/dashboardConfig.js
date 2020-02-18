export default {
  widgets: [
    { name: 'structure-menu' },
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
                  name: 'sanity-gatsby-blog-studio-9civjts7',
                  apiId: '130e694c-5841-4543-929f-606d08f597ee'
                },
                {
                  buildHookId: '5e4c5049da20682f19462519',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1rgpacf5',
                  apiId: 'd53082bf-be26-4634-8707-582292b7974d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ludwig-vaan/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1rgpacf5.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
