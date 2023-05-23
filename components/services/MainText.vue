<template>
    <section class="tvl-services-main-text-container">
        <div id="tvl-services-main-text" class="tvl-services-main-text-wrapper">
            <p class="tvl-services-main-text">We know that technology is always changing and it can be tough to keep up, but don’t worry we got you covered! Our team of experts offers a wide range of services including IT Consultancy, UX Consultancy, Packaging Design, Webapp Development, Enterprise software development, and Website Maintenance. We work closely with our clients to understand the nature of their business, their USPs, their place in market and create a synergy. This usually translates to long term partnerships with our clients leading to reduced costs and faster results.</p>
        </div>
    </section>
</template>

<script>
    import { useObserverOptionStore } from '~/store' ;
    
    export default {
        name: 'ServicesMainText',
        data(){
            return {
                observer: null
            }
        },
        methods: {

            initServicesMainTextObserver(){

                let options = this.observerStore.options ;
                this.observer = new IntersectionObserver(this.servicesMainTextAnimation, options) ;
            },

            servicesMainTextObserver(){

                if(! this.observer){

                    let target = document.getElementById("tvl-services-main-text") ;

                        this.initServicesMainTextObserver() ;
                        this.observer.observe(target);
                }
            },

            servicesMainTextAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting ;

                    if(isVisible){

                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer.unobserve(target) ;
                    }
            }
        },
        mounted(){

            this.servicesMainTextObserver() ;
        },
        setup(){
            return {
                observerStore: useObserverOptionStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-services-main-text-container{
        width: 100% ;
        display: flex ;
        flex-direction: column;
        padding: 32px 0px ;
        box-sizing: border-box;
        background-color: black;
    }
    .tvl-services-main-text-wrapper{
        width: 85% ;
        min-width: 270px ;
        max-width: 750px ;
        align-self: center;
        padding: 32px 20px ;
        box-sizing: border-box;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .tvl-services-main-text{
        font-size: 12px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: center;
        line-height: 1.55;
        color: white ;
    }

    @media screen and (min-width: 720px) {
        .tvl-services-main-text{
            font-size: 14px ;
        }
    }
</style>