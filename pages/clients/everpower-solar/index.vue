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
            image="eps_challenge.jpg"
        />
        <ClientsContent
            :heading="solution.heading"
            :texts="solution.texts"
            image="eps_solution.jpg"
        />
    </div>
</template>

<script>
    export default {
        name: 'EverPowerSolarPage',
        data(){
            return {
                hero: {
                    background:"eps",
                    logo:"eps.png",
                    tagLine: "Success Story",
                    title:'How we digitised Everpower Solar’s Solar Mission.',
                    heading: ''
                },

                details: {
                    client: 'EverPower Solar',
                    industry: 'Solar Industry, Energy Industry',
                    services: 'Ux Consultancy, IT Consultancy & Services Web Development'
                },

                challenge: {
                    heading: 'Challenges',
                    texts: [
                        'One of the challenges we faced in creating a website for a EverpowerSolar was ensuring that the website was optimized for SEO. With a highly competitive market and a large number of similar websites, it was important that we implemented effective SEO strategies to help the website rank higher in search engine results and drive more traffic to the site. Our team of IT professionals worked to research and implement effective keywords, meta tags, and other SEO techniques to improve the website’s visibility and rankings.',
                        'Another scope Mr Halani pressed on was a UI/UX designed that rivalled that of market leading company, our biggest challenge from the start was creating an industry-leading UI-UX design that rivalled international big brands. Plus with the solar panel industry being relatively complex and technical, it was important that the website was able to effectively communicate the company’s services and products in an intuitive and user-friendly way. Our team of designers and developers worked to create a website that was not only visually stunning but also easy to navigate and understand, and that met the industry’s best practices.'
                    ]
                },

                solution: {
                    heading: 'Solution',
                    texts: [
                        'When we got to know about these challenges, we knew that we had to bring our A-game and tackle these issues head-on. Here’s how we overcame the obstacles and delivered a website that exceeded our client’s expectations.',
                        'In order to improve the site’s SEO we built a strong website structure, focusing on clean and organized code, and optimized all on-page elements such as titles, meta descriptions, and header tags. We also created high-quality, relevant content that helped to establish the website as an authority in the industry. We also knew that link building was crucial to help the website to rank better in search engine results.',
                        'And to create an industry-best design that rivalled international big brands, we did extensive research on the latest design trends and gathered feedback from the client to ensure that the final product met their expectations. We also focused on creating a user-friendly, visually appealing and easy to navigate website to help the visitors to find what they are looking for.',
                        'Despite these challenges, our team worked tirelessly to ensure that we were able to deliver a website that was optimized for SEO, had an industry-leading UI-UX design, and effectively communicated the company’s services and products. We achieved success by keeping a clear communication with the client, doing the necessary research and staying up-to-date with the latest industry trends and best practices. The project exceeded all the stakeholder’s expectations and achieved it’s full scope within the given time and budget.'
                    ]
                }
            }
        },
        setup(){
            useSeoMeta({
                title: 'Ever Power Solar x The Verve Labs',
                ogTitle: 'Ever Power Solar x The Verve Labs',
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