<template>
    <div class="CarCarousel">

        <div class="row">
            <div class="col-md-12">


                <div class="card bg-light">
                    <div class="card-header">

                        <div class="row">

                            <div class="col-md-5">

                                Select your car
                            </div>


                            <div class="col-md-2">
                                <button class="btn btn-sm btn-dark btn-block" @click="toggleMe"> {{label}} </button>
                            </div>

                        </div>

                    </div>

                    <div v-if="showMe">
                        <div class="card-body">


                            <div class="row">


                                <div class="col-md-2">


                                    <button class="btn btn_next_prev btn-primary btn-success" @click="previousCar"> <<
                                    </button>

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


                                </div>
                                <div class="col-md-2">

                                    <button class="btn btn_next_prev btn-primary btn-success" @click="nextCar"> >>
                                    </button>


                                </div>

                            </div>

                        </div>

                        <div class="card-footer">

                            <div class="row">
                                <div class="col-md-12">
                                    {{getPrice}}

                                    {{getCurrency}}
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

    .CarCarousel {
        margin-top: 5%;
        margin-bottom: 2%;
    }

    .CarCarousel .btn_next_prev {
        margin-top: 55%;
    }

    .CarCarousel img {
        margin-top: 12%;
        height: 75%;
        width: auto;
    }


</style>


<script>
    export default {
        data() {
            return {
                showMe: true,
                label: 'Hide'
            }
        },
        computed: {
            getCurrency() {
                return this.$store.state.currency
            },
            getPrice() {
                let price = 5 * this.$store.state.carResults[this.$store.state.carIndex].convertedPrice;
                return price.toFixed(2);
            },
            getCarName() {
                return this.$store.state.carResults[this.$store.state.carIndex].name;
            }
        },
        methods: {
            nextCar() {
                this.$store.commit('nextCar');
            },
            previousCar() {
                this.$store.commit('previousCar');
            },
            toggleMe() {
                this.showMe = !this.showMe;
                this.label = (this.showMe) ? 'Hide' : 'Show'
            }
        }

    }
</script>

