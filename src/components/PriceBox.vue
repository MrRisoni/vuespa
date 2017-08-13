<template>
    <div class="pricebox">

        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-success">
                    <div class="panel-heading">Price Analysis</div>
                    <div class="panel-body">


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
        width:auto;
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
