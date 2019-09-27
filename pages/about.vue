<template>
    <div>
     <h1>Tien dep trai</h1>
     <nuxt-link to="/doraemon">Doraemon</nuxt-link>
     <nuxt-link to="/nobita">Nobita</nuxt-link>
     <nuxt-link to="/xuka">Xuka</nuxt-link>
    </div>
</template>

<script>
    export default {
        
        head() {
            return {
            title: 'About Viblo',
            meta: [
                { hid: 'description', name: 'description', content: 'About Vibloooo' }
            ]
            }
        }
    }
</script>