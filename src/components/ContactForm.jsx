import { useState } from "react";
import axios from "axios";

function ContactForm() {
 const { cepErro, setCeoErro }= useState(false)
  const { cidade, setCidade } = useState();
  const verificarCep = (e) => {
    if (e.target.value.length == 8) {
      axios.get(`https://brasilapi.com.br/api/cep/v1/${e.target.value}`)
        .then(function (response) {
          alert(response)
        })

        .catch(function (response) {
          alert("erro")




        })
    }
  }


  function veificarCEP(e) {
    if (e.target.value.length == 8) {

      axios.get(`https://brasilapi.com.br/api/cep/v1/${e.target.value}`)
    }
  }
  return (
    <form className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
        {cepErro ?
          <p className="text-red-500">cep invalido</p>
          :
          <p className="text-green-500">cep valido</p>
        }
      </div>

      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone">Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cep">CEP</label>
        <input
          type="text"
          id="cep"
          name="cep"
          onChange={veificarCEP}
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cidade">cidade</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value="cidade"
          onChange={(e) => setCidade(e.target.value)}
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="rua">rua</label>
        <input
          type="text"
          id="rua"
          name="rua"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <button type="submit" className="w-full bg-secondary-500 text-white font-semibold rounded-md p-2 hover:bg-secondary-700">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;