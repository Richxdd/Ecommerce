import React, { useState } from "react"

const Compra = ({ data, removerCompra }) => {
  const handleClick = (e) => {
    e.preventDefault()
    removerCompra(data)
  }
  return (
    <div key={data.idDrink} className='flex flex-col'>
      <div className='bg-slate-700  rounded-2xl'>
        <div className='flex flex-row  items-center justify-between p-4  px-8'>
          <img className='w-20 h-20 rounded-xl' src={data.strDrinkThumb} />
          <div className='flex justify-center items-center'>
            <p className='text-white text-2xl font-bold'>{data.strDrink}</p>
          </div>

          <div className='flex justify-center items-center'>
            <p className=' text-white text-2xl font-semibold'>
              $/.{data.precio}
            </p>
          </div>
          <button
            type='button'
            className='px-5 py-1 rounded-full bg-white'
            onClick={handleClick}
          >
            X
          </button>
        </div>
      </div>
    </div>
  )
}

export default Compra
