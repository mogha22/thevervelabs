<template>
    <div class="tvl-about-content-header">
        <div class="tvl-about-content-header-wrapper">
            <h1 class="tvl-about-content-header-heading">About US</h1>
            <div class="tvl-about-content-button-container">
                <div :data-selected-button="selected" class="tvl-about-content-button-wrapper">
                    <div :data-button-id="button.id" v-for="button in buttons" v-on:click="$emit('toggle-about-content', button.id)" class="tvl-about-content-button">
                        <p class="tvl-about-content-button-text">{{ button.label }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tvl-about-content-header-image-container">
            <img src="~/assets/images/about/left-hand.png" alt="about image" class="tvl-about-content-header-image">
            <img src="~/assets/images/about/moon.jpg" data-header-image="additional" v-if="selected === 'story' || selected === 'what-we-do' || selected === 'values'" alt="about image" class="tvl-about-content-header-image">
            <img src="~/assets/images/about/bulb.png" data-header-image="additional" v-if="selected === 'values'" alt="about image" class="tvl-about-content-header-image">
        </div>
    </div>
</template>

<script>

    export default {
        name: 'AboutContentHeader',
        props: {
            content: String
        },
        data(){
            return {
                selected: this.$props.content,
                buttons: [
                            {
                                id: 'story',
                                label: 'Story',
                            },
                            {
                                id: 'purpose',
                                label: 'Purpose'
                            },
                            {
                                id: 'what-we-do',
                                label: 'What we do'
                            },
                            {
                                id: 'values',
                                label: 'Values'
                            }
                        ]
            }
        },
        methods: {
            toggleAboutButton: function(content){
                this.selected = content ;
            }
        },
        setup(){

            // const AboutHeaderImage = {
            //                             hand: reactive({src:new URL('/src/assets/images/about/left-hand.png', import.meta.url)}),
            //                             moon: reactive({src:new URL('/src/assets/images/about/moon.jpg', import.meta.url)}),
            //                             bulb: reactive({src:new URL('/src/assets/images/about/bulb.png', import.meta.url)})
            //                         }

            // return {
            //     AboutHeaderImage
            // }
        }
    }
</script>

<style lang="scss">
    .tvl-about-content-header{
        width: 100% ;
        height: 100% ;
        padding: clamp(140px, 25vh, 220px) 0px clamp(20px, 5vh, 40px) 0px ;
        display: flex ;
        flex-direction: column;
        background-color: black;
    }
    .tvl-about-content-header-wrapper{
        width: 95% ;
        align-self: center;
    }
    .tvl-about-content-header-heading{
        width: 100% ;
        font-size: 28px ;
        font-weight: 200 ;
        font-family: var(--font-family);
        color: white ;
        text-align: center;
        align-self: center;
        padding-bottom: 24px ;
    }
    .tvl-about-content-button-container{
        width: 100% ;
        align-self: center;
        margin-top: 8px ;
        background-color: black;
        position: sticky;
        top: 80px ;
    }
    .tvl-about-content-button-wrapper{
        width: 100% ;
        padding: 0px 0px 16px 0px ;
        text-align: center;

        &[data-selected-button="story"]{

            .tvl-about-content-button[data-button-id="story"]{
                background-color: white;

                .tvl-about-content-button-text{
                    color: black ;
                }
            }
        }

        &[data-selected-button="purpose"]{

            .tvl-about-content-button[data-button-id="purpose"]{
                background-color: white;
                
                .tvl-about-content-button-text{
                    color: black ;
                }
            }
        }

        &[data-selected-button="what-we-do"]{

            .tvl-about-content-button[data-button-id="what-we-do"]{
                background-color: white;
                
                .tvl-about-content-button-text{
                    color: black ;
                }
            }
        }

        &[data-selected-button="values"]{

            .tvl-about-content-button[data-button-id="values"]{
                background-color: white;
                
                .tvl-about-content-button-text{
                    color: black ;
                }
            }
        }

        
    }
    .tvl-about-content-button{
        align-self: center;
        display: inline-block;
        vertical-align: middle;
        border-radius: 45px ;
        cursor: pointer;
        margin: 0px 8px ;
        transition: 0.15s all ease-in-out;

        &:hover{
            background-color: rgba(50, 50, 50, 1);
        }

        &:active{
            background-color: rgba(100, 100, 100, 1);
        }

        &:first-child{
            margin-left: 0px;
        }

        &:last-child{
            margin-right: 0px;
        }
    }
    .tvl-about-content-button-text{
        font-size: 12px ;
        font-weight: 400 ;
        font-family: var(--font-family);
        padding: 4px 10px ;
        color: white ;
    }

    .tvl-about-content-header-image-container{
        width: 100% ;
        align-self: center;
        display: flex ;
        flex-direction: column;
        margin: 24px 0px 0px 0px ;
    }
    .tvl-about-content-header-image{
        width: 85% ;
        max-width: 550px;
        align-self: flex-start;
        margin-bottom: 56px ;

        &[data-header-image="additional"]{
            width: 100% ;
            display: none;
            align-self: center;
        }
    }

    @media screen and (min-width: 360px) {
        .tvl-about-content-button{
            margin: 0px 11px ;
        }
        .tvl-about-content-button-text{
            font-size: 13px ;
            padding: 5px 11px ;
        }
    }

    @media screen and (min-width: 420px) {
        .tvl-about-content-button{
            margin: 0px 12px ;
        }
        .tvl-about-content-button-text{
            font-size: 14px ;
            padding: 6px 12px ;
        }
    }

    @media screen and (min-width: 720px) {
        .tvl-about-content-header-heading{
            font-size: 40px ;
            padding-bottom: 32px ;
        }
    }
    @media screen and (min-width: 1024px) {
        .tvl-about-content-header-heading{
            font-size: 48px ;
            padding-bottom: 40px ;
        }
        .tvl-about-content-header-image{
            &[data-header-image="additional"]{
                display: block;
            }
        }
    }
</style>