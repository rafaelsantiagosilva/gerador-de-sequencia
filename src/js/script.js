function sequencia(){
    let inicio = document.getElementById('txtinicio');
    let fim = document.getElementById('txtfim');
    let passo = document.getElementById('txtpasso');
    let sequencia = document.getElementById('seq');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("ERRO - Preencha todos os campos.");
    } else if(passo == 0){
        alert("ERRO - Passo inválido.")
    }else{
        
         inicio = Number(inicio.value);
         fim = Number(fim.value);
         passo = Number(passo.value);


        if(inicio < fim){
            for(inicio; inicio <= fim; inicio = inicio + passo){
                sequencia.innerHTML += `${inicio}\u{1F449}`;
            }
        } 
        
        if(inicio > fim){
            for(inicio; inicio >= fim; inicio = inicio - passo){
                sequencia.innerHTML += `${inicio}\u{1F449}`;
            }
        }

        if(inicio == fim){
            alert("Inicio e Fim são iguais.")
        }
        sequencia.innerHTML += `\u{1F3C1}`;
    }
}