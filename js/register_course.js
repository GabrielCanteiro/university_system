

function addSubject(){
    let getCourse = document.querySelector('.course #course')
    let getSubject = document.getElementById('subject')
    let getSemester = document.getElementById('semester')
    let getProfessor = document.getElementById('professor')
    let local = document.querySelector('.added-container')
    

    let course = getCourse.value
    let subject = getSubject.value
    let semester = getSemester.value
    
    let professorIndex = getProfessor.selectedIndex
    let professor = getProfessor.options[professorIndex].text
    
    let content = 
    `
    <div class="added-course-content">
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
        local.appendChild(added)
    }
}


