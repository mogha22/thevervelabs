<template>
    <div :id="`tvl-testimonial-card-${id}`" data-element-state="hidden" class="tvl-testimonial-card">
        <div class="tvl-testimonial-card-wrapper">
            <div class="tvl-testimonial-card-content">
                <img src="~/assets/images/testimonials/quote.png" alt="Quotes" class="tvl-testimonials-card-quotes">
                <p class="tvl-testimonials-card-text">{{ text }}</p>
                <div class="tvl-testimonials-card-footer">
                    <div data-testimonials-card-row="image" class="tvl-testimonials-card-footer-row">
                        <img :id="`testimonial-card-thumbnail-${id}`" class="tvl-testimonials-card-thumbnail" />
                    </div>
                    <div data-testimonials-card-row="content" class="tvl-testimonials-card-footer-row">
                        <p class="tvl-testimonials-card-name">{{ name }}</p>
                        <p class="tvl-testimonials-card-organisation">{{ organisation }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useObserverOptionStore } from '~/store' ;

    export default {
        name: 'TestimonialCards',
        props: {
            id: Number,
            text: String,
            thumbnail: String,
            name: String,
            organisation: String
        },
        computed:{

            image(){

                return new URL(`/assets/images/testimonials/${this.$props.thumbnail}`, import.meta.url) ;
            }
        },
        data(){

            return {
                observer: null,
                imageUrl: new URL(`/src/assets/images/testimonials/${this.$props.thumbnail}`, import.meta.url)
            }
        },
        methods: {

            loadThumbnail(){

                let img = document.getElementById(`testimonial-card-thumbnail-${this.$props.id}`) ;
                    img.src = this.image ;
            },

            initTestimonialCardObserver(){

                let options = this.observerStore.options ;
                this.observer = new IntersectionObserver(this.testimonialCardAnimation, options) ;
            },

            testimonialCardObserver(){

                if(! this.observer){

                    this.initTestimonialCardObserver() ;
                    this.observer.observe(document.getElementById(`tvl-testimonial-card-${this.$props.id}`)) ;

                }
            },

            testimonialCardAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting ;

                    if(isVisible){
                        
                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer.unobserve(target) ;
                        
                    }

            }

        },

        mounted(){

            this.loadThumbnail() ;
            this.testimonialCardObserver() ;

        },
        setup(){

            return {
                observerStore: useObserverOptionStore()
            }

        }
    }
</script>

<style lang="scss">
    .tvl-testimonial-card{
        width: 100% ;
        display: inline-flex ;
        flex-direction: column;
        margin: 16px 0px ;
        padding: 8px 0px ;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .tvl-testimonial-card-wrapper{
        width: 85%;
        min-width: 260px ;
        max-width: 450px ;
        background-color: white ;
        align-self: center;
        border-radius: 8px ;
        padding: 20px 16px ;
        box-sizing: border-box;
    }
    .tvl-testimonials-card-quotes{
        width: 12px ;
        height: auto ;
        padding: 4px 0px 12px 0px ;
        align-self: flex-start;
    }
    .tvl-testimonials-card-text{
        font-size: 14px ;
        font-weight: 400;
        font-family: var(--font-family);
        padding: 0px 4px 18px 4px  ;
    }
    .tvl-testimonials-card-footer{
        width: 100% ;
        display: flex ;
        flex-direction: row;
        padding: 0px 4px ;
        box-sizing: border-box;
    }
    .tvl-testimonials-card-footer-row{
        align-self: center;

        &[data-testimonials-card-row="image"]{
            width: 40px ;
            height: auto ;
        }

        &[data-testimonials-card-row="content"]{
            padding-left: 4px ;
            box-sizing: border-box;
        }
    }

    .tvl-testimonials-card-thumbnail{
            width: 32px ;
            height: auto ;
            border-radius: 100% ;
            overflow: hidden;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        .tvl-testimonials-card-name{
            font-size: 12px ;
            font-weight: 400;
            font-family: var(--font-family);
            padding-bottom: 2px ;
        }
        .tvl-testimonials-card-organisation{
            font-size: 10px ;
            font-weight: 400;
            font-family: var(--font-family);
        }

    @media screen and (min-width: 1024px) {
        .tvl-testimonial-card{
            width: 50% ;
            margin: 24px 0px ;
            padding: 16px 0px ;
        }
        .tvl-testimonial-card-wrapper{
            max-width: none;
            padding: 20px 20px 30px 20px ;
            border-radius: 16px ;
        }
        .tvl-testimonials-card-footer-row{
            padding-left: 8px ;

            &[data-testimonials-card-row="image"]{
                width: 50px ;
            }

            &[data-testimonials-card-row="content"]{
                padding-left: 0px ;
            }
        }
        .tvl-testimonials-card-quotes{
            width: 16px ;
        }
        .tvl-testimonials-card-text{
            font-size: 17px ;
            padding-left: 8px ;
            padding-bottom: 30px ;
        }
        .tvl-testimonials-card-thumbnail{
            width: 40px ;
        }
        .tvl-testimonials-card-name{
            font-size: 14px ;
        }
        .tvl-testimonials-card-organisation{
            font-size: 11px ;
        }
        
    }
</style>