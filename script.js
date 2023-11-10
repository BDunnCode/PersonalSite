// let toolBox = document.getElementById('')
// let backBox = document.getElementById('')
// let toolSkillBox = getElementById('')
// let backSkillBox = getElementById('')

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }

function ready() {
    let frontBox = document.getElementById('frontBox')

    frontBox.addEventListener("click", () => {
        let frontSkillBox = document.getElementById('frontSkills')
    
        frontSkillBox.classList.toggle('hide')
    })
}












// frontSkillGrabber.addEventListener('click', toggleHidden(frontSkillSection))

// function toggleHidden(x) {
//     x.toggle('hide')
// } 