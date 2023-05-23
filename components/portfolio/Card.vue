<template>
    <div :id="`tvl-portfolio-clients-card-${id}`" data-element-state="hidden" class="tvl-portfolio-clients-card">
        <div class="tvl-portfolio-clients-card-wrapper">
            <div data-portfolio-clients-card-row="content" class="tvl-portfolio-clients-card-wrapper-rows">
                <div class="tvl-portfolio-clients-details">
                    <h3 class="tvl-portfolio-clients-name">{{ name }}</h3>
                    <p class="tvl-portfolio-clients-industry">{{ industry }}</p>
                    <div id="tvl-portfolio-clients-services-container" class="tvl-portfolio-clients-services-container">
                        <div v-for="index in 2" class="tvl-portfolio-clients-services-wrapper">
                            <div v-for="service in services" class="tvl-portfolio-clients-services">
                                <p class="tvl-portfolios-clients-service">{{ service }}</p>
                            </div>
                        </div>
                    </div>
                    <p class="tvl-portfolio-clients-location">{{ location }}</p>
                    <div class="tvl-portfolio-clients-design-toggle-container">
                        <div :data-toggle-device=device class="tvl-portfolio-clients-design-toggle-wrapper">
                            <div @click="toggleDesignImage" data-toggle-device-icon="desktop" class="tvl-portfolio-clients-design-toggle">
                                <p class="tvl-portfolio-clients-design-toggle-icon">
                                    <span class="material-symbols-outlined">computer</span>
                                </p>
                            </div>
                            <div @click="toggleDesignImage" data-toggle-device-icon="mobile" class="tvl-portfolio-clients-design-toggle">
                                <p class="tvl-portfolio-clients-design-toggle-icon">
                                    <span class="material-symbols-outlined">smartphone</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-portfolio-clients-card-row="images" class="tvl-portfolio-clients-card-wrapper-rows">
                <div :data-portfolio-card-image=device class="tvl-portfolio-clients-card-images">
                    <img :id="`portfolio-image-desk-${id}`" data-portfolio-images-type="desk" class="tvl-portfolio-clients-card-image" />
                    <img :id="`portfolio-image-mob-${id}`" data-portfolio-images-type="mob" class="tvl-portfolio-clients-card-image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useObserverOptionStore } from '~/store';
    
    export default {
        name: 'PortfolioCard',
        props: {
            id: Number,
            name: String,
            industry: String,
            services: Array,
            location: String,
            image: String
        },
        computed: {
            images(){

                return {
                    desk: new URL(`/assets/images/portfolio/desk/${this.$props.image}`, import.meta.url),
                    mob: new URL(`/assets/images/portfolio/mob/${this.$props.image}`, import.meta.url)
                }
            }
        },
        data(){
            return {
                observer: null,
                device: 'desktop'
            }
        },
        methods: {

            loadPortfolioImages(){

                let deskImg = document.getElementById(`portfolio-image-desk-${this.$props.id}`),
                    mobImg = document.getElementById(`portfolio-image-mob-${this.$props.id}`) ;

                    deskImg.src = this.images.desk ;
                    mobImg.src = this.images.mob ;
            },

            initPortfolioCardsObserver(){

                let options = this.observerStore.options ;
                this.observer = new IntersectionObserver(this.portfolioCardsAnimation, options)
            },

            portfolioCardsObserver(){

                if(!this.observer){

                    this.initPortfolioCardsObserver() ;
                    this.observer.observe(document.getElementById(`tvl-portfolio-clients-card-${this.$props.id}`))
                }

            },

            portfolioCardsAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting ;

                    if(isVisible){

                        target.setAttribute('data-element-state', 'visible');
                        this.observer.unobserve(target) ;
                    }

            },

            toggleDesignImage: function(){

                this.$data.device = (this.$data.device === 'mobile')? 'desktop' : 'mobile' ;
            }
        },

        mounted(){

            this.loadPortfolioImages() ;
            this.portfolioCardsObserver() ;
        },
        setup(props){

            return {
                observerStore: useObserverOptionStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-portfolio-clients-card{
        width: 100% ;
        padding: 16px 0px ;
        margin: 0px 0px clamp(80px, 15vh, 130px) 0px ;
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
    .tvl-portfolio-clients-card-wrapper{
        width: 90% ;
        min-width: 250px ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-portfolio-clients-card-wrapper-rows{
        width: 100% ;
        align-self: center;
        display: flex;
        flex-direction: column;
    }
    .tvl-portfolio-clients-details{
        width: 100% ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-portfolio-clients-name{
        font-size: 24px ;
        font-weight: 200;
        font-family: var(--font-family);
        text-align: center;
        color: white ;
        margin-bottom: 16px ;
    }
    .tvl-portfolio-clients-industry{
        width: fit-content;
        font-size: 10px ;
        font-weight: 500 ;
        font-family: var(--font-family);
        align-self: center;
        padding: 1px 10px;
        background-color: white ;
        border-radius: 24px ;
        margin-bottom: 24px;
    }
    .tvl-portfolio-clients-services-container{
        width: 100% ;
        height: 60px ;
        overflow: hidden;
        margin-bottom: 16px ;
        box-sizing: border-box;
        position: relative;
        z-index: 1;

        &::before{
            content: '' ;
            width: 100% ;
            height: 30px ;
            position: absolute;
            top: 0px ;
            left: 0px ;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
            z-index: 2;
        }

        &::after{
            content: '' ;
            width: 100% ;
            height: 30px ;
            position: absolute;
            left: 0px ;
            bottom: 0px ;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
            z-index: 2;
        }
    }
    .tvl-portfolio-clients-services-wrapper{
        width: 100% ;
        height: auto ;
        transform: translateY(0%);
        animation: flowup 5s linear infinite ;
    }

    @keyframes flowup {
        0% {
            transform: translateY(0%) ;
        }
        100%{
            transform: translateY(-100%);
        }
    }
    .tvl-portfolio-clients-services{
        width: 100% ;
        height: 30px ;
        display: flex;
        flex-direction: row;
    }
    .tvl-portfolios-clients-service{
        width: 100% ;
        font-size: 16px ;
        font-weight: 300;
        font-family: var(--font-family);
        text-align: center;
        //color: #345D8E ;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        align-self: center;
    }
    .tvl-portfolio-clients-location{
        font-size: 13px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: center;
        color: rgba(255, 255, 255, 0.8);
    }
    .tvl-portfolio-clients-design-toggle-container{
        width: 100px ;
        align-self: center;
        margin: 56px 0px 8px 0px ;
    }
    .tvl-portfolio-clients-design-toggle-wrapper{
        display: flex ;
        flex-direction: row;
        justify-content: space-between;

        &[data-toggle-device="desktop"]{

            .tvl-portfolio-clients-design-toggle{

                &[data-toggle-device-icon="mobile"]{
                    border-bottom: 2px solid transparent ;
                }
                &[data-toggle-device-icon="desktop"]{
                    border-bottom: 2px solid white ;
                }
            }
        }

        &[data-toggle-device="mobile"]{

            .tvl-portfolio-clients-design-toggle{

                &[data-toggle-device-icon="mobile"]{
                    border-bottom: 2px solid white ;
                }
                &[data-toggle-device-icon="desktop"]{
                    border-bottom: 2px solid transparent ;
                }
            }
        }
    }
    .tvl-portfolio-clients-design-toggle{
        width: 40px ;
        height: auto ;
        display: flex ;
        flex-direction: row;
    }
    .tvl-portfolio-clients-design-toggle-icon{
        width: 100% ;
        color: white;
        text-align: center;
        align-self: center;
        padding: 4px 0px ;

        span{
            font-size: 18px;
        }
    }


    .tvl-portfolio-clients-card-images{
        width: 100% ;
        display: flex ;
        flex-direction: column;
        margin: 16px 0px 32px 0px ;

        &[data-portfolio-card-image="mobile"]{

            .tvl-portfolio-clients-card-image{

                &[data-portfolio-images-type="mob"]{
                    display: block;
                }
                &[data-portfolio-images-type="desk"]{
                    display: none;
                }
            }
        }

        &[data-portfolio-card-image="desktop"]{
            
            .tvl-portfolio-clients-card-image{

                &[data-portfolio-images-type="mob"]{
                    display: none;
                }
                &[data-portfolio-images-type="desk"]{
                    display: block;
                }
            }
        }
    }
    .tvl-portfolio-clients-card-image{
        align-self: center ;

        &[data-portfolio-images-type="mob"]{
            width: auto ;
            height: 320px ;
        }
        &[data-portfolio-images-type="desk"]{
            width: 100% ;
            height: auto ;
            max-width: 360px;
            border-radius: 6px ;
        }
    }

    @media screen and (min-width: 720px) {

        .tvl-portfolio-clients-card-wrapper{
            flex-direction: row;
        }
        .tvl-portfolio-clients-card-wrapper-rows{
            align-self: center;

            &[data-portfolio-clients-card-row="content"]{
                width: 250px ;
            }
            &[data-portfolio-clients-card-row="images"]{
                flex: 1
            }
        }
        .tvl-portfolio-clients-name{
            align-self: flex-start;
        }
        .tvl-portfolio-clients-industry{
            align-self: flex-start;
        }
        .tvl-portfolios-clients-service{
            text-align: left;
            align-self: flex-start;
        }
        .tvl-portfolio-clients-location{
            text-align: left;
            align-self: flex-start;
        }
        .tvl-portfolio-clients-design-toggle-container{
            align-self: flex-start;
        }

    }

    @media screen and (min-width: 1024px) {

        .tvl-portfolio-clients-design-toggle-container{
            display: none;
        }

        .tvl-portfolio-clients-card-images{
            flex-direction: row;
            justify-content: space-around;

            &[data-portfolio-card-image="mobile"]{

                .tvl-portfolio-clients-card-image{

                    &[data-portfolio-images-type="mob"]{
                        display: block;
                    }
                    &[data-portfolio-images-type="desk"]{
                        display: block;
                    }
                }
            }

            &[data-portfolio-card-image="desktop"]{
                
                .tvl-portfolio-clients-card-image{

                    &[data-portfolio-images-type="mob"]{
                        display: block;
                    }
                    &[data-portfolio-images-type="desk"]{
                        display: block;
                    }
                }
            }
        }
        
        .tvl-portfolio-clients-card-image{
            align-self: center ;

            &[data-portfolio-images-type="mob"]{
                width: auto ;
                height: 220px ;
            }
            &[data-portfolio-images-type="desk"]{
                width: auto ;
                height: 220px ;
                max-width: none;
            }
        }
    }

    @media screen and (min-width: 1150px) {
        
        .tvl-portfolio-clients-card-image{

            &[data-portfolio-images-type="mob"]{
                height: 320px ;
            }
            &[data-portfolio-images-type="desk"]{
                height: 320px ;
            }
        }
    }

    @media screen and (min-width: 1300px) {
        
        .tvl-portfolio-clients-card-image{

            &[data-portfolio-images-type="mob"]{
                height: 350px ;
            }
            &[data-portfolio-images-type="desk"]{
                height: 350px ;
            }
        }
    }
</style>