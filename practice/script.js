let inputVal = null;

$('#btn').on("click", submitInput)

function submitInput() {
   inputVal = $('#input').val()
   $('h3').append(` ${inputVal}`)
   $('#input').val("")
}