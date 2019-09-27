<template>
    <div>
    <h1>Xin chao to la Doraemon</h1>
     <nuxt-link to="/nobita">Nobita</nuxt-link>
     <nuxt-link to="/xuka">Xuka</nuxt-link>
    </div>
</template>

<script>
    export default {
        
        head() {
            return {
            title: 'Doraemon ne',
            meta: [
                { hid: 'description', name: 'description', content: 'About Vibloooo' }
            ]
            }
        }
    }
</script>