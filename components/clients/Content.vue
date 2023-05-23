<template>
    <section class="tvl-clients-body-section">
        <div class="tvl-clients-body-wrapper">
            <div data-body-row="heading" class="tvl-clients-body-rows">
                <h3 class="tvl-clients-body-heading">{{ heading }}</h3>
            </div>
            <div data-body-row="content" class="tvl-clients-body-rows">
                <p v-for="text in texts" class="tvl-clients-body-text">{{ text }}</p>
                <div class="tvl-clients-body-image-container">
                    <img :id="`tvl-clients-body-image-${image}`" v-if="image" :alt="heading" class="tvl-clients-body-image">
                </div>
            </div> 
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ClientsContentBody',
        props: {
            heading: String,
            texts: Array,
            image: String
        },
        computed:{
            contentImage(){
                return new URL(`/assets/images/clients/${this.$props.image}`, import.meta.url)
            }
        },
        methods: {
            loadContentImage(){

                let img = document.getElementById(`tvl-clients-body-image-${this.$props.image}`) ;
                    if(img) img.src = this.contentImage ;
            }
        },
        mounted(){
            this.loadContentImage() ;
        }
    }
</script>

<style lang="scss">
    .tvl-clients-body-section{
        width: 100% ;
        display: flex ;
        flex-direction: column;
        margin: clamp(35px, 5vh, 50px) 0px ;
    }
    .tvl-clients-body-wrapper{
        width: 85% ;
        min-width: 280px ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-clients-body-rows{
        width: 100% ;
        align-self: center;

        &[data-body-row="heading"]{
            padding-bottom: 16px ;
        }

        &[data-body-row="content"]{
            padding-bottom: 32px ;
        }
    }
    .tvl-clients-body-heading{
        font-size: 24px ;
        font-weight: 400 ;
        font-family: var(--font-family);
    }
    .tvl-clients-body-text{
        font-size: 15px ;
        font-weight: 300 ;
        text-align: left ;
        font-family: var(--font-family);
        padding-bottom: 16px ;
        line-height: 1.45;
    }

    .tvl-clients-body-image-container{
        width: 100%;
        align-self: center;
        margin: 32px 0px ;
    }
    .tvl-clients-body-image{
        width: 100% ;
        height: auto;
    }

    @media screen and (min-width: 720px) {
        .tvl-clients-body-wrapper{
            flex-direction: row;
        }

        .tvl-clients-body-rows{
            width: unset;

            &[data-body-row="heading"]{
                width: 30% ;
                max-width: 300px;
                align-self: flex-start;
            }

            &[data-body-row="content"]{
                flex: 1 ;
                align-self: flex-start;
            }
        }
    }

    @media screen and (min-width: 1100px) {
        .tvl-clients-body-heading{
            font-size: 32px ;
        }
        .tvl-clients-body-text{
            font-size: 16px ;
            padding-bottom: 24;
        }
    }
</style>