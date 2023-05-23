<template>
    <div class="tvl-home-hero-section-content-container">
        <div class="tvl-home-hero-section-content-wrapper">
            <h2 class="tvl-home-hero-section-content-heading">A design agency</h2>
            <p class="tvl-home-hero-section-content-text">Since 2019 we have <span>designed, built and delivered</span> <strong>top notch UX</strong> and <strong>beautiful websites</strong> for top companies globally.</p>
            <p data-shortcut="desktop" class="tvl-home-hero-section-content-subtext">Press <code>cmd + K</code>  / <code>Ctrl + K</code> anytime to activate contact form.</p>
            <p data-shortcut="mobile" class="tvl-home-hero-section-content-subtext"><code>Double Tap</code> anytime to activate contact form.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeroContent'
    }
</script>

<style lang="scss">
    .tvl-home-hero-section-content-container{
        width: 100% ;
        display: flex ;
        flex-direction: column;
    }
    .tvl-home-hero-section-content-wrapper{
        width: 280px ;
        align-self: center;
    }
    .tvl-home-hero-section-content-heading{
        font-size: 38px ;
        font-family: var(--font-family);
        font-weight: 300;
        text-transform: capitalize;
        text-align: center;
        padding-bottom: 12px ;
    }
    .tvl-home-hero-section-content-text{
        font-size: 13px ;
        font-family: var(--font-family);
        font-weight: 400;
        text-align: center;
        line-height: 1.5;
        padding-bottom: 32px;

        span{
            background: #FFE60030;
        }
    }

    .tvl-home-hero-section-content-subtext{
        font-size: 10px ;
        font-family: var(--font-family);
        font-weight: 400;
        text-align: center;
        color: #333333;
        display: none;
        
        code{
            font-weight: 600;
        }

        &[data-shortcut=desktop]{
            display: none;
        }

        &[data-shortcut=mobile]{
            display: block;
        }
    }

    @media screen and (min-width: 540px) {
        .tvl-home-hero-section-content-wrapper{
            width: 400px ;
        }
        .tvl-home-hero-section-content-heading{
            font-size: 52px ;
            padding-bottom: 16px ;
        }
        .tvl-home-hero-section-content-text{
            font-size: 16px ;
        }
        .tvl-home-hero-section-content-subtext{
            font-size: 13px ;
        }
    }

    @media screen and (min-width: 720px) {
        .tvl-home-hero-section-content-wrapper{
            width: 550px ;
        }
        .tvl-home-hero-section-content-heading{
            font-size: 68px ;
            padding-bottom: 32px ;
        }
        .tvl-home-hero-section-content-text{
            font-size: 20px ;
            padding-bottom: 64px;
        }
        .tvl-home-hero-section-content-subtext{
            font-size: 14px ;
        }
    }

    @media screen and (min-width: 1100px) {
        .tvl-home-hero-section-content-subtext{

            &[data-shortcut=desktop]{
                display: block;
            }

            &[data-shortcut=mobile]{
                display: none;
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .tvl-home-hero-section-content-wrapper{
            width: 650px ;
        }
        .tvl-home-hero-section-content-heading{
            font-size: 80px ;
            padding-bottom: 24px ;
        }
        .tvl-home-hero-section-content-text{
            font-size: 20px ;
            padding-bottom: 56px;
        }
        .tvl-home-hero-section-content-subtext{
            font-size: 14px ;

        }
    }

</style>