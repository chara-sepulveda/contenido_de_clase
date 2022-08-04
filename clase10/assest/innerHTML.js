const skill =["Graffiti","Dj","B-boy","Mc"]
let ul=document.querySelector('ul')
// ul.innerHTML=`<li>Graffiti</li>
// <li>Dj</li
// <li>B-boy</li>
// <li>Mc</li>`


let skillContact=""
for (let i = 0; i < skill.legth;i++){
    skillContact = skillContact + `<li>${skill[1].toUpperCase()}</li>`;

    ul.innerHTML = skillContact
}