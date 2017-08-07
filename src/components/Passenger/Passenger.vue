<template>
    <div class="passenger">


        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-primary">
                    <div class="panel-heading">

                        <div class="row">
                            <div class="col-md-5">
                                Passenger #
                            </div>


                            <div class="col-md-2 col-md-offset-5">
                                <button class="btn btn-xs btn-success"> this.state.buttonName </button>
                            </div>
                        </div>
                    </div>

                    <div class="panel-body">

                        <name></name>
                        Bags: {{bags}}
                        <button class="btn btn-primary btn-success">Go</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Name from './Name.vue'


    export default {
        components: {
            'name': Name
        },
        data() {
            return {}
        },
        computed: {
            bags() {
                return this.$store.state.bags
            }
        }

    }
</script>

