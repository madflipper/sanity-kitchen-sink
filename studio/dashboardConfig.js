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
                  buildHookId: '60e70e8370882c3087c2dcae',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hksjugaw',
                  apiId: 'f6d7e39a-a801-4162-9ab6-916e1ef53993'
                },
                {
                  buildHookId: '60e70e836b12812506712b5a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wi8e4wkv',
                  apiId: '3df6bba3-3ef7-4570-ac8c-778deff8a41a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/madflipper/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wi8e4wkv.netlify.app', category: 'apps'}
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
