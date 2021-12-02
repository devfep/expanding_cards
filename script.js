const panels = document.querySelectorAll('.panel')

// typeof(panels) //array
// console.log(panels)

// loop through the 5 .panel under panels and add event listener

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})


// function hoisted above
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}