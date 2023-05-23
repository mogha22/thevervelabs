<template>
    <div class="tvl-footer-links-contianer">
        <div class="tvl-footer-links-wrapper">
            <div class="tvl-footer-links-wrapper-column">
                <h3 class="tvl-footer-links-column-heading">Industries</h3>
                <div class="tvl-footer-links-column-options-container">
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/industries/energy-resources-and-utilities/">Energy, Resources and Utilities</NuxtLink>
                    </p>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/industries/cosmetics-industries/">Cosmetics Industries</NuxtLink>
                    </p>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/industries/education/">Education</NuxtLink>
                    </p>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/industries/consumer-goods-and-distribution/">Consumer Goods and Distribution</NuxtLink>
                    </p>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/industries/travel-transportation-and-hospitality/">Travel, Transportation and Hospitality</NuxtLink>
                    </p>
                </div>
            </div>
            <div class="tvl-footer-links-wrapper-column">
                <h3 class="tvl-footer-links-column-heading">Services</h3>
                <div class="tvl-footer-links-column-options-container">
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/services/#it-consultancy">IT Consultancy</NuxtLink>
                    </p>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/services/#ux-consultancy">UX Consultancy</NuxtLink>
                    </p>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/services/#packaging-design">Packaging Design</NuxtLink>
                    </p>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/services/#webapp-development">WebApp Development</NuxtLink>
                    </p>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/services/#enterprise-software-development">Enterprise Software Development</NuxtLink>
                    </p>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/services/#website-and-software-management">Website and Software Management</NuxtLink>
                    </p>
                </div>
            </div>
            <div class="tvl-footer-links-wrapper-column">
                <h3 class="tvl-footer-links-column-heading">Discover</h3>
                <div class="tvl-footer-links-column-options-container">
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/about/">About Us</NuxtLink>
                    </p>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/portfolio/">Portfolio</NuxtLink>
                    </p>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/services/">Services</NuxtLink>
                    </p>
                    <p v-on:click="openContactForm" class="tvl-footer-links-column-options">Contact Us</p>
                    <!-- <div class="tvl-footer-links-column-options-divider">
                    </div>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="privacy-policy">Privacy Policy</NuxtLink>
                    </p>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/terms-of-use">Terms of Use</NuxtLink>
                    </p>
                    <p class="tvl-footer-links-column-options">
                        <NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink>
                    </p> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useBaseAppStore } from "~/store";

    export default {
        name: 'FooterLinksContainer',
        methods: {
            openContactForm: function(){
                this.store.$patch({form:'open'}) ;
            }
        },
        setup(){
            return {
                store: useBaseAppStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-footer-links-contianer{
        width: 100% ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-footer-links-wrapper{
        width: 90% ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-footer-links-wrapper-column{
        width: 230px ;
        align-self: center;
        padding: 16px 0px 16px 0px ;
        margin: 8px 0px 8px 0px ;
    }
    .tvl-footer-links-column-heading{
        font-size: 22px ;
        font-weight: 400 ;
        font-family: var(--font-family);
        text-align: center;
        color: white ;
        padding: 8px 0px 16px 0px ;
    }
    .tvl-footer-links-column-options-container{
        width: 100% ;
        padding: 8px 0px 24px 0px ;
    }
    .tvl-footer-links-column-options{
        font-size: 13px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: center;
        color: #D1D1D1 ;
        padding: 4px 0px ;
        margin: 6px 0px ;
        cursor: pointer;

        a{
            text-decoration: none;
            color: #D1D1D1 ;
        }

        &:hover{
            text-decoration: underline;
        }
    }
    .tvl-footer-links-column-options-divider{
        width: 80px ;
        height: 1px ;
        background-color: #D1D1D1 ;
        margin: 16px auto ;
    }

    @media screen and (min-width: 720px) {
        .tvl-footer-links-wrapper{
            width: 90% ;
            flex-direction: row;
            justify-content: space-between;
        }
        .tvl-footer-links-wrapper-column{
            width: 25% ;
            min-width: 180px;
            align-self: flex-start;
        }
    }

    @media screen and (min-width: 1100px) {
        .tvl-footer-links-wrapper{
            width: 85% ;
            align-self: flex-end;
        }
        .tvl-footer-links-column-heading{
            text-align: left;
        }
        .tvl-footer-links-column-options{
            text-align: left;
            margin: 8px 0px 10px ;

            a{
                text-decoration: none;
                color: #D1D1D1 ;
            }
        }

        .tvl-footer-links-column-options-divider{
            margin-left: 0px ;
        }

    }
</style>