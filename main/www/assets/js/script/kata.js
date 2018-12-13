let editor;
$(document).ready(function(){
    editor = CodeMirror($('#editor')[0], {
        mode: 'python',
        lineNumbers: true,
        value: base_code[0]['base_code']
    });

    $('select').formSelect();

    $('#prefill').on('click', _prefill);
    $('#test').on('click', _test_solution);
});

function _prefill() {
    editor.setValue("def fct(a):\n  return a + 1\nprint(fct(2))");
}

function _test_solution() {
    console.log('salut');
    let code = editor.getValue('\n');
    let kata = $('#kata-id').text();

    $.ajax({
        url: 'api/code/test',
        type: 'post',
        data: {
            code: code,
            kata: kata
        },
        success: function (response) {
            console.log(response);
        }
    })
}

function get_code_value() {
    return '';
}
