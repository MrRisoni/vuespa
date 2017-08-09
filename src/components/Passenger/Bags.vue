<template>
    <div class="bags">


        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-primary">
                    <div class="panel-heading">Bags</div>
                    <div class="panel-body">


                        <div class="row">


                            <div class="col-md-12">
                                {{startAirport}}-{{endAirport}}

                                <div v-for="airline of bagRules">
                                    {{airline.carrier}}
                                    <div v-for="seg of outboundSegments">
                                        <div v-if="seg.code === airline.carrier">

                                            <div v-for="bag of airline.bags">

                                                <button type="button" class="btn btn-xs btn-primary">
                                                    <span class="glyphicon glyphicon-plus"></span>
                                                </button>

                                                {{bag.title}} {{bag.price}}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {
            startAirport() {
                return this.$store.state.depAirport
            },
            endAirport() {
                return this.$store.state.arrAirport
            },
            outboundSegments() {
                return this.$store.state.itinerary.outbound
            },
            bagRules() {
                return this.$store.state.bagAllowance
            }


        }
    }
</script>

