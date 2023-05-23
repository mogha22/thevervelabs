<template>
    <section class="tvl-brand-identity-section">
        <div class="tvl-brand-identity-section-wrapper">
            <div data-brand-identity-row="content" class="tvl-brand-identity-section-rows">
                <div id="tvl-brand-identity-content" data-element-state="hidden" class="tvl-brand-identity-content">
                    <h4 class="tvl-brand-identity-heading">Step up your brand’s identity</h4>
                    <p class="tvl-brand-identity-subheading">by stepping up your design game.</p>
                    <p class="tvl-brand-identity-text">An incredible logo, website and social media posts go a long way in making that first impression in your customer’s eyes.</p>
                    <ContactButton type="black" />
                </div>
            </div>
            <div data-brand-identity-row="image" class="tvl-brand-identity-section-rows">
                <div id="tvl-brand-identity-image" data-element-state="hidden" class="tvl-brand-identity-image-container">
                    <img src="~/assets/images/home/brand-identity.png" alt="Step up your brand identity" class="tvl-brand-identity-image">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { useObserverOptionStore } from '~/store';
    export default {
        name: 'BrandIdentity',
        data(){
            return {
                observer: {
                    content: null,
                    image: null
                }
            }
        },
        methods: {

            initIdentityObserver(section){

                let options = this.observerStore.options ;

                switch (section) {

                    case 'content': this.observer.content = new IntersectionObserver(this.identityContentAnimation, options) ;
                                    break;
                
                    case 'image':   this.observer.image = new IntersectionObserver(this.identityImageAnimation, options) ;
                                    break;
                }
                
            },

            identityObserver(){

                if(!this.observer.content){
                    this.initIdentityObserver('content') ;
                    this.observer.content.observe(document.getElementById('tvl-brand-identity-content')) ;
                }

                if(!this.observer.image){
                    this.initIdentityObserver('image') ;
                    this.observer.image.observe(document.getElementById('tvl-brand-identity-image')) ;
                }
            },

            identityImageAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting ;

                    if(isVisible){
                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer.image.unobserve(target) ;
                    }
            },

            identityContentAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting ;

                    if(isVisible){
                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer.content.unobserve(target) ;
                    }
            }
        },
        mounted(){

            this.identityObserver() ;
        },
        setup(){

            return {
                observerStore: useObserverOptionStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-brand-identity-section{
        width: 100% ;
        height: auto ;
        padding: clamp(60px, 10vh, 120px) 0px ;
        display: flex ;
        flex-direction: column;
    }
    .tvl-brand-identity-section-wrapper{
        width: 85% ;
        min-width: 280px ;
        max-width: 320px ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-brand-identity-section-rows{
        width: 100% ;
        margin: 24px 0px ;
        padding: 8px 0px ;
    }
    .tvl-brand-identity-content{
        width: 90% ;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .tvl-brand-identity-heading{
        font-size: 44px ;
        font-weight: 300;
        font-family: var(--font-family);
        text-align: left;
        padding-bottom: 24px ;
    }
    .tvl-brand-identity-subheading{
        font-size: 16px ;
        font-weight: 300;
        font-family: var(--font-family);
        text-align: left;
        padding-bottom: 16px ;
    }
    .tvl-brand-identity-text{
        font-size: 11px ;
        font-weight: 500;
        font-family: var(--font-family);
        text-align: left;
        padding-bottom: 24px ;
    }
    .tvl-brand-identity-image-container{
        width: 100% ;
        height: auto ;
        display: flex ;
        flex-direction: column;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .tvl-brand-identity-image{
        width: 100% ;
        max-width: 360px;
        height: auto ;
        align-self: center;
        border-radius: 6px ;
    }

    @media screen and (min-width: 720px) {
        .tvl-brand-identity-section-wrapper{
            min-width: 600px ;
            max-width: 1050px ;
            flex-direction: row;
            justify-content: space-between;
        }
        .tvl-brand-identity-section-rows{
            width: 45% ;
            align-self: flex-start;
        }
    }

    @media screen and (min-width: 1024px) {
        .tvl-brand-identity-section-wrapper{
            min-width: 900px ;
            max-width: 1200px ;
        }
        .tvl-brand-identity-heading{
            font-size: 56px ;
            padding-bottom: 32px ;
            font-weight: 200;
        }
        .tvl-brand-identity-subheading{
            font-size: 20px ;
            padding-bottom: 24px ;
        }
        .tvl-brand-identity-text{
            font-size: 14px ;
            padding-bottom: 32px ;
        }
    }
    @media screen and (min-width: 1200px) {
        .tvl-brand-identity-section-wrapper{
            min-width: 900px ;
            max-width: 1100px ;
            justify-content: space-around;
        }
        .tvl-brand-identity-section-rows{
            width: 42% ;
        }
        .tvl-brand-identity-heading{
            font-size: 76px ;
            padding-bottom: 32px ;
        }
        .tvl-brand-identity-subheading{
            font-size: 25px ;
        }
    }
</style>