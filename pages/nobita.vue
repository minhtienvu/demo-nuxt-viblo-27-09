<template>
    <div>
        <h1>Xin chao to la Nobita</h1>
        <nuxt-link to="/doraemon">Doraemon</nuxt-link>
     <nuxt-link to="/xuka">Xuka</nuxt-link>
    </div>
</template>

<script>
    export default {
        
        head() {
            return {
            title: 'Nobita ne',
            meta: [
                { hid: 'description', name: 'description', content: 'About Vibloooo' }
            ]
            }
        }
    }
</script>