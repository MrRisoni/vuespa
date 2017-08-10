<template>
    <div class="bookapp">

        <div class="row">

            <div class="col-md-10">

                <itinerary></itinerary>

                <passengerlist></passengerlist>

                <contactdetails></contactdetails>

                <paymentdetails></paymentdetails>
            </div>


            <div class="col-md-2">
                <pricebox></pricebox>
            </div>

        </div>

    </div>

</template>

<style>



</style>

<script>

    import PriceBox from '../components/PriceBox.vue'
    import Itinerary from '../components/Itinerary/Itinerary.vue'
    import Contact from '../components/Contact.vue'
    import Pay from '../components/Pay.vue'
    import PassengerList from '../components/PassengerList.vue'


    export default {
        components: {
            'pricebox': PriceBox,
            'passengerlist': PassengerList,
            'itinerary': Itinerary,
            'contactdetails': Contact,
            'paymentdetails': Pay
        },
        data() {
            return {}
        }
    }
</script>

