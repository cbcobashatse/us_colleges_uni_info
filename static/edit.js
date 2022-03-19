function send_edits_to_server(university){
    let data_to_edit = {"university": university} 
    // console.log(university) 
    $.ajax({
        type: "UPDATE",
        url: "/save_edits",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_to_edit),
        success: function(result){

            let id = result["id"]
            let universities = result["universities"]

            console.log(id)

            console.log(universities)
            
            // console.log("added data")
            // let new_item = $("<div class='new_item'>")
            // $(new_item).text("New item created!!!")
            // $("#new_item").append(new_item)

            // let button = $("<button id='view_item'>")
            // $(button).text("See it here!")
            // $("#link_item").append(button)
            

            
            let item_link = "/view/" + id
            window.location.replace(item_link)
               
        }
    })
}

function submit_new_data(id){
    let name = $("#uni_name").val()
    let city = $("#uni_city").val()
    let state = $("#uni_state").val()
    let logo = $("#uni_logo").val()
    let website = $("#uni_website").val()
    let funding = $("#uni_funding").val()
    let degrees = $("#uni_degrees").val()
    let gender = $("#uni_gender").val()
    let curriculum = $("#uni_curriculum").val()
    let admit_rate = $("#uni_admit_rate").val()
    let application_fee = $("#uni_application_fee").val()
    let common_app = $("#uni_common_app").val()
    let coalition_app = $("#uni_coalition_app").val()
    let description = $("#uni_description").val()
    let essay = $("#uni_common_app_essay").val()
    let supplemental_questions = $("#uni_supplemental_questions").val()
    let counselor_rec = $("#uni_counselor_recommendation").val()
    let teacher_eval = $("#uni_teacher_evaluations").val()
    let testing = $("#uni_testing").val()
    let tests = $("#uni_tests").val()
    let toefl = $("#uni_toefl").val()
    let ielts = $("#uni_ielts").val()
    let duolingo = $("#uni_duolingo").val()
    let css_profile = $("#uni_css_profile").val()
    let documentation = $("#uni_documentation").val()
    let materials = $("#uni_supporting_materials").val()
    let major_1 = $("#major_1").val()
    let major_2 = $("#major_2").val()
    let major_3 = $("#major_3").val()
    let major_4 = $("#major_4").val()
    let major_5 = $("#major_5").val()
    let faculty_1 = $("#faculty_1").val()
    let faculty_2 = $("#faculty_2").val()
    let faculty_3 = $("#faculty_3").val()
    let faculty_4 = $("#faculty_4").val()
    let faculty_5 = $("#faculty_5").val()
    let alumni_1 = $("#alumni_1").val()
    let alumni_2 = $("#alumni_2").val()
    let alumni_3 = $("#alumni_3").val()
    let alumni_4 = $("#alumni_4").val()
    let alumni_5 = $("#alumni_5").val()
    let org_1 = $("#org_1").val()
    let org_2 = $("#org_2").val()
    let org_3 = $("#org_3").val()
    let org_4 = $("#org_4").val()
    let org_5 = $("#org_5").val()

    if($.trim(name).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Missing University Name")
        $(".name").append(error_div)

        $("#uni_name").focus()
    }
    else if($.trim(city).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Missing City")
        $(".city").append(error_div)

        $("#uni_city").focus()
    }
    else if($.trim(state).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Missing State")
        $(".state").append(error_div)

        $("#uni_state").focus()
    }
    else if($.trim(logo).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Missing Logo Link")
        $(".logo").append(error_div)

        $("#uni_logo").focus()
    }
    else if($.trim(website).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Missing Website Link")
        $(".website").append(error_div)

        $("#uni_website").focus()
    }
    else if($.trim(admit_rate).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Missing Admission Rate")
        $(".admit_rate").append(error_div)

        $("#uni_admit_rate").focus()
    }
    else if(admit_rate.includes("e") || admit_rate.match("^e") || admit_rate.match("e$")){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Only Numerical Values")
        $(".admit_rate").append(error_div)

        $("#uni_admit_rate").focus()
    }
    else if($.trim(application_fee).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Missing Application Fee")
        $(".application_fee").append(error_div)

        $("#uni_application_fee").focus()
    }
    else if(application_fee.includes("e")){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Only Numerical Values")
        $(".application_fee").append(error_div)

        $("#uni_application_fee").focus()
    }
    else if($.trim(description).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Short Description Needed")
        $(".uni_description").append(error_div)
        $("#uni_description").focus()
    }
    else if($.trim(major_1).length == 0 && $.trim(major_2).length == 0 && $.trim(major_3).length == 0 && $.trim(major_4).length == 0 && $.trim(major_5).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Include 1 or more Majors")
        $(".major").append(error_div)
        $("#major_1").focus()
    }
    else if($.trim(faculty_1).length == 0 && $.trim(faculty_2).length == 0 && $.trim(faculty_3).length == 0 && $.trim(faculty_4).length == 0 && $.trim(faculty_5).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Include 1 or more Faculty")
        $(".faculty").append(error_div)
        $("#faculty_1").focus()
    }
    else if($.trim(alumni_1).length == 0 && $.trim(alumni_2).length == 0 && $.trim(alumni_3).length == 0 && $.trim(alumni_4).length == 0 && $.trim(alumni_5).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Include 1 or more Alumni")
        $(".alumni").append(error_div)
        $("#alumni_1").focus()
    }
    else if($.trim(org_1).length == 0 && $.trim(org_2).length == 0 && $.trim(org_3).length == 0 && $.trim(org_4).length == 0 && $.trim(org_5).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Include 1 or more Organizations")
        $(".org").append(error_div)
        $("#org_1").focus()
    }
    
    // do some more error-checking here!!!

    else{
        // console.log("saving data")
        university = {}
        university["id"] = id
        university["name"] = name
        university["city"] = city
        university["state"] = state
        university["website"] = website
        university["image"] = logo
        // no year_founded provided/needed
        university["description"] = description
        // no president or endowment provided
        university["admission_rate"] = {}
        university["admission_rate"]["2021"] = admit_rate
        university["application_fee"] = application_fee
        university["school_info"] = {}
        university["school_info"]["Funding"] = funding
        university["school_info"]["Degrees"] = degrees
        university["school_info"]["Gender"] = gender
        university["school_info"]["Curriculum"] = curriculum
        university["alumni"] = []
        university["alumni"].push(alumni_1)
        university["alumni"].push(alumni_2)
        university["alumni"].push(alumni_3)
        university["alumni"].push(alumni_4)
        university["alumni"].push(alumni_5)
        university["majors"] = []
        university["majors"].push(major_1)
        university["majors"].push(major_2)
        university["majors"].push(major_3)
        university["majors"].push(major_4)
        university["majors"].push(major_5)
        university["faculty"] = []
        university["faculty"].push(faculty_1)
        university["faculty"].push(faculty_2)
        university["faculty"].push(faculty_3)
        university["faculty"].push(faculty_4)
        university["faculty"].push(faculty_5)
        university["student_orgs"] = []
        university["student_orgs"].push(org_1)
        university["student_orgs"].push(org_2)
        university["student_orgs"].push(org_3)
        university["student_orgs"].push(org_4)
        university["student_orgs"].push(org_5)
        university["application_requirements"] = {}
        university["application_requirements"]["Common App Essay"] = essay
        university["application_requirements"]["Counselor Recommendation"] = counselor_rec
        university["application_requirements"]["Teacher Evaluations"] = teacher_eval
        university["application_requirements"]["Supplemental Questions"] = supplemental_questions
        university["testing"] = {}
        university["testing"]["Testing"] = testing
        university["testing"]["Tests Accepted"] = tests
        university["language"] = {}
        university["language"]["TOEFL"] = toefl
        university["language"]["IELTS"] = ielts
        university["language"]["Duolingo"] = duolingo
        university["finaid"] = {}
        university["finaid"]["CSS Profile"] = css_profile
        university["finaid"]["Documentation"] = documentation
        university["finaid"]["Supporting Materials"] = materials
        university["application_platforms"] = {}
        university["application_platforms"]["Common App"] = common_app
        university["application_platforms"]["Coalition App"] = coalition_app
        send_edits_to_server(university)
    }
}

