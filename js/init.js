$(document).ready(function(){
    $('.datepicker').datepicker({
        minDate: new Date()
    });
    $('.timepicker').timepicker({
        defaultTime: "00:00",
        twelveHour: false
    });
});