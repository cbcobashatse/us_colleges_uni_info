function display_all_data(universities, div){
    $.each(universities, function(index, value){
        let item_row = $("<div class='row item_row'>")
        $(div).append(item_row)

        let image_div = $("<div class='col-4'>")
        let image = $("<img class='img-fluid' src=" + value["image"] + " alt='" + value["name"] + " Logo'>")
        $(image_div).append(image)
        $(image_div).append("<br>")
        $(item_row).append(image_div)

        // let middle_div = $("<div class='col-1'>")
        // $(item_row).append(middle_div)

        let item = $("<div class='col-8 item webpage_description'>")

        $(item).append(value["name"])
        $(item_row).append(item)

        $(item).click(function(){
            console.log("clicked")
            console.log(value["id"])
            let item_link = "/view/" + value["id"]
            window.location.replace(item_link)
        })
        $(image).click(function(){
            console.log("clicked")
            console.log(value["id"])
            let item_link = "/view/" + value["id"]
            window.location.replace(item_link)
        })
    })
}

$(document).ready(function(){
    $("#popular_unis").empty()
    display_all_data(universities, "#popular_unis")
})