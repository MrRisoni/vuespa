<template>
    <div class="bags">


        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-primary">
                    <div class="panel-heading">Bags</div>
                    <div class="panel-body">


                        <div class="row">


                            <bagleg :route="departRoute"
                                    :legCarriers="outboundCarriers"
                            ></bagleg>


                            <bagleg :route="returnRoute"
                                    :legCarriers="inboundCarriers"
                            ></bagleg>


                        </div>


                        <div class="row">


                            <purchasedleg :route="departRoute"></purchasedleg>

                            <purchasedleg :route="returnRoute"></purchasedleg>

                        </div>

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
            }


        }
    }
</script>

