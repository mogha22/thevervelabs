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
        name: 'TravelIndustryPage',
        data(){
            return {
                heading: 'Travel, Transportation and Hospitality Industry',
                image: 'hospitality.png',
                texts: [
                        'At The Verve Labs, we don’t just help companies in the hospitality industry, we revolutionize them! We have a proven track record of taking mediocre online presences and transforming them into industry-leading, revenue-generating machines.',
                        'Our team of experienced IT professionals has the expertise and experience needed to help Hospitality companies to improve their operations, increase efficiency, and reach new customers. By creating and implementing responsive, user-friendly websites that are optimized for conversions, we have helped our clients to reach new customers, increase bookings, and improve customer engagement.',
                        'We don’t stop there, we also help our clients to improve their online booking operations by developing and implementing online booking systems that are easy and convenient for customers to use, which helps to increase customer satisfaction and loyalty.',
                        'We don’t mess around when it comes to inventory management and logistics either, by providing tools and technologies to track and manage inventory and reservations, we have helped our clients to improve their supply chain efficiency, reduce costs, and provide real-time visibility into their operations.',
                        'If you’re ready to take your Hospitality business to the next level, if you’re ready to dominate your competition and crush your revenue goals, look no further than The Verve Labs. Let us help you reach your business goals with the power of technology, especially in website development. Contact us today, and let’s get started!'
                    ]
            }
        },
        setup(){
            useSeoMeta({
                title: 'Travel, Transportation and Hospitality Industry x The Verve Labs',
                ogTitle: 'Travel, Transportation and Hospitality Industry x The Verve Labs',
                description: 'At The Verve Labs, we don’t just help companies in the hospitality industry, we revolutionize them! We have a proven track record of taking mediocre online presences and transforming them into industry-leading, revenue-generating machines.',
                ogDescription: 'At The Verve Labs, we don’t just help companies in the hospitality industry, we revolutionize them! We have a proven track record of taking mediocre online presences and transforming them into industry-leading, revenue-generating machines.',
                ogImage: '',
                twitterCard: 'summary_large_image',
            })
        }
    }
</script>