<template>
    <div v-on:mouseover="closeSubMenu($event)" data-header-element="submenu-container" class="tvl-header-submenu-container">
        <nav :data-sub-menu="option" ref="submenuContainer" data-header-element="submenu" class="tvl-header-submenu-wrapper">
            <div data-sub-menu="services" class="tvl-header-submenu-options">
                <p v-for="service in services" class="tvl-header-submenu-option-text">
                    <NuxtLink :to="service.links">{{service.text}}</NuxtLink>
                </p>
            </div>
            <div data-sub-menu="industries" class="tvl-header-submenu-options">
                <p v-for="industry in industries" class="tvl-header-submenu-option-text">
                    <NuxtLink :to="industry.links">{{industry.text}}</NuxtLink>
                </p>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'DesktopSubMenu',
        props: {
            isScrolled: Boolean
        },
        data(){
            return {
                option: '',
                services: [
                                {
                                    links: '/services/#it-consultancy',
                                    text: 'IT Consultancy'
                                },
                                {
                                    links: '/services/#ui-consultancy',
                                    text: 'UI Consultancy'
                                },
                                {
                                    links: '/services/#packaging-design',
                                    text: 'Packaging Design'
                                },
                                {
                                    links: '/services/#webapp-development',
                                    text: 'IT Consultancy'
                                },
                                {
                                    links: '/services/#enterprise-software-development',
                                    text: 'Enterprise Software Development'
                                },
                                {
                                    links: '/services/#website-and-software-management',
                                    text: 'Website and Software Management'
                                }
                            ],
                industries:    [               
                                {
                                    links: '/industries/energy-resources-and-utilities/',
                                    text: 'Energy, Resources and Utilities'
                                },
                                {
                                    links: '/industries/cosmetics-industries/',
                                    text: 'Cosmetics Industries'
                                },
                                {
                                    links: '/industries/education/',
                                    text: 'Education'
                                },
                                {
                                    links: '/industries/consumer-goods-and-distribution/',
                                    text: 'Consumer Goods and Distribution'
                                },
                                {
                                    links: '/industries/travel-transportation-and-hospitality/',
                                    text: 'Travel, Transportation and Hospitality'
                                }
                            ]
            }
        },
        methods: {
            closeSubMenu: function(event){

                let element = event.target.dataset.headerElement ;
                    if(element === 'submenu-container') this.$data.option = '' ;
            },

            showSubMenu: function(event, option){
                
                this.$data.option = option ;

                if(option){
                    let pos = event.target.getBoundingClientRect() ;
                    this.alignSubMenu(pos.left) ;
                }
                
            },
            alignSubMenu: function(left){

                this.$refs.submenuContainer.style.left = `${left}px` ;
            }
        }
    }
</script>

<style lang="scss">
    .tvl-header-submenu-container{
        width: 100% ;
        height: auto ;
        transition: 0.15s all ease-in-out;
    }
    .tvl-header-submenu-wrapper{
        width: 200px ;
        height: auto ;
        border-radius: 8px ;
        position: relative;
        padding-top: 20px ;

        &[data-sub-menu="services"]{
            .tvl-header-submenu-options{
                &[data-sub-menu="services"]{
                    display: block;
                }
                &[data-sub-menu="industries"]{
                    display: none;
                }
            }
        }

        &[data-sub-menu="industries"]{
            .tvl-header-submenu-options{
                &[data-sub-menu="services"]{
                    display: none;
                }
                &[data-sub-menu="industries"]{
                    display: block;
                }
            }
        }
    }
    .tvl-header-submenu-options{
        width: 100% ;
        background-color: white ;
        display: none;
        padding: 8px 8px ;
        box-sizing: border-box;
        border-radius: 8px ;
    }
    .tvl-header-submenu-option-text{
        width: 100% ;
        font-size: 14px ;
        font-weight: 400 ;
        font-family: var(--font-family);
        text-align: left;
        padding: 4px 6px ;
        margin: 8px 0px ;
        box-sizing: border-box;

        a{
            display: block;
            width: 100% ;
            text-decoration: none;
            color: black ;
        }

        &:hover{
            font-weight: 500;
            text-decoration: underline;
        }
    }
</style>