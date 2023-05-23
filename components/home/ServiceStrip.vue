<template>
    <div class="tvl-hero-service-strip-container">
        <div class="tvl-hero-service-strip-wrapper">
            <div class="tvl-hero-service-strip-rows">
                <p class="tvl-hero-service-strip-text">Webflow</p>
                <p class="tvl-hero-service-strip-text">Development</p>
                <p class="tvl-hero-service-strip-text">UX/UI</p>
                <p class="tvl-hero-service-strip-text">Packaging</p>
                <p class="tvl-hero-service-strip-text">Enterprise Software Development</p>
            </div>
            <div class="tvl-hero-service-strip-rows">
                <p class="tvl-hero-service-strip-text">Webflow</p>
                <p class="tvl-hero-service-strip-text">Development</p>
                <p class="tvl-hero-service-strip-text">UX/UI</p>
                <p class="tvl-hero-service-strip-text">Packaging</p>
                <p class="tvl-hero-service-strip-text">Enterprise Software Development</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'HeroServiceStrip'
    }
</script>

<style lang="scss">
    .tvl-hero-service-strip-container{
        width: 100% ;
        height: auto ;
        padding: 32px 0px ;
        margin: 32px 0px ;
        overflow: hidden;
    }
    .tvl-hero-service-strip-wrapper{
        width: auto ;
        display: flex ;
        flex-direction: row;
        justify-items: center;
    }
    .tvl-hero-service-strip-rows{
        width: auto;
        align-self: center;
        white-space: nowrap;
        //flex-wrap: nowrap;
        animation: cssmarquee 20s linear infinite ;
    }
    .tvl-hero-service-strip-text{
        font-size: 24px ;
        font-weight: 300;
        font-family: var(--font-family);
        padding: 8px 16px ;
        margin: 0px 8px ;
        display: inline-block;
    }

    @keyframes cssmarquee {
        0%{
            transform: translateX(0%);
        }
        100%{
            transform: translateX(-100%);
        }
    }

    @media screen and (min-width:720px) {
        .tvl-hero-service-strip-text{
            font-size: 32px ;
            padding: 8px 16px ;
            margin: 0px 24px ;
        }
    }
    @media screen and (min-width:1200px) {
        .tvl-hero-service-strip-container{
            padding: 40px 0px ;
            margin: 40px 0px ;
        }
        .tvl-hero-service-strip-text{
            font-size: 40px ;
            margin: 0px 56px ;
        }
    }
</style>