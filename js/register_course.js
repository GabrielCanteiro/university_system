


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

    let localLimit = document.querySelectorAll('.added-course-content')
    let count = localLimit.length
    

    if(course === '' || subject === '' || semester === '' || professor === ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill all the fields!',
          })

    }else if(count >= 50){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Subject limit exceeded',
      })

    }else{

      let added = document.createElement('div')
      added.innerHTML = content
      local.appendChild(added)

      const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Subject Registered'
        })


      let subject = getSubject.value = ''
      let semester = getSemester.value = ''
      let professor = getProfessor.options[professorIndex].text = ''
    }
}
