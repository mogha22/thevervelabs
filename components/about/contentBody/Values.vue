<template>
    <div class="tvl-about-content-body-container-wrapper">
        <h2 class="tvl-about-content-body-heading">Our Values</h2>
        <p class="tvl-about-content-body-subheading">We live and function by these 5 Core Values that is deeply  instilled in our culture and everything we do.</p>
        <div class="tvl-about-content-body-card-container">
            <div v-for="card in cards" class="tvl-about-content-body-card">
                <div class="tvl-about-content-body-card-wrapper">
                    <h3 class="tvl-about-content-body-card-heading">{{ card.heading }}</h3>
                    <p class="tvl-about-content-body-card-text">{{ card.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutValuesContent',
        data(){
            return {
                cards: [
                            {
                                heading: 'Customer-Obsession',
                                text: 'We start with the customer and work backwards.We work vigorously to earn and keep customer trust. Since day 1 we  obsess over customers.'
                            },
                            {
                                heading: 'Shortest path of communication',
                                text: 'We believe information is lost at every layer of communication, that’s why we like to keep it short, simple and direct.Usually co-founders or engineers have a direct line of communication with the clients'
                            },
                            {
                                heading: 'Always improve',
                                text: 'We understand that technology is constantly evolving that’s why we stay on top of the latest trends and advancements in the industry, so we can provide our clients with cutting-edge solutions that give them a competitive edge.'
                            },
                            {
                                heading: 'Deliver Results',
                                text: 'We focus on the key inputs for our client’s business needs and deliver them with the right quality and in a timely fashion. Despite setbacks, we believe in rising to the occasion and never settling.'
                            },
                            {
                                heading: 'Bias for action',
                                text: 'Speed matters in business. Many decisions and actions are reversible and do not need extensive study. We value calculated risk taking.'
                            }     
                        ]
            }
        }
    }
</script>

<style lang="scss">
    .tvl-about-content-body-card-container{
        width: 100% ;
        column-count: 1;
    }
    .tvl-about-content-body-card{
        width: 250px ;
        height: 250px ;
        display: flex ;
        flex-direction: column;
        padding: 32px 0px ;
        margin: 32px auto;
        background-color: rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(20px );
        border-radius: 16px ;
        break-inside: avoid;
        box-sizing: border-box;

        &:first-child{
            margin-top: 0px ;
        }
    }
    .tvl-about-content-body-card-wrapper{
        width: 85% ;
        align-self: center;
        display: flex ;
        flex-direction: column;
    }
    .tvl-about-content-body-card-heading{
        width: 100% ;
        font-size: 22px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: center;
        padding-bottom: 16px ;
        color: white ;
    }
    .tvl-about-content-body-card-text{
        font-size: 13px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: center;
        color: white ;
        line-height: 1.45;
    }

    @media screen and (min-width:720px) {
        .tvl-about-content-body-card-container{
            column-count: 2;
        }
    }
</style>