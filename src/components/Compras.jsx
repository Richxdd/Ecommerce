import React from "react"
import Compra from "./Compra"

const Compras = ({ addCard, setCompras, setAddCard }) => {
  const reducer = (accumalator, currentValue) =>
    accumalator + currentValue.precio
  const sum = addCard.reduce(reducer, 0)

  const removerCompra = (data) => {
    setAddCard(addCard.filter((item) => item.idDrink !== data.idDrink))
  }
  return (
    <div className='pt-5 pb-20 w-full md:w-[28rem] bg-slate-500 absolute top-0 right-0 rounded-xl  h-full flex-1'>
      <div className='justify-between pl-28 pr-2 flex pb-5'>
        <label className='text-2xl font-extrabold text-white '>
          Mis Ordenes
        </label>
        <button
          type='button'
          className='px-5 py-1 rounded-full bg-white'
          onClick={() => setCompras(false)}
        >
          X
        </button>
      </div>

      <div className='flex flex-col gap-5 px-8 '>
        {addCard ? (
          <>
            {addCard.map((data) => (
              <Compra
                key={data.idDrink}
                data={data}
                removerCompra={removerCompra}
              />
            ))}
          </>
        ) : null}
        <div className='flex justify-center'>
          <div className='flex flex-col'>
            <label className='text-2xl font-extrabold text-white text-center pb-5'>
              Total: {sum}
            </label>

            <button
              type='button'
              className='w-48 px-5 py-1 rounded-full bg-white'
            >
              Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compras
