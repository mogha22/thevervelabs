<template>
    <div class="tvl-main-wrapper">
        <IndustriesPage
            :heading="heading"
            :image="image"
            :texts="texts"
        />
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        data(){
            return {
                heading: 'Energy, Resources and Utility Industry',
                image: 'energy.png',
                texts: [
                        'The Energy, Resources, and Utilities industry is a critical sector that plays a vital role in powering the global economy. This industry encompasses a wide range of activities including the exploration, extraction, production, distribution, and consumption of energy and natural resources. It also includes the provision of utility services such as electricity, water, and gas. The industry is constantly evolving as new technologies and innovations are developed, and as global demand for energy and resources increases. With the growing need for sustainable and efficient solutions, the Energy, Resources, and Utilities industry is facing significant challenges, but also presents ample opportunities for growth and development.',
                        'At The Verve Labs, we understand the rigorous challenges faced by the industry as well as the growth opportunities it has. We at The Verve Labs have spent ample time analysing the numerous ways Information Technology converges with the growth opportunities available to the businesses in this industry. With our team of experienced IT professionals, we can provide solutions that help companies in this sector to improve their operations, increase efficiency, and reduce costs.',
                        'We have worked with companies hailing from the Australian subcontinent and the European subcontinent from the solar industry in helping them go digital from scratch or increase their digital footprint, and help them compete with the leading competitor of their sector in their region. We have helped the companies by developing websites as well as internal enterprise level software solutions to improve sales, improve after sales processes, and reduce complaints, while we have done this for them, we can do the same for you too.',
                        'In addition, we can help companies in this industry to improve their customer engagement and service delivery. By developing and implementing digital platforms, we can help companies to connect with their customers and provide them with the information and services they need, when they need it.',
                        'At The Verve Labs, we are committed to helping companies in this industry to overcome the challenges they face and drive their businesses forward. We understand the importance of this industry and strive to provide innovative and effective IT solutions that can help companies to improve their operations, increase efficiency, and reduce costs. Contact us today to learn more about how we can help your business.'
                    ]
            }
        },
        setup(){
            useSeoMeta({
                title: 'Energy Resources and Utility Industry x The Verve Labs',
                ogTitle: 'Energy Resources and Utility Industry x The Verve Labs',
                description: 'At The Verve Labs, we understand the rigorous challenges faced by the Energy Resources and Utility Industry as well as the growth opportunities it has. We at The Verve Labs have spent ample time analysing the numerous ways Information Technology converges with the growth opportunities available to the businesses in this industry.',
                ogDescription: 'At The Verve Labs, we understand the rigorous challenges faced by the Energy Resources and Utility Industry as well as the growth opportunities it has. We at The Verve Labs have spent ample time analysing the numerous ways Information Technology converges with the growth opportunities available to the businesses in this industry.',
                ogImage: '',
                twitterCard: 'summary_large_image',
            })
        }
    }
</script>