export default {
    hashRouter: true,
    base: "/",
    dest: "/dist",
    themeConfig: {
      mode: 'dark',
    },
    title: 'ML 4 Rookies',
    files: 'src/**/*.{md,markdown,mdx}',
    menu: [
        'Welcome',
        {
          name:'Introduction', 
          menu: [
            'Intro',
            'More'
          ]
        },
        'Fundamentals',
        'Tooling',
        'Advanced',
        'Next steps',
        'References',
    ]
  }