<template>
    <div class="airport">

        <div class="row">
            <div class="col-md-4">

                Airport compo
                {{trigram}}
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        // relating to the attribute define in outer <router-view> tag.
        props: ['trigram'],
        data() {
            return {

            }
        }

    }
</script>
