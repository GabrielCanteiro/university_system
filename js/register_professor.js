function addProfessor(){
    let getName = document.getElementById('professor-name')
    let getBirthDate = document.getElementById('professor-birth-date')
    
    let getGender = document.getElementById('professor-gender')
    let genderIndex = getGender.selectedIndex
    let gender = getGender.options[genderIndex].text

    let getCourse = document.getElementById('professor-course')
    let courseIndex = getCourse.selectedIndex
    let course = getCourse.options[courseIndex].text

    
    let getSemester = document.getElementById('professor-semester')
    let getSalary = document.getElementById('professor-salary')
    let getSubject = document.getElementById('professor-subject')

    let name = getName.value
    let birthDate = getBirthDate.value
    let semester = getSemester.value
    let salary = getSalary.value
    let subject = getSubject.value

    let local = document.getElementById('cloud-computing')
    let professorOptionLocal = document.querySelector('.subject #professor')


    let professorOption = `
    <option value="">${name}</option>
    ` 

    let content = `

    <div class="subjects-line" >
    <div class="profile-line">
        <i class="fa-solid fa-chalkboard-user"></i>
        <p>${name}</p>
    </div>
    <p>${subject}</p>
    <p>$ ${salary}</p>
    <p>${birthDate}</p>
    <i class="fa-solid fa-chevron-down arrow2"></i>
    </div>

    `


    if(name === '' || birthDate === '' || course === '' || gender === '' || subject === '' || salary === '' || semester === '' ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill all the fields!',
          })

    }else{
        let add = document.createElement('div')
        add.innerHTML = content
        local.appendChild(add)

        let addProfessorOption = document.createElement('option')
        addProfessorOption.innerHTML = professorOption
        professorOptionLocal.appendChild(addProfessorOption)

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Professor Registered',
            showConfirmButton: false,
            timer: 1500
          })


        let name = getName.value = ''
        let birthDate = getBirthDate.value = ''
        let semester = getSemester.value = ''
        let salary = getSalary.value = ''
        let subject = getSubject.value = ''
        let course = getCourse.value = courseIndex[0]
        let gender = getGender.value = genderIndex[0]




    }

}
    
let arrow2 = document.querySelectorAll(".arrow2");
for (var i = 0; i < arrow2.length; i++) {
   
  arrow2[i].addEventListener("click", (e)=>{
   let arrow2Parent = e.target.parentElement.nextElementSibling
    console.log(arrow2)

 arrow2Parent.classList.toggle("visible-main");
  });


}

