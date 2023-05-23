<template>
    <section class="tvl-wall-of-work-section">
        <div class="tvl-wall-of-work-section-wrapper">
            <div data-wall-of-work-row="background" class="tvl-wall-of-work-section-wrapper-rows">
            </div>
            <div data-wall-of-work-row="content" class="tvl-wall-of-work-section-wrapper-rows">
                <h3 id="tvl-wall-of-work-heading" data-element-observer="heading" data-element-state="hidden" class="tvl-wall-of-work-section-heading">Wall of Our Work</h3>
                <div class="tvl-wall-of-work-grid-container">
                    <template v-for="(row, index) in rows">
                        <HomeWallOfWorkCard
                            :id=index
                            :text=row.text 
                            :image=row.image 
                            :type=row.type
                            :rating=row.rating
                        />
                    </template>
                </div>
                <div id="tvl-wall-of-work-button" data-element-observer="button" data-element-state="hidden" class="tvl-wall-of-work-button-container">
                    <p class="tvl-wall-of-work-button-text">Let’s get started with yours ✍️</p>
                    <ContactButton type="white" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { useObserverOptionStore } from '~/store';

    export default {
        name: 'WallOfWork',
        data(){

            return {
                observer:{
                    heading: null,
                    button: null
                },
                rows:[
                        {
                            text: 'Neems For Men',
                            image: 'image-1.jpg',
                            rating: 5
                        },
                        {
                            text: 'Monk-E',
                            image: 'image-2.png',
                            rating: 5
                        },
                        {
                            text: 'Monk-E',
                            image: 'image-3.png',
                            rating: 5
                        },
                        {
                            text: 'Mommify',
                            image: 'image-4.png',
                            rating: 5                            
                        },
                        {
                            text: 'Solar4Good',
                            image: 'image-5.jpg',
                            rating: 5
                        },
                        {
                            text: 'Sayy.io',
                            image: 'image-6.png',
                            rating: 5
                        },
                        {
                            text: 'Webmonials',
                            image: 'image-7.png',
                            rating: 5
                        },
                        {
                            text: 'Neems For Men',
                            image: 'image-8.jpg',
                            rating: 5
                        },
                        {
                            text: 'Neems For Men',
                            image: 'image-9.jpg',
                            rating: 5
                        },
                        {
                            text: 'Hatchh-it',
                            image: 'image-10.jpg',
                            rating: 5
                        },
                        {
                            text: 'Tracably',
                            image: 'image-11.jpg',
                            rating: 5
                        },
                        {
                            text: 'Ever Power Solar',
                            image: 'image-12.jpg',
                            rating: 5
                        },
                        {
                            text: 'Monk-E',
                            image: 'image-13.jpg',
                            rating: 5
                        },
                        {
                            text: 'Sungrow Solar',
                            image: 'image-14.jpg',
                            rating: 5
                        }
                ]
            }
        },
        methods:{

            initWallOfWorkObserver(element){

                let options = this.observerStore.options ;
                this.observer[element] = new IntersectionObserver(this.wallOfWorkAnimation, options) ;
            },

            wallOfWorkObserver(){

                Object.keys(this.observer).forEach(element =>{

                    let target = document.getElementById(`tvl-wall-of-work-${element}`) ;

                    if(!this.observer[element]){
                        this.initWallOfWorkObserver(element) ;
                        this.observer[element].observe(target) ;
                    }
                })

            },

            wallOfWorkAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting,
                    element = target.dataset.elementObserver ;

                    if(isVisible){
                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer[element].unobserve(target) ;
                    }
            }
        },
        mounted(){

            this.wallOfWorkObserver() ;
        },
        setup(){

            return {
                observerStore: useObserverOptionStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-wall-of-work-section{
        width: 100% ;
        height: auto ;
        display: flex ;
        flex-direction: column;
        overflow: hidden;
    }
    .tvl-wall-of-work-section-wrapper{
        width: 100% ;
        height: 100% ;
        display: grid ;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr; 
    }
    .tvl-wall-of-work-section-wrapper-rows{
        grid-column: 1/2 ;
        grid-row: 1/2 ;
        display: flex ;
        flex-direction: column;
        padding: clamp(40px, 10vh, 72px) 0px ;

        &[data-wall-of-work-row="background"]{
            transform: scale(1.2);
            background-image: url('@/assets/images/home/wall-of-work.jpg');
            background-position: left center ;
            background-size: cover;
            background-repeat: no-repeat;
            filter: blur(var(--blur));
            -webkit-filter: blur(var(--blur)) ;
            -moz-filter: blur(var(--blur)) ;
        }

        &[data-wall-of-work-row="content"]{
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)) ;
            position: relative;
            z-index: 2;
        }
    }
    .tvl-wall-of-work-section-heading{
        font-size: 32px ;
        text-align: center;
        font-weight: 200 ;
        font-family: var(--font-family);
        color: white ;
        padding: 16px 0px 32px 0px ;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .tvl-wall-of-work-grid-container{
        width: 90%;
        min-width: 300px ;
        max-width: 420px;
        align-self: center;
        padding: 32px 0px 40px 0px ;
        column-count: 2;
        column-gap: 12px;
    }
    .tvl-wall-of-work-grid-container-row{
        width: 100% ;
        padding: 0px 0px ;
        box-sizing: border-box;
        display: inline-block;
    }
    .tvl-wall-of-work-button-container{
        width: 100% ;
        display: flex ;
        flex-direction: column;
        margin-top: 32px ;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .tvl-wall-of-work-button-text{
        font-size: 12px ;
        font-weight: 400;
        font-family: var(--font-family);
        color: white ;
        padding-bottom: 12px ;
        align-self: center;
    }

    @media screen and (min-width:540px) {
        .tvl-wall-of-work-button-text{
            font-size: 15px ;
        }
    }

    @media screen and (min-width: 720px) {
        .tvl-wall-of-work-section-heading{
            font-size: 44px;
        }
        .tvl-wall-of-work-grid-container{
            width: 85%;
            max-width: 850px;
            column-count: 3;
        }
    }
    @media screen and (min-width: 1024px) {
        .tvl-wall-of-work-section-heading{
            font-size: 52px;
        }
        .tvl-wall-of-work-grid-container{
            max-width: 950px;
            column-count: 4;
            column-gap: 16px;
        }
    }
</style>