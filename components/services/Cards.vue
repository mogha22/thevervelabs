<template>
    <div :id=link></div>
    <div class="tvl-services-cards">
        <div :data-services-card-order='order' class="tvl-services-cards-wrapper">
            <div :id="`tvl-services-card-images-${id}`" data-element-state="hidden" data-element-type="images" data-services-card-row="image" class="tvl-services-card-wrapper-rows">
                <div class="tvl-services-card-image-container">
                    <img :id="`services-card-image-${id}`" :alt=heading class="tvl-services-card-image">
                </div>
            </div>
            <div :id="`tvl-services-card-content-${id}`" data-element-state="hidden" data-element-type="content" data-services-card-row="content" class="tvl-services-card-wrapper-rows">
                <div class="tvl-services-card-content">
                    <h3 class="tvl-services-card-content-heading">{{ heading }}</h3>
                    <p class="tvl-services-card-content-text">{{ text }}</p>
                    <ContactButton type="black" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useObserverOptionStore } from '~/store';

    export default {
        name: 'ServicesCard',
        props:{
            id: Number,
            heading: String,
            text: String,
            image: String,
            index: Number
        },
        computed:{

            serviceImg(){

                return new URL(`/assets/images/services/mob/${this.$props.image}`, import.meta.url)
            }
        },
        data(){

            return {
                observer: {
                    images: null,
                    content: null
                },
                imageUrl: {
                            mob: new URL(`/src/assets/images/services/mob/${this.$props.image}`, import.meta.url),
                            desk: new URL(`/src/assets/images/services/desk/${this.$props.image}`, import.meta.url)
                        },
                order: (this.$props.index % 2 === 1 )? 'reverse' : 'normal',
                link: this.$props.heading.toLowerCase().replaceAll(' ', '-')
            }
        },
        methods:{

            loadServiceImage(){

                let img = document.getElementById(`services-card-image-${this.$props.id}`) ;
                    img.src = this.serviceImg ;
            },

            initServicesCardObserver(element){

                let options = this.observerStore.options ;
                this.observer[element] = new IntersectionObserver(this.servicesCardAnimation, options) ;
            },

            servicesCardObserver(){

                Object.keys(this.observer).forEach(element=>{

                    let target = document.getElementById(`tvl-services-card-${element}-${this.$props.id}`) ;

                        this.initServicesCardObserver(element) ;
                        this.observer[element].observe(target) ;
                })

            },

            servicesCardAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting,
                    type = target.dataset.elementType ;

                    if(isVisible){

                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer[type].unobserve(target) ;
                    }
            }
        },
        mounted(){

            this.loadServiceImage() ;
            this.servicesCardObserver() ;
        },
        setup(){
            return {
                observerStore: useObserverOptionStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-services-cards{
        width: 100% ;
        display: flex ;
        flex-direction: column;
        margin: 8px 0px 32px 0px ;
    }
    .tvl-services-cards-wrapper{
        width: 100% ;
        max-width: 320px ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-services-card-wrapper-rows{
        width: 100% ;
        align-self: center;
        display: flex ;
        flex-direction: column;
        margin-bottom: 40px ;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .tvl-services-card-image-container{
        width: 90% ;
        height: 360px ;
        align-self: center;
    }
    .tvl-services-card-image{
        width: 100% ;
        height: 100% ;
        object-fit: cover;
        object-position: center bottom;
    }
    .tvl-services-card-content{
        width: 90% ;
        align-self: center;
    }
    .tvl-services-card-content-heading{
        font-size: 18px ;
        font-weight: 500;
        font-family: var(--font-family);
        padding-bottom: 24px ;
    }
    .tvl-services-card-content-text{
        font-size: 14px ;
        font-weight: 400 ;
        font-family: var(--font-family);
        padding-bottom: 32px ;
        line-height: 1.56;
    }

    @media screen and (min-width:720px) {
        .tvl-services-cards{
            margin: 24px 0px 40px 0px ;
        }
        .tvl-services-cards-wrapper{
            width: 100% ;
            max-width: 850px ;
            flex-direction: row;
            justify-content: space-between;

            &[data-services-card-order="reverse"]{
                flex-direction: row-reverse;
            }
        }
        .tvl-services-card-wrapper-rows{
            width: 50% ;
            align-self: flex-start;

            &[data-services-card-row="image"]{
                width: 50% ;
            }
        }
        .tvl-services-card-image-container{
            width: 85% ;
            height: 420px ;
        }
    }

    @media screen and (min-width: 1100px ) {
        .tvl-services-cards{
            margin: 40px 0px 40px 0px ;
        }
        .tvl-services-cards-wrapper{
            width: 85% ;
            max-width: 1250px ;
        }
        .tvl-services-card-wrapper-rows{
            width: 45% ;
            align-self: flex-start;

            &[data-services-card-row="image"]{
                width: 45% ;
            }
        }
        .tvl-services-card-image-container{
            width: 85% ;
            height: 480px ;
        }
        .tvl-services-card-content{
            width: 85% ;
        }
        .tvl-services-card-content-heading{
            font-size: 24px ;
        }
        .tvl-services-card-content-text{
            font-size: 16px ;
        }
    }
</style>