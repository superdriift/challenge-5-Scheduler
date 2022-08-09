console.log(moment())
var currentTime = { text: moment().format("h:mm A"), date: moment().format('MMMM Do, YYYY') };
console.log(currentTime)
var daytimetag = document.querySelector('#daytimetag');
var hoy = currentTime.date;
var ahora = currentTime.text;
var newline = '<br>';
var currentHour = moment().hours()



daytimetag.innerHTML = hoy + newline + ahora;
console.log(hoy + newline + ahora)



$('.savebtn').on('click', function(){
    console.log(this);
    var input = $(this).siblings('.userinput').val();
    console.log(input);
    var time = $(this).parent().attr('id');
    console.log(time);
    localStorage.setItem(time, input);
})

function colorUpdater() {
    $('.userinput').each(function(){
        var rowHour = parseInt($(this).parent().attr('id'))
        if (rowHour < currentHour) {
            $(this).addClass('past')
        } else if (rowHour === currentHour) {
            $(this).addClass('present')
        } else {
            $(this).addClass('future')
        }
    })
};


$('#9 .userinput').val(localStorage.getItem('9'))
$('#10 .userinput').val(localStorage.getItem('10'))
$('#11 .userinput').val(localStorage.getItem('11'))
$('#12 .userinput').val(localStorage.getItem('12'))
$('#13 .userinput').val(localStorage.getItem('13'))
$('#14 .userinput').val(localStorage.getItem('14'))
$('#15 .userinput').val(localStorage.getItem('15'))
$('#16 .userinput').val(localStorage.getItem('16'))
$('#17 .userinput').val(localStorage.getItem('17'))
colorUpdater()
