function clear_boxes(){
    $("#uni_name").val("")
    $("#uni_city").val("")
    $("#uni_state").val("")
    $("#uni_logo").val("")
    $("#uni_website").val("")
    $('#uni_funding').val("").prop('selected', true)
    $("#uni_degrees").val("").prop('selected', true)
    $("#uni_gender").val("").prop('selected', true)
    $("#uni_curriculum").val("").prop('selected', true)
    $("#uni_admit_rate").val("")
    $("#uni_application_fee").val("")
    $("#uni_common_app").val("").prop('selected', true)
    $("#uni_coalition_app").val("").prop('selected', true)
    $("#uni_description").val("")
    $("#uni_common_app_essay").val("").prop('selected', true)
    $("#uni_supplemental_questions").val("").prop('selected', true)
    $("#uni_counselor_recommendation").val("").prop('selected', true)
    $("#uni_teacher_evaluations").val("").prop('selected', true)
    $("#uni_testing").val("").prop('selected', true)
    $("#uni_tests").val("").prop('selected', true)
    $("#uni_toefl").val("").prop('selected', true)
    $("#uni_ielts").val("").prop('selected', true)
    $("#uni_duolingo").val("").prop('selected', true)
    $("#uni_css_profile").val("").prop('selected', true)
    $("#uni_documentation").val("").prop('selected', true)
    $("#uni_supporting_materials").val("").prop('selected', true)
    $("#major_1").val("")
    $("#major_2").val("")
    $("#major_3").val("")
    $("#major_4").val("")
    $("#major_5").val("")
    $("#faculty_1").val("")
    $("#faculty_2").val("")
    $("#faculty_3").val("")
    $("#faculty_4").val("")
    $("#faculty_5").val("")
    $("#alumni_1").val("")
    $("#alumni_2").val("")
    $("#alumni_3").val("")
    $("#alumni_4").val("")
    $("#alumni_5").val("")
    $("#org_1").val("")
    $("#org_2").val("")
    $("#org_3").val("")
    $("#org_4").val("")
    $("#org_5").val("")
}

function send_data_to_server(university){
    let data_to_save = {"university": university}  
    $.ajax({
        type: "POST",
        url: "save_uni",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_to_save),
        success: function(result){

            let id = result["id"]
            let universities = result["universities"]

            console.log(id)
            console.log(universities)
            
            console.log("added data")
            let new_item = $("<div class='new_item'>")
            $(new_item).text("New item created!!!")
            $("#new_item").append(new_item)

            let button = $("<button id='view_item'>")
            $(button).text("See it here!")
            $("#link_item").append(button)

            clear_boxes()
            $("#uni_name").focus()

            $("#view_item").click(function(event){
                let item_link = "/view/" + id
                window.location.replace(item_link)
            })

            
        }
    })
}

function submit_data(){
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

    // console.log(funding)

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
    else if(funding == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".funding").append(error_div)

        $("#uni_funding").focus()
    }
    else if(degrees == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".degrees").append(error_div)

        $("#uni_degrees").focus()
    }
    else if(gender == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".gender").append(error_div)

        $("#uni_gender").focus()
    }
    else if(curriculum == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".curriculum").append(error_div)

        $("#uni_curriculum").focus()
    }
    else if($.trim(admit_rate).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Missing Admission Rate")
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
    else if(common_app == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".common_app").append(error_div)

        $("#uni_common_app").focus()
    }
    else if(coalition_app == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".coalition_app").append(error_div)

        $("#uni_coalition_app").focus()
    }
    else if($.trim(description).length == 0){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Short Description Needed")
        $(".uni_description").append(error_div)
        $("#uni_description").focus()
    }
    else if(essay == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".essay").append(error_div)

        $("#uni_common_app_essay").focus()
    }
    else if(supplemental_questions == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".supplements").append(error_div)

        $("#uni_supplemental_questions").focus()
    }
    else if(counselor_rec == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".rec").append(error_div)

        $("#uni_counselor_recommendation").focus()
    }
    else if(teacher_eval == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".eval").append(error_div)

        $("#uni_teacher_evaluations").focus()
    }
    else if(testing == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".testing").append(error_div)

        $("#uni_testing").focus()
    }
    else if(tests == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".tests").append(error_div)

        $("#uni_tests").focus()
    }
    else if(toefl == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".toefl").append(error_div)

        $("#uni_toefl").focus()
    }
    else if(ielts == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".ielts").append(error_div)

        $("#uni_ielts").focus()
    }
    else if(duolingo == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".duolingo").append(error_div)

        $("#uni_duolingo").focus()
    }
    else if(css_profile == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".css").append(error_div)

        $("#uni_css_profile").focus()
    }
    else if(documentation == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".doc").append(error_div)

        $("#uni_documentation").focus()
    }
    else if(materials == null){
        $(".error").empty()

        let error_div = $("<div class='error'>")
        $(error_div).text("Select an option")
        $(".materials").append(error_div)

        $("#uni_supporting_materials").focus()
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

    else{
        university = {}
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
        console.log(university)
        send_data_to_server(university)
    }
}

$(document).ready(function(){
    $("#submit_data").click(function(event){
        // console.log("submitted")
        submit_data()
    })
})