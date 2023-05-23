<template>
    <section class="tvl-about-section">
        <div class="tvl-about-section-wrapper">
            <div data-about-section-row="background" class="tvl-about-section-wrapper-rows"></div>
            <div data-about-section-row="content" class="tvl-about-section-wrapper-rows">
                <div class="tvl-about-content-container">
                    <div class="tvl-about-content-wrapper">
                        <div data-about-content-row="header" class="tvl-about-content-rows">
                            <AboutContentHeader ref="aboutHeader" v-on:toggle-about-content="toggleAboutSection" :content="content" />
                        </div>
                        <div data-about-content-row="content" class="tvl-about-content-rows">
                            <AboutContentBody ref="aboutBody" :content="content" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'AboutHero',
        data(){
            return {
                content: 'story'
            }
        },
        methods: {
            toggleAboutSection: function(content){
                console.log(content) ;
                this.$refs.aboutHeader.toggleAboutButton(content) ;
                this.$refs.aboutBody.toggleAboutContent(content) ;
            }
        }
    }
</script>

<style lang="scss">
    .tvl-about-section{
        width: 100% ;
        height: auto ;
        display: flex ;
        flex-direction: column;
        overflow: hidden;
    }
    .tvl-about-section-wrapper{
        width: 100% ;
        height: auto ;
        display: grid ;
        grid-template-columns: 1fr ;
        grid-template-rows: 1fr;
    }
    .tvl-about-section-wrapper-rows{
        grid-column: 1/2 ;
        grid-row: 1/2 ;

        &[data-about-section-row="background"]{
            scale: 1.2;
            background-image: url('@/assets/images/about/hero-background.jpg') ;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            filter: blur(var(--blur)) ;
            -webkit-filter: blur(var(--blur)) ;
            -moz-filter: blur(var(--blut)) ;
        }

        &[data-about-section-row="content"]{
            position: relative;
            z-index: 2;
        }
    }
    .tvl-about-content-container{
        width: 100% ;
        height: auto ;
        display: flex ;
        flex-direction: column;
    }
    .tvl-about-content-wrapper{
        width: 100% ;
        height: auto ;
        display: flex ;
        flex-direction: column;
        align-self: center;
    }
    .tvl-about-content-rows{
        width: 100% ;
    }

    @media screen and (min-width: 1024px) {
        .tvl-about-content-wrapper{
            flex-direction: row;
            justify-items: stretch;

            .tvl-about-content-rows{

                &[data-about-content-row="header"]{
                    width: 40% ;
                }
                &[data-about-content-row="content"]{
                    width: 60% ;
                }
            }
        }
    }
</style>