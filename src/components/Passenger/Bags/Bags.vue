<template>
    <div class="bags">

        <div class="row">
            <div class="col-md-12">

                <div class="alert alert-success" role="alert">Bags</div>

                <div v-if="showMe">

                    <div class="row">


                        <bagleg :route="departRoute"
                                :legCarriers="outboundCarriers"
                                :passengerid="passengerid"
                        ></bagleg>


                        <bagleg :route="returnRoute"
                                :legCarriers="inboundCarriers"
                                :passengerid="passengerid"
                        ></bagleg>


                    </div>

                    <div class="row">


                        <purchasedleg :route="departRoute"
                                      :passengerid="passengerid"></purchasedleg>

                        <purchasedleg :route="returnRoute"
                                      :passengerid="passengerid"></purchasedleg>

                    </div>

                </div>

            </div>
        </div>

    </div>
</template>

<script>

    import BagLeg from './BagLeg.vue';
    import Purchasedleg from './PurchasedLeg.vue';


    export default {
        props: ['passengerid'],
        components: {
            'bagleg': BagLeg,
            'purchasedleg': Purchasedleg
        },
        data() {
            return {}
        },
        computed: {
            returnRoute() {
                return this.$store.state.arrAirport + '-' + this.$store.state.depAirport
            },
            departRoute() {
                return this.$store.state.depAirport + '-' + this.$store.state.arrAirport
            },
            bagRules() {
                return this.$store.state.bagAllowance
            },
            outboundCarriers() {
                return this.$store.state.outboundCarriers
            },
            inboundCarriers() {
                return this.$store.state.inboundCarriers
            },
            showMe() {
                return this.$store.state.passengers[this.passengerid - 1].showBags
            }


        }
    }
</script>


