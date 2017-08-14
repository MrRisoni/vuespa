<template>


    <div class="airlineservices">

        <div class="row">
            <div class="col-md-12">


                <div class="card">
                    <div class="card-header">{{airline}}</div>

                    <div class="card-body">

                        <div class="row">


                            <div class="col-md-6">

                                <div class="card">
                                    <div class="card-header">Flex</div>

                                    <div class="card-body"> Body FLex </div>
                                </div>


                            </div>

                            <div class="col-md-6">
                                
                                <div class="card">
                                    <div class="card-header">Flex</div>

                                    <div class="card-body"> Body FLex </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>


        </div>
</template>


<style>

    .airlineservices {
        margin-top: 4%;
    }

</style>


<script>
    export default {
        props: ['airline', 'options'],
        data() {
            return {}
        }
    }
</script>

