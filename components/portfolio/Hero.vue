<template>
    <section class="tvl-portfolio-section">
        <div class="tvl-portfolio-section-wrapper">
            <div data-portfolio-section-rows="background" class="tvl-portfolio-section-wrapper-rows"></div>
            <div data-portfolio-section-rows="content"  class="tvl-portfolio-section-wrapper-rows">
                <div id="tvl-portfolio-section-content" data-element-state="hidden" class="tvl-portfolio-content-container">
                    <h1 class="tvl-portfolio-content-heading">Our Work</h1>
                    <p class="tvl-portfolio-content-text">Challenging the status quo with 🎨 innovative designs and ✍️ beautiful code</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { useObserverOptionStore } from '~/store' ;

    export default {
        name: 'PortfolioHero',
        data(){
            return {
                observer:null
            }
        },
        methods:{
            initPortfolioContentObserver(){

                let options = this.observerStore.options ;
                this.observer = new IntersectionObserver(this.portfolioContentAnimation, options)
            },

            portfolioContentObserver(){

                if(!this.observer){
                    this.initPortfolioContentObserver() ;
                    this.observer.observe(document.getElementById('tvl-portfolio-section-content')) ;
                }
            },

            portfolioContentAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting ;

                    if(isVisible){
                        target.setAttribute('data-element-state', 'visible');
                        this.observer.unobserve(target) ;
                    }
            }
        },
        mounted(){

            this.portfolioContentObserver() ;
        },
        setup(){
            
            return {
                observerStore: useObserverOptionStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-portfolio-section{
        width: 100% ;
        height: auto ;
        overflow: hidden;
    }
    .tvl-portfolio-section-wrapper{
        width: 100% ;
        height: auto ;
        display: grid ;
        grid-template-columns: 1fr ;
        grid-template-rows: auto ;
    }
    .tvl-portfolio-section-wrapper-rows{
        grid-column: 1/2 ;
        grid-row: 1/2;

        &[data-portfolio-section-rows="background"]{
            transform: scale(1.2);
            background-image: url('~/assets/images/services/hero-background.jpg');
            background-position: center top;
            background-size: cover;
            background-repeat: no-repeat;
            filter: blur(var(--blur-min));
            -webkit-filter: blur(var(--blur-min)) ;
            -moz-filter: blur(var(--blur-min)) ;
        }
        &[data-portfolio-section-rows="content"]{
            padding: clamp(140px, 30vh, 200px) 0px clamp(140px, 30vh, 200px) 0px ;
            display: flex ;
            flex-direction: column;
            position: 1;
            z-index: 2;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1));
        }
    }
    .tvl-portfolio-content-container{
        width: 85% ;
        max-width: 550px;
        align-self: center;
        display: flex ;
        flex-direction: column;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);
        transition-delay: 0.2s;

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .tvl-portfolio-content-heading{
        width: 100% ;
        font-size: 60px ;
        font-weight: 200 ;
        font-family: var(--font-family);
        text-align: center;
        color: white ;
        padding-bottom: 24px ;
        position: relative;
        align-self: center;

        &::before{
            content: "";
            width: 35px ;
            height: 35px ;
            position: absolute;
            top: -35px ;
            left: -20px ;
            background-image: url('@/assets/images/portfolio/scribble-1.png');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
        &::after{
            content: "";
            width: 55px ;
            height: 40px ;
            position: absolute;
            top: -35px ;
            right: -20px ;
            background-image: url('@/assets/images/portfolio/scribble-2.png');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
    .tvl-portfolio-content-text{
        font-size: 13px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: center;
        color: white ;
        line-height: 1.56;
        position: relative;

        &::before{
            content: "";
            width: 33px ;
            height: 25px ;
            position: absolute;
            top: 35px ;
            left: -20px ;
            background-image: url('@/assets/images/portfolio/scribble-3.png');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
        &::after{
            content: "";
            width: 35px ;
            height: 30px ;
            position: absolute;
            top: 35px ;
            right: -20px ;
            background-image: url('@/assets/images/portfolio/scribble-4.png');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
    }

    @media screen and (min-width: 720px) {
        .tvl-portfolio-content-heading{
            font-size: 80px ;

            &::before{
                width: 70px ;
                height: 70px ;
                top: -70px ;
                left: -70px ;
            }
            &::after{
                width: 110px ;
                height: 80px ;
                top: -70px ;
                right: -80px ;
            }
        }
        .tvl-portfolio-content-text{
            font-size: 15px ;

            &::before{
                content: "";
                width: 66px ;
                height: 50px ;
                top: 70px ;
                left: -50px ;
            }
            &::after{
                width: 70px ;
                height: 60px ;
                top: 70px ;
                right: -60px ;
            }
        }
    }
    @media screen and (min-width: 1100px) {
        .tvl-portfolio-content-heading{
            font-size: 100px ;
        }
    }
</style>