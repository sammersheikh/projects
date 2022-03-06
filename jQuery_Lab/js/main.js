
let inputValue = null;

function getValue() {
    $input = $('#inputField')
    inputValue = $input.val()
    const newRow = `<tr><td>${inputValue}</td><td><button class="btnRight" id="removeBtn">REMOVE</button></td></tr>`
    $('tbody').append(newRow)
    $('#inputField').val("")
}

function removeButton() {
    $(this).closest('tr').fadeOut(100, function() {
    let removedRow = $(this).remove()
    })
    // const pushRows = removedRows.push(pushRows)
}



$('#btn').on('click', getValue)

$('#table tbody').on('click', 'button', removeButton)