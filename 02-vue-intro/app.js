const { createApp, ref} = Vue;

const app = createApp({
    template: `
    <h1>{{ message }}</h1>
    <p>{{ author }}</p>
    
    `,
    setup() {

        const message = ref("Soy batman")
        const author = ref("Bruce Wayne")
        
        setTimeout(() => {
            message.value  = 'Soy goku';
            author.value = 'gocu'
            console.log('Ejecutado');
        }, 1000);
        
        return {
            message,
            author,
        }
    }

})














app.mount('#myApp');