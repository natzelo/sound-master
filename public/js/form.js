$('#submit').click((e) => {

    e.preventDefault()
    
    const name = $('#name').val();
    const email = $('#email').val();

    const obj = {name, email}
    $.post('/price', obj, function(data) {
        console.log(data)
    }, 'json')
})