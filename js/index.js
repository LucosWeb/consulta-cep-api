const cep = document.querySelector('#cep');

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

cep.addEventListener("blur",(e) => {
    let seach = cep.value.replace("-","")
    const option = {
        method: 'GET',
        mode:'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${seach}/json/`, option)
    .then(response => {response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log ('Deu erro: '+e,message))

console.log(cep.value);
});