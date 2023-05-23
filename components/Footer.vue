<template>
    <footer class="tvl-footer">
        <div class="tvl-footer-wrapper">
            <div data-footer-wrapper-row="logo" class="tvl-footer-wrapper-rows">
                <FooterLogo />
            </div>
            <div data-footer-wrapper-row="links" class="tvl-footer-wrapper-rows">
                <FooterLinksContainer />
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style lang="scss">
    .tvl-footer{
        width: 100% ;
        padding: clamp(40px, 8vh, 80px) 0px;
        display: flex ;
        flex-direction: column;
        background-color: #0F0F0F ;
    }
    .tvl-footer-wrapper{
        width: 85% ;
        align-self: center;
        display: grid;
        grid-template-columns: 1fr ;
        grid-template-rows: auto;
        grid-column-gap: 60px ;
    }
    .tvl-footer-wrapper-rows{
        grid-column: 1/2 ;

        &[data-footer-wrapper-row="logo"]{
            grid-row: 1/2 ;
            margin-bottom: 56px ;
        }

        &[data-footer-wrapper-row="links"]{
            grid-row: 2/3 ;
        }
    }

    @media screen and (min-width: 1024px) {
        .tvl-footer-wrapper{
            width: 90% ;
        }
    }

    @media screen and (min-width: 1100px) {
        .tvl-footer-wrapper{
            display: flex;
            flex-direction: row;
        }

        .tvl-footer-wrapper-rows{
            align-self: flex-start;

            &[data-footer-wrapper-row="logo"]{
                width: 30% ;
            }

            &[data-footer-wrapper-row="links"]{
                width: 70% ;
            }
        }
    }
</style>