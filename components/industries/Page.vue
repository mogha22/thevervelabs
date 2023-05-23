<template>
    <section class="tvl-industry-page-section">
        <div class="tvl-industry-page-section-wrapper">
            <picture class="tvl-industry-page-image-container">
                <source id="industry-page-image-source" media="(min-width:540px)">
                <img id="industry-page-image" :alt="heading" media="(min-width:540px)" class="tvl-industry-page-image">
            </picture>
            <div class="tvl-industry-page-content-container">
                <h1 class="tvl-industry-page-content-heading">{{ heading }}</h1>
                <div class="tvl-industry-page-content-wrapper">
                    <p v-for="text in texts" class="tvl-industry-page-content-text">
                        {{ text }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'IndustryPage',
        props: {
            heading: String,
            image: String,
            texts: Array
        },
        computed:{
            images(){

                return {
                    desk: new URL(`/assets/images/industries/desk/${this.$props.image}`, import.meta.url),
                    mob: new URL(`/assets/images/industries/mob/${this.$props.image}`, import.meta.url)
                }
            }
        },
        methods:{

            loadPageImages(){
                let img = document.getElementById('industry-page-image'),
                    src = document.getElementById('industry-page-image-source') ;

                    img.src = this.images.mob ;
                    src.srcset = this.images.desk ;
            }
        },
        mounted(){

            this.loadPageImages() ;
        }
    }
</script>

<style lang="scss">
    .tvl-industry-page-section{
        width: 100% ;
        padding: 110px 0px ;
        display: flex ;
        flex-direction: column;
    }
    .tvl-industry-page-section-wrapper{
        width: 85% ;
        min-width: 280px ;
        max-width: 450px;
        align-self: center;
    }
    .tvl-industry-page-image-container{
        width: 100% ;
        height: auto ;
        margin: 8px 0px 16px 0px;
    }
    .tvl-industry-page-image{
        width: 100% ;
        height: auto ;
    }
    .tvl-industry-page-content-container{
        width: 100% ;
        margin: clamp(50px, 10vh, 100px) 0px 8px 0px ;
    }
    .tvl-industry-page-content-heading{
        font-size: 24px ;
        font-weight: 400;
        font-family: var(--font-family);
        text-align: left;
        padding-bottom: 16px ;
    }
    .tvl-industry-page-content-wrapper{
        width: 100% ;
        height: auto ;
        margin: 8px 0px ;
    }
    .tvl-industry-page-content-text{
        font-size: 14px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: left;
        line-height: 1.56;
        margin-bottom: 16px ;
    }

    @media screen and (min-width: 540px) {
        .tvl-industry-page-section-wrapper{
            max-width: 700px;
        }
        .tvl-industry-page-content-heading{
            font-size: 32px ;
            padding-bottom: 16px ;
        }
        .tvl-industry-page-content-text{
            font-size: 16px ;
            margin-bottom: 16px ;
        }
    }
    @media screen and (min-width: 1024px) {
        .tvl-industry-page-section-wrapper{
            max-width: 1000px;
        }
        .tvl-industry-page-content-heading{
            font-size: 44px ;
            padding-bottom: 32px ;
        }
        .tvl-industry-page-content-text{
            font-size: 18px ;
            margin-bottom:24px ;
        }
    }
</style>