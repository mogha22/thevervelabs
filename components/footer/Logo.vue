<template>
    <div class="tvl-footer-logo-section">
        <div class="tvl-footer-logo-section-wrapper">
            <img src="~/assets/images/footer/logo.png" alt="The Verve Labs" class="tvl-footer-logo">
            <div class="tvl-footer-socials-logo-container">
                <div class="tvl-footer-socials-logo-wrapper">
                    <a class="tvl_footer-socials-logo-anchor" href="https://www.instagram.com/vervelabs/" target="_blank">
                        <img src="~/assets/images/footer/insta.png" alt="The Verve Labs instagram" class="tvl-footer-socials-logo">
                    </a>
                    <a class="tvl_footer-socials-logo-anchor" href="https://www.facebook.com/vervelabs" target="_blank">
                        <img src="~/assets/images/footer/fb.png" alt="The Verve Labs facebook" class="tvl-footer-socials-logo">
                    </a>
                    <a class="tvl_footer-socials-logo-anchor" href="https://twitter.com/thevervelabs" target="_blank">
                        <img src="~/assets/images/footer/twitter.png" alt="The Verve Labs twitter" class="tvl-footer-socials-logo">
                    </a>
                    <a class="tvl_footer-socials-logo-anchor" href="https://in.linkedin.com/company/thevervelabs" target="_blank">
                        <img src="~/assets/images/footer/linkedin.png" alt="The Verve Labs linkedin" class="tvl-footer-socials-logo">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterLogo'
    }
</script>

<style lang="scss">
    .tvl-footer-logo-section{
        width: 100% ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-footer-logo-section-wrapper{
        width: 90% ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-footer-logo{
        width: 220px ;
        height: auto ;
        align-self: center;
        margin-bottom: 24px ;
    }
    .tvl-footer-socials-logo-container{
        width: 100% ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-footer-socials-logo-wrapper{
        width: 180px ;
        align-self: center;
        display: flex ;
        flex-direction: row;
        justify-content: space-between;
    }
    .tvl-footer-logo-anchor{
        width: auto ;
        align-self: center;
    }
    .tvl-footer-socials-logo{
        width: 20px ;
        height: auto ;
        align-self: center;
    }

    @media screen and (min-width:1100px) {
        .tvl-footer-logo-section-wrapper{
            width: 220px ;
        }
    }
</style>