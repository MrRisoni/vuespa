<template>
    <div class="FlightsResults">

        <div class="card bg-light">
            <div class="card-header">

                <div class="row">

                    <div class="col-md-5">
                        Pick your flight
                    </div>

                    <div class="col-md-5"></div> <!-- offset does not work -->

                    <div class="col-md-2">
                        <button class="btn btn-sm btn-dark btn-block" @click="toggleMe"> {{label}} </button>
                    </div>


                </div>

            </div>

            <div v-if="showMe">
                <div class="card-body">

                    Results Body
                </div>
            </div>


            <div class="card-footer">

                <div class="row">
                    <div class="col-md-12">
                        getPrice

                        getCurrency
                    </div>
                </div>

            </div>


        </div>
    </div>

</template>

<style>


    .HotelResults {
        margin-top: 5%;
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
        methods: {
            toggleMe() {
                this.showMe = !this.showMe;
                this.label = (this.showMe) ? 'Hide' : 'Show'
            }
        }

    }
</script>
