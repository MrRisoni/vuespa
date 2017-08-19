<template>
    <div class="CarCarousel">

        <h1>{{ carData.length }}</h1>

        <button class="btn btn-primary btn-success">Go</button>

    </div>
</template>

<script>
    export default {
        props: ['carData'],
        data() {
            return {
                msg: 'Fill the data'
            }
        }
    }
</script>

