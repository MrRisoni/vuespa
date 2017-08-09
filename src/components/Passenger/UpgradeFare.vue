<template>
    <div class="upgradefare">


        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-primary">
                    <div class="panel-heading"> Upgrade Fare</div>
                    <div class="panel-body">

                        <div v-for="airline of upgradeOptions">
                            <div v-if="airline.options.length  >0 ">


                                <div class="panel panel-primary">
                                    <div class="panel-heading"> {{airline.carrier}}</div>
                                    <div class="panel-body">

                                        <div v-for="seg of outboundSegments">
                                            <div v-if="seg.code === airline.carrier">


                                                <div v-for="opt of airline.options">

                                                    <div class="col-md-3">


                                                        <div class="panel panel-primary">
                                                            <div class="panel-heading">{{opt.name}}</div>
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
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {
            outboundSegments() {
                return this.$store.state.itinerary.outbound
            },
            upgradeOptions() {
                return this.$store.state.upgradeFare
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
