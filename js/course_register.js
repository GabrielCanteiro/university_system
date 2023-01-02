
function addSubject(){
    const addSubjectButton = document.getElementById('add-subject')

    const getCourse = document.getElementById('course')
    const getSubject = document.getElementById('subject')
    const getSemester = document.getElementById('semester')
    const getProfessor = document.getElementById('professor')
    const subjectsAdded = document.getElementById('subjects-added')

    const course = getCourse.value
    const subject = getSubject.value
    const semester = getSemester.value
    
    const professorIndex = getProfessor.selectedIndex
    const professor = getProfessor.options[professorIndex].text


    const content = 
    `
    <div class="added-container">
    <p>${subject}</p>
    <p>${semester}</p>
    <p>${professor}</p>
    </div>
    `

    if(course === '' || subject === '' || semester === '' || professor === ''){
        alert('fill all the fields')
    }else{
        let added = document.createElement('div')
        added.innerHTML = content
        subjectsAdded.appendChild(added)
    }

}

function addSideBar(){

    
}
