<template>
    <section class="tvl-testimonials-section">
        <div class="tvl-testimonials-section-wrapper">
            <div id="tvl-testimonials-container" data-element-state="hidden" class="tvl-testimonials-container">
                <h3 class="tvl-testimonials-container-heading">Testimonials</h3>
                <p class="tvl-testimonials-container-text">People love our work</p>
                <div class="tvl-testimonials-cards-container">
                    <template v-for="(testimonial, index) in testimonials">
                        <HomeTestimonialsCards
                            :id="index"
                            :name=testimonial.name
                            :text=testimonial.text
                            :organisation=testimonial.organisation
                            :thumbnail=testimonial.thumbnail
                        />
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { useObserverOptionStore } from '~/store';

    export default {
        name: 'Testimonials',
        data(){

            return {
                observer: null,
                testimonials: [
                    {
                        name:'Dhruv Desai',
                        organisation: 'Neems Enterprice',
                        thumbnail: 'neems.png',
                        text: 'Working with The Verve Labs was a game changer for my business. They took my vision and turned it into a website that not only looks amazing but also functions like a dream. The team was great to work with and always found ways to solve any issues that came up. I couldn’t have done it without them, they truly went above and beyond. I highly recommend them to anyone looking for a top-notch IT partner!'
                    },
                    {
                        name:'Mitesh Halani',
                        organisation: 'Ever Power Solar',
                        thumbnail: 'eps.jpg',
                        text: 'The website they delivered for us was not only visually appealing but also easy to navigate, which helped us to convert more leads. They also helped us to optimize the website for search engines and increase our visibility online. We are extremely happy with the final product and would highly recommend The Verve Labs to any business looking for an IT agency that can deliver results. They truly are the best in the business'
                    },
                    {
                        name:'Mitesh Halani',
                        organisation: 'Solar 4 Good',
                        thumbnail: 'eps.jpg',
                        text: 'I have to say, working with The Verve Labs was a fantastic experience. From the very beginning, their team was professional, knowledgeable, and extremely easy to work with. They took the time to understand our business and our needs, and they were able to deliver a website that exceeded our expectations.'
                    },
                    {
                        name:'Sumit Kapse',
                        organisation: 'Hatchh It',
                        thumbnail: 'hatchh-it.png',
                        text: 'It felt really good working with Rahul and Himanshu. These guys seriously take up your work with utmost dedication. Rahul makes really good connections and it feels like you are working with your bros. Great work guys. Loved working with you.'
                    }
                ]
            }
        },
        methods: {

            initTestimonialObserver(){

                let options = this.observerStore.options ;
                this.observer = new IntersectionObserver(this.testimonialSectionAnimation, options) ;
            },

            testimonialSectionObserver(){

                if(!this.observer){

                    this.initTestimonialObserver() ;
                    this.observer.observe(document.getElementById('tvl-testimonials-container')) ;

                }
            },

            testimonialSectionAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting ;

                    if(isVisible){

                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer.unobserve(target) ;

                    }

            }
        },
        mounted(){

            this.testimonialSectionObserver() ;
        },
        setup(){

            return {
                observerStore: useObserverOptionStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-testimonials-section{
        width: 100% ;
        height: auto ;
        padding: clamp(55px, 8vh, 80px) 0px clamp(27px, 4vh, 40px) 0px ;
        position: relative ;
        z-index: 2;
        
        &::before{
            content: "";
            width: 100% ;
            height: clamp(165px, 24vh, 240px) ;
            background-color: black;
            position: absolute;
            top: 0px;
            left: 0px ;
            z-index: -1;
        }
    }
    .tvl-testimonials-section-wrapper{
        width: 100% ;
        display: flex ;
        flex-direction: column;
    }
    .tvl-testimonials-container{
        width: 90% ;
        min-width: 300px ;
        //max-width: 850px ;
        height: auto ;
        display: flex;
        flex-direction: column;
        padding: clamp(24px, 5vh, 32px) 0px ;
        align-self: center;
        background-color: #1C56BA;
        backdrop-filter: blur(50px);
        border-radius: 8px ;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            transform: translateY(0);
            opacity: 1;
        }
    }
    .tvl-testimonials-container-heading{
        font-size: 26px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: center;
        padding-bottom: 6px ;
        color: white ;
    }
    .tvl-testimonials-container-text{
        font-size: 12px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: center;
        padding-bottom: 8px ;
        color: white ;
    }
    .tvl-testimonials-cards-container{
        width: 100% ;
        padding-top: clamp(24px, 8vh, 40px) ;
    }

    @media screen and (min-width:720px) {

        .tvl-testimonials-container{
            padding: clamp(32px, 10vh, 56px) 0px ;
        }
        .tvl-testimonials-container-heading{
            font-size: 35px ;
        }
        .tvl-testimonials-container-text{
            font-size: 14px ;
        }
    }

    @media screen and (min-width: 1024px ) {
        .tvl-testimonials-container{
            min-width: 850px ;
            border-radius: 16px ;
        }
        .tvl-testimonials-cards-container{
            width: 90% ;
            align-self: center;
        }
    }
</style>

