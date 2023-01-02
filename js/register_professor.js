function addProfessor(){
    let getName = document.getElementById('professor-name')
    let getBirthDate = document.getElementById('professor-birth-date')
    
    let getGender = document.getElementById('professor-gender')
    let genderIndex = getGender.selectedIndex
    let gender = getGender.options[genderIndex].text

    let getCourse = document.getElementById('professor-course')
    let courseIndex = getCourse.selectedIndex
    
    let getSemester = document.getElementById('professor-semester')
    let getSalary = document.getElementById('professor-salary')
    let getSubject = document.getElementById('professor-subject')

    let name = getName.value
    let birthDate = getBirthDate.value
    let course = getCourse.options[genderIndex].text
    let semester = getSemester.value
    let salary = getSalary.value
    let subject = getSubject.value

    let local = document.getElementById('computer-engineering')
    let professorOptionLocal = document.querySelector('.subject #professor')


    let professorOption = `
    <option value="">${name}</option>
    ` 

    let content = `

    <div class="subjects-line" >
    <div class="profile-line">
        <i class="fa-solid fa-chalkboard-user"></i>
        <p>${name}</p> <!--TODO LIMITAR CARACTERES-->
    </div>
    <p>${subject}</p>
    <p>$ ${salary}</p>
    <p>${birthDate}</p>
    <i class="fa-solid fa-chevron-down arrow"></i>
    </div>

    `


    if(name === '' || birthDate === '' || course === '' || gender === '' || subject === '' || salary === '' || semester === '' ){
        alert('fill all the fields')

    }else{
        let add = document.createElement('div')
        add.innerHTML = content
        local.appendChild(add)

        let addProfessorOption = document.createElement('option')
        addProfessorOption.innerHTML = professorOption
        professorOptionLocal.appendChild(addProfessorOption)

        alert('adicionado com sucesso')
    }

}
    
