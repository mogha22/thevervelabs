<template>
    <header v-on:mouseleave="closeSubMenu" class="tvl-header">
        <div :data-header-background="headerbg" :data-header-scroll="isScrolled" class="tvl-header-container">
            <div class="tvl-header-wrapper">
                <div data-header-col="logo" class="tvl-header-columns">
                    <HeaderLogo />
                </div>
                <div data-header-col="desktop-link" class="tvl-header-columns">
                    <HeaderDesktopMenu v-on:menu-mouse-over="headerMouseOver" />
                </div>
                <div data-header-col="contact" class="tvl-header-columns">
                    <div class="tvl-header-button-container">   
                        <ContactButton type="black" />
                    </div>
                </div>
                <div data-header-col="menu-icon" class="tvl-header-columns">
                    <HeaderMobileMenuIcon v-on:mobile-menu-click="mobileMenuDisplay" />
                </div>
            </div>
        </div>
        <HeaderDesktopSubMenu ref="desktopSubMenu" :isScrolled="isScrolled" />
        <HeaderMobileMenu ref="mobileMenu" />
    </header>
</template>

<script>

    export default {
        name: 'Header',
        data(){

            return {
                subMenu: '',
                headerbg: 'normal',
                isScrolled:false
            }
        },
        methods:{
            scrollAnimation: function(){    
                this.isScrolled = (window.pageYOffset > 50)? true : false ;
            },

            headerMouseOver: function(event, option){
                this.$refs.desktopSubMenu.showSubMenu(event, option) ;
            },

            closeSubMenu: function(){
                this.$refs.desktopSubMenu.option = '' ;
            },

            mobileMenuDisplay: function(){
                this.$refs.mobileMenu.mobileMenuDisplay() ;
            },

            closeMobileMenu: function(){

                this.$refs.mobileMenu.menu = 'closed' ;
                this.$refs.mobileMenu.services = 'closed' ;
                this.$refs.mobileMenu.industries = 'closed' ;
            }
        },
        watch:{
            $route (to, from){

                this.closeSubMenu() ;
                this.closeMobileMenu();

                switch (this.$route.name) {

                    case 'index':    this.headerbg = 'normal' ;
                                    break;
                
                    default:    this.headerbg = 'white' ;
                                break;
                }
            }
        }
        
    }
</script>

<style lang="scss">
    .tvl-header{
        width: 100% ;
        height: auto ;
        position: fixed;
        top: 0px ;
        left: 0px ;
        display: flex ;
        flex-direction: column;
        z-index: 100 ;
    }
    .tvl-header-container{
        width: 100% ;
        height: 80px ;
        display: flex ;
        flex-direction: column;
        justify-content: center ;
        transition: 0.2s all ease-in-out ;

        &[data-header-scroll=true]{
            height: 55px ;
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(5px);
            box-shadow: 0px 2px 10px -1px rgba(0, 0, 0, 0.15);
        }

        &[data-header-background='white']{
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(5px);
        }
    }
    .tvl-header-wrapper{
        width: 97% ;
        min-width: 290px ;
        height: auto ;
        align-self: center;
        display: grid ;
        grid-template-columns: 40px auto 40px;
        grid-template-rows: auto ;
        margin: 0px clamp(8px, 2.5vw, 24px);
        box-sizing: border-box;
        align-items: center;
        transition: 0.15s all ease-in-out ;
    }
    .tvl-header-columns{

        display: flex ;
        flex-direction: column;
        justify-items: center;

        &[data-header-col="logo"]{
            grid-column: 1/2 ;
            grid-row: 1/2;
        }

        &[data-header-col="desktop-link"]{
            grid-column: 2/3 ;
            grid-row: 1/2;
            display: none;
        }

        &[data-header-col="contact"]{
            grid-column: 2/3;
            grid-row: 1/2;
        }

        &[data-header-col="menu-icon"]{
            grid-column: 3/4 ;
            grid-row: 1/2;
        }
    }
    .tvl-header-button-container{
        width: auto ;
        align-self: flex-end;
        padding-right: 12px ;
        box-sizing: border-box;
    }
    
    @media screen and (min-width: 540px) {
        .tvl-header-wrapper{
            grid-template-columns: 160px auto 40px ;
        }
    }
    @media screen and (min-width: 720px) {
        .tvl-header-wrapper{
            grid-template-columns: 200px auto 40px;
        }
    }
    @media screen and (min-width: 1024px) {
        .tvl-header-wrapper{
            grid-template-columns: 300px auto 300px ;
        }
        .tvl-header-columns{

            &[data-header-col="desktop-link"]{
                display: flex;
            }

            &[data-header-col="contact"]{
                grid-column: 3/4;
            }

            &[data-header-col="menu-icon"]{
                display: none;
            }
        }

        .tvl-header-button-container{
            align-self: flex-end ;
            padding-right: 0px;
        }
    }
    
</style>