function load_data(university){
    $("#uni_name").val(university["name"])
    $("#uni_city").val(university["city"])
    $("#uni_state").val(university["state"])
    $("#uni_logo").val(university["image"])
    $("#uni_website").val(university["website"])
    $('#uni_funding').val(university["school_info"]["Funding"]).prop('selected', true)
    $("#uni_degrees").val(university["school_info"]["Degrees"]).prop('selected', true)
    $("#uni_gender").val(university["school_info"]["Gender"]).prop('selected', true)
    $("#uni_curriculum").val(university["school_info"]["Curriculum"]).prop('selected', true)
    $("#uni_admit_rate").val(university["admission_rate"]["2021"])
    $("#uni_application_fee").val(university["application_fee"])
    $("#uni_common_app").val(university["application_platforms"]["Common App"]).prop('selected', true)
    $("#uni_coalition_app").val(university["application_platforms"]["Coalition App"]).prop('selected', true)
    $("#uni_description").val(university["description"])
    $("#uni_common_app_essay").val(university["application_requirements"]["Common App Essay"]).prop('selected', true)
    $("#uni_supplemental_questions").val(university["application_requirements"]["Supplemental Questions"]).prop('selected', true)
    $("#uni_counselor_recommendation").val(university["application_requirements"]["Counselor Recommendation"]).prop('selected', true)
    $("#uni_teacher_evaluations").val(university["application_requirements"]["Teacher Evaluations"]).prop('selected', true)
    $("#uni_testing").val(university["testing"]["Testing"]).prop('selected', true)
    $("#uni_tests").val(university["testing"]["Tests Accepted"]).prop('selected', true)
    $("#uni_toefl").val(university["language"]["TOEFL"]).prop('selected', true)
    $("#uni_ielts").val(university["language"]["IELTS"]).prop('selected', true)
    $("#uni_duolingo").val(university["language"]["Duolingo"]).prop('selected', true)
    $("#uni_css_profile").val(university["finaid"]["CSS Profile"]).prop('selected', true)
    $("#uni_documentation").val(university["finaid"]["Documentation"]).prop('selected', true)
    $("#uni_supporting_materials").val(university["finaid"]["Supporting Materials"]).prop('selected', true)
    majors = university["majors"]
    $.each(majors, function(index, value){
        let div_id = "#major_" + (index + 1)
        $(div_id).val(value)
    })
    faculty = university["faculty"]
    $.each(faculty, function(index, value){
        let div_id = "#faculty_" + (index + 1)
        $(div_id).val(value)
    })
    alumni = university["alumni"]
    $.each(alumni, function(index, value){
        let div_id = "#alumni_" + (index + 1)
        $(div_id).val(value)
    })
    orgs = university["student_orgs"]
    $.each(orgs, function(index, value){
        let div_id = "#org_" + (index + 1)
        $(div_id).val(value)
    })
}

$(document).ready(function(){
    console.log("ready")
    load_data(university)
    id = university["id"]
    $("#submit_new_data").click(function(event){
        submit_new_data(id)
    })
    $("#discard").click(function(event){
        $.confirm({
            title: 'Discard Changes',
            content: 'Are you sure you want to discard your changes?',
            buttons: {
                confirm: function () {
                    let item_link = "/view/" + id
                    window.location.replace(item_link)
                },
                cancel: function () {
                    console.log("canceled")
                }                
            }
        });
    })
})