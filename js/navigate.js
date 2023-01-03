
const home = document.getElementById('home')

const registerStudents = document.querySelector('.main-register-student')
const registerprofessors = document.querySelector('.main-register-professor')
const registerCourses = document.querySelector('.main-register-course')

const course = document.querySelector('.main-course')

const students = document.querySelector('.students-container')

function remove(){
    let el = document.getElementsByClassName('visible-main')

    for (let i = 0; i < el.length; i++) {
        const element = el[i];

        element.classList.remove('visible-main')
       
    }
}

function showRegisterStudents(){
    remove()
    registerStudents.classList.add('visible-main')
     
}


function showRegisterprofessors(){
    remove()
    registerprofessors.classList.add('visible-main')
}

function showRegisterCourse(){
    remove()
    registerCourses.classList.add('visible-main')

}

function showCourse(){
    remove()
    course.classList.add('visible-main')
}

function showHome(){
    remove()
}

function showStudents(){
    students.classList.add('visible-main')
}


function lettersOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
        ((evt.which) ? evt.which : 0));
    if (charCode > 32 && (charCode < 65 || charCode > 90) &&
        (charCode < 97 || charCode > 122)) {
        return false;
    }
    return true;
}
