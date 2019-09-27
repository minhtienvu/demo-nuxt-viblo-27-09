<template>
    <div>
        <h1>Xin chao to la Xuka</h1>
        <nuxt-link to="/doraemon">Doraemon</nuxt-link>
        <nuxt-link to="/nobita">Nobita</nuxt-link>
    </div>
</template>

<script>
    export default {
        
        head() {
            return {
            title: 'Xuka ne',
            meta: [
                { hid: 'description', name: 'description', content: 'About Vibloooo' }
            ]
            }
        }
    }
</script>