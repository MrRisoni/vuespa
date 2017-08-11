<template>
    <div class="bookapp">

        <div class="panel panel-primary">
            <div class="panel-heading">{{airline.carrier}}</div>

            <div class="panel-body">


                <div v-for="bag of airline.bags">

                    <button type="button" class="btn btn-xs btn-primary">
                        <span class="glyphicon glyphicon-plus"></span>
                    </button>

                    {{bag.title}} {{bag.price}}
                </div>

            </div>


        </div>

    </div>
</template>

<script>
    export default {
        props: ['airline'],
        data() {
            return {

            }
        }
    }
</script>

