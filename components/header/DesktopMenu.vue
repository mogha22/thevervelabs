<template>
    <nav class="tvl-header-desktop-menu">
        <p v-on:mouseenter="$emit('menu-mouse-over', $event, '')" class="tvl-header-desktop-menu-link">
            <NuxtLink to="/about/">About</NuxtLink>
        </p>
        <p v-on:mouseenter="$emit('menu-mouse-over', $event, '')" class="tvl-header-desktop-menu-link">
            <NuxtLink to="/portfolio/">Portfolio</NuxtLink>
        </p>
        <p v-on:mouseenter="$emit('menu-mouse-over', $event, 'services')" class="tvl-header-desktop-menu-link">
            <NuxtLink to="/services/">Services</NuxtLink>
        </p>
        <p v-on:mouseenter="$emit('menu-mouse-over', $event, 'industries')" class="tvl-header-desktop-menu-link">Industries</p>
    </nav>
</template>

<script>
    export default {
        name: 'DesktopMenu'
    }
</script>

<style lang="scss">
    .tvl-header-desktop-menu{
        width: auto ;
        display: flex ;
        flex-direction: row;
        align-self: center;
    }
    .tvl-header-desktop-menu-link{
        width: fit-content;
        font-family: 'Roboto', sans-serif;
        font-size: var(--tab-desktop-link-size) ;
        font-weight: 300;
        //box-sizing: border-box;
        padding: 3px 3px ;
        margin: 0px 8px ;
        color: black ;
        align-self: center;
        cursor: pointer;

        a{
            color: black;
            text-decoration: none;
        }

        &:hover{
            font-weight: 400;
            text-decoration: underline;
        }
    }

    @media screen and (min-width: 1200px) {
        .tvl-header-desktop-menu-link{
            font-size: var(--laptop-desktop-link-size) ;
            padding: 3px 6px ;
            margin: 0px 12px ;
        }
        
    }
</style>
