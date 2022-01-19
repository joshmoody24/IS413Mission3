const gradeWeights = {
    "assignments": .55,
    "group_project": .05,
    "quizzes": .1,
    "exams": .2,
    "INTEX": .1,
}

function getLetterGrade(grade) {
    if (grade >= .94) return "A";
    else if (grade >= .9) return "A-";
    else if (grade >= .87) return "B+";
    else if (grade >= .84) return "B";
    else if (grade >= .8) return "B-";
    else if (grade >= .77) return "C+";
    else if (grade >= .74) return "C";
    else if (grade >= .7) return "C-";
    else if (grade >= .67) return "D+";
    else if (grade >= .64) return "D";
    else if (grade >= .6) return "D-";
    else return "E";
}

$("#calculate").click(function (e) {
    // don't refresh the page when the form submits
    e.preventDefault();
    // sum up all the grades (with weights)
    let gradeTotal = 0.0;
    gradeTotal += $("#assignments").val() * gradeWeights["assignments"];
    gradeTotal += $("#group-project").val() * gradeWeights["group_project"];
    gradeTotal += $("#quizzes").val() * gradeWeights["quizzes"];
    gradeTotal += $("#exams").val() * gradeWeights["exams"];
    gradeTotal += $("#intex").val() * gradeWeights["INTEX"];
    // convert answer to percentage and round answer to 2 decimal places
    // since the page refreshes when the form is submitted, show the results in an alert box
    alert("Your final grade is: " + Math.round((gradeTotal * 100)) / 100 + "% (" + getLetterGrade(gradeTotal) + ")");
});