import React, { useState } from "react";

import './app.css'


function App() {

const [peso, setPeso] = useState("");
const [altura, setAltura] = useState("");

const [mensagem, setMensagem] = useState("");

function calcularImc() {
  const alt = altura / 100;
  const imc = peso / (alt*alt);

  //toFixed(2) -> Quantidade de numeros casas decimais.
  //alert(imc.toFixed(2));
  if (imc < 18.6) {
    setMensagem("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2));
  } else if(imc >= 18.6 && imc < 24.9){
    setMensagem("Você está no peso ideal! Seu IMC: " + imc.toFixed(2));
  }else if(imc >= 24.9 && imc < 34.9){
    setMensagem("Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2));
  }else if(imc > 34.9){
    setMensagem("Cuidado Obesidade! Seu IMC: " + imc.toFixed(2));
  }
}

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
        <span>Calcular seu IMC</span>
        <div className="area-input">
          <input type="text" 
          placeholder="Peso em (KG) EX: 90"
          value={peso}
          onChange={(e)=> setPeso(e.target.value)}
          />
           <input type="text" 
          placeholder="Altura em (KG) EX: 180"
          value={altura}
          onChange={(e)=>setAltura(e.target.value)}
          />

        <button onClick={calcularImc}>
          Calcular
        </button>
        </div>
      <h2>{mensagem}</h2>
    </div>
  )
}

export default App;