const goBtn = document.querySelector('#jonBtn')
const jon = document.querySelector('#myTable')
const charName = document.querySelector('#myChar')
const error = document.querySelector('#error')



console.log("asdasd")
charName.focus()
goBtn.addEventListener('click', ()=>{

  let char = charName.value
  if (/[a-zA-Z]+\s[a-zA-Z]+/.test(char)){
    let url = `https://anapioficeandfire.com/api/characters/?name=${char}`
    fetch(url)
      .then(res => res.json())
      .then (insertChar =>{

        let thead = '<thead id="thr1"></thead>'
        let rows =`<tr><th>nome</th><td>: ${insertChar[0].name}</td></tr><br></br>
        <tr><th>genero</th><td>: ${insertChar[0].gender}</td></tr>
        <tr><th>interpretado(a) por</th><td>: ${insertChar[0].playedBy}</td></tr>
        <tr><th>titulo</th><td>: ${insertChar[0].titles[0]}</td></tr>
        `
        let table = `<table class="table">${thead}<tbody>${rows}</tbody></table>`
        jon.innerHTML = table

    })
  }
  else {
    charName.value = 'PERSONAGEM INVALIDO'
    charName.focus()
  }
})
// function getname(str){
//   if (/[a-zA-Z]+\s?[a-zA-Z]+/.test(str)){
//     if (str == 'jon' || str == 'jon snow') return 583
//     else return 'Nome invalido'
//   }
//   else return 'Nome invalido'
// }
