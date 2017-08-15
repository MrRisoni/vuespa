<template>


    <div class="bookapp">
        <navbar></navbar>


        <div class="row">

            <div class="col-md-8">

                <itinerary></itinerary>

                <passengerlist></passengerlist>

                <contactdetails></contactdetails>

                <paymentdetails></paymentdetails>
            </div>


            <div class="col-md-4">
                <pricebox></pricebox>
            </div>

        </div>

    </div>

</template>

<style>



</style>

<script>

    import PriceBox from './PriceBox.vue'
    import Itinerary from '../Itinerary/Itinerary.vue'
    import Contact from './Contact.vue'
    import Pay from './Pay.vue'
    import PassengerList from './PassengerList.vue'

    import Navbar from '../NavBar.vue'


    export default {
        components: {
            'pricebox': PriceBox,
            'passengerlist': PassengerList,
            'itinerary': Itinerary,
            'contactdetails': Contact,
            'paymentdetails': Pay,
            'navbar' : Navbar
        },
        data() {
            return {}
        }
    }
</script>

