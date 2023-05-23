<template>
    <button v-on:click="openContactForm" :data-button-type="type" class="tvl-contact-button"><span class="tvl-contact-button-emoji">&#x1F91D;&nbsp;</span><span class="tvl-contact-button-text">Get In Touch</span>
    </button>
</template>

<script>
    import { useBaseAppStore } from '~/store';

    export default{
        name: 'ContactButton',
        props:{
            type: String
        },
        methods: {
            openContactForm: function(){
                this.store.$patch({form:'open'}) ;
                //this.$store.state.form = 'open' ;
            }
        },
        setup(){
            return {
                store: useBaseAppStore()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tvl-contact-button{
        width: 140px;
        background-color: black;
        font-size: 12px ;
        font-family: 'Roboto', sans-serif;
        font-weight: 500 ;
        text-align: center;
        padding: 10px 15px ;
        color: white ;
        cursor: pointer;
        border-radius: 6px ;
        border: none;
        align-self: center;
        transition: 0.12s all ease-in-out;

        span{
            display: inline-block;
            vertical-align: middle;
        }

        &[data-button-type="black"]{
            background-color: black;
            color: white ;

            &:hover{
                background-color: rgba(40, 40, 40, 1);
                color: white ;
                box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.3);
            }

            &:active{
                background-color: rgba(80, 80, 80, 1);
                color: white ;
                box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.3);
            }
        }

        &[data-button-type="white"]{
            background-color: white;
            color: black ;

            &:hover{
                background-color:rgba(215, 215, 215, 1);
                box-shadow: 0px 0px 8px -1px rgba(225, 225, 225, 0.3);
            }

            &:active{
                background-color: rgba(165, 165, 165, 1);
                box-shadow: 0px 0px 8px -1px rgba(225, 225, 225, 0.3);
            }
        }

        &[data-button-type="gradient"]{
            overflow: hidden;
            position: relative;
            background-color: black;
            z-index: 2;

            &::after{
                content: "";
                width: 100% ;
                height: 100% ;
                position: absolute;
                top: 0px ;
                left: 0px ;
                background-image: url('@/assets/images/form/button.jpg');
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                z-index: -1;
                transition: 0.15s all ease-in-out;
            }

            &:hover{
                &::after{
                    scale: 1.2;
                }
            }

            &:active{
                &::after{
                    opacity: 0;
                }
            }

        }

        .tvl-contact-button-emoji{
            font-size: 15px ;
        }

        
    }

    @media screen and (min-width:540px) {
        .tvl-contact-button{
        width: 200px ;
        font-size: 17px ;
        font-weight: 600 ;
        //padding: 10px 24px ;
        border-radius: 8px ;
        box-sizing: border-box;

        .tvl-contact-button-emoji{
            font-size: 20px ;
        }
    }
    }
</style>