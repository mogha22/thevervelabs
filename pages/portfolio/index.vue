<template>
    <div class="tvl-main-wrapper">
        <PortfolioHero />
        <PortfolioContainer />
    </div>
</template>

<script>
    export default {
        name: 'ServicesPage',
        setup(){
            useSeoMeta({
                title: 'Portfolio The Verve Labs',
                ogTitle: 'Portfolio The Verve Labs',
                description: 'The verve labs, is a design agency dedicated to design, build and deliver top notch UX, beautiful websites and web app for top companies globally.',
                ogDescription: 'The verve labs, is a design agency dedicated to design, build and deliver top notch UX, beautiful websites and web app for top companies globally.',
                ogImage: '',
                twitterCard: 'summary_large_image',
            })
        }
    }
</script>