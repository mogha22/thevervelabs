<template>
    <section class="tvl-home-partner-section">
        <div class="tvl-home-partner-section-wrapper">
            <div id="tvl-home-partner-content" data-element-state="hidden" data-element-type="content" class="tvl-home-partner-content-container">
                <h3 class="tvl-home-partner-section-heading">We treat your customers as ours</h3>
                <p class="tvl-home-partner-section-text">to create incredible digital experiences for them at every step possible making them come to you again and again and again and againnnnnnnn 🎉.....</p>
                <div class="tvl-home-partner-section-button-container">
                    <p class="tvl-home-partner-section-button-text">Partner Today 🤝</p>
                    <ContactButton type="gradient" />
                </div>
            </div>
            <div id="tvl-home-partner-images" data-element-state="hidden" data-element-type="images" data-image-state="hidden" class="tvl-home-partner-section-image-container">
                <div data-home-partner-image="left" class="tvl-home-partner-section-image-wrapper">
                    <img src="~/assets/images/home/customers/image-left.jpg" alt="" class="tvl-home-partner-section-image">
                </div>
                <div data-home-partner-image="center" class="tvl-home-partner-section-image-wrapper">
                    <img src="~/assets/images/home/customers/image-center.jpg" alt="" class="tvl-home-partner-section-image">
                </div>
                <div data-home-partner-image="right" class="tvl-home-partner-section-image-wrapper">
                    <img src="~/assets/images/home/customers/image-right.jpg" alt="" class="tvl-home-partner-section-image">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { useObserverOptionStore } from '~/store';
    export default {
        name: 'HomePartner',
        data(){

            return {
                observer: {
                    content: null,
                    images: null
                },
            }
            
        },
        methods: {

            initParnterObserver(element){

                let options = this.observerStore.options ;
                this.observer[element] = new IntersectionObserver(this.partnerAnimation,options) ;
            },

            partnerObserver(){

                Object.keys(this.observer).forEach(element=>{
                    
                    if(!this.observer[element]){

                        let target = document.getElementById(`tvl-home-partner-${element}`) ;

                        this.initParnterObserver(element) ;
                        this.observer[element].observe(target) ;
                    }
                })
            },

            partnerAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting,
                    type = target.dataset.elementType ;

                    if(isVisible){

                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer[type].unobserve(target) ;

                        if(type === 'images')
                            setTimeout(()=>{
                                target.setAttribute('data-image-state', 'visible') ;
                            }, 500) ;
                    }
            }
        },
        mounted(){

            this.partnerObserver() ;
        },
        setup(){

            return {
                observerStore: useObserverOptionStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-home-partner-section{
        width: 100% ;
        height: auto;
        padding: clamp(50px, 10vh, 100px) 0px clamp(25px, 5vh, 50px) 0px ;
        display: flex ;
        flex-direction: column;
    }
    .tvl-home-partner-section-wrapper{
        width: 100% ;
        height: auto ;
        margin: 24px 0px ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-home-partner-content-container{
        width: 85% ;
        max-width: 550px ;
        align-self: center;
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
    .tvl-home-partner-section-heading{
        width: 100% ;
        align-self: center;
        font-size: 36px;
        font-weight: 200;
        font-family: var(--font-family);
        text-align: center;
        color: black ;
        padding-bottom: 20px ;
    }
    .tvl-home-partner-section-text{
        width: 100%;
        max-width: 500px;
        align-self: center;
        font-size: 13px;
        font-weight: 300;
        font-family: var(--font-family);
        text-align: center;
        color: black ;
        padding-bottom: 32px ;
        line-height: 1.45;
    }
    .tvl-home-partner-section-button-container{
        width: 90% ;
        max-width: 260px ;
        align-self: center;
        margin: 24px 0px 24px 0px ;
        display: flex ;
        flex-direction: column;
    }
    .tvl-home-partner-section-button-text{
        font-size: 12px ;
        font-weight: 500;
        font-family: var(--font-family);
        text-align: center;
        align-self: center;
        padding: 0px 0px 12px 0px ;
    }
    .tvl-home-partner-section-image-container{
        width: auto ;
        align-self: center;
        display: flex ;
        flex-direction: row;
        margin-top: 32px ;
        opacity: 0 ;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }

        &[data-image-state="hidden"]{

            .tvl-home-partner-section-image-wrapper{
                
                &[data-home-partner-image="left"]{
                    opacity: 0;
                    transform: translateX(100%);
                }
                &[data-home-partner-image="right"]{
                    opacity: 0;
                    transform: translateX(-100%);
                }
            }
        }

        &[data-image-state="visible"]{

            .tvl-home-partner-section-image-wrapper{
                margin: 0px 16px ;

                &[data-home-partner-image="left"]{
                    opacity: 1;
                    transform: translate(10%, -50%) scale(0.85);
                }

                &[data-home-partner-image="right"]{
                    opacity: 1;
                    transform: translate(-10%, -50%) scale(0.85);
                }
            }
        }
    }
    .tvl-home-partner-section-image-wrapper{
        width: 160px ;
        height: auto ;
        align-self: center;
        transition: 0.8s all ease-in-out;
        position: relative;
        z-index: 1;

        &[data-home-partner-image="center"]{
            z-index: 2;
        }

    }
    .tvl-home-partner-section-image{
        width: 100% ;
        height: auto;
    }

    @media screen and (min-width:540px) {
        .tvl-home-partner-section-heading{
            font-size: 55px;
        }
        .tvl-home-partner-section-text{
            font-size: 16px;
        }
        .tvl-home-partner-section-button-container{
            margin: 40px 0px 40px 0px ;
        }
        .tvl-home-partner-section-button-text{
            font-size: 13px ;
        }
        .tvl-home-partner-section-image-container{

            &[data-image-state="visible"]{

                .tvl-home-partner-section-image-wrapper{
                    margin: 0px 24px ;

                    &[data-home-partner-image="left"]{
                        transform: translate(10%, -55%) scale(0.85);
                    }

                    &[data-home-partner-image="right"]{
                        transform: translate(-10%, -55%) scale(0.85);
                    }
                }
            }
        }
        .tvl-home-partner-section-image-wrapper{
            width: 250px ;            
        }
    }

    @media screen and (min-width:1024px) {
        .tvl-home-partner-content-container{
            max-width: 750px ;
        }
        .tvl-home-partner-section-heading{
            font-size: 70px;
        }
        .tvl-home-partner-section-text{
            max-width: 680px ;
            font-size: 20px;
        }
        .tvl-home-partner-section-button-container{
            margin: 48px 0px 48px 0px ;
        }
        .tvl-home-partner-section-button-text{
            font-size: 14px ;
        }
        .tvl-home-partner-section-image-container{

            &[data-image-state="visible"]{

                .tvl-home-partner-section-image-wrapper{
                    margin: 0px 40px ;

                    &[data-home-partner-image="left"]{
                        transform: translate(10%, -60%) scale(0.85);
                    }

                    &[data-home-partner-image="right"]{
                        transform: translate(-10%, -60%) scale(0.85);
                    }
                }
            }
        }
        .tvl-home-partner-section-image-wrapper{
            width: 320px ;
        }
    }
</style>