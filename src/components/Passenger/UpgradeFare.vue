<template>
    <div class="upgradefare">


        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-primary">
                    <div class="panel-heading"> Upgrade your Seat!</div>
                    <div class="panel-body">

                        <div class="row">
                            <div class="col-md-12">


                                <div v-for="carry of carriers">

                                    <div v-for="airline of upgradeOptions">
                                        <div v-if="airline.carrier == carry ">
                                            <div v-if="airline.options.length  >0 ">

                                                <div class="panel panel-primary">
                                                    <div class="panel-heading">{{carry}}</div>

                                                    <div class="panel-body">


                                                        <div v-for="opt of airline.options">

                                                            <div class="col-md-5">

                                                                <div class="panel panel-primary">
                                                                    <div class="panel-heading">
                                                                        <input type="radio" id="two" value="Two"
                                                                               v-model="picked"> {{opt.name}}

                                                                    </div>

                                                                    <div class="panel-body">


                                                                        <div v-for="pkg of opt.packages">


                                                                            <div v-if="pkg.status === 'free'">
                                                                                <div class="free_package">
                                                                                    <span class="glyphicon glyphicon-ok "></span>
                                                                                    {{pkg.title}}
                                                                                </div>
                                                                            </div>

                                                                            <div v-if="pkg.status === 'notincl'">
                                                                                <div class="notincl_package">
                                                                                    <span class="glyphicon glyphicon-remove"></span>
                                                                                    {{pkg.title}}
                                                                                </div>
                                                                            </div>

                                                                            <div v-if="pkg.status === 'fee'">
                                                                                <div class="fee_package">
                                                                                    <span class="glyphicon glyphicon-eur"></span>
                                                                                    {{pkg.title}}
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
