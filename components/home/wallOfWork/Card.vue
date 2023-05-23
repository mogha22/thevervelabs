<template>
    <div :id="`tvl-wall-of-work-card-${id}`" class="tvl-wall-of-work-card">
        <div class="tvl-wall-of-work-card-wrapper">
            <div data-wall-of-work-card-row="image" class="tvl-wall-of-work-card-wrapper-rows">
                <img :id="`wall-of-work-card-image-${id}`" alt="text" class="tvl-wall-of-work-card-image">
            </div>
            <div data-wall-of-work-card-row="content" class="tvl-wall-of-work-card-wrapper-rows">
                <div class="tvl-wall-of-work-card-content">
                    <div class="tvl-wall-of-work-card-content-wrapper">
                        <p class="tvl-wall-of-work-card-rating">
                        <template v-for="index in rating" :key="index">
                            <span class="material-symbols-outlined">star</span>
                        </template>
                    </p>
                    <p class="tvl-wall-of-work-card-text">{{ text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useObserverOptionStore } from '~/store';


    export default {
        name: 'WallOfWorkCard',
        props:{
            id: Number,
            text:String,
            image:String,
            type: String,
            rating: Number
        },
        data(){
            return {
                //rating: parseInt(this.$props.rate),
                observer: null,
                imageUrl: new URL(`/src/assets/images/home/wallofwork/${this.$props.image}`, import.meta.url)
            }
        },
        computed: {
            cardImage(){
                return new URL(`/assets/images/home/wallofwork/${this.$props.image}`, import.meta.url)
            }
        },
        methods:{

            loadCardImages(){

                let img = document.getElementById(`wall-of-work-card-image-${this.$props.id}`) ;
                    img.src = this.cardImage ;
            },

            initWallOfWorkCardObserver(){

                let options = this.observerStore.options ;
                this.observer = new IntersectionObserver(this.wallOfWorkCardAnimation, options) ;
            },

            wallOfWorkCardObserver(){

                if(!this.observer){
                    this.initWallOfWorkCardObserver() ;
                    this.observer.observe(document.getElementById(`tvl-wall-of-work-card-${this.$props.id}`)) ;
                }
            },

            wallOfWorkCardAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting ;

                    if(isVisible){

                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer.unobserve(target) ;
                    }
            }
        },
        mounted(){

            this.loadCardImages() ;
            this.wallOfWorkCardObserver() ;
        },
        setup(props){

            return {
                observerStore: useObserverOptionStore() 
            }
        }
    }
</script>

<style lang="scss">
    .tvl-wall-of-work-card{
        width: 100% ;
        height: auto ;
        border-radius: 12px ;
        box-sizing: border-box;
        margin: 0px 0px 12px 0px ;
        break-inside: avoid;
        overflow: hidden;
        cursor: pointer;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }

        &:hover{

            .tvl-wall-of-work-card-wrapper-rows{
                &[data-wall-of-work-card-row="content"]{
                    opacity: 1;
                }
            }

        }
        
    }
    .tvl-wall-of-work-card-wrapper{
        width: 100% ;
        height: 100% ;
        display: grid ;
        grid-template-columns: 1fr ;
        grid-template-rows: auto ;
    }
    .tvl-wall-of-work-card-wrapper-rows{
        grid-column: 1/2 ;
        grid-row: 1/2 ;
        transition: 0.15s all ease-in-out;

        &[data-wall-of-work-card-row="content"]{
            opacity: 0;
        }
    }
    .tvl-wall-of-work-card-image{
        width: 100% ;
        height: auto ;
        border-radius: 12px ;
    }
    .tvl-wall-of-work-card-content{
        width: 100% ;
        height: 100% ;
        display: flex ;
        flex-direction: row;
        background-color: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        transition: 0.15s all ease-in-out;
    }
    .tvl-wall-of-work-card-content-wrapper{
        width: 100% ;
        align-self: center;
    }
    .tvl-wall-of-work-card-text{
        width: 100% ;
        font-size: 13px;
        font-weight: 400;
        font-family: var(--font-family);
        color: white ;
        text-align: center;
        align-self: center;
    }
    .tvl-wall-of-work-card-rating{
        width: 100% ;
        text-align: center;
        padding-bottom: 4px ;

        
        .material-symbols-outlined {
            font-size: 18px ;
            color: #FFAA00 ;
            font-variation-settings: 'FILL' 1,
        }
    }

    @media screen and (min-width: 540px) {
        .tvl-wall-of-work-card-text{
            font-size: 15px;
        }
    }
    

    @media screen and (min-width: 1024px) {
        .tvl-wall-of-work-card{
            margin-bottom: 16px;
        }
        .tvl-wall-of-work-card-rating{
            
            .material-symbols-outlined {
                font-size: 22px ;
                color: #FFAA00 ;
                font-variation-settings: 'FILL' 1,
            }
        }
        .tvl-wall-of-work-card-text{
            font-size: 17px;
        }
    }
</style>