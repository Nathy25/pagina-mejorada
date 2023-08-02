$(document).ready(function () {
    $("#comentForm").submit(function (event) {
        event.preventDefault();

        const firsName = $("#firsName").val();
        const email = $("#email").val();
        const coments = $("#coments").val();

        const newComment = `<li><strong>${firsName}</strong> (${email}):<br>${coments}</li>`;

        $("#coment").append(newComment);

        $("#comentForm")[0].reset();

    });
});


$(document).ready(() => {
    $(".btn").click((evt) => {
        alert($(evt.target).html())
    })

})


