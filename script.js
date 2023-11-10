if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
    const frontBox = document.getElementById('frontBox')
    const toolBox = document.getElementById('toolBox')
    const backBox = document.getElementById('backBox')

    frontBox.addEventListener("click", () => {
      const frontSkillBox = document.getElementById('frontSkills')
      frontSkillBox.classList.toggle('hide')
    })

    toolBox.addEventListener("click", () => {
      const toolSkillBox = document.getElementById('toolSkills')
      toolSkillBox.classList.toggle('hide')
    })

    backBox.addEventListener("click", () => {
      const backSkillBox = document.getElementById('backSkills')
      backSkillBox.classList.toggle('hide')
    })
}











