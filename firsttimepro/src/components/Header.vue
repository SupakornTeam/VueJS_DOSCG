<template>
    <header>
        <h1 v-on:click="changeTitle">{{ title }}</h1>
    </header><br><br><br><br>
</template>
<script>
export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },


}
</script>
<style scoped>
header{
    background: lightgreen;
    padding: 20px;
}
h1{
    color: #222;
    text-align: center;
}
</style>