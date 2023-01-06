$(document).on("click", "#change", function() {
    axios({
        method: "post",
        url: "http://localhost:8080/api/changestatus",
        data: {
            status: $("#status").val()
        }
    }).then(function (response) {
        console.log(response)
      });
})