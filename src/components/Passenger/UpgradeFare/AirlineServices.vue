<template>
    <div class="airlineservices">


        <div class="panel panel-primary">
            <div class="panel-heading">{{airline}}</div>

            <div class="panel-body">

                <div class="row">

                <div v-for="opt of options">



                    <div class="col-md-5">

                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <input type="radio" id="two" value="Two"
                                       > {{opt.name}}

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
</template>

<script>
    export default {
        props: ['airline', 'options'],
        data() {
            return {}
        }
    }
</script>

