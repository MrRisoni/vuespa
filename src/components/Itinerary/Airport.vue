<template>
    <div class="airport">

        <div class="row">
            <div class="col-md-4">
                {{data.IATA}}  <br>
                {{data.AirPortName}}
            </div>
            <div class="col-md-8">
                <b class="flightTime">10:10</b>
                <br>
                 Fr 23/06/2017
                <br>
                <p class="gmtdiff">
                    GMT+03:00 <br>
                </p>
            </div>
        </div>


    </div>
</template>


<script>
    export default {
        // relating to the attribute define in outer <router-view> tag.
        props: ['trigram', 'data'],
        data() {
            return {

            }
        }

    }
</script>
