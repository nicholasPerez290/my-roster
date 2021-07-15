const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("./manager")
const Employee = require("./employee")
const Engineer = require("./engineer")
const Intern = require("./intern")

const arryData = []
const headHtml =(`<!DOCTYPE html>
        <html lang="en">
         <head>
             <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <link rel="stylesheet" href="css\\reset.css">
            <link rel="stylesheet" href="css\\styles.css">
             <title>Team Roster</title>
         </head>
         <body>
            <h1>Team Roster</h1>
            <div class="card-main">`)
const generateCards = (arry) => {
    let mgt = arry[0];
    let int = arry[1];
    let eng = arry[2];
    let cardsMgt = ``;
    let cardsEng = ``;
    let cardsInt = ``;
    for (let i = 0; i < mgt.getLength(); i++){
        cardsMgt = `${cardsMgt} <div class="card">
        <div class="card-head">
            <h2 class="card-name">${mgt.getName(i)}</h2>
            <h2 class="card-rank">${mgt.getRole()}</h2>
        </div>
        <div class="outer-box">
            <div class="info">ID: ${mgt.getId(i)}</div>
            <div class="info">email: <a href="${mgt.getEmail(i)}">${mgt.getEmail(i)}</a></div>
            <div class="info">Office number: ${mgt.getOfficeNum(i)}</div>
        </div>
    </div>`
    }
    for (let j = 0; j < eng.getLength(); j++){
            cardsEng = `${cardsEng}  <div class="card">
            <div class="card-head">
                <h2 class="card-name">${eng.getName(j)}</h2>
                <h2 class="card-rank">${eng.getRole()}</h2>
            </div>
            <div class="outer-box">
                <div class="info">ID: ${eng.getId(j)}</div>
                <div class="info">email: <a href="mailto: ${eng.getEmail(j)}">${eng.getEmail(j)}</a></div>
                <div class="info">GitHub: <a href="https://github.com/${eng.getGithub(j)}">${eng.getGithub(j)}</a></div>
               
            </div>
        </div>`
    }
    for (let k = 0; k < int.getLength(); k++){
            cardsInt = `${cardsInt}  <div class="card">
            <div class="card-head">
                <h2 class="card-name">${int.getName(k)}</h2>
                <h2 class="card-rank">Intern</h2>
            </div>
            <div class="outer-box">
                <div class="info">ID: ${int.getId(k)}</div>
                <div class="info">email: <a href="${int.getEmail(k)}">${int.getEmail(k)}</a></div>
                <div class="info">School: ${int.getSchool(k)}</div>
            </div>
        </div>`
        }
console.log(cardsMgt, cardsEng, cardsInt)
return [cardsMgt,cardsEng,cardsInt];
    }
const generateTemp = (arry) => {
    let head = headHtml
    let cards = generateCards(arry)
    let cardMgt = cards[0];
    let cardEng = cards[1];
    let cardInt = cards[2]
    let temp = `${head}
    ${cardMgt}
    ${cardEng}
    ${cardInt}
    </div>
    </body>
    </html>`
    return temp;
}
const addClass = (arry) => {
    const mgtName = [];
    const mgtId = [];
    const mgtOfNum = [];
    const mgtEmail = [];
    const engName = [];
    const engId = [];
    const engEmail =[];
    const engGit = [];
    const intName = [];
    const intId = [];
    const intEmail =[];
    const intSchool = [];
    for(let i = 0; i < arry.length; i++){
        if(arry[i].class === 'Manager'){
            mgtName.push(arry[i].name);
            mgtId.push(arry[i].id)
            mgtOfNum.push(arry[i].office)
            mgtEmail.push(arry[i].email)
        }else if(arry[i].class === 'Intern'){
            intName.push(arry[i].name);
            intId.push(arry[i].id);
            intEmail.push(arry[i].email);
            intSchool.push(arry[i].school)
        }else if(arry[i].class === 'Engineer'){
            engName.push(arry[i].name)
            engId.push(arry[i].id)
            engEmail.push(arry[i].email)
            engGit.push(arry[i].git)
        }
    }
    const mgt = new Manager(mgtOfNum, mgtName, mgtId, mgtEmail);
    console.log(mgt)
    const int = new Intern(intSchool, intName, intId, intEmail);
    console.log(int)
    const eng = new Engineer(engGit, engName, engId, engEmail);
    console.log(eng)
    return [mgt, int, eng];
}
let dataHandle = (data) => {
    console.log(arryData)
    
    if(data.members == 'Engineer'){
        arryData.push(data);
        questionEng();
    }else if(data.members == 'Intern') {
        
        arryData.push(data);
        console.log(arryData)
        questionInt()
    }else if(data.members == 'Manager'){
        arryData.push(data);
        questionMgt()
    }
    else if(data.members == 'No'){
        arryData.push(data);
        let classArry = addClass(arryData);
        console.log(classArry)
        let temp = generateTemp(classArry)
        console.log(temp);
    fs.writeFile('index.html', temp, (err) => {
        if (err) throw err;
        console.log('not quite working')
    })
}
}
let questionInt = () =>{
    inquirer.prompt([
        {
            type: 'input',
            message: 'Interns name:',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Interns ID:',
            name: 'id'
        },
        {
            type: 'input',
        message: 'Interns email address:',
        name: 'email'
        },
        {
            type: 'input',
            message: 'Interns school',
            name: 'school'
        },
        {
            type: 'list',
            message: 'Add another Team member?',
            name: 'members',
            choices: ['No', 'Engineer','Intern','Manager']
        }
    ]).then((data) => {
        data.class = 'Intern'
        dataHandle(data)
    })
}
let questionEng = () =>{
    inquirer.prompt([
        {
            type: 'input',
            message: 'Engineers name:',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Engineers ID:',
            name: 'id'
        },
        {
            type: 'input',
        message: 'Engineers email address:',
        name: 'email'
        },
        {
            type: 'input',
            message: 'Engineers GitHub:',
            name: 'git'
        },
        {
            type: 'list',
            message: 'Add another Team member?',
            name: 'members',
            choices: ['No', 'Engineer','Intern','Manager']
        }
    ]).then((data) => {
        data.class = 'Engineer';
        dataHandle(data);
    })
}
let questionMgt = () => {
inquirer.prompt([
    {
    type: 'input',
    message: 'Team managers name:',
    name: 'name'
    },
    {
        type: 'input',
        message: 'Team managers ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Team members email address:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Office number:',
        name: 'office'
    },
    {
        type: 'list',
        message: 'Add another Team member?',
        name: 'members',
        choices: ['No', 'Engineer','Intern']
    }
]).then((data) => { 
    console.log(data)
    data.class = 'Manager'
    dataHandle(data);
    })
}


let init = () => {
    questionMgt();
}
init();