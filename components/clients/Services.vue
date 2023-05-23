<template>
    <section class="tvl-clients-services-section">
        <div class="tvl-clients-services-wrapper">
            <div class="tvl-clients-services">
                <div v-for="(value, key) in details" :data-row-type="key" class="tvl-clients-services-rows">
                    <h3 class="tvl-clients-services-heading">{{ key }}</h3>
                    <p class="tvl-clients-services-text">{{ value }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ClientServices',
        props:{
            details: Object
        }
    }
</script>

<style lang="scss">
    .tvl-clients-services-section{
        width: 100% ;
        margin: 40px 0px ;
        display: flex ;
        flex-direction: column;
    }
    .tvl-clients-services-wrapper{
        width: 85% ;
        min-width: 270px ;
        align-self: center;
    }
    .tvl-clients-services{
        width: 100% ;
        display: flex ;
        flex-direction: column;
    }
    .tvl-clients-services-rows{
        width: 100% ;
        margin-bottom: 16px ;
    }
    .tvl-clients-services-heading{
        font-size: 17px ;
        font-weight: 500 ;
        font-family: var(--font-family);
        text-align: left ;
        padding-bottom: 8px ;
        text-transform: capitalize;
    }
    .tvl-clients-services-text{
        font-size: 14px;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: left;
        text-transform: capitalize;
    }

    @media screen and (min-width:720px) {
        .tvl-clients-services{
            max-width: 600px ;
            flex-direction: row;
            padding: 50px 0px ;
        }
        .tvl-clients-services-rows{
            width: unset;
            align-self: flex-start;

            &[data-row-type="client"]{
                width: 150px ;
            }

            &[data-row-type="industry"]{
                width: 180px;
            }

            &[data-row-type="services"]{
                flex: 1 ;
            }
        }

    }
</style>