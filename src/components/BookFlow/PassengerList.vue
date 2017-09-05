<template>
    <div class="passengerlist">



        <div v-for="psgr of passengers">
            <passenger :id="psgr.id" :humanID="psgr.humanID"></passenger>
        </div>


    </div>
</template>

<script>

    import Passenger from '../Passenger/Passenger.vue'


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

