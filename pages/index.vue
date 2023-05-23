<template>
    <div class="tvl-main-wrapper">
        <HomeHeroSection />
        <HomeWhyChooseUs/>
        <HomeTestimonialsSection />
        <HomeBrandIdentity />
        <HomeWallOfWork />
        <HomeCaseStudy />
        <HomePartner />
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        setup(){
            useSeoMeta({
                title: 'The Verve Labs',
                ogTitle: 'The Verve Labs',
                description: '',
                ogDescription: '',
                ogImage: '',
                twitterCard: 'summary_large_image',
            })
        }
    }
</script>