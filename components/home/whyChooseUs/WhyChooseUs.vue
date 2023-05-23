<template>
    <section class="tvl-why-us-section">
        <div class="tvl-why-us-section-wrapper">
            <div id="tvl-why-us-section-content" data-element-state="hidden" class="tvl-why-us-section-content-container">
                <h3 class="tvl-why-us-section-heading">Why Choose Us ?</h3>
                <p class="tvl-why-us-section-subheading">What makes us stand out ?</p>
            </div>
            <div class="tvl-why-us-cards-container">
                <div class="tvl-why-us-cards-container-wrapper">
                    <template v-for="(card, index) in cards">
                        <HomeWhyUsCards
                            :id="index"
                            :emoji=card.emoji
                            :heading=card.heading
                            :content=card.content
                            :tag=card.tag
                            :type=card.type
                        />
                    </template>
                </div>  
            </div>
        </div>
    </section>
</template>

<script>
    import { useObserverOptionStore } from '~/store';

    export default{
        name: 'WhyChooseUs',
        data(){
            return {
                observer: null,
                cards:[
                    {
                        emoji:`\uD83D\uDE80`,
                        heading: 'Super-fast Delivery',
                        content: 'Fastest turn-around time of under 1 week, among agencies',
                        tag: 'Average time : 48 hours',
                        type:'delivery'
                    },
                    {
                        emoji:'\uD83D\uDE0C',
                        heading: 'Limited no. of clients',
                        content: 'To ensure quality we work with only a handful of clients at a given time',
                        tag: 'Usually no more than 5 a time',
                        type:'clients'
                    },
                    {
                        emoji:'\uD83D\uDCB8',
                        heading: 'Money-back guarantee',
                        content: 'In case we don’t hit off and you don’t like our work, you get full refund, no questions asked',
                        tag: 'We have never had to refund a client',
                        type: 'guarantee'
                    },
                    {
                        emoji:'\uD83E\uDDD8',
                        heading: 'Flexible Payment Options',
                        content: 'We provide multiple payment options to make our client’s life easy',
                        tag: 'Project Quotation basis or Monthly/Annual Subscriptions',
                        type: 'payment'
                    },
                    {
                        emoji:'\uD83C\uDFA7',
                        heading: 'Incredible Client Support',
                        content: 'Our Customer first approach has led to incredible client satisfaction ratings resulting in long lasting relationships',
                        tag: '24/7 Direct in-touch with Co-founder',
                        type: 'support'
                    },
                    {
                        emoji:'	\uD83C\uDFC6',
                        heading: 'Award Winning Designs',
                        content: 'Design is what we are great at, no matter what your needs are, we will get the industry best design done for you.',
                        tag: '∞ Revisions until you are satisfied',
                        type: 'award'
                    },
                ]
            }
        },
        methods: {

            initObserver(){

                let options = this.observerStore.options ;
                this.observer =  new IntersectionObserver(this.sectionAnimation, options) ;
            },

            observeSection(){

                if(!this.observer){

                    this.initObserver() ;
                    this.observer.observe(document.getElementById('tvl-why-us-section-content')) ;

                }

            },

            sectionAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting;

                    if(isVisible){
                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer.unobserve(target) ;
                    }
                    
            }
        },
        mounted(){

            this.observeSection() ;
        },
        setup(){

            return {
                observerStore: useObserverOptionStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-why-us-section{
        width: 100% ;
        padding: 24px 0px ;
        background-color: black;
        backdrop-filter: blur(50px);
        display: flex ;
        flex-direction: column;
        position: relative;
        z-index: 2;
    }
    .tvl-why-us-section-wrapper{
        width: 95% ;
        min-width: 280px ;
        align-self: center;
    }
    .tvl-why-us-section-content-container{
        width: 100% ;
        align-self: center;
        display: flex ;
        flex-direction: column;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            transform: translateY(0px);
            opacity: 1;
        }
    }
    .tvl-why-us-section-heading{
        font-size: 36px ;
        font-family: var(--font-family);
        font-weight: 200;
        color: #FFFFFF ;
        text-align: center;
        padding-bottom: 12px ;
    }
    .tvl-why-us-section-subheading{
        font-size: 14px ;
        font-family: var(--font-family);
        font-weight: 200;
        color: #FFFFFF ;
        text-align: center;
    }

    .tvl-why-us-cards-container{
        width: 100% ;
        display: flex ;
        flex-direction: column;
        margin: 56px 0px 32px 0px ;
    }
    .tvl-why-us-cards-container-wrapper{
        width: 90% ;
        align-self: center;
    }

    @media screen and (min-width: 540px) {
        .tvl-why-us-section-heading{
            font-size: 48px ;
            padding-bottom: 18px ;
        }
        .tvl-why-us-section-subheading{
            font-size: 18px ;
        }
        
    }
    @media screen and (min-width: 720px) {
        .tvl-why-us-section-heading{
            font-size: 60px ;
            padding-bottom: 18px ;
        }
        .tvl-why-us-section-subheading{
            font-size: 22px ;
        }
        .tvl-why-us-cards-container{
            margin-top: 64px;
        }
    }
    @media screen and (min-width: 1200px) {
        .tvl-why-us-section-heading{
            font-size: 75px ;
            padding-bottom: 18px ;
        }
        .tvl-why-us-section-subheading{
            font-size: 25px ;
        }
    }
</style>