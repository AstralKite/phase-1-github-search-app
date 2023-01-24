
//https://api.github.com/users/

window.addEventListener('DOMContentLoaded', (event) => {
    
    const form = document.querySelector('#github-form');
    
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let searchName = ' ';

        searchName = e.target.querySelector('#search').value;

        fetch(`https://api.github.com/users/${searchName}`)
        .then( (res)=> res.json())
        .then( (data)=> {
            console.log(data);
            displayUser(data);
        })
    } )
});


//display user in li
function displayUser(data){
    const ul = document.querySelector('#user-list');
    let li = document.createElement('li');

    //create/append avatar img
    let img = document.createElement('img');
    img.src = data.avatar_url;
    li.append(img);


    //create/append userAme
    let name = document.createElement('h1');
    name.textContent = `Name: ${data.name}`;
    li.append(name)

    //append create ID
    let txt_id = document.createElement('p');
    txt_id.textContent = `id: ${data.id}`;
    li.append(txt_id);

    //append profile URL
    let txt_profileUrl = document.createElement('a');
    txt_profileUrl.textContent = data.html_url;
    txt_profileUrl.setAttribute('href','https://github.com/gary');
    txt_profileUrl.setAttribute('target', '_blank');
    li.append(txt_profileUrl);

    li.

    ul.append(li);
}