<template>
    <div v-on:click="$emit('mobile-menu-click')" class="tvl-header-menu-icon">
        <img src="~/assets/images/header/menu.png" alt="menu" class="tvl-header-menu-icon-image">
        <!-- <span class="material-symbols-outlined">menu</span> -->
    </div>
</template>

<script>
    export default {
        name: 'MobileMenuIcon'
    }
</script>

<style lang="scss">
    .tvl-header-menu-icon{
        width: 40px ;
        height: auto ;
        align-self: flex-end;
        display: flex ;
        flex-direction: row;
        justify-content: center;
        // background-color: transparent;
        // border: 1px solid rgba(0,0,0,0.4) ;
        // border-radius: 4px ;
        //text-align: center;
        cursor: pointer;
        box-sizing: border-box;

        span{
            display: block;
            align-self: center;
        }
    }
    .tvl-header-menu-icon-image{
        width: 100% ;
        height: auto ;
        align-self: center;
    }
</style>