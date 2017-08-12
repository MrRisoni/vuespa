<template>
    <div class="insurance">


        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-primary">
                    <div class="panel-heading">Select an Insurance</div>
                    <div class="panel-body">


                        <div v-if="showMe">
                            <div class="row">

                            <div class="col-md-3">


                                <div class="panel panel-primary">
                                    <div class="panel-heading">Insurance</div>
                                    <div class="panel-body">
                                        None
                                    </div>
                                </div>


                            </div>


                            <div class="col-md-3">
                                <div class="panel panel-primary">
                                    <div class="panel-heading">Insurance</div>
                                    <div class="panel-body">
                                        None
                                    </div>
                                </div>


                            </div>


                            <div class="col-md-3">
                                <div class="panel panel-primary">
                                    <div class="panel-heading">Insurance</div>
                                    <div class="panel-body">
                                        None
                                    </div>
                                </div>


                            </div>

                            <div class="col-md-3">
                                <div class="panel panel-primary">
                                    <div class="panel-heading">Insurance</div>
                                    <div class="panel-body">
                                        None
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
        props:['passengerid'],
        data() {
            return {}
        },
        computed : {
          showMe()
          {
              return this.$store.state.passengers[this.passengerid-1].showInsurance
          }
        }

    }
</script>

