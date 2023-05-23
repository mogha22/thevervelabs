<template>
    <section class="tvl-case-study-section">
        <div class="tvl-case-study-section-wrapper">
            <div id="tvl-case-study-content" data-element-type="content" data-element-state="hidden" class="tvl-case-study-content-container">
                <h3 class="tvl-case-study-section-heading">Case Studies</h3>
                <p class="tvl-case-study-section-text">Explore our success stories and discover how our services have helped clients achieve their goals and exceed their expectations.</p>
            </div>
            <div id="tvl-case-study-cards" data-element-type="cards" class="tvl-case-study-cards-container">
                <div class="tvl-case-study-cards-container-wrapper">
                    <template v-for="study in studies">
                        <HomeCaseStudyCard
                            v-on:toggle-case-study-card="toggleCaseStudyCard"
                            :ref="study.id"
                            :id="study.id"
                            :organisation="study.organisation"
                            :location="study.location"
                            :text="study.text"
                            :number="study.num"
                            :image="study.image"
                            :state="study.state"
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
        name: 'CaseStudy',
        data(){
            return {

                observer: {
                    content: null,
                    cards: null
                },
                studies: [
                    {
                        id: 'monk-e',
                        num: '01',
                        organisation: 'Monk Entertainment',
                        location: 'Maharastra, India',
                        text: 'Website design and development for the Australian Solar installation firm.',
                        image: 'monke_image.gif',
                        state: 'closed'
                    },
                    {
                        id:'eps',
                        num: '02',
                        organisation: 'EverPower Solar',
                        location: 'Brisbane, Australia',
                        text: 'Future is Bright: How We Helped Everpower Solar Achieve It’s Solar Dream In Austrailia',
                        image: 'eps_image.jpg',
                        state: 'closed'
                    },
                    {
                        id: 's4g',
                        num: '03',
                        organisation: 'Solar 4 Good',
                        location: 'London, United Kingdom',
                        text: 'UK’s solar transformation: Solar4good’s novel attempt and our collaboration',
                        image: 'solar4good_image.jpg',
                        state: 'closed'
                    },
                    {
                        id: 'nmsmen',
                        num: '04',
                        organisation: 'Neems For Men',
                        location: 'Gujrat, India',
                        text: 'The story of the beautiful relationship that started in 2019 with a phone call from Neems founder - Dhruv Desai to The Verve Labs',
                        image: 'neems_image.jpg',
                        state: 'open'
                    },
                    
                ]
            }
        },

        methods:{
            toggleCaseStudyCard: function(card){

                this.studies.forEach(study => {
                    this.$refs[study.id][0].cardState = (study.id === card)? 'open':'closed' ;
                }) ;
                
            },
            
            initCaseStudyObserver(element){

                let options = this.observerStore.options ;
                this.observer[element] = new IntersectionObserver(this.caseStudyAnimation, options) ;
            },

            caseStudyObserver(){

                Object.keys(this.observer).forEach(element=>{

                    if(!this.observer[element]){
                        
                        let target = document.getElementById(`tvl-case-study-${element}`) ;

                            this.initCaseStudyObserver(element) ;
                            this.observer[element].observe(target) ;
                    }

                })

            },

            caseStudyAnimation(entries, observer){

                let target = entries[0].target,
                    isVisible = entries[0].isIntersecting,
                    element = target.dataset.elementType ;

                    if(isVisible){

                        target.setAttribute('data-element-state', 'visible') ;
                        this.observer[element].unobserve(target) ;
                    }
            }

        },
        mounted(){

            this.caseStudyObserver() ;
        },
        setup(){

            return {
                observerStore: useObserverOptionStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-case-study-section{
        width: 100% ;
        height: auto ;
        display: flex;
        flex-direction: column;
        padding: clamp(55px, 10vh, 110px) 0px ;
        background-color: black ;
        backdrop-filter: blur(50px);
    }
    .tvl-case-study-section-wrapper{
        width: 90% ;
        min-width: 290px ;
        padding: 16px 0px ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-case-study-content-container{
        width: 100% ;
        display: flex ;
        flex-direction: column;
        align-self: center;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .tvl-case-study-section-heading{
        font-size: 36px ;
        font-weight: 200 ;
        font-family: var(--font-family);
        text-align: center;
        color: white ;
        padding: 0px 0px 24px 0px ;
    }
    .tvl-case-study-section-text{
        width: 90% ;
        max-width: 480px ;
        font-size: 12px ;
        font-weight: 200 ;
        font-family: var(--font-family);
        text-align: center;
        align-self: center;
        color: white ;
        line-height: 1.55;
    }
    .tvl-case-study-cards-container{
        width: 100% ;
        height: auto ;
        display: flex ;
        flex-direction: column;
        margin: clamp(70px, 15vh, 180px) 0px 32px 0px ;
        padding-top: 20px ;
        opacity: 0;
        transform: translateY(var(--scroll-y-offset));
        transition: var(--scroll-transition);

        &[data-element-state="visible"]{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .tvl-case-study-cards-container-wrapper{
        width: 100% ;
        max-width: 540px ;
        height: 700px ;
        display: flex ;
        flex-direction: column;
        align-self: center;

    }

    @media screen and (min-width: 540px) {
        .tvl-case-study-section-heading{
            font-size: 48px ;
        }
        .tvl-case-study-section-text{
            font-size: 15px ;
        }
    }
    @media screen and (min-width: 720px) {
        .tvl-case-study-section-heading{
            font-size: 56px ;
        }
    }
    @media screen and (min-width: 1024px) {
        .tvl-case-study-section-wrapper{
            width: 100% ;
        }
        .tvl-case-study-section-heading{
            font-size: 64px ;
        }
        .tvl-case-study-section-text{
            font-size: 16px ;
        }
        .tvl-case-study-cards-container-wrapper{
            height: 550px ;
            width: 90%;
            max-width: unset;
            //max-width: 1200px;
            flex-direction: row;
            align-self: flex-end;
        }
    }
</style>