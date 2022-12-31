$(document).ready(function(){
    $('.datepicker').datepicker({
        minDate: new Date(),
        defaultDate: new Date(Date.now() + 86400000)
    });
    $('.timepicker').timepicker({
        defaultTime: "00:00"
    });
});