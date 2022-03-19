from flask import Flask
from flask import render_template
from flask import Response, request, jsonify, redirect, url_for
app = Flask(__name__)


universities = {
    "1":{
        "id" : "1",
        "name" : "Columbia University",
        "city" : "New York City",
        "state" : "New York",
        "website": "https://www.columbia.edu",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/1920px-Columbia_University_shield.svg.png",
        "year_founded": "1754",
        "description": """Columbia University is a private Ivy League research university in New York City. Established in 1754 as King's College on the grounds of Trinity Church in Manhattan, Columbia is the oldest institution of higher education in New York and the fifth-oldest institution of higher learning in the United States. It is one of nine colonial colleges founded prior to the Declaration of Independence, seven of which belong to the Ivy League. Columbia is ranked among the top universities in the world by major education publications.""",
        "president": ["Lee C. Bollinger"],
        "endowment": "$14,350,000,000",
        "alumni": ["Barack Obama", "Ruth Bader Ginsburg", "Isaac Asimov"],
        "majors": ["Computer Science", "Economics", "Social Sciences",
                    "History", "Public Health"],
        "admission_rate": {"2021" : "3.7", "2020" : "6"},
        "application_fee": "85",
        "application_requirements": {"Common App Essay": "Yes", "Counselor Recommendation": "Yes",
                                    "Teacher Evaluations" : "2", "Supplemental Questions": "5+"},
        "testing" : {"Testing": "Test Optional", "Tests Accepted": "SAT/ACT"},
        "language": {"TOEFL": "Yes", "IELTS": "Yes", "Duolingo": "Yes"},
        "finaid" : {"CSS Profile": "Yes", "Documentation": "Submit via IDOC", "Supporting Materials": "Yes"},
        "application_platforms" : {"Common App": "Yes", "Coalition App": "Yes"},
        "school_info" : {"Funding": "Private", "Degrees": "University", "Gender": "Co-Ed", "Curriculum": "Core Curriculum"},
        "faculty": ["Brian Greene", "Kimberle Crenshaw", "Lydia Chilton", "Joseph Stiglitz", "Sonia Sotomayor"],
        "student_orgs": ["Global Research and Consulting", "Columbia Space Initiative", "Charles Drew Pre-Medical Society", "Turkish Students Association"]
    },
    "2":{
        "id" : "2",
        "name" : "California Institute of Technology",
        "city": "Pasadena",
        "state" : "California",
        "website": "https://www.caltech.edu",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/300px-Seal_of_the_California_Institute_of_Technology.svg.png",
        "year_founded": "1891",
        "description": """
            California Institute of Technology is a private research university in Pasadena,
            California, United States of America. The university is known for its strength in
            science and engineering, and is among a small group of institutes of technology in
            the United States which is primarily devoted to the instruction of pure and applied sciences.
            Caltech is ranked among the best academic institutions in the world and is among the
            most selective in the U.S.
        """,
        "president": ["Thomas F. Rosenbaum"],
        "endowment": "$2,840,000,000",
        "alumni": ["Donald Knuth", "Stephen Wolfram", "France A. Cordova"],
        "majors": ["Computer Science", "Physics", "Electrical and Electronics Engineering",
                    "Mechanical Engineering"],
        "admission_rate": {"2021" : "4", "2020" : "7"},
        "application_fee": "75",
        "application_requirements": {"Common App Essay": "Yes", "Counselor Recommendation": "Yes",
                                    "Teacher Evaluations" : "2", "Supplemental Questions": "3"},
        "testing" : {"Testing": "Test Optional", "Tests Accepted": "SAT/ACT"},
        "language": {"TOEFL": "Yes", "IELTS": "Yes", "Duolingo": "Yes"},
        "finaid" : {"CSS Profile": "Yes", "Documentation": "Submit via IDOC", "Supporting Materials": "Yes"},
        "application_platforms" : {"Common App": "Yes", "Coalition App": "Yes"},
        "school_info" : {"Funding": "Private", "Degrees": "University", "Gender": "Co-Ed", "Curriculum": "Other"},
        "faculty": ["Linaus Pauling", "Alice Huang", "David Baltimore", "Jack Parsons", "H. David Politzer"],
        "student_orgs": ["Black Scientists and Engineers of Caltech", "Cheese Society", "Hacktech", "Engineers Without Borders"]
    },
    "3":{
        "id" : "3",
        "name" : "Yale University",
        "city" : "New Haven",
        "state" : "Connecticut",
        "website": "https://www.yale.edu",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/1920px-Yale_University_Shield_1.svg.png",
        "year_founded": "1701",
        "description": """
            Yale University is a private Ivy League research university in New Haven, Connecticut.
            Founded in 1701 as the Collegiate School, it is the third-oldest institution of higher
            education in the United States and among the most prestigious in the world.
        """,
        "president": ["Peter Salovey"],
        "endowment": "$42,300,000,000",
        "alumni": ["Bill Clinton", "Lupita Nyong'o", "Indra Nooyi"],
        "majors": ["Econometrics and Quantitative Economics", "Political Science", "History",
                    "Cellular and Molecular Biology", "Computer Science"],
        "admission_rate": {"2021" : "4.6", "2020" : "7"},
        "application_fee": "80",
        "application_requirements": {"Common App Essay": "Yes", "Counselor Recommendation": "Yes",
                                    "Teacher Evaluations" : "2", "Supplemental Questions": "5+"},
        "testing" : {"Testing": "Test Optional", "Tests Accepted": "SAT/ACT"},
        "language": {"TOEFL": "Yes", "IELTS": "Yes", "Duolingo": "Yes"},
        "finaid" : {"CSS Profile": "Yes", "Documentation": "Submit via IDOC", "Supporting Materials": "Yes"},
        "application_platforms" : {"Common App": "Yes", "Coalition App": "Yes"},
        "school_info" : {"Funding": "Private", "Degrees": "University", "Gender": "Co-Ed", "Curriculum": "Other"},
        "faculty": ["Jacques Derrida", "Harold Bloom", "David Montgomery"],
        "student_orgs": ["Global Research and Consulting", "American Cancer Society Club", "Athletes in Action", "Engineers Without Borders"]
    },
    "4":{
        "id" : "4",
        "name" : "Harvard University",
        "city": "Cambridge",
        "state" : "Massachussets",
        "website": "https://www.harvard.edu",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/300px-Harvard_shield_wreath.svg.png",
        "year_founded": "1754",
        "description": """
            Harvard University is a private Ivy League research university in Cambridge, Massachusetts.
            Founded in 1636 as Harvard College and named for its first benefactor,
            the Puritan clergyman John Harvard, it is the oldest institution of higher learning
            in the United States and among the most prestigious in the world.
        """,
        "president": ["Lawrence Bacow"],
        "endowment": "$53,200,000,000",
        "alumni": ["Barack Obama", "Ellen Johnson Sirleaf", "Ban Ki-Moon"],
        "majors": ["Economics", "Computer Science", "Social Sciences",
                    "Political Science", "Applied Mathematics"],
        "admission_rate": {"2021" : "3.4", "2020" : "5"},
        "application_fee": "75",
        "application_requirements": {"Common App Essay": "Yes", "Counselor Recommendation": "Yes",
                                    "Teacher Evaluations" : "2", "Supplemental Questions": "1"},
        "testing" : {"Testing": "Test Optional", "Tests Accepted": "SAT/ACT"},
        "language": {"TOEFL": "Yes", "IELTS": "Yes", "Duolingo": "No"},
        "finaid" : {"CSS Profile": "Yes", "Documentation": "Submit via IDOC", "Supporting Materials": "Yes"},
        "application_platforms" : {"Common App": "Yes", "Coalition App": "Yes"},
        "school_info" : {"Funding": "Private", "Degrees": "University", "Gender": "Co-Ed", "Curriculum": "Other"},
        "faculty": ["Paul Farmer", "Elizabeth Warren", "Henry Louis Gates Jr.", "Alan Dershowitz"],
        "student_orgs": ["HackHarvardCollege", "Harvard College Bowl", "Harvard College Economics Review", "Harvard College Open Data Project"]
    },
    "5":{
        "id" : "5",
        "name" : "Princeton University",
        "city": "Princeton",
        "state" : "New Jersey",
        "website": "https://www.princeton.edu",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/280px-Princeton_seal.svg.png",
        "year_founded": "1746",
        "description": """
            Princeton University is a private Ivy League research university in Princeton, New Jersey.
            Founded in 1746 in Elizabeth as the College of New Jersey, Princeton is the fourth-oldest
            institution of higher education in the United States and one of the nine colonial colleges
            chartered before the American Revolution.[9][10][a] The institution moved to Newark in 1747,
            and then to the current site nine years later. It officially became a university in 1896 and
            was subsequently renamed Princeton University.
        """,
        "president": ["Christopher L. Eisgruber"],
        "endowment": "$37,700,000,000",
        "alumni": ["Michelle Obama", "Alan Turing", "Jeff Bezos"],
        "majors": ["Computer Science", "Economics", "Public Policy",
                    "History", "Political Science"],
        "admission_rate": {"2021" : "4", "2020" : "6"},
        "application_fee": "70",
        "application_requirements": {"Common App Essay": "Yes", "Counselor Recommendation": "Yes",
                                    "Teacher Evaluations" : "2", "Supplemental Questions": "5+"},
        "testing" : {"Testing": "Test Optional", "Tests Accepted": "SAT/ACT"},
        "language": {"TOEFL": "Yes", "IELTS": "Yes", "Duolingo": "No"},
        "finaid" : {"CSS Profile": "No", "Documentation": "Other Method", "Supporting Materials": "Yes"},
        "application_platforms" : {"Common App": "Yes", "Coalition App": "Yes"},
        "school_info" : {"Funding": "Private", "Degrees": "University", "Gender": "Co-Ed", "Curriculum": "Other"},
        "faculty": ["Toni Morrison", "Cornel West", "Ben Bernanke", "Woodrow Wilson"],
        "student_orgs": ["180 Degrees Consulting", "African Students Association (PASA)", "Asian-American Students Association", "Mathematics Club"]
    },
    "6":{
        "id" : "6",
        "name" : "Massachusetts Institute of Technology",
        "city": "Cambridge",
        "state" : "Massachussets",
        "website": "https://www.mit.edu",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/300px-MIT_Seal.svg.png",
        "year_founded": "1861",
        "description": """
            The Massachusetts Institute of Technology (MIT) is a private land-grant research university 
            in Cambridge, Massachusetts. Established in 1861, MIT has since played a key role in the 
            development of modern technology and science, ranking it among the top academic institutions 
            in the world.
        """,
        "president": ["	L. Rafael Reif"],
        "endowment": "$27,400,000,000",
        "alumni": ["Koffi Annan", "Mike Massimino", "Benjamin Netanyahu", "Lydia Chilton"],
        "majors": ["Computer Science", "Mechanical Engineering", "Mathematics",
                    "Physics", "Aerospace, Aeronautical and Astronautical/Space Engineering"],
        "admission_rate": {"2021" : "4", "2020" : "7"},
        "application_fee": "75",
        "application_requirements": {"Common App Essay": "Yes", "Counselor Recommendation": "Yes",
                                    "Teacher Evaluations" : "2", "Supplemental Questions": "5+"},
        "testing" : {"Testing": "Test Optional", "Tests Accepted": "SAT/ACT"},
        "language": {"TOEFL": "Yes", "IELTS": "Yes", "Duolingo": "Yes"},
        "finaid" : {"CSS Profile": "Yes", "Documentation": "Submit via IDOC", "Supporting Materials": "Yes"},
        "application_platforms" : {"Common App": "No", "Coalition App": "No"},
        "school_info" : {"Funding": "Private", "Degrees": "University", "Gender": "Co-Ed", "Curriculum": "Other"},
        "faculty": ["Xavier de Souza Briggs", "Marcia McNutt", "Ernest Moniz", "Eric Lander"],
        "student_orgs": ["Alpine Ski Club", "Beekeepers", "Council for Math Majors", "Leadership and Human Capital"]
    },
        "7":{
        "id" : "7",
        "name" : "Stanford University",
        "city" : "Stanford",
        "state" : "California",
        "website": "https://www.stanford.edu",
        "image": "https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg",
        "year_founded": "1885",
        "description": """
            Stanford University, officially Leland Stanford Junior University,
             is a private research university in Stanford, California. 
             The campus occupies 8,180 acres (3,310 hectares), among the largest in the United States, 
             and enrolls over 17,000 students. Stanford is ranked among the top universities in the world.
        """,
        "president": ["	Marc Tessier-Lavigne"],
        "endowment": "$37,800,000,000",
        "alumni": ["Jerry Yang", "Herbert Hoover", "John Ata Mills", "Lydia Chilton"],
        "majors": ["Computer Science", "Cognitive Science", "Human Biology",
                    "Engineering", "Economics"],
        "admission_rate": {"2021" : "4", "2020" : "5"},
        "application_fee": "90",
        "application_requirements": {"Common App Essay": "Yes", "Counselor Recommendation": "Yes",
                                    "Teacher Evaluations" : "2", "Supplemental Questions": "5+"},
        "testing" : {"Testing": "Test Optional", "Tests Accepted": "SAT/ACT"},
        "language": {"TOEFL": "Yes", "IELTS": "Yes", "Duolingo": "Yes"},
        "finaid" : {"CSS Profile": "Yes", "Documentation": "Submit via IDOC", "Supporting Materials": "Yes"},
        "application_platforms" : {"Common App": "Yes", "Coalition App": "Yes"},
        "school_info" : {"Funding": "Private", "Degrees": "University", "Gender": "Co-Ed", "Curriculum": "Other"},
        "faculty": ["Andrew Ng", "Donald Knuth", "Condoleezza Rice", "Milton Friedman", "Fred Swaniker"],
        "student_orgs": ["Global Research and Consulting", "Columbia Space Initiative", "Charles Drew Pre-Medical Society", "Turkish Students Association"]
    },
        "8":{
        "id" : "8",
        "name" : "Barnard College",
        "city": "New York City",
        "state" : "New York",
        "website": "https://www.barnard.edu",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Formal_Seal_of_Barnard_College%2C_New_York_City%2C_USA.svg/260px-Formal_Seal_of_Barnard_College%2C_New_York_City%2C_USA.svg.png",
        "year_founded": "1889",
        "description": """
            Barnard College of Columbia University is a private women's liberal arts college in New York City. 
            It was founded in 1889 by Annie Nathan Meyer as a response to Columbia University's refusal to 
            admit women and is named after Columbia's 10th president, Frederick Barnard.
        """,
        "president": ["Sian Bellock"],
        "endowment": "$356,600,000",
        "alumni": ["Zora Neale Hurston", "Grace Lee Boggs", "Martha Stewart"],
        "majors": ["Research and Experimental Psychology", "Economics", "Political Science",
                    "English Language and Literature", "Urban Studies"],
        "admission_rate": {"2021" : "10.4", "2020" : "14"},
        "application_fee": "75",
        "application_requirements": {"Common App Essay": "Yes", "Counselor Recommendation": "Yes",
                                    "Teacher Evaluations" : "2", "Supplemental Questions": "2"},
        "testing" : {"Testing": "Test Optional", "Tests Accepted": "SAT/ACT"},
        "language": {"TOEFL": "Yes", "IELTS": "Yes", "Duolingo": "Yes"},
        "finaid" : {"CSS Profile": "Yes", "Documentation": "Submit via IDOC", "Supporting Materials": "Yes"},
        "application_platforms" : {"Common App": "Yes", "Coalition App": "Yes"},
        "school_info" : {"Funding": "Private", "Degrees": "College", "Gender": "Women's School", "Curriculum": "Other"},
        "faculty": ["Frederick Neuhouser", "Jenny Boylan", "Elie Wiesel", "Rebecca Jordan-Young"],
        "student_orgs": ["Global Research and Consulting", "Columbia Space Initiative", "Charles Drew Pre-Medical Society", "Turkish Students Association"]
    },
        "9":{
        "id" : "9",
        "name" : "Wellesley College",
        "city": "Wellesley",
        "state" : "Massachussets",
        "website": "https://www.wellesley.edu",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Formal_Seal_of_Wellesley_College%2C_Wellesley%2C_MA%2C_USA.svg/300px-Formal_Seal_of_Wellesley_College%2C_Wellesley%2C_MA%2C_USA.svg.png",
        "year_founded": "1870",
        "description": """
            Wellesley College is a private women's liberal arts college in Wellesley, Massachusetts, 
            United States. Founded in 1870 by Henry and Pauline Durant as a female seminary, 
            it is a member of the original Seven Sisters Colleges, an unofficial grouping of 
            elite current and former women's colleges in the northeastern United States. 
            Wellesley's endowment of $2.2 billion is the largest out of all women's colleges 
            and the 49th largest among all colleges and universities in the United States in 2019.
        """,
        "president": ["	Paula A. Johnson"],
        "endowment": "$2,290,000,000",
        "alumni": ["Hillary Clinton", "Madeleine Albright", "Diane Sawyer"],
        "majors": ["Economics", "Political Science", "Computer Science",
                    "Psychology", "Biology/Biological Sciences"],
        "admission_rate": {"2021" : "16", "2020" : "20"},
        "application_fee": "0",
        "application_requirements": {"Common App Essay": "Yes", "Counselor Recommendation": "Yes",
                                    "Teacher Evaluations" : "2", "Supplemental Questions": "1"},
        "testing" : {"Testing": "Test Optional", "Tests Accepted": "SAT/ACT"},
        "language": {"TOEFL": "Yes", "IELTS": "Yes", "Duolingo": "Yes"},
        "finaid" : {"CSS Profile": "Yes", "Documentation": "Submit via IDOC", "Supporting Materials": "Yes"},
        "application_platforms" : {"Common App": "Yes", "Coalition App": "Yes"},
        "school_info" : {"Funding": "Private", "Degrees": "College", "Gender": "Women's School", "Curriculum": "Other"},
        "faculty": ["Emily Green Balch", "Frank Bidart", "Katharine Lee Bates"],
        "student_orgs": ["Global Research and Consulting", "Columbia Space Initiative", "Charles Drew Pre-Medical Society", "Turkish Students Association"]
    },
        "10":{
        "id" : "10",
        "name" : "University of Chicago",
        "city": "Chicago",
        "state" : "Illinois",
        "website": "https://www.uchicago.edu",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Chicago_shield.svg/260px-University_of_Chicago_shield.svg.png",
        "year_founded": "1890",
        "description": """
            The University of Chicago (UChicago) is a private research university in Chicago, Illinois. 
            Founded in 1890, its main campus is located in Chicago's Hyde Park neighborhood. 
            In Fall 2021, it enrolled 18,452 students, including 7,559 undergraduates and 10,893 
            graduate students.
        """,
        "president": ["	A. Paul Alivisatos"],
        "endowment": "$11,600,000,000",
        "alumni": ["Bernie Sanders", "James O. McKinsey", "Milton Friedman"],
        "majors": ["Economics", "Mathematics", "Biology/Biological Sciences",
                    "Public Policy", "Political Science"],
        "admission_rate": {"2021" : "4", "2020" : "7"},
        "application_fee": "75",
        "application_requirements": {"Common App Essay": "Yes", "Counselor Recommendation": "Yes",
                                    "Teacher Evaluations" : "2", "Supplemental Questions": "2"},
        "testing" : {"Testing": "Test Optional", "Tests Accepted": "SAT/ACT"},
        "language": {"TOEFL": "Yes", "IELTS": "Yes", "Duolingo": "Yes"},
        "finaid" : {"CSS Profile": "Yes", "Documentation": "Submit via IDOC", "Supporting Materials": "Yes"},
        "application_platforms" : {"Common App": "Yes", "Coalition App": "Yes"},
        "school_info" : {"Funding": "Private", "Degrees": "University", "Gender": "Co-Ed", "Curriculum": "Core Curriculum"},
        "faculty": ["Steven Levitt", "James O. McKinsey", "Milton Friedman"],
        "student_orgs": ["Global Research and Consulting", "Columbia Space Initiative", "Charles Drew Pre-Medical Society", "Turkish Students Association"]
    },
}


