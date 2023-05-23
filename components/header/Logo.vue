<template>
    <div class="tvl-header-logo-container">
        <NuxtLink to="/">
            <img src="~/assets/images/header/logo.png" alt="The Verve Labs" class="tvl-header-logo">
            <h1 class="tvl-header-logo-text">The Verve Labs</h1>
        </NuxtLink>
    </div>
</template>

<script>
    export default {
        name: 'HeaderLogo'
    }

</script>

<style scoped lang="scss">
    .tvl-header-logo-container{
        width: fit-content ;
        height: auto ;

        a{
            display: flex ;
            flex-direction: row;
            justify-content: space-between;
            text-decoration: none;
        }
    }
    .tvl-header-logo{
        width: auto ;
        height: 35px ;
        align-self: center;
    }
    .tvl-header-logo-text{
        width: fit-content;
        font-size: clamp(15px, 3vw, 18px) ;
        align-self: center;
        padding-left: 8px ;
        font-weight: 300;
        color: black;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        display: none;
    }

    @media screen and (min-width:'540px') {
        .tvl-header-logo-text{
            display: inline-block;
        }
    }
</style>