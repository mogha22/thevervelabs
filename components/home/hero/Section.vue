<template>
    <section class="tvl-home-hero-section">
        <div class="tvl-home-hero-section-wrapper">
            <div data-home-hero-row="background" class="tvl-home-hero-section-rows">
            </div>
            <div data-home-hero-row="content" class="tvl-home-hero-section-rows">
                <HomeHeroContent />
                <HomeServiceStrip />
                <div id="tvl-home-hero-design-image" data-element-state="hidden" class="tvl-home-hero-design-image-container">
                    <img src="~/assets/images/home/sample-design.jpg" alt="Live Events Design" class="tvl-home-hero-design-image">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { useObserverOptionStore } from '~/store';

    export default{
        name: 'HomeHeroSection',
        data(){
        
            return {
                observer: null
            }

        },
        methods: {

            initDesignImageObserver(){

                let options = this.observerStore.options ;
                this.observer = new IntersectionObserver(this.designImageAnimation,options) ;

            },
            
            observeDesignImageSection(){

                if(!this.observe){

                    this.initDesignImageObserver() ;
                    this.observer.observe(document.getElementById('tvl-home-hero-design-image')) ;
                }

            },

            designImageAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting ;

                    if(isVisible) {

                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer.unobserve(target) ;
                    }
                    
            }
        },
        mounted(){
            
            this.observeDesignImageSection() ;
        },
        setup(){

            return {
                observerStore: useObserverOptionStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-home-hero-section{
        width: 100% ;
        height: auto ;
        overflow: hidden;
    }
    .tvl-home-hero-section-wrapper{
        width: 100% ;
        height: auto ;
        min-height: 100vh ;
        display: grid ;
        grid-template-columns: 100% ;
        grid-template-rows: 1fr;
    }
    .tvl-home-hero-section-rows{
        grid-column: 1/2;
        grid-row: 1/2;
        padding: clamp(130px, 30vh, 200px) 0px clamp(130px, 30vh, 200px) 0px ;

        &[data-home-hero-row="background"]{
            transform: scale(1.2);
            background-image: url('@/assets/images/home/hero-background.jpg?v=1.0.1');
            background-size: cover;
            background-position: center bottom;
            background-repeat: no-repeat;
            filter: blur(var(--blur));
            -moz-filter: blur(var(--blur)) ;
            -webkit-filter: blur(var(--blur)) ;
        }

        &[data-home-hero-row="content"]{
            display: flex ;
            flex-direction: column;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1));
            position: relative;
            z-index: 2;
        }
    }
    .tvl-home-hero-design-image-container{
        width: 85% ;
        min-width: 280px ;
        max-width: 720px ;
        margin: 30px 0px ;
        align-self: center;
        display: flex ;
        flex-direction: column;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset)) ;
        transition: var(--scroll-transition);
        position: relative;
        z-index: 2;

        &[data-element-state="visible"]{
            transform: translateY(0) ;
            opacity: 1;
        }

        &::before{
            content: '';
            width: 100% ;
            height: 100% ;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)) ;
            position: absolute;
            border-radius: 8px ;
            top: 0px ;
            left: 0px ;
            z-index: -1;
        }
    }
    .tvl-home-hero-design-image{
        width: 100% ;
        // min-width: 280px ;
        // max-width: 720px ;
        align-self: center;
        border-radius: 8px ;
        position: relative;
        //z-index: 2;
    }
</style>