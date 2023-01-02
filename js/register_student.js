
function addStudent(){
    let getName = document.getElementById('name')
    let getBirthDate = document.getElementById('birth-date')
    let getGender = document.getElementById('gender')
    let getCourse = document.getElementById('course')
    let getRA = document.getElementById('r-a')

    let studentInfo = document.querySelector('.students-container')

    let name = getName.value
    let birthDate = getBirthDate.value
    let ra = getRA.value

    let courseIndex = getCourse.selectedIndex
    let course = getCourse.options[courseIndex].text

    let genderIndex = getGender.selectedIndex
    let gender = getGender.options[genderIndex].text




    let content = `

    <div class="students">
    <div class="profile-line">
        <i class="fa-solid fa-user"></i>
        <p>${name}</p>
    </div>

        <p>${birthDate}</p>
        <p>${ra}</p>
        <p>8.5</p>
        <i class="fa-solid fa-trash-can"></i>
    </div>
    `

    if(name === '' || birthDate === '' || ra === '' || gender === ''){
        alert('fill all the fields')
    }else{
        let add = document.createElement('div')
        add.innerHTML = content
        studentInfo.appendChild(add)

        alert(`Registro feito com sucesso`)
        
        let name = getName.value = ''
        let birthDate = getBirthDate.value = ''
        let ra = getRA.value = ''
        let gender = getGender.options[genderIndex].text  
        let course = getCourse.options[courseIndex].text 
    
    }

}

//TODO PDIR AJUDA PARA LIMPAR OS OPTIONS