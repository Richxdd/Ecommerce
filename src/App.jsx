import axios from "axios"
import { useEffect, useState } from "react"
import Carrito from "./carrito.svg"
import Bebida from "./components/Bebida"
import Compras from "./components/Compras"

const App = () => {
  const [datos, setDatos] = useState([])

  const [addCard, setAddCard] = useState([])

  const [compras, setCompras] = useState(false)

  const addTocard = (data) => {
    setAddCard([...addCard, data])
  }

  useEffect(() => {
    const consultaApi = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
      const respuesta = await axios.get(url)
      setDatos(respuesta.data.drinks)
    }
    consultaApi()
  }, [])

  const datosPrecio = datos.map((dato) => {
    return {
      ...dato,
    }
  })

  return (
    <div className='bg-gray-200'>
      <div className='container '>
        <h1 className='text-center text-5xl font-extrabold text-slate-700'>
          E-commerce
        </h1>
        <div className='flex justify-end  '>
          <div className='p-2 rounded-full bg-slate-700 relative'>
            {addCard.length !== 0 ? (
              <div className='absolute -top-1 left-6 text-white w-5 h-5 bg-white rounded-full flex justify-center items-center'>
                <p className='text-slate-700 font-bold text-sm'>
                  {addCard.length}
                </p>
              </div>
            ) : null}

            <img src={Carrito} onClick={() => setCompras(true)} />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-12 gap-5 '>
          {datosPrecio.map((data) => (
            <Bebida key={data.idDrink} data={data} addTocard={addTocard} />
          ))}
        </div>
        {compras && (
          <Compras
            key={addCard.idDrink}
            addCard={addCard}
            setCompras={setCompras}
            setAddCard={setAddCard}
          />
        )}
      </div>
    </div>
  )
}

export default App
