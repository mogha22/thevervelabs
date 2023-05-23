<template>
    <section class="tvl-call-to-action-section">
        <div class="tvl-call-to-action-section-wrapper">
            <div class="tvl-call-to-action-image-container">
                <div id="tvl-call-to-action-images" data-element-state="visible" data-element-type="images" class="tvl-call-to-action-image-wrapper">
                    <img src="~/assets/images/callToAction/left.jpg" data-image-type="left" alt="call to action image" class="tvl-call-to-action-image">
                    <img src="~/assets/images/callToAction/right.jpg" data-image-type="right" alt="call to action image" class="tvl-call-to-action-image">
                </div>
                <div id="tvl-call-to-action-button" data-element-state="visible" data-element-type="button" class="tvl-call-to-action-button-container">
                    <p class="tvl-call-to-action-button-text">Partner with us today.</p>
                    <ContactButton type="black" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'CallToAction',
        data(){
            return {
                observer:{
                    images:null,
                    button:null
                }
            }
        },
        methods:{

            initCTAObserver(element){

                let options = {
                                root: null,
                                rootMargin: '0px',
                                threshold: (element==='images')? 0.6 : 1 
                            }

                this.observer[element] = new IntersectionObserver(this.ctaObserverAnimation, options) ;
            },

            ctaObserver(){

                Object.keys(this.observer).forEach(element => {

                    let target = document.getElementById(`tvl-call-to-action-${element}`) ;

                    if(!this.observer[element]){

                        this.initCTAObserver(element) ;
                        this.observer[element].observe(target) ;
                    }
                }) ;
            },

            ctaObserverAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting,
                    element = target.dataset.elementType ;

                    if(isVisible){
                        console.log('visible')
                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer[element].unobserve(target) ;
                    }

            }
        },
        mounted(){
            
            //this.ctaObserver() ;
        },
        setup(){

            // const images = {
            //     left:   reactive({src: new URL('/src/assets/images/callToAction/left.jpg', import.meta.url)}),

            //     center: reactive({src:new URL('/src/assets/images/callToAction/gradient.png', import.meta.url)}),

            //     right:  reactive({src: new URL('/src/assets/images/callToAction/right.jpg', import.meta.url)})
            // }

            // return {
            //     images
            // }
        }
    }
</script>

<style lang="scss">
    .tvl-call-to-action-section{
        width: 100% ;
        padding: clamp(50px, 8vh, 140px) 0px clamp(30px, 5vh, 90px) 0px ;
    }
    .tvl-call-to-action-section-wrapper{
        width: 100% ;
    }
    .tvl-call-to-action-image-container{
        width: 100% ;
        display: flex ;
        flex-direction: column;
        overflow: hidden;
    }
    .tvl-call-to-action-image-wrapper{
        width: 726px ;
        display: flex ;
        flex-direction: row;
        align-self: center;

        &[data-element-state="visible"]{

            .tvl-call-to-action-image{
                opacity: 1;

                &[data-element-type="left"]{
                    transform: translateX(0px);
                }
                &[data-element-type="right"]{
                    transform: translateX(0px);
                }
            }

        }
    }
    .tvl-call-to-action-image{
        width: 360px ;
        height: auto ;
        align-self: flex-start;
        opacity: 0;
        transition: var(--scroll-transition);

        &[data-image-type="left"]{
            transform: translateX(0px);
        }

        &[data-image-type="divider"]{
            transition-delay: 0.3s;
        }

        &[data-image-type="right"]{
            transform: translateX(0px);
        }

    }
    .tvl-call-to-action-image-divider{
        width: auto ;
        height: 100% ;
        align-self: flex-start;
        // height: clamp(25px, 5vh, 30px) ;
        // border-radius: 10px ;
        // background-image: linear-gradient(to bottom, #001949, #FF000000);
    }
    .tvl-call-to-action-button-container{
        width: 100% ;
        display: flex ;
        flex-direction: column;
        margin: 16px 0px 32px 0px ;
        padding: 16px 0px 16px 0px ;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .tvl-call-to-action-button-text{
        font-size: 25px ;
        font-weight: 400;
        font-family: var(--font-family);
        text-align: center;
        align-self: center;
        margin: 0px 0px 8px 0px ;
    }

    @media screen and (min-width: 540px) {
        .tvl-call-to-action-button-text{
            font-size: 32px ;
            margin: 0px 0px 16px 0px ;
        }
    }

    @media screen and (min-width: 720px) {
        .tvl-call-to-action-image-wrapper{
            width: 100% ;
        }
        .tvl-call-to-action-image{
            //width: calc(50% - 3px) ;
            flex: 1;
        }
        .tvl-call-to-action-button-text{
            font-size: 40px ;
        }
    }
</style>