<template>
    <div class="bookapp">

        <h1>{{ msg }}</h1>

        <button class="btn btn-primary btn-success">Go</button>

    </div>
</template>

<script>
    export default {
        props: ['carrier','bags'],
        data() {
            return {
                msg: 'Fill the data'
            }
        }
    }
</script>

