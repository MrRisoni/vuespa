<template>
    <div class="passengerlist">



        <div v-for="psgr of passengers">
            <passenger :id="psgr.id"></passenger>
        </div>


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
        },
        computed: {
            passengers() {
                return this.$store.state.passengers
            }
        }
    }
</script>

