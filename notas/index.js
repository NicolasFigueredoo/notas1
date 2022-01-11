  
function notas_anotar(){
    let nota = $("#textarea").val()
    let titulo = $("#texttitle").val()
    if ((nota == "") && (titulo == "")){
        $("#notas").append("")
    }
    else{
        contador = contador + 1 
        nota_texto = [contador, titulo, nota ]
        notas.push(nota_texto)
        $("#notas").append(`<div id="notas_echas">
        <p id="notatitulo">Hoja:${contador} ${titulo}</p>
        <p id="texto">${nota}</p>
        </div>
        <button class="boton_borrar" onclick="boton_borrar()" value="${contador}">X</button>
        `)
        notas_guardadas(notas)
    }
}
function notas_guardadas(notas){
    let notasguardadas = JSON.parse(localStorage.getItem("notas"))
    if(!notasguardadas){
        localStorage.setItem("notas", JSON.stringify(notas))
    } else{
        notasguardadas.push(notas)
        localStorage.setItem("notas", JSON.stringify(notas))

    }
}
function mostrarnotas(notas){
    let notasguardadas = JSON.parse(localStorage.getItem("notas"))
    let texto = $("#notas")
    texto = ""
    if(notasguardadas){
        for(let nota of notasguardadas){
             texto += `<div id="notas_echas">
             <p id="notatitulo">Hoja:${nota[0]} ${nota[1]}</p>
             <p id="texto">${nota[2]}</p>
             </div>
             
             <button class="boton_borrar" onclick="boton_borrar()" value="${nota[0]}">X</button>
             `
             notas.push(nota)
            }
    }
    $("#notas").html(texto)
}
function borrarnotas(notas){

    let borrarnota  = $("#borrarnota").val() 
    notas = notas.filter(item => item[0] != borrarnota)
    let notasguardadas = JSON.parse(localStorage.getItem("notas"))
    notasguardadas = notasguardadas.filter(item => item[0] != borrarnota)
    localStorage.setItem("notas", JSON.stringify(notasguardadas))
    $("#notas").html("")
    mostrarnotas(notas)
    mostrarnotas(notas)

}

function boton_borrar(){
    $( document ).ready(function() {
    let boton = $(".boton_borrar").val()
    console.log(Number(boton))
});

}

let notas = []
let contador = 0
let anotar = $("#boton_anotar")
let botonborrar = $("#borrar")

botonborrar.click(() => {borrarnotas(notas)})
anotar.click(notas_anotar)
mostrarnotas(notas)

