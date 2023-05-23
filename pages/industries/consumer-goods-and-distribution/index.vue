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
        name: 'ConsumerIndustryPage',
        data(){
            return {
                heading: 'Consumer Goods and Distribution Industry',
                image: 'distribution.png',
                texts: [
                        'The Consumer Goods and Distribution industry is a vital sector that plays an important role in the global economy. At The Verve Labs, we can help companies in this industry to overcome the challenges they face and drive their businesses forward, particularly in the field of website development.',
                        'We have helped a number of consumer goods and distribution companies to improve their online presence by creating and implementing responsive, user-friendly websites that are optimized for conversions. These websites have helped our clients to reach new customers, increase sales, and improve customer engagement.',
                        'We have also helped these companies improve their e-commerce operations by developing and implementing online stores. These online stores have helped our clients to expand their reach, increase their sales, and improve their customer service. They also provided an easy and convenient way for customers to purchase their products, which helped to increase customer satisfaction and loyalty.',
                        'In addition, we have helped these companies in improving their inventory management and logistics operations. By providing tools and technologies to track and manage inventory and shipments, we have helped our clients to improve their supply chain efficiency, reduce costs, and provide real-time visibility into their operations.',
                        'Our team of experienced IT professionals has the expertise needed to help you improve your operations, increase efficiency, and reach new customers. If you’re ready to take your consumer goods and distribution business to the next level, contact us at The Verve Labs. Let us help you reach your business goals with the power of technology, especially in website development.'
                    ]
            }
        },
        setup(){
            useSeoMeta({
                title: 'Consumer Goods and Distribution Industry x The Verve Labs',
                ogTitle: 'Consumer Goods and Distribution Industry x The Verve Labs',
                description: 'At The Verve Labs, we have helped companies in this Consumer Goods and Distribution Industry to overcome the challenges they face and drive their businesses forward, particularly in the field of website development.',
                ogDescription: 'At The Verve Labs, we have helped companies in this Consumer Goods and Distribution Industry to overcome the challenges they face and drive their businesses forward, particularly in the field of website development.',
                ogImage: '',
                twitterCard: 'summary_large_image',
            })
        }
    }
</script>