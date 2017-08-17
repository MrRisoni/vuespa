<template>

    <div class="airlineservices">

        <div class="row">
            <div class="col-md-12">

                <div class="card">
                    <div class="card-header bg-info ">

                        <div class="row">
                            <div class="col-md-4">
                                {{airline}}
                            </div>


                            <div class="col-md-5"></div> <!-- offset does not work -->

                            <div class="col-md-2">
                                <button class="btn btn-sm btn-dark btn-block" @click="toggleMe"> {{toggleButton}}
                                </button>
                            </div>

                        </div>

                    </div>

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
            return {
                toggleButton: 'Hide',
                showMe: true
            }
        },
        methods: {
            toggleMe() {
                this.showMe = !this.showMe;
                if (this.showMe) {
                    this.toggleButton = 'Hide';
                }
                else {
                    this.toggleButton = 'Show';
                }
            }
        }
    }
</script>

