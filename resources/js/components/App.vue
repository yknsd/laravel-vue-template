<template>
    <v-container class="container-style">
        <v-main class="content-style">
            <v-card light>
                <router-view></router-view>
            </v-card>
        </v-main>
    </v-container>
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>

<style scoped>
.container-style {
    height: 100%;
    text-align: center;
    margin: 0 auto;
}
.content-style {
    align-content: center;
    margin: 10px auto;
    height: 80%;
}
</style>
