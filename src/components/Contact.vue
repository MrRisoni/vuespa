<template>
    <div class="contact">


        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-primary">
                    <div class="panel-heading">Contact Details</div>
                    <div class="panel-body">


                        <div class="row">

                            <div class="col-md-2">
                                <select class="form-control">
                                    <option></option>
                                    <option value="MR">Male</option>
                                    <option value="MS">Female</option>
                                </select>
                            </div>


                            <div class="col-md-5">
                                <input type="text" placeholder="Surname"
                                       class="form-control"/>
                            </div>


                            <div class="col-md-5">
                                <input type="text" placeholder="Name"
                                       class="form-control"/>
                            </div>


                        </div>


                        <br/>


                        <div class="row">

                            <div class="col-md-2">
                                <input type="text" placeholder="Prefix"
                                       class="form-control"/>
                            </div>


                            <div class="col-md-5">
                                <input type="text" placeholder="Mobile"
                                       class="form-control"/>
                            </div>


                            <div class="col-md-5">
                                <input type="text" placeholder="Email"
                                       class="form-control"/>
                            </div>


                        </div>

                        <br/>

                        <div class="row">
                            <div class="col-md-5">
                                <select class="form-control">
                                    <option>Select Country</option>
                                    <option value="GR">Greece</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>


                            <div class="col-md-5">
                                <input type="text" placeholder="City"
                                       class="form-control"/>
                            </div>


                        </div>


                        <br/>


                        <div class="row">

                            <div class="col-md-5">
                                <input type="text" placeholder="Address"
                                       class="form-control"/>
                            </div>


                            <div class="col-md-4">
                                <input type="text" placeholder="Post code"
                                       class="form-control"/>
                            </div>


                        </div>


                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

