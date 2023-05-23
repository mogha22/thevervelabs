<template>
    <section class="tvl-services-hero-section">
        <div class="tvl-services-hero-section-wrapper">
            <div data-services-hero-wrapper-row="background" class="tvl-services-hero-section-wrapper-rows"></div>
            <div data-services-hero-wrapper-row="content" class="tvl-services-hero-section-wrapper-rows">
                <div class="tvl-services-hero-content-container">
                    <div id="tvl-services-hero-content" data-element-state="hidden" class="tvl-services-hero-content-wrapper">
                        <h1 class="tvl-services-hero-content-heading">Our Services</h1>
                        <p class="tvl-services-hero-content-text">Whether you want to boost your online presence, streamline your business or develop a new product, we’re here to help make it happen. Let’s team up and take your business to the next level together!</p>
                        <div class="tvl-services-hero-content-button-container">
                            <ContactButton type="white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { useObserverOptionStore } from '~/store';
    export default {
        name: 'ServicesHero',
        data(){
            return{
                observer: null
            }
        },
        methods:{

            initServicesContentObserver(){

                let options = this.observerStore.options ;
                this.observer = new IntersectionObserver(this.servicesContentAnimation, options) ;
                
            },

            servicesContentObserver(){

                if(!this.observer){

                    let target = document.getElementById('tvl-services-hero-content') ;

                        this.initServicesContentObserver() ;
                        this.observer.observe(target) ;
                }

            },

            servicesContentAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting ;

                    if(isVisible){

                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer.unobserve(target) ;
                    }
            }
        },
        mounted(){

            this.servicesContentObserver() ;
        },
        setup(){
            return {
                observerStore: useObserverOptionStore() 
            }
        }
    }
</script>

<style lang="scss">
    .tvl-services-hero-section{
        width: 100% ;
        height: auto ;
        // height: 100vh ;
        // max-height: 750px ;
        display: flex ;
        flex-direction: column;
        overflow: hidden;
    }
    .tvl-services-hero-section-wrapper{
        width: 100% ;
        flex: 2 ;
        display: grid;
        grid-template-columns: 1fr ;
        grid-template-rows: 1fr;
    }
    .tvl-services-hero-section-wrapper-rows{
        grid-column: 1/2 ;
        grid-row: 1/2 ;

        &[data-services-hero-wrapper-row="background"]{

            transform: scale(1.2);
            background-image: url('@/assets/images/services/hero-image.jpg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            // background-color: rgba(0, 0, 0, 0.4);
            // background-blend-mode: darken;
            filter: blur(var(--blur));
            -webkit-filter: blur(var(--blur));
            -moz-filter: blur(var(--blur)) ;
        }

        &[data-services-hero-wrapper-row="content"]{
            // backdrop-filter: blur(50px);
            position: relative;
            z-index: 2;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
            padding: clamp(150px, 20vh, 230px) 0px clamp(150px, 20vh, 230px) ;
        }
    }
    .tvl-services-hero-content-container{
        width: 100% ;
        height: auto ;
    }
    .tvl-services-hero-content-wrapper{
        width: 100% ;
        height: auto ;
        display: flex ;
        flex-direction: column;
        opacity: 0 ;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .tvl-services-hero-content-heading{
        font-size: 45px ;
        font-weight: 200 ;
        font-family: var(--font-family);
        text-align: center;
        align-self: center;
        color: white ;
        padding-bottom: 16px ;
    }
    .tvl-services-hero-content-text{
        width: 85% ;
        max-width: 550px ;
        font-size: 14px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: center;
        align-self: center;
        color: white ;
        line-height: 1.5;
        padding-bottom: 24px ;
    }
    .tvl-services-hero-content-button-container{
        width: 100% ;
        display: flex ;
        flex-direction: column;
    }

    @media screen and (min-width: 540px) {

        .tvl-services-hero-content-heading{
            font-size: 55px ;
            padding-bottom: 24px ;
        }
        .tvl-services-hero-content-text{
            font-size: 16px ;
            padding-bottom: 32px ;
        }
    }

    @media screen and (min-width: 720px) {

        .tvl-services-hero-content-heading{
            font-size: 65px ;
            padding-top: 5vh;
            //padding-bottom: 24px ;
        }
        .tvl-services-hero-content-text{
            font-size: 16px ;
            //padding-bottom: 32px ;
        }
    }

    @media screen and (min-width: 1024px) {

        .tvl-services-hero-content-heading{
            font-size: 75px ;
            padding-bottom: 24px ;
        }
        .tvl-services-hero-content-text{
            font-size: 18px ;
            padding-bottom: 32px ;
        }
    }
</style>
