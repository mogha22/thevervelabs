<template>
    <section class="tvl-portfolio-container-section">
        <div data-portfolio-image="mob" class="tvl-portfolio-container-section-wrapper">
            <template v-for="(client, index) in clients">
                <PortfolioCard 
                    :id="index"
                    :name="client.name"
                    :industry="client.industry"
                    :services="client.services"
                    :location="client.location"
                    :image="client.images"
                />
            </template>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'PortfolioContainer',
        data(){
            return {
                clients: [
                    {
                        name: 'Monk Entertainment',
                        industry: 'Talent Management Agency',
                        location: 'Mumbai, Maharasta, India',
                        services: ['UX', 'UI', 'Web Development'],
                        images: 'monk-e.png'
                    },
                    {
                        name: 'Hatchh It',
                        industry: 'Artist Management Agency',
                        location: 'Nagpur, Maharasta, India',
                        services: ['UX', 'UI', 'Logo Desiging', 'WebApp Development'],
                        images: 'hatchh-it.png'
                    },
                    {
                        name: 'EverPower Solar',
                        industry: 'Solar Installation Company',
                        location: 'Brisbane, Australia',
                        services: ['UX', 'UI', 'Web Development'],
                        images: 'eps.png'
                    },
                    {
                        name: 'Solar 4 Good',
                        industry: 'Solar Installation Company',
                        location: 'London, UK',
                        services: ['UX', 'UI', 'Web Development'],
                        images: 'mock.png'
                    },
                    {
                        name: 'Neems For Men',
                        industry: 'Men\'s Grooming',
                        location: 'Ahemdabad, Gujrat, India',
                        services: ['UX', 'UI', 'Logo Design', 'Packaging Design', 'WebApp Development'],
                        images: 'mock.png'
                    },
                    {
                        name: 'Webmonials',
                        industry: 'Software Company',
                        location: 'New Delhi, India',
                        services: ['UX', 'UI', 'Logo Design', 'WebApp Development'],
                        images: 'mock.png'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .tvl-portfolio-container-section{
        width: 100% ;
        height: auto ;
        padding: 0px 0px 30px 0px ;
        display: flex ;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 1); 
        //backdrop-filter: blur(50px);
    }
    .tvl-portfolio-container-section-wrapper{
        width: 85% ;
        min-width: 280px ;
        align-self: center;
    }
    
    @media screen and (min-width: 720px) {
        .tvl-portfolio-container-section-wrapper{
            width: 90%;
            max-width: 850px;
        }
    }

    @media screen and (min-width: 1024px) {
        .tvl-portfolio-container-section-wrapper{
            max-width: 1200px;
        }
    }

    @media screen and (min-width: 1300px) {
        .tvl-portfolio-container-section-wrapper{
            max-width: 1350px;
        }
    }
</style>