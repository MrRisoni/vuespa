<template>
    <div class="bookapp">

        <div class="row">

            <div class="col-md-10">

                <itinerary></itinerary>

                <passenger></passenger>

                <contactdetails></contactdetails>

                <paymentdetails></paymentdetails>
            </div>


            <div class="col-md-2">
                <pricebox></pricebox>
            </div>

        </div>

    </div>

</template>

<script>

    import PriceBox from '../components/PriceBox.vue'
    import Passenger from '../components/Passenger/Passenger.vue'
    import Itinerary from '../components/Itinerary/Itinerary.vue'
    import Contact from '../components/Contact.vue'
    import Pay from '../components/Pay.vue'


    export default {
        components: {
            'pricebox': PriceBox,
            'passenger': Passenger,
            'itinerary': Itinerary,
            'contactdetails': Contact,
            'paymentdetails': Pay
        },
        data() {
            return {}
        }
    }
</script>

