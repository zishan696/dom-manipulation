/* Task 1 */
var heading = document.getElementById('heading')
console.log(heading.innerText)

/* Task 2 using plain JavaScript */
//Task 2a
var textBtn=document.getElementById('textbtn2')
textBtn.addEventListener('click', function(){
    var task2=document.getElementById('textbtn2')
    var paragraph= document.createElement('p')
    paragraph.innerText="hello World"
    task2.appendChild(paragraph)
})

/* Task 4 using jQuery */
