<template>
    <div :id="`tvl-why-us-cards-${id}`" data-element-state="hidden" class="tvl-why-us-cards">
        <div class="tvl-why-us-cards-wrapper">
            <p class="tvl-why-us-cards-emoji">{{ emoji }}</p>
            <h5 class="tvl-why-us-cards-heading">{{ heading }}</h5>
            <p class="tvl-why-us-cards-text">{{ content }}</p>
            <p :data-card-tag-type='type' class="tvl-why-us-cards-tag">{{ tag }}</p>
        </div>
    </div>
</template>

<script>
    import { useObserverOptionStore } from '~/store';

    export default{
        name: 'WhyUsCards',
        props:{
            id: Number,
            emoji: String,
            heading: String,
            content: String,
            tag: String,
            type: String
        },
        methods:{

            cardObserverCallback(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting ;

                    if(isVisible)
                    target.setAttribute('data-element-state', 'visible') ;

            },
            cardObserver(){

                let options = this.observerStore.options ;
                let observer =   new IntersectionObserver(this.cardObserverCallback, options) ;

                    observer.observe(document.getElementById(`tvl-why-us-cards-${this.$props.id}`)) ;
            }
        },
        mounted(){

            this.cardObserver() ;
            
        },
        setup(){

            return {
                observerStore: useObserverOptionStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-why-us-cards{
        width: 100% ;
        display: inline-flex ;
        flex-direction: column;
        align-self: center;
        margin: 20px auto ;
        padding-bottom: 24px ;
        vertical-align: middle;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            transform: translateY(0);
            opacity: 1;
        }
    }
    .tvl-why-us-cards-wrapper{
        width: 260px;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-why-us-cards-emoji{
        font-size: 24px ;
        text-align: center;
        padding-bottom: 24px ;
    }
    .tvl-why-us-cards-heading{
        font-size: 20px ;
        font-family: var(--font-family);
        font-weight: 500;
        text-align: center;
        color: white ;
        padding-bottom: 16px ;
    }
    .tvl-why-us-cards-text{
        width: 90% ;
        font-size: 13px ;
        font-family: var(--font-family);
        font-weight: 400;
        text-align: center;
        color: #CCCCCC;
        padding-bottom: 16px ;
        line-height: 1.5;
        align-self: center;
    }
    .tvl-why-us-cards-tag{
        align-self: center;
        width: fit-content;
        max-width: 80%;
        font-size: 11px ;
        font-family: var(--font-family);
        font-weight: 700;
        text-align: center;
        color: black;
        padding: 5px 9px ;
        border-radius: 40px ;
        margin: 0px auto ;

        &[data-card-tag-type="delivery"]{
            background-color: #B5CEFF;
        }
        &[data-card-tag-type="clients"]{
            background-color: #D8FFD1;
        }
        &[data-card-tag-type="guarantee"]{
            background-color: #A9A7D8;
        }
        &[data-card-tag-type="payment"]{
            background-color: #ABEBFF;
        }
        &[data-card-tag-type="support"]{
            background-color: #FFC7C7;
        }
        &[data-card-tag-type="award"]{
            background-color: #FEC9FF
        }
    }

    @media screen and (min-width: 720px) {
        .tvl-why-us-cards-wrapper{
            width: 300px;
        }
        .tvl-why-us-cards-emoji{
            font-size: 32px ;
        }
        .tvl-why-us-cards-heading{
            font-size: 24px ;
        }
        .tvl-why-us-cards-text{
            font-size: 14px ;
            padding-bottom: 20px ;
        }
        .tvl-why-us-cards-tag{
            font-size: 11px ;
        }
    }

    @media screen and (min-width: 1024px) {
        .tvl-why-us-cards{
            width: 49%;
            margin: 20px 0.4%;
            padding-bottom: 32px ;
        }
    }
    @media screen and (min-width: 1200px) {
        .tvl-why-us-cards{
            width: 33.33%;
            margin: 20px auto;
        }
    }
</style>