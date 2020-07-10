module.exports = {
    title: '郑明明的博客',
    description: '郑明明的博客',
    base: "/vuePressTest/",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'External', ariaLabel: 'Language Menu', items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: 'auto'
    }
}