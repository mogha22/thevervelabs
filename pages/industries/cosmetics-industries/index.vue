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
        name: 'CosmeticsIndustryPage',
        data(){
            return {
                heading: 'Cosmetic Industry',
                image: 'cosmetics.png',
                texts: [
                        'At The Verve Labs, we don’t just help companies in the cosmetics industry, we empower them! We have a proven track record of taking mediocre online presences and transforming them into industry-leading, revenue-generating machines.',
                        'Our team of experienced IT professionals has the expertise and experience needed to help companies in the personal grooming space to improve their operations, increase efficiency, and reach new customers. By creating and implementing responsive, user-friendly websites that are optimized for conversions, we have helped our clients to reach new customers, increase sales, and improve customer engagement.',
                        'But we don’t stop there, we also help our clients to improve their inventory management and logistics operations by providing tools and technologies to track and manage inventory and shipments. This helps our clients to improve their supply chain efficiency, reduce costs and provide real-time visibility into their operations, allowing them to stay ahead of the competition.',
                        'We have had partnerships with our clients for extended periods of time where we have worked in synergy providing them the IT arm they lack and seek, we have worked with our clients like a single powerful team empowering them with the latest tech and innovations while they do what they do best - innovate in the cosmetics space. The result is a unstoppable force of nature that competitors fear.',
                        'In addition, we have helped our clients in improving their customer engagement and service delivery. By developing and implementing digital platforms, we have helped our clients to connect with their customers, gather feedback, and provide them with the information and services they need, when they need it. This has helped our clients to improve customer satisfaction and loyalty.',
                        'If you’re ready to take your cosmetics business to the next level, if you’re ready to dominate your competition and crush your revenue goals, look no further than The Verve Labs. Let us help you reach your business goals with the power of technology. Contact us today, and let’s get started!'
                    ]
            }
        },
        setup(){
            useSeoMeta({
                title: 'Cosmetics Industry x The Verve Labs',
                ogTitle: 'Cosmetics Industry x The Verve Labs',
                description: 'At The Verve Labs, we don’t just help companies in the cosmetics industry, we empower them! We have a proven track record of taking mediocre online presences and transforming them into industry-leading, revenue-generating machines.',
                ogDescription: 'At The Verve Labs, we don’t just help companies in the cosmetics industry, we empower them! We have a proven track record of taking mediocre online presences and transforming them into industry-leading, revenue-generating machines.',
                ogImage: '',
                twitterCard: 'summary_large_image',
            })
        }
    }
</script>