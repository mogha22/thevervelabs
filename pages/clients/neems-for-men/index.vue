<template>
    <div class="tvl-main-wrapper">
        <ClientsHeroSection
            :background=hero.background
            :logo=hero.logo
            :tagLine=hero.tagLine
            :title=hero.title
        />
        <section class="tvl-clients-scroll-down-section">
            <div class="tvl-clients-scroll-down-wrapper">
                <p v-if="hero.heading !== ''" class="tvl-clients-scroll-down-text">{{ hero.heading }}</p>
                <div class="tvl-clients-scroll-down-icon-container">
                    <p class="tvl-clients-scroll-down-icon">
                        <span class="material-symbols-outlined">expand_more</span>
                    </p>
                </div>
            </div>
        </section>
        <ClientsServices :details="details" />
        <ClientsContent
            :heading="start.heading"
            :texts="start.texts"
            image="neems_start.png"
        />
        <ClientsContent
            :heading="challenge.heading"
            :texts="challenge.texts"
            image="neems_challenge.jpg"
        />
        <ClientsContent
            :heading="solution.heading"
            :texts="solution.texts"
            image="neems_solution.jpg"
        />
    </div>
</template>

<script>
    export default {
        name: 'NeemsMenPage',
        data(){
            return {
                hero: {
                    background:"neems",
                    logo:"neems.png",
                    tagLine: "Success Story",
                    title:'Attempt to redefine men\'s skincare industry with less',
                    heading: 'The story of the beautiful relationship that started in 2019 with a phone call from Neems founder - Dhruv Desai to The Verve Labs'
                },

                details: {
                    client: 'Neems Enterprise',
                    industry: 'Cosmetics Industry, D2C, FMCG',
                    services: 'Ux Consultancy, IT Consultancy & Services Web Development, Data Analytics Enterprise solutions'
                },

                start: {
                    heading: 'How we started',
                    texts: [
                        'In 2019, Mr. Dhruv Desai reached out to us with a vision to create a top-quality men’s grooming company that filled Indian men with confidence. His goal was to give Indian men a high-quality alternative in a market flooded with cheap grooming products.',
                        'We immediately saw the potential in this idea and knew we could help bring it to fruition. We joined forces with Mr. Desai and formed a partnership built on synergy. We took on the task of handling all things tech-related for his e-commerce store, while he focused on managing the product and logistics side of the business. Together, we set out to create a website that would reflect the high-quality standard of the products being sold. Our team of experienced IT professionals worked closely with Mr. Desai to design and develop a website that was not only visually stunning, but also easy to navigate and use. The website was optimized for conversions, ensuring that customers could easily find and purchase the products they were looking for.'
                    ]
                },

                challenge: {
                    heading: 'Challenges',
                    texts: [
                        'Like any project, our journey with Mr. Dhruv Desai was not without its challenges. One of the challenges we faced was ensuring the website’s security and data protection. With the website handling sensitive customer information and transactions, it was crucial that we implemented robust security measures to protect the data.',
                        'We also faced a challenge in creating an intuitive and user-friendly mobile experience. With an increasing number of customers using mobile devices to browse and purchase products, it was important that the website was optimized for mobile use. Our team worked to ensure that the website was fully responsive and easy to use on all devices, including smartphones and tablets.',
                        'Another challenge we faced was improving the website’s visibility and search engine rankings. With a highly competitive market and a large number of similar websites, it was important that we implemented effective SEO strategies to help the website rank higher in search engine results.'
                    ]
                },
                
                solution: {
                    heading: 'Solution',
                    texts: [
                        'To overcome the challenges we faced with the website’s SEO, our team of IT professionals implemented several solutions. To improve the website’s visibility and search engine rankings, we implemented effective SEO strategies such as researching and implementing relevant keywords, meta tags, and other techniques. We also made sure that the website’s content was unique and relevant, and that it was optimized for search engines by following best practices in website design and development.',
                        'We also had to ensure that the website’s content was unique and relevant, our team of content creators worked to create high-quality and informative content that would attract and engage visitors, and also helped with the website’s ranking.',
                        'We also had to ensure that the website’s design and structure was optimized for search engines, this was done by implementing best practices in website design and development, such as using header tags correctly, and making sure that the website’s navigation was easy to understand.',
                        'To improve the website’s security and data protection, we implemented robust security measures such as SSL encryption and regular security updates. This helped to ensure that the website was secure and compliant with industry standards. We also created an intuitive and user-friendly mobile experience by ensuring that the website was fully responsive and easy to use on all devices, including smartphones and tablets.',
                        'Despite these challenges, our team was able to overcome them with the help of our team of experienced IT professionals and our partnership with Mr Dhruv. Together, we were able to create a website that was not only visually stunning but also easy to navigate, secure and user-friendly on all devices.'
                    ]
                }
            }
        },
        setup(){
            useSeoMeta({
                title: 'Neems For Men x The Verve Labs',
                ogTitle: 'Neems For Men x The Verve Labs',
                description: '',
                ogDescription: '',
                ogImage: '',
                twitterCard: 'summary_large_image',
            })
        }
    }
</script>

<style>
    @import '~/assets/clients.scss' ;
</style>