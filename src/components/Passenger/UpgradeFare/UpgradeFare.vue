<template>
    <div class="upgradefare">


        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-primary">
                    <div class="panel-heading"> Upgrade your Seat!</div>
                    <div class="panel-body">

                        <div class="row">
                            <div class="col-md-12">


                                <div v-for="carrier of carriers">

                                    <div v-for="airline of upgradeOptions">
                                        <div v-if="airline.carrier == carrier ">
                                            <div v-if="airline.options.length  >0 ">

                                                <airline-services :airline="carrier"
                                                                  :options="airline.options"
                                                            ></airline-services>

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

    import AirlineServices from './AirlineServices.vue'


    export default {
        components: {
            'airlineServices' : AirlineServices
        },
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
            upgradeOptions() {
                return this.$store.state.upgradeFare
            },
            carriers() {
                return this.$store.state.carriers
            }
        }

    }
</script>

<style>


    .free_package {
        color: #49fe6a;
    }

    .notincl_package {
        color: #ff0000;
    }

    .fee_package {
        color: #ffb61e;
    }


</style>
