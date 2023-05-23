<template>
    <div :data-mobile-menu="menu" class="tvl-mobile-menu-container">
        <div class="tvl-mobile-menu-wrapper">
            <div class="tvl-mobile-menu-header">
                <div v-on:click="mobileMenuDisplay" class="tvl-mobile-menu-header-icon">
                    <span class="material-symbols-outlined">arrow_forward_ios</span>
                </div>
                <div class="tvl-mobile-menu-header-image-container">
                    <img src="~/assets/images/header/logo.png" alt="The Verve Labs" class="tvl-mobile-menu-header-image">
                </div>
            </div>
            <div class="tvl-mobile-menu-options-container">
                <div class="tvl-mobile-menu-option">
                    <NuxtLink to="/about/">
                        <p class="tvl-mobile-menu-option-text">About</p>
                    </NuxtLink>
                </div>
                <div class="tvl-mobile-menu-option">
                    <NuxtLink to="/portfolio/">
                        <p class="tvl-mobile-menu-option-text">Portfolio</p>
                    </NuxtLink>
                </div>
                <div class="tvl-mobile-menu-option">
                    <NuxtLink to="/services/">
                        <p class="tvl-mobile-menu-option-text">Services</p>
                    </NuxtLink>
                    <div v-on:click="subMenuDisplay('services')" class="tvl-mobile-menu-option-icon">
                        <span v-if="services==='closed'" class="material-symbols-outlined">expand_more</span>
                        <span v-if="services==='open'" class="material-symbols-outlined">expand_less</span>
                    </div>
                </div>
                <div id="tvl-mobile-menu-services-suboption" :data-menu-suboption="services" class="tvl-mobile-menu-sub-options">
                    <NuxtLink to="/services/#it-consultancy">
                        <p class="tvl-mobile-menu-sub-option-text">IT Consultancy</p>
                    </NuxtLink>
                    <NuxtLink to="/services/#ux-consultancy">
                        <p class="tvl-mobile-menu-sub-option-text">UI Consultancy</p>
                    </NuxtLink>
                    <NuxtLink to="/services/#packaging-design">
                        <p class="tvl-mobile-menu-sub-option-text">Packaging Design</p>
                    </NuxtLink>
                    <NuxtLink to="/services/#webapp-development">
                        <p class="tvl-mobile-menu-sub-option-text">WebApp Development</p>
                    </NuxtLink>
                    <NuxtLink to="/services/#enterprise-software-development">
                        <p class="tvl-mobile-menu-sub-option-text">Enterprise Software Development</p>
                    </NuxtLink>
                    <NuxtLink to="/services/#website-and-software-management">
                        <p class="tvl-mobile-menu-sub-option-text">Website and Software Management</p>
                    </NuxtLink>
                </div>
                <div v-on:click="subMenuDisplay('industries')" class="tvl-mobile-menu-option">
                    <p class="tvl-mobile-menu-option-text">Industries</p>
                    <div class="tvl-mobile-menu-option-icon">
                        <span v-if="(industries==='closed')" class="material-symbols-outlined">expand_more</span>
                        <span v-else="(industries==='open')" class="material-symbols-outlined">expand_less</span>
                    </div>
                </div>
                <div id="tvl-mobile-menu-industries-suboption" :data-menu-suboption="industries" class="tvl-mobile-menu-sub-options">
                    <NuxtLink to="/industries/energy-resources-and-utilities/">
                        <p class="tvl-mobile-menu-sub-option-text">Energy, Resources and Utilities</p>
                    </NuxtLink>
                    <NuxtLink to="/industries/cosmetics-industries/">
                        <p class="tvl-mobile-menu-sub-option-text">Cosmetics Industries</p>
                    </NuxtLink>
                    <NuxtLink to="/industries/education/">
                        <p class="tvl-mobile-menu-sub-option-text">Education</p>
                    </NuxtLink>
                    <NuxtLink to="/industries/consumer-goods-and-distribution/">
                        <p class="tvl-mobile-menu-sub-option-text">Consumer Goods and Distribution</p>
                    </NuxtLink>
                    <NuxtLink to="/industries/travel-transportation-and-hospitality/">
                        <p class="tvl-mobile-menu-sub-option-text">Travel, Transportation and Hospitality</p>
                    </NuxtLink>
                </div>
            </div>
            <div class="tvl-mobile-menu-footer">
                <ContactButton type="black" />
            </div>
        </div>
    </div>
