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
        name: 'EducationIndustryPage',
        data(){
            return {
                heading: 'Education Industry',
                image: 'education.png',
                texts: [
                        'The Education industry is constantly evolving as new technologies and innovations are developed to improve the way we learn and teach. At The Verve Labs, we have worked with educational institutions to overcome the challenges they face and drive their institution forward.',
                        'We have helped some educational institutions and companies to improve their online presence by creating and implementing responsive, user-friendly websites that are optimized for incredible UX. These websites have helped our clients to reach new students, increase enrollment, and improve communication with current students and parents.',
                        'The incredible designs & UX has also helped our clients stand out in their space and increase their brand value.',
                        'In addition, we have helped educational institutions and companies to improve their communication and engagement with their audience. By developing and implementing digital platforms, we have helped our clients to connect with their audience, gather feedback, and provide them with the information and services they need. This has helped our clients to improve parent satisfaction and improve their internal systems.',
                        'Our team of experienced IT professionals has the expertise and experience needed to help educational institutions and companies to improve their operations, increase efficiency, and help improve their systems.',
                        'If you’re ready to take your education business to the next level, contact us at The Verve Labs. Let us help you reach your business goals with the power of technology, especially in website development.'
                    ]
            }
        },
        setup(){
            useSeoMeta({
                title: 'Education Industry x The Verve Labs',
                ogTitle: 'Education Industry x The Verve Labs',
                description: 'The Education industry is constantly evolving as new technologies and innovations are developed to improve the way we learn and teach. At The Verve Labs, we have worked with educational institutions to overcome the challenges they face and drive their institution forward.',
                ogDescription: 'The Education industry is constantly evolving as new technologies and innovations are developed to improve the way we learn and teach. At The Verve Labs, we have worked with educational institutions to overcome the challenges they face and drive their institution forward.',
                ogImage: '',
                twitterCard: 'summary_large_image',
            })
        }
    }
</script>