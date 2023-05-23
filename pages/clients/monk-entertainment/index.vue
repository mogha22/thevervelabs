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
        <!-- <ClientsContent
            :heading="challenge.heading"
            :texts="challenge.texts"
            image="eps_challenge.jpg"
        />
        <ClientsContent
            :heading="solution.heading"
            :texts="solution.texts"
            image="eps_solution.jpg"
        /> -->
    </div>
</template>

<script>
    export default {
        name: 'EverPowerSolarPage',
        data(){
            return {
                hero: {
                    background:"monke",
                    logo:"monke.png",
                    tagLine: "Success Story",
                    title:'Monk Entertainment',
                    heading: ''
                },

                details: {
                    client: 'Monk Entertainment',
                    industry: 'Talent Management, Entertainment, Content Creation',
                    services: 'Ux Consultancy, IT Consultancy & Services Web Development'
                },
            }
        },
        setup(){
            useSeoMeta({
                title: 'Monk Entertainment x The Verve Labs',
                ogTitle: 'Monk Entertainment x The Verve Labs',
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