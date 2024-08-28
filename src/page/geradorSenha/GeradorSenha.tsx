import { useState } from "react";

function GeradorSenha() {

  const [senha, setSenha] = useState('');

  return (
    <>
      <h1>Gerador de Senha</h1>
      <p>
      Este pequeno exercício foi desenvolvido em JavaScript puro, utilizando o Vite. Decidi incluí-lo no projeto devido à sua funcionalidade prática de gerar senhas rapidamente com apenas um clique, permitindo ao usuário escolher o número de caracteres desejado. Além disso, modernizei a aplicação, armazenando as senhas no local storage, o que facilita ainda mais a criação e o gerenciamento de senhas.
      </p>
      <section>
        <label htmlFor="number">
          Quantidade caracteres:
          <input
            onChange={(event) => setSenha(event.target.value)} 
            type="number"
            name="" 
            id=""
             />
        </label>
        <h2>{senha}</h2>
        <button 
          type="button">
            Gerar senha
          </button>
      </section>
    </>
  )
}

export default GeradorSenha