</template>

<script>
    // import ContactButton from '../ContactButton.vue';
    export default {
        name: 'MobileMenu',
        // components:{
        //     ContactButton
        // },
        data(){
            return {
                menu:'closed',
                services: 'closed',
                industries: 'closed'
            }
        },
        methods: {

            mobileMenuDisplay: function(){

                this.menu = (this.menu === 'closed')? 'open' : 'closed' ;
                this.services = 'closed' ;
                this.industries = 'closed' ;
            },
            subMenuDisplay: function(option){

                switch(option){

                    case 'services':    this.services = (this.services === 'closed')? 'open' : 'closed';
                                        this.industries = 'closed' ;
                                        break ;

                    case 'industries':  this.industries = (this.industries === 'closed')? 'open':'closed';
                                        this.services = 'closed' ;
                                        break ;
                }
            }
        }
    }
</script>

<style lang="scss">
    .tvl-mobile-menu-container{
        width: 85% ;
        min-width: 270px ;
        max-width: 320px ;
        height: 100vh;
        position: fixed ;
        top: 0px ;
        right: 0px ;
        display: flex ;
        flex-direction: column;
        padding: 16px 0px ;
        background-color: white;
        z-index: 110;
        transition: 0.25s all ease-in-out;

        &[data-mobile-menu='closed']{
            transform: translateX(100%);
            box-shadow: none;
        }
        &[data-mobile-menu='open']{
            transform: translateX(0%);
            box-shadow: -2px 0px 25px -1px rgba(0, 0, 0, 1);
        }
    }
    .tvl-mobile-menu-wrapper{
        width: 90% ;
        align-self: center;
    }
    .tvl-mobile-menu-header{
        width: 100% ;
        display: flex ;
        flex-direction: row;
        padding: 8px ;
        margin-bottom: 16px ;
        border-radius: 8px ;
        box-sizing: border-box;
        //border: 1px solid rgba(0, 0, 0, 0.1);
    }
    .tvl-mobile-menu-header-icon{
        width: 30px;
        height: 30px ;
        align-self: center;
        box-sizing: border-box;
        color: black;
        cursor: pointer;
        border-radius: 4px ;
        display: flex ;
        flex-direction: column;
        justify-content: center ;

        span{
            align-self: center;
        }
    }
    .tvl-mobile-menu-header-image-container{
        flex: 1 ;
        display: flex ;
        flex-direction: column;
    }
    .tvl-mobile-menu-header-image{
        height: 40px ;
        width:auto ;
        align-self: center;
    }
    .tvl-mobile-menu-options-container{
        width: 100% ;
        display: flex ;
        flex-direction: column;
        //border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px ;
        margin-bottom: 16px ;
    }
    .tvl-mobile-menu-option{
        width: 95% ;
        padding: 16px 8px ;
        align-self: center;
        display: flex ;
        flex-direction: row;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);

        a{
            flex: 1;
            text-decoration: none;
            color: black ;
        }
    }
    .tvl-mobile-menu-option-text{
        width: 100% ;
        font-size: 16px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        align-self: center;
    }
    .tvl-mobile-menu-option-icon{
        width: 18px ;
        height: 18px ;
        display: flex ;
        flex-direction: column ;
        align-self: center;
        justify-content: center;
        cursor: pointer;

        span{
            font-size: 18px;
            align-self: center;
        }
    }
    .tvl-mobile-menu-footer{
        width: 100% ;
        display: flex ;
        flex-direction: column;
    }
    .tvl-mobile-menu-sub-options{
        width: 100%;
        padding: 0px 8px ;
        box-sizing: border-box;
        background-color: rgba(245, 245, 245, 0.5);
        overflow: hidden;

        a{
            width: 100% ;
            text-decoration: none;
            color: rgba(0, 0, 0, 0.7) ;
        }
    }
    #tvl-mobile-menu-services-suboption{
        &[data-menu-suboption='closed']{
            height: 0px ;
        }
        &[data-menu-suboption='open']{
            height: auto ;
        }
    }
    #tvl-mobile-menu-industries-suboption{
        &[data-menu-suboption='closed']{
            height: 0px ;
        }
        &[data-menu-suboption='open']{
            height: auto ;
        }
    }
    .tvl-mobile-menu-sub-option-text{
        width: 100% ;
        font-size: 14px ;
        font-weight: 300;
        font-family: var(--font-family);
        padding: 12px 8px;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
</style>