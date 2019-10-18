<template>
    <div class="col-8 mx-auto my-5">
        <form action="#" autocomplete="off">
            <fieldset class="answerText">
                <input id="answerText" type="text" required="required">
                    <label for="answerText">
                        <i class="fa fa-search" aria-hidden="true"></i>Answer</label>
                    <div class="after"></div>
                </fieldset>
                <!-- <fieldset class="enter"> <button></button> </fieldset> -->
            </form>

        </div>
    </template>

<script>
    export default {}
</script>

<style>

    fieldset {
        position: relative;
    }

    .fa-search {
        position: relative;
        top: 0;
        font-size: 20px !important;
    }

    .answerText {
        /* margin: 20px 50px; */
        /* padding-left: 50px; */
        -webkit-box-flex: 5;
        -ms-flex-positive: 5;
        flex-grow: 5;
    }

    .enter {
        margin: 20px;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
    }

    label {
        position: absolute;
        top: -5px;
        letter-spacing: 10px;
        font-size: 20px;
        font-weight: bold;
        color: RGBA(55, 73, 87, 0.8);
        -webkit-transform-origin: left;
        -ms-transform-origin: left;
        transform-origin: left;
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }

    input:focus ~ label {
        color: RGBA(254, 253, 255, 1.00);
        text-shadow: 1px 1px 1px black;
        font-weight: bold;
    }

    input:focus ~ label,
    input:valid ~ label {
        top: 0;
        letter-spacing: 5px;
        -webkit-transform: translate(0, -30px) scale(0.7, 0.7);
        -ms-transform: translate(0, -30px) scale(0.7, 0.7);
        transform: translate(0, -30px) scale(0.7, 0.7);

    }

    input {
        font-family: system-ui, Helvetica, Arial, sans-serif;
        font-size: 20px !important;
        width: 100%;
        border: none;
        margin-top: 0;
        background-color: transparent;
        color: aliceblue;
        font-weight: bold;
        text-shadow: 1px 1px 1px black;
    }

    input:focus {
        outline: none;
    }

    .after {
        width: 100%;
        height: 2px;
        background: -webkit-gradient(linear, left top, right top, color-stop(50%, RGBA(254, 253, 255, 1.00)), color-stop(50%, transparent));
        background: -webkit-linear-gradient(left, RGBA(254, 253, 255, 1.00) 50%, transparent 50%);
        background: -o-linear-gradient(left, RGBA(254, 253, 255, 1.00) 50%, transparent 50%);
        background: linear-gradient(to right, RGBA(254, 253, 255, 1.00) 50%, transparent 50%);
        background-color: RGBA(55, 73, 87, 0.8);
        background-size: 200% 100%;
        background-position: 100% 0;
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }

</style>