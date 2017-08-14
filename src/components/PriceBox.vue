<template>
    <div class="pricebox">

        <div class="row">
            <div class="col-md-12">

                <div class="card bg-info">
                    <div class="card-header"><b>Price Analysis </b></div>
                    <div class="card-body text-white">


                        <div v-for="pax in appState.paxTypes">
                            {{pax.count}} {{pax.name}} x {{pax.netPrice}}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>

    .pricebox {
        position: fixed;
        width: auto;
        min-width: 30%;
        max-width: 30%;

    }

</style>


<script>


    export default {

        computed: {
            appState() {
                return this.$store.state
            }

        }
    }
</script>
