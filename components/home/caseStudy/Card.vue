<template>
    <div :data-card-state="cardState" v-on:click="$emit('toggle-case-study-card', id)" class="tvl-case-study-cards">
        <div class="tvl-case-study-cards-wrapper">
            <div data-case-study-cards-row="background" :style="{backgroundImage: `url(${bgImage})`}" class="tvl-case-study-cards-rows"></div>
            <div data-case-study-cards-row="content" class="tvl-case-study-cards-rows">
                <div class="tvl-case-study-cards-content">
                    <div data-case-study-content="number" class="tvl-case-study-cards-content-rows">
                        <p class="tvl-case-study-number">{{ number }}</p>
                    </div>
                    <div data-case-study-content="details" class="tvl-case-study-cards-content-rows">
                        <h3 class="tvl-case-study-name">{{ organisation }}</h3>
                        <p class="tvl-case-study-location">{{ location }}</p>
                        <div class="tvl-case-study-details">
                            <p class="tvl-case-study-text">{{ text }}</p>
                            <div class="tvl-case-study-button">
                                <NuxtLink :to="`/clients/${link}/`">
                                    <p class="tvl-case-study-button-text">Learn more</p>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CaseStudyCards',
        props: {
            id: String,
            number: String,
            location: String,
            organisation: String,
            text: String,
            image: String,
            state: String
        },
        computed: {
            bgImage(){
                return new URL(`/assets/images/home/caseStudy/${this.$props.image}`, import.meta.url)
            }
        },
        data(){

            return {

                link: this.$props.organisation.toLowerCase().replaceAll(' ', '-'),
                cardState: this.$props.state,
                //imageUrl: new URL(`/assets/images/home/caseStudy/${this.$props.image}`, import.meta.url)
            }
        }
    }
</script>

<style lang="scss">
    .tvl-case-study-cards{
        --transition: 0.3s all ease-in-out; 
        width: 100% ;
        display: flex ;
        flex-direction: column;
        overflow: hidden;
        transition: var(--transition);
        box-sizing: border-box;
        cursor: pointer;

        &[data-card-state="closed"]{
            height: 100px ;
            border-bottom: 1px solid #002144;
        }

        &[data-card-state="open"]{
            flex-grow: 2;
            border-bottom: none ;
            cursor: default;

            .tvl-case-study-cards-wrapper{
                background-color: transparent;
            }

            .tvl-case-study-cards-rows{

                &[data-case-study-cards-row="background"]{
                    opacity: 1;
                }

                &[data-case-study-cards-row="content"]{
                    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1));
                }
            }

            .tvl-case-study-cards-content{
                align-self: flex-end;
            }

            .tvl-case-study-cards-content-rows[data-case-study-content="number"]{
                align-self: flex-start;
            }

            .tvl-case-study-details{
                display: flex;
            }
        }
    }
    .tvl-case-study-cards-wrapper{
        width: 100% ;
        height: 100% ;
        display: grid ;
        grid-template-columns: 1fr ;
        grid-template-rows: 1fr ;
        background-color: #1C56BA;
        transition: var(--transition);
    }
    .tvl-case-study-cards-rows{
        grid-column: 1/2 ;
        grid-row: 1/2 ;

        &[data-case-study-cards-row="background"]{
            background-position: 30% center;
            background-repeat: no-repeat ;
            background-size: cover;
            opacity: 0;
        }

        &[data-case-study-cards-row="content"]{
            display: flex ;
            flex-direction: row;
            justify-content: center;
            transition: var(--transition);
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
            position: relative;
            z-index: 2;
        }
    }
    .tvl-case-study-cards-content{
        width: 90% ;
        height: auto ;
        align-self: center;
        display: flex ;
        flex-direction: row;
    }
    .tvl-case-study-cards-content-rows{
        align-self: center;
        transition: var(--transition);

        &[data-case-study-content="number"]{
            width: 45px ;
            height: auto;
        }

        &[data-case-study-content="details"]{
            flex: 1 ;
        }
    }
    .tvl-case-study-number{
        font-size: 18px ;
        font-weight: 500;
        font-family: var(--font-family);
        text-align: left;
        color: white ;
    }
    .tvl-case-study-name{
        font-size: 20px ;
        font-weight: 400 ;
        font-family: var(--font-family);
        color:white ;
        padding-bottom: 4px ;
    }
    .tvl-case-study-location{
        font-size: 14px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        color: white ;
    }
    .tvl-case-study-details{
        width: 100% ;
        margin: 24px 0px;
        display: none;
        flex-direction: column;
    }
    .tvl-case-study-text{
        font-size: 12px ;
        font-weight: 300;
        font-family: var(--font-family);
        color: white ;
        padding-bottom: 12px ;
    }
    .tvl-case-study-button{
        width: fit-content;
        border: 1px solid white;
        border-radius: 45px ;
        overflow: hidden;
        align-self: flex-start;

        a{
            text-decoration: none;
            color: white ;
        }
    }
    .tvl-case-study-button-text{
        font-size: 13px ;
        font-weight: 400 ;
        font-family: var(--font-family);
        padding: 8px 12px ;
        color: white ;
    }

    @media screen and (min-width:1024px) {
        .tvl-case-study-cards{
            height: 100% ;
            width: unset;
            flex-direction: row;
            border-bottom: none;

            &[data-card-state="closed"]{
                width: 150px ;
                height: 100% ;
                border-left: 1px solid #002144;

                .tvl-case-study-cards-content-rows{

                    &[data-case-study-content="details"]{
                        white-space: nowrap;
                        transform: translateX(25%) rotateZ(-90deg);
                        transform-origin: left top;
                    }
                }
            }

            &[data-card-state="open"]{
                flex-grow: 1;
                height: 100% ;
                border-left: none;

                .tvl-case-study-cards-content-rows{

                    &[data-case-study-content="details"]{
                        white-space:normal;
                        transform: unset;
                        transform-origin: unset;
                    }
                }

                .tvl-case-study-name{
                    font-size: 32px ;
                }
                .tvl-case-study-location{
                    font-size: 16px ;
                }
                .tvl-case-study-text{
                    font-size: 14px ;
                }
            }
        }

        .tvl-case-study-cards-content{
            width: 100% ;
            align-self: flex-end;
            flex-direction: column-reverse;
            padding-left: 5% ;
            padding-bottom: 20px ;
            box-sizing: border-box;
        }

        .tvl-case-study-cards-content-rows{

            &[data-case-study-content="details"]{
                flex: unset;
                width: 100% ;
                transition: 0.15s all ease-in-out ;
            }
        }

        .tvl-case-study-number{
            font-size: 22px ;
        }
        .tvl-case-study-details{
            flex-direction: row;
        }
        .tvl-case-study-text{
            width: 320px ;
            padding-right: 30px ;
        }
    }
</style>