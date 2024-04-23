import './Home.css'
import Filtrado from '../../components/Filtrado/Filtrado.jsx'
import {getTodos} from '../../services/auth.js'
import {useState,useEffect} from 'react'

const Home = () => {
  const [recetas,SetRecetas] = useState([]);

  useEffect(()=> {
    TodasRecetas()
  },[])

  async function TodasRecetas() {
    const data = await getTodos()
    SetRecetas(data)
  }
  return (
    <div>
      <h1>Home</h1>
      <div className='recetasActu'>
         <Filtrado  recetas={recetas}/>
      </div>
   
    </div>
  )
}

export default Home