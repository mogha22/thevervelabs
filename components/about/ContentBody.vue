<template>
    <div class="tvl-about-content-body">
        <div class="tvl-about-content-body-image-container">
            <img src="~/assets/images/about/right-hand.png" alt="about image" class="tvl-about-content-body-image">
        </div>
        <div class="tvl-about-content-body-wrapper">
            <div class="tvl-about-content-body-container">
                <AboutContentBodyStory v-if="body === 'story'" />
                <AboutContentBodyPurpose v-if="body === 'purpose'"/>
                <AboutContentBodyWhatWeDo v-if="body === 'what-we-do'" />
                <AboutContentBodyValues v-if="body === 'values'" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutContentBody',
        props: {
            content: String
        },
        data(){
            return {
                body: this.$props.content
            }
        },
        methods: {
            toggleAboutContent: function(content){
                this.body = content ;
            }
        },
        setup(){

        }
    }
</script>

<style>
    .tvl-about-content-body{
        width: 100% ;
        display: flex ;
        flex-direction: column;
        padding: 56px 0px ;
    }
    .tvl-about-content-body-image-container{
        width: 100% ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-about-content-body-image{
        width: 80% ;
        align-self: flex-end;
        margin-bottom: 40px ;
    }
    .tvl-about-content-body-wrapper{
        width: 85% ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-about-content-body-container{
        width: 100% ;
        max-width: 480px ;
        align-self: center;
    }
    .tvl-about-content-body-container-wrapper{
        width: 100% ;
    }
    .tvl-about-content-body-heading{
        width: 100% ;
        font-size: 28px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        padding-bottom: 32px ;
        text-align: center;
    }
    .tvl-about-content-body-subheading{
        width: 100% ;
        font-size: 20px ;
        font-weight: 400 ;
        font-family: var(--font-family);
        padding-bottom: 16px ;
        text-align: center;
    }
    .tvl-about-content-body-text{
        font-size: 14px ;
        text-align: left;
        font-weight: 400 ;
        font-family: var(--font-family);
        padding-bottom: 24px ;
    }

    @media screen and (min-width: 720px) {
        .tvl-about-content-body-container{
            max-width: 560px ;
        }
        .tvl-about-content-body-heading{
            font-size: 40px ;
        }
        .tvl-about-content-body-subheading{
            font-size: 25px;
        }
        .tvl-about-content-body-text{
            font-size: 17px ;
            padding-bottom: 32px ;
        }
    }

    @media screen and (min-width: 1024px) {
        .tvl-about-content-body{
            padding: clamp(70px, 13vh, 110px) 0px clamp(70px, 13vh, 110px) 0px ;
        }
        .tvl-about-content-body-heading{
            font-size: 48px ;
            padding-bottom: 56px ;
        }
    }
</style>