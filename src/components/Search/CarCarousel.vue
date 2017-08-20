<template>
    <div class="CarCarousel">

        <div class="row">
            <div class="col-md-12">


                <div class="card bg-light">
                    <div class="card-header"> Select your car </div>

                    <div class="row">


                        <div class="col-md-2">


                            <button class="btn btn-primary btn-success"><< </button>

                        </div>

                        <div class="col-md-8">

                            <div class="row">


                                <div class="col-md-5">
                                    <img src="http://www.experienceoxfordshire.org/wp-content/uploads/2017/02/6079-4.jpg">
                                </div>


                                <div class="col-md-3">
{{getCarName}}

                                </div>


                            </div>

                            <div class="row">
                                <div class="col-md-12">


                                    {{getCurrency}}
                                </div>
                            </div>


                        </div>
                        <div class="col-md-2">

                            <button class="btn btn-primary btn-success"> >> </button>


                        </div>


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
        computed: {
            getCurrency() {
                return this.$store.state.currency
            },
            getCarCarouselIndex() {
                return this.$store.state.carIndex;
            },
            getCarName()
            {
                return this.$store.state.carResults[this.$store.state.carIndex].name;
            }
        }

    }
</script>

