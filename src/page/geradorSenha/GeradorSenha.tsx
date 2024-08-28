import { useState } from "react";
import { nanoid } from "nanoid";
import './geradorSenha.css';

function GeradorSenha() {

  const [senha, setSenha] = useState('');
  const [senhaGerada, setSenhaGerada] = useState('');

  const gerarSenha = () => {
    const novaSenha = nanoid(parseInt(senha));
    setSenhaGerada(novaSenha);
  }

  return (
    <>
      <h1 className="h1Senha">Gerador de Senha</h1>
      <p className="textoSenha">
      Este pequeno exercício foi desenvolvido em JavaScript puro, utilizando o Vite. Decidi incluí-lo no projeto devido à sua funcionalidade prática de gerar senhas rapidamente com apenas um clique, permitindo ao usuário escolher o número de caracteres desejado. Além disso, modernizei a aplicação, armazenando as senhas no local storage, o que facilita ainda mais a criação e o gerenciamento de senhas.
      </p>
      <section>
        <label 
          htmlFor="senha"
          className="labelSenha"
          >
          Quantidade caracteres:
          <input
            onChange={(event) => setSenha(event.target.value)} 
            type="number"
            name="senha" 
            id="senha"
            className="inputSenha"
             />
        </label>
        <h2>{senhaGerada}</h2>
        <button 
          onClick={gerarSenha}
          type="button"
          className="buttonSenha"
          >
            Gerar senha
          </button>
      </section>
    </>
  )
}

export default GeradorSenha