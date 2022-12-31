$(document).ready(function(){
    $('.datepicker').datepicker({
        minDate: new Date()
    });
});

$(document).ready(function(){
    $('.timepicker').timepicker({
        twelveHour: false
    });
});