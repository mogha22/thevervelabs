// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link:[
                {rel:'preconnect', href:'https://fonts.googleapis.com'},
                {rel:'preconnect', crossorigin:'anonymous', href:'https://fonts.gstatic.com'},
                {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300;400;500;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap'},
                {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400&family=Baskervville&display=swap'},
                {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0'}
            ]
        }
    },
    modules: [
        '@pinia/nuxt',
      ],
    pinia: {
        autoImports: [
            'defineStore'
        ]
    },
    experimental:{
        payloadExtraction:false,
    },
    webpack:{
        extractCSS:true
    },
    vite:{
        build:{
            emptyOutDir:true
        }
    }
})
