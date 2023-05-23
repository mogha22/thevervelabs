<template>
    <section class="tvl-clients-hero-section">
        <div class="tvl-clients-hero-section-wrapper">
            <div data-hero-row="background" :data-hero-background="background" class="tvl-clients-hero-section-rows"></div>
            <div data-hero-row="content" class="tvl-clients-hero-section-rows">
                <div class="tvl-clients-hero-content-container">
                    <div class="tvl-clients-hero-content">
                        <img id="tvl-client-hero-logo" :alt="logo" class="tvl-client-hero-logo">
                        <p v-if="tagLine !== ''" class="tvl-client-hero-tagline">{{ tagLine }}</p>
                        <h2 class="tvl-client-hero-title">{{ title }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ClientsHeroSection',
        props: {
            background: String,
            logo: String,
            tagLine: String,
            title: String
        },
        computed:{
            image(){
                return new URL(`/assets/images/clients/${this.$props.logo}`, import.meta.url)
            }
        },
        methods:{

            loadLogo(){
                let img = document.getElementById('tvl-client-hero-logo') ;
                    img.src = this.image ;
            }
        },
        mounted(){
            this.loadLogo() ;
        }
    }
</script>

<style lang="scss">
    .tvl-clients-hero-section{
        width: 100% ;
        height: auto ;
    }
    .tvl-clients-hero-section-wrapper{
        width: 100% ;
        height: 100vh ;
        max-height: 850px;
        display: grid ;
        grid-template-columns: 1fr ;
        grid-template-rows: 1fr ;
    }
    .tvl-clients-hero-section-rows{
        grid-column: 1/2 ;
        grid-row: 1/2 ;

        &[data-hero-row="background"]{
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;

            &[data-hero-background="monke"]{
                background-position: 20% center;
                background-image: url('@/assets/images/home/caseStudy/monke_image.gif');
            }
            &[data-hero-background="neems"]{
                background-position: center top;
                background-image: url('@/assets/images/home/caseStudy/neems_image.jpg');
            }
            &[data-hero-background="eps"]{
                background-position: center ;
                background-image: url('@/assets/images/home/caseStudy/eps_image.jpg');
            }
            &[data-hero-background="s4g"]{
                background-position: center ;
                background-image: url('@/assets/images/home/caseStudy/solar4good_image.jpg');
            }
        }
        
        &[data-hero-row="content"]{
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1));
        }
    }
    .tvl-clients-hero-content-container{
        width: 100% ;
        height: 100% ;
        display: flex ;
        flex-direction: row;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1));
    }
    .tvl-clients-hero-content{
        width: 100% ;
        height: auto ;
        align-self: flex-end;
        display: flex ;
        flex-direction: column;
        padding-bottom: 24px ;
    }
    .tvl-client-hero-logo{
        width: 120px ;
        height: auto ;
        padding-bottom: 4px;
        align-self: center;
    }
    .tvl-client-hero-tagline{
        width: 85% ;
        font-size: 13px ;
        font-weight: 500 ;
        font-family: var(--font-family);
        color: white ;
        padding-top: 4px ;
        padding-bottom: 32px ;
        align-self: center;
        text-align: center;
    }
    .tvl-client-hero-title{
        width: 85% ;
        max-width: 600px;
        font-size: 22px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: center;
        align-self: center;
        color: white ;
        line-height: 1.45;
    }

    @media screen and (min-width: 720px) {
        .tvl-clients-hero-content{
            padding-bottom: 32px ;
        }
        .tvl-client-hero-tagline{
            font-size: 15px ;
            padding-bottom: 32px ;
        }
        .tvl-client-hero-title{
            font-size: 27px ;
        }
    }
    @media screen and (min-width: 1100px) {
        .tvl-clients-hero-content{
            padding-bottom: 40px ;
        }
        .tvl-client-hero-tagline{
            padding-bottom: 40px ;
        }
        .tvl-client-hero-title{
            font-size: 35px ;
        }
    }
</style>

