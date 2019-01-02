<template>
    <p :name="name"> Which time do you wish to book today, {{ name }} </p>
</template>

<script>
export default {
    data: function() {
        return {
            
        }
    },
    props: ["name"]
}
</script>

<style>

</style>
