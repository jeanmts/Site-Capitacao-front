import { useState } from 'react'
import api from "./services/api";
import './App.css'
import sobre from './assets/sobre.jpeg'
import livros from './assets/livros.jpeg'
import adv from './assets/adv.jpeg'
import caneta from './assets/caneta.jpeg'


export default function App() {
  const [form, setForm] = useState([{ nome: '', email: '', telefone: '', cpf: ''}]);
  const [cadastrado, setCadastrado] = useState(false)
  function handleChangeInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
        if(!form.nome || !form.email || !form.telefone || !form.cpf ){
          return
        }
        const response = await api.post('cadastro',{
          ...form            
      })
      if(response.status == 200) {
        setCadastrado(response.data)
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  
  return (
    <>
    <header><h1>Limpe seu nome gratis</h1></header>

    <div className="container-main">
      <div className='cover'>
      <h1>Recupere sua reputação</h1>
      <h3>Tenha seu nome limpo gratuitamente consulte nossos advogados especializados</h3>
      <a href="#info"><button>Saiba mais</button></a>
    </div>
    </div>
    <section className='container-section'>
    <img src={sobre} alt="" />
    <div className="infos">
      <p>Somos uma equipe de advogados especializados em ajudar você a limpar seu nome gratuitamente. Localizados em Salvador, BA, Brasil, estamos comprometidos em fornecer soluções legais eficazes para resolver suas pendências financeiras. Conte conosco para orientação jurídica confiável e resultados positivos.</p>
    </div>
    </section>

      <h1>Nossos Serviços</h1>
    <article className="servicos">
      <div className='card'>
        <img src={livros} alt="" />
        <h5>Advocacia Civil</h5>
        <p>Soluções jurídicas para questões cíveis e contratuais, visando a proteção de seus direitos e interesses.</p>
      </div>
      <div className='card'>
        <img src={adv} alt="" />
        <h5>Direito Trabalhista</h5>
        <p>Assessoria especializada em casos trabalhistas, desde rescisões até disputas e negociações coletivas.</p>
      </div>
      <div className='card'>
        <img src={caneta} alt="" />
        <h5>Direito de Família</h5>
        <p>Serviços de advocacia voltados para questões de família, como divórcios, pensão alimentícia e adoção.</p>
      </div>
    </article>

    <footer id='info'>
    <div  className='container-info'>
      <div className='fale'>
        <h1>Fale Conosco</h1>
        <p>Entre em contato conosco usando o formulário abaixo e aguarde retorno. Estamos ansiosos para ouvir você e ajudá-lo.</p>
      </div>
      <div className='container-form'>
      <form className='form' onSubmit={handleSubmit} >
      <label htmlFor="nome">Nome completo</label>
      <input type="text" name='nome' value={form.nome} onChange={handleChangeInput} />
      <label htmlFor="email">Email</label>
      <input type="email" name='email' value={form.email} onChange={handleChangeInput}/>
      <label htmlFor="telefone">Telefone</label>
      <input type="text" name='telefone' value={form.telefone} onChange={handleChangeInput}/>
      <label htmlFor="cpf">CPF</label>
      <input type="text" name='cpf' placeholder='Somente números'  value={form.cpf} onChange={handleChangeInput}/>
      <button>Enviar</button>
      </form>
      </div>
    </div>
    </footer>
    </>
  )
}


