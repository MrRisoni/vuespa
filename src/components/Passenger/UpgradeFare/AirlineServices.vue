<template>


    <div class="airlineservices">

        <div class="row">
            <div class="col-md-12">


                <div class="card">
                    <div class="card-header bg-info ">{{airline}}</div>

                    <div class="card-body">


                        <div v-for="opt of options">
                            <div class="row">

                                <fare-class :FareClassName="opt.name"
                                :packages="opt.packages"></fare-class>

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

    import FareClass from './FareClass.vue'


    export default {
        props: ['airline', 'options'],
        components: {
            'FareClass': FareClass
        },
        data() {
            return {}
        }
    }
</script>

