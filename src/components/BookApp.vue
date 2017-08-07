<template>
    <div class="row">

        <div class="col-md-10">

            <div class="bookapp">


                <itinerary></itinerary>

                <passenger></passenger>

            </div>


        </div>


        <div class="col-md-2">
                <pricebox></pricebox>
        </div>


    </div>

</template>

<script>

    import PriceBox from '../components/PriceBox.vue'
    import Passenger from '../components/Passenger/Passenger.vue'
    import Itinerary from '../components/Itinerary/Itinerary.vue'

    export default {
        components: {
            'pricebox' : PriceBox,
            'passenger' : Passenger,
            'itinerary' : Itinerary,
        },
        data() {

        }
    }
</script>

