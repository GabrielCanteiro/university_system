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
        <i id="trash" class="fa-solid fa-trash-can"></i>
    </div>
    `

    console.log()

    if(name === '' || birthDate === '' || ra === '' || gender === ''){
       
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill all the fields!',
          })
    

    }else{
        let add = document.createElement('div')
        add.innerHTML = content
        studentInfo.appendChild(add)

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Student Registered',
            showConfirmButton: false,
            timer: 1500
          })

        let name = getName.value = ''
        let birthDate = getBirthDate.value = ''
        let ra = getRA.value = ''
        let gender = getGender.value = genderIndex[0]
        let course = getCourse.value = courseIndex[0]


        /*REMOVE STUDENT*/
        let trash = document.querySelectorAll('#trash')
        console.log(trash)
        for (let i = 0; i < trash.length; i++) {
   
            trash[i].addEventListener("click", (e)=>{
            let trashParent = e.target.parentElement
            console.log(trash[i])
        
            trashParent.remove()
        
          });
        }
    }

}

