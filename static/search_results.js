function redirect_results(){
    let search_item = $("#search_item").val()
    let new_url = "/search_results/" + search_item
    window.location.replace(new_url)
}

$(document).ready(function(){
    $("#results").empty()
    $("#search_item").keyup(function(e){
        if(e.keyCode == 13){
            $("#submit_button").trigger('click');
        }
    })
    $("#submit_button").click(function(event){
        let search_item = $("#search_item").val()
        let trimmed = search_item.trim()
        if (trimmed != ""){
            console.log(search_item)
            redirect_results()
        }
        else{
            $("#search_item").val("");
            $("#search_item").focus();
        }
        
    })
    $(".university").click(function(){
        let id = $(this).attr('id');
        console.log(id)
        let item_link = "/view/" + id
        window.location.replace(item_link)
    })
})