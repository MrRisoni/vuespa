<template>
    <div class="HotelResults">

        <div class="card bg-light">
            <div class="card-header">

                <div class="row">

                    <div class="col-md-5">
                        Pick your hotel
                    </div>

                    <div class="col-md-5"></div> <!-- offset does not work -->

                    <div class="col-md-2">
                        <button class="btn btn-sm btn-dark btn-block" @click="toggleMe"> {{label}} </button>
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

    }
</script>
