<template>
    <div class="pricebox">

        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-success">
                    <div class="panel-heading">Price Analysis</div>
                    <div class="panel-body">


                        <div v-for="pax in appState.paxTypes">
                            {{pax.count}} Adults x {{pax.netPrice}}    <p>{{ $t("hello") }}</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {

        computed: {
            appState() {
                return this.$store.state
            }

        }
    }
</script>
