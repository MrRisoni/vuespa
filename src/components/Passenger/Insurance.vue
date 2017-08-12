<template>
    <div class="insurance">

        <div class="row">
            <div class="col-md-12">

                <div class="alert alert-success" role="alert">

                    <div class="row">

                        <div class="col-md-4">
                            Select an Insurance
                        </div>

                        <div class="col-md-2 col-md-offset-5">
                            <button class="btn btn-xs btn-warning" @click="toggleMe"> Hide </button>
                        </div>


                    </div>

                </div>

                <div v-if="showMe">

                    <div class="row">

                        <div class="col-md-3">
                            <div class="panel panel-default">
                                <div class="panel-heading">Panel heading
                                    without title
                                </div>
                                <div class="panel-body">
                                    Basic panel example
                                </div>
                            </div>

                        </div>


                        <div class="col-md-3">
                            <div class="panel panel-default">
                                <div class="panel-heading">Panel heading
                                    without title
                                </div>
                                <div class="panel-body">
                                    Basic panel example
                                </div>
                            </div>

                        </div>


                        <div class="col-md-3">
                            <div class="panel panel-default">
                                <div class="panel-heading">Panel heading
                                    without title
                                </div>
                                <div class="panel-body">
                                    Basic panel example
                                </div>
                            </div>

                        </div>


                        <div class="col-md-3">
                            <div class="panel panel-default">
                                <div class="panel-heading">Panel heading
                                    without title
                                </div>
                                <div class="panel-body">
                                    Basic panel example
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
        props: ['passengerid'],
        data() {
            return {}
        },
        computed: {
            showMe() {
                return this.$store.state.passengers[this.passengerid - 1].showInsurance
            }
        },
        methods: {

            toggleMe() {
                this.$store.commit('toggleInsurancePanel', this.passengerid);
            }
        }

    }
</script>

