<template>
    <div class="row">

        <div class="col-md-10">

            <div class="bookapp">

                <h1>{{ msg }}</h1>


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
    export default {
        components: {
            'pricebox' : PriceBox,
            'passenger' : Passenger
        },
        data() {
            return {
                msg: 'Fill the data'
            }
        }
    }
</script>

