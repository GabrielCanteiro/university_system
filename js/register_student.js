
function addStudent(){
    let getname = document.getElementById('name')
    let getbirthDate = document.getElementById('birth-date')
    let getgender = document.getElementById('gender')
    let getcourse = document.getElementById('course')
    let getra = document.getElementById('r-a')
    let studentInfo = document.querySelector('.students-container')

    let name = getname.value
    let birthDate = getbirthDate.value
    let ra = getra.value

    let genderIndex = getgender.selectedIndex
    let gender = getgender.options[genderIndex].text


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
    }
    
    

}
