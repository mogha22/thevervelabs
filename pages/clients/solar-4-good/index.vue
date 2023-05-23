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
            :heading="challenge.heading"
            :texts="challenge.texts"
            image="s4g_challenge.jpg"
        />
        <ClientsContent
            :heading="solution.heading"
            :texts="solution.texts"
            image="s4g_solution.jpg"
        />
    </div>
</template>

<script>
    export default {
        name: 'Solar4GoodPage',
        data(){
            return {

                hero: {
                    background:"s4g",
                    logo:"solar4good.png",
                    tagLine: "Success Story",
                    title:'UK’s solar transformation: Solar4good’s novel attempt and our collaboration',
                    heading: ''
                },

                details: {
                    client: 'Solar 4 Good',
                    industry: 'Solar Industry, Energy Industry',
                    services: 'Ux Consultancy, IT Consultancy & Services Web Development'
                },

                challenge: {
                    heading: 'Challenges',
                    texts: [
                        'One of the main challenges we faced when working with Solar4Good was with Local SEO. We helped our client to optimize their website for search engines in the UK, by focusing on building a strong website structure, creating relevant and high-quality content and implementing effective link building strategies.',
                        'Another challenge we faced was garnering trust of the residents in the solar panel installation and highlight the financial and environmental benefits of switching.'
                    ]
                },

                solution: {
                    heading: 'Solution',
                    texts: [
                        'In order to overcome the challenge of SEO we optimized the website for search engines in the UK by building a strong website structure, creating relevant and high-quality content and implementing effective link building strategies. This helped to increase the website’s visibility and drive traffic to the site.',
                        'And in order to highlight the benefits of solar panel installation and educating the potential customers we created a website that not only highlighted the benefits of solar panel installation but also provided educational resources such as blog posts and infographics. This helped to educate the potential customers about the benefits of solar panel installation and the technology behind it.',
                        'We also highlighted Solar4Good’s credentials, certifications and experience on the website. This helped to establish the company as a reputable and professional provider of solar panel installation services. We also created a visually appealing website that showcased the company’s previous work, such as before and after photos of installations. This helped to establish the company as a reputable and professional provider of solar panel installation services.',
                        'At The Verve Labs, we pride ourselves on delivering innovative and effective solutions for our clients. We are confident that our work on Solar4Good’s website will help them to achieve success in the competitive solar panel installation industry.'
                    ]
                }
            }
        },
        setup(){
            useSeoMeta({
                title: 'Solar 4 Good x The Verve Labs',
                ogTitle: 'Solar 4 Good x The Verve Labs',
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