<template>
    <div class="passengerlist">

        <passenger></passenger>
        <passenger></passenger>

        <passenger></passenger>


    </div>
</template>

<script>

    import Passenger from '../components/Passenger/Passenger.vue'


    export default {
        components: {
            'passenger': Passenger,
        },
        data() {
            return {

            }
        }
    }
</script>

