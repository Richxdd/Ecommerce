import React, { useEffect, useRef, useState } from "react"

const Bebida = ({ data, addTocard }) => {
  const [click, setClick] = useState(false)

  const aleatorio = (min, max) => {
    const resultado = Math.floor(Math.random() * (max - min + 1) + min)
    return resultado
  }

  const ramdom = () => aleatorio(10, 200)

  const precioRef = useRef(ramdom())

  const handleClick = (e) => {
    e.preventDefault()
    addTocard({ ...data, precio: precioRef.current })
    setClick(true)
  }

  return (
    <div className='bg-slate-700 p-5 rounded-2xl'>
      <div className='flex flex-col  items-center gap-5'>
        <div className='flex justify-center items-center'>
          <p className='text-white text-2xl font-bold'>{data.strDrink}</p>
        </div>
        <img className='w-56 h-56 rounded-xl' src={data.strDrinkThumb} />
        <div className='flex justify-center items-center'>
          <p className=' text-white text-2xl font-semibold'>
            $/.{precioRef.current}
          </p>
        </div>
        <button
          disabled={click ? true : false}
          type='button'
          className='px-5 py-1 rounded-full bg-white'
          onClick={handleClick}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}

export default Bebida
