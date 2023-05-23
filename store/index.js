export const useObserverOptionStore = defineStore('observerOption', {
    state: () => ({
        options: {
                    root: null,
                    rootMargin: '0px 0px -20% 0px',
                    threshold: 0
                }
    })

}) ;

export const useBaseAppStore = defineStore('baseApp', {
    state: () => ({
        form: 'closed',
        taps: 0
    }),

    actions:{
        increaseTap(){
            this.taps++ ;
        },
        resetTap(){
            this.taps = 0 ;
        }
    }
}) ;