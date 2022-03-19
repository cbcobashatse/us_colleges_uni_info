function edit_data(uni_id){
    let edit_link = "/edit/" + uni_id
    window.location.replace(edit_link)
}

$(document).ready(function(){
    $("#edit_data").click(function(event){
        edit_data(uni_id)
        console.log(uni_id)
    })
})