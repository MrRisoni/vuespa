<template>
    <div class="pay">

        <div class="row">
            <div class="col-md-12">

                <div class="card">
                    <div class="card-header  bg-primary"> Payment Details</div>
                    <div class="card-body">

                        <div class="row">

                            <div class="col-md-4">
                                <select class="form-control">
                                    <option></option>
                                    <option value="">Visa Debit</option>
                                    <option value="">Visa Credit</option>
                                    <option value="">Mastercard Debit</option>
                                    <option value="">Mastercard Credit</option>
                                </select>
                            </div>


                            <div class="col-md-5">
                                <input type="text" placeholder="Card Number"
                                       class="form-control"/>
                            </div>
                        </div>

                        <br/>

                        <div class="row">
                            <div class="col-md-4">
                                <input type="text" placeholder="Bank Name"
                                       class="form-control"/>
                            </div>

                            <div class="col-md-6">
                                <input type="text" placeholder="Card Holder"
                                       class="form-control"/>
                            </div>


                            <div class="col-md-2">
                                <input type="text" placeholder="CVV2"
                                       class="form-control"/>
                            </div>
                        </div>

                        <br/>

                        <div class="row">
                            <div class="col-md-4">

                            </div>
                            <div class="col-md-4">
                                <button class="btn btn-success btn-lg">Complete Payment</button>

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
            return {
                msg: 'Fill the data'
            }
        }
    }
</script>

