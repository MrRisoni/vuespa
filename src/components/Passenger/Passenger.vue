<template>
    <div class="passenger">

        <h1>{{ msg }}</h1>

        Bags: {{bags}}
        <button class="btn btn-primary btn-success">Go</button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Passenger'

            }
        },
        computed: {
            bags () {
                return this.$store.state.bags
            }
        }

    }
</script>

