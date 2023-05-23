<template>
    <section class="tvl-services-container-section">
        <div class="tvl-services-container-wrapper">
            <template v-for="(service, index) in services">
                <ServicesCards
                    :id="index"
                    :heading=service.heading
                    :text=service.text
                    :image=service.image
                    :index=index+1
                />
            </template>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ServicesContainer',
        data(){

            return {
                services: [
                    {
                        heading: 'IT Consultancy',
                        text:'IT consultancy, also known as information technology consultancy, is the process of providing expert advice and support to organizations to help them optimize their use of technology. We at The Verve Labs specialize in providing IT consultancy services that has helped businesses optimize their technology infrastructure. Our team of experienced professionals will work closely with you to understand your unique business needs and goals, and provide tailored solutions to improve your organization’s efficiency, productivity, and overall performance. Whether you’re looking to upgrade your existing systems, implement new technologies, or streamline your operations, our IT consultancy services can help you achieve your objectives. With our help, you can take your business to the next level and stay ahead of the competition.',
                        image:'it-consultancy.png'
                    },
                    {
                        heading: 'UX Consultancy',
                        text:'Are you looking to give your online presence a boost? Look no further because The Verve Labs is here to help! We specialize in providing top-notch UX consultancy services that will make your website or application stand out from the crowd. Our team of talented professionals are all about understanding your target audience and their needs to create a website or application that is not only user-friendly, but also visually appealing and easy to navigate. Whether you’re launching a new website, redesigning an existing one or improving the user experience of an application, we’re here to make it happen for you. We don’t believe in settling for mediocrity, we believe in pushing the boundaries to deliver results that will increase engagement, conversions and customer satisfaction. So, why not give us a try? Let’s work together to make your online presence the best it can be!',
                        image:'ux-consultancy.png'
                    },
                    {
                        heading: 'Packaging Design',
                        text:'The Verve Labs offers expert packaging design services to elevate your product’s image and drive sales. Our team of seasoned professionals will work closely with you to understand your target audience and create packaging that not only catches the eye but also effectively communicates your brand message. We specialize in creating packaging designs that are visually stunning, functional and easily identifiable on store shelves. Whether you are launching a new product or looking to rebrand an existing one, we will work with you to deliver the results you need to stand out in a crowded market. Don’t settle for mediocre packaging. Choose The Verve Labs and elevate your product’s image and drive sales.',
                        image:'packaging-design.png'
                    },
                    {
                        heading: 'Webapp Development',
                        text:'The Verve Labs offers expert packaging design services to elevate your product’s image and drive sales. Our team of seasoned professionals will work closely with you to understand your target audience and create packaging that not only catches the eye but also effectively communicates your brand message. We specialize in creating packaging designs that are visually stunning, functional and easily identifiable on store shelves. Whether you are launching a new product or looking to rebrand an existing one, we will work with you to deliver the results you need to stand out in a crowded market. Don’t settle for mediocre packaging. Choose The Verve Labs and elevate your product’s image and drive sales.',
                        image:'webapp.png'
                    },
                    {
                        heading: 'Enterprise Software Development',
                        text:'The Verve Labs specializes in providing enterprise software development services to organizations looking to optimize their operations and improve their overall performance. Our team of experienced professionals possess the technical expertise and business acumen required to develop software solutions that are tailored to meet the unique needs of your organization. We specialize in developing enterprise software that is scalable, secure, and user-friendly, and that can automate and streamline key business processes. Whether you’re looking to implement a new system or upgrade an existing one, we have the skills and experience to deliver the results you need to improve your organization’s efficiency, productivity, and overall performance. The Verve Labs is dedicated to delivering enterprise software solutions that meet the highest standards of quality and performance.',
                        image:'software.png'
                    },
                    {
                        heading: 'Website and Software Management',
                        text:'We have a highly skilled and experienced team to cater to your website maintenance needs. Our team is committed to address any issues that may arise on our client’s website, ensuring that it remains up-to-date, secure, and functioning properly. Our maintenance services also include regular updates and backups, as well as monitoring for potential security threats. We sure will give you the peace of mind that comes with knowing that your website is in good hands, and that any issues will be promptly resolved. After all your job is to run your business, rather than worrying about technical details. Interested businesses can contact us to avail our services or to know more about the same.',
                        image:'maintenance.png'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss">
    .tvl-services-container-section{
        width: 100% ;
        display: flex ;
        flex-direction: column;
        padding-top: clamp(40px, 8vh, 100px) ;
    }
    .tvl-services-container-wrapper{
        width: 90% ;
        min-width: 270px;
        align-self: center;
    }
</style>