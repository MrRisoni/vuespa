<template>
    <div class="bags">


        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-primary">
                    <div class="panel-heading">Bags</div>
                    <div class="panel-body">


                        <div class="row">


                            <div class="col-md-6">


                                <div class="panel panel-primary">
                                    <div class="panel-heading">{{startAirport}}-{{endAirport}}</div>

                                    <div class="panel-body">


                                        <div v-for="airline of bagRules">


                                            <div class="panel panel-primary">
                                                <div class="panel-heading">{{airline.carrier}}</div>

                                                <div class="panel-body">


                                                    <div v-for="carrier of outboundCarriers">
                                                        <div v-if="carrier === airline.carrier">

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



                            <div class="col-md-6">


                                <div class="panel panel-primary">
                                    <div class="panel-heading">{{endAirport}}-{{startAirport}}</div>

                                    <div class="panel-body">


                                        <div v-for="airline of bagRules">


                                            <div class="panel panel-primary">
                                                <div class="panel-heading">{{airline.carrier}}</div>

                                                <div class="panel-body">


                                                    <div v-for="carrier of inboundCarriers">

                                                        <div v-if="airline.bags.length  >0 ">

                                                                <div v-if="carrier === airline.carrier">

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

