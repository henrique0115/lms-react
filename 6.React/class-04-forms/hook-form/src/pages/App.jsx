import { useForm } from "react-hook-form";
import './App.css'

export function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log(data);
  };

  return (
    <form className='container' onSubmit={handleSubmit(onSubmit)}>
      <h1>Hook Form</h1>

      <section>
        <label htmlFor="inputName">Nome*</label>
        <input type="text" id='inputName' placeholder='Digite seu nome' {...register("name")}/>
      </section>

      <section>
        <label htmlFor="inputEmail">E-mail:</label>
        <input type="email" id='inputEmail' placeholder='Digite seu email' {...register("email")}/>
      </section>

      <section>
        <label htmlFor="selectCourse">Curso:</label>
        <select id="selectCourse" {...register("course")}>
          <option value="react">React</option>
          <option value="node.js">Node.JS</option>
        </select>
      </section>

      <section>
        <div>Matérias que tem aptidão</div>
        <label><input type="checkbox" value='html' {...register("ability")}/>HTML</label>
        <label><input type="checkbox" value='css' {...register("ability")}/>CSS</label>
        <label><input type="checkbox" value='javascript'{...register("ability")}/>JavaScript</label>
      </section>

      <section>
        <div>Aceita os termos de uso?</div>
        <span>
          <input type="radio" id='yes' value='yes' defaultChecked {...register("term")}/>
          <label htmlFor="yes">Sim</label>
        </span>
        <span>
          <input type="radio" id='no' value='no' {...register("term")}/>
          <label htmlFor="no">Não</label>
        </span>
      </section>

      <section>
        <label htmlFor="question">Por que deseja fazer esse curso?</label>
        <textarea
          id="question"
          cols="30"
          rows="5"
          maxLength={'100'}
          placeholder='Digite suas razões aqui'
          {...register("question")}>
        </textarea>
      </section>

      <button type="submit">Enviar</button>
    </form>
  )
}
