<template>
    <div class="CarCarousel">

        <h1>{{ carData.length }}</h1>

        <div class="row">
            <div class="col-md-12">


                <div class="card bg-light">
                    <div class="card-header"> Select your car </div>

                    <div class="row">


                        <div class="col-md-2"> << </div>

                        <div class="col-md-4">

                            {{carData[index].name}}


                            {{carData[index].convertedPrice}}

                            {{getCurrency}}

                        </div>
                        <div class="col-md-2"> >> </div>


                    </div>
                </div>

            </div>
        </div>


        <button class="btn btn-primary btn-success">Go</button>

    </div>
</template>

<style>

    .CarCarousel {
        margin-top: 5%;
    }

</style>


<script>
    export default {
        props: ['carData'],
        data() {
            return {
                msg: 'Fill the data',
                index: 0
            }
        },
        computed: {
            getCurrency() {
                return this.$store.state.currency
            }
        }
    }
</script>

