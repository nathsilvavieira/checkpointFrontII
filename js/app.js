//Criando campos de um form dinamicamente no HTML
document.body.innerHTML += "<h1>Link Embedder</h1>";

document.body.innerHTML += "<input class='input1' id='title' (type=text, placeholder='Insert Title')></input>"

document.body.innerHTML += "<input class='input2' id='description' (type=text, placeholder='Insert Description')></input>";

document.body.innerHTML += "<input class='input3' id='url1' (type=text, placeholder='Place your video URL')></input>";

document.body.innerHTML += "<button class='button1' onclick='fecthing()' id='btn'>Submit</button>";

//Criando as variaveis do card
let elements = 0
let input1 = ""
let input2 = ""
let input3 = ""

// função para adicionar conteudo no forms
function fecthing() {
    input1 = document.getElementById("title").value
    input2 = document.getElementById("description").value
    input3 = document.getElementById("url1").value
    //substituindo url para o embed
    input3 = input3.replace("watch?v=", "embed/");
    
    let cardSection = document.querySelector('.card');
    cardSection.innerHTML += `<div 'id='iframe-container'> <iframe src="${input3}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                              <div class='hdois'><h2>${input1}</h2></div>
                              <div class='paragrafo'><p>${input2}<p></div>`;
}
 

