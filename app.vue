<template>
  <div class="nuxt-app_wrapper">
    <Header ref="header" />
    <ContactForm />
    <main class="tvl-main">
      <NuxtPage />
    </main>
    <CallToAction />
    <Footer />
  </div>
</template>

<script setup>
  import { useBaseAppStore } from './store';

  const header = ref(null) ;
  const route = useRoute() ;
  const store = useBaseAppStore() ;

  const scrollAnimation = ()=>{

      header.value.scrollAnimation() ;
  }

  const headerBackground = (route) => {

    switch (route) {

      case 'index': header.value.headerbg = '' ;
                    break;
    
      default:  header.value.headerbg = 'white' ;
                break;

    }

  }

  const mobileFormShortcut = () => {

      store.increateTaps() ;
          
          if(store.taps === 2) {

              store.$patch({
                form: 'open',
                taps: 0
              })
              // this.$store.state.form = 'open' ;
              // this.$store.state.taps = 0 ;
          }

          setTimeout(()=>{store.resetTaps()}, 500) ;
  }

  const desktopFormShortcut = (event) =>{

    let state = store.form ;
            
      if(event.ctrlKey && event.keyCode === 75){
          event.preventDefault() ;
          state = (state==='open')? 'closed':'open' ;

      }else if(event.metaKey && event.keyCode === 75){
          event.preventDefault() ;
          state = (state === 'open')? 'closed':'open' ;
      }

      store.$patch({form:state}) ;
  }

  onMounted(()=>{

      if(process.client){

          window.addEventListener('scroll', scrollAnimation) ;

          window.addEventListener('keydown', (event)=>{
              desktopFormShortcut(event) ;
          }) ;

          window.addEventListener('touchstart', ()=>{
              mobileFormShortcut() ;
          }) ;
      }

      headerBackground(route.name) ;
  })
</script>

<style>
  @import '~/assets/theme.scss' ;
</style>