# ROUTES
@app.route('/')
def homepage():
    popular_unis = [universities["1"], universities["6"], universities["10"]]
    return render_template('homepage.html', data_uni=popular_unis)


@app.route('/view/<id>')
def view(id=None):
    print(id)
    uni = universities[id]
    return render_template('view.html', uni=uni)


@app.route('/edit/<id>')
def edit(id=None):
    print(id)
    university = universities[id]
    return render_template('edit.html', uni=university)


@app.route('/search_results/<item>')
def search_results(item=None):
    results = []

    # searching for everything
    # for value in universities.values():
    #     for detail in value.values():
    #         if detail.find(item) != -1:
    #             results.append(value)

    # just searching the item in the title
    for value in universities.values():
        if value["name"].lower().find(item.lower()) != -1:
            results.append(value)
        elif value["city"].lower().find(item.lower()) != -1:
            results.append(value)
        elif value["state"].lower().find(item.lower()) != -1:
            results.append(value)
            
    return render_template('search_results.html', item=item, results=results)


@app.route('/add')
def add_data():
    popular_unis = [universities["1"], universities["6"], universities["10"]]
    return render_template('add_data.html', data_uni=popular_unis)


# ajax for log_sales.js
@app.route('/save_uni', methods=['GET', 'POST'])
def save_uni():
    global universities

    json_data = request.get_json()
    university = json_data["university"]

    current_last_id = len(list(universities.keys()))
    next_id = current_last_id + 1
    university["id"] = str(next_id)

    # print(len(list(universities.keys())))
    universities[str(next_id)] = university
    # print(len(list(universities.keys())))
    
    # #send back the WHOLE array of data, so the client can redisplay it
    return jsonify(universities = universities, id=next_id)


@app.route('/save_edits', methods=['GET', 'UPDATE'])
def save_edits():
    # print("got here")
    global universities

    json_data = request.get_json()
    university = json_data["university"]
    # print(university)

    current_id = university["id"]
    # next_id = current_last_id + 1
    # university["id"] = str(next_id)

    # print(len(list(universities.keys())))
    universities[current_id] = university
    # print(len(list(universities.keys())))
    
    # #send back the WHOLE array of data, so the client can redisplay it
    return jsonify(universities = universities, id=current_id)


if __name__ == '__main__':
   app.run(debug = True)
