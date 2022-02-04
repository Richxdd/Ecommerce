import React from "react"

const Compras = ({ addCard, setCompras, setAddCard }) => {
  const reducer = (accumalator, currentValue) =>
    accumalator + currentValue.precio
  const sum = addCard.reduce(reducer, 0)

  const removerCompra = (payload) => {
    setAddCard([
      ...addCard,
      addCard.filter((item) => item.idDrink !== payload.idDrink),
    ])
  }

  return (
    <div className='pt-5 pb-20 w-[28rem] bg-slate-500 absolute top-0 right-0 rounded-xl'>
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
              <div key={data.idDrink} className='flex flex-col'>
                <div className='bg-slate-700  rounded-2xl'>
                  <div className='flex flex-row  items-center justify-between p-4  px-8'>
                    <img
                      className='w-20 h-20 rounded-xl'
                      src={data.strDrinkThumb}
                    />
                    <div className='flex justify-center items-center'>
                      <p className='text-white text-2xl font-bold'>
                        {data.strDrink}
                      </p>
                    </div>

                    <div className='flex justify-center items-center'>
                      <p className=' text-white text-2xl font-semibold'>
                        $/.{data.precio}
                      </p>
                    </div>
                    {/* <button
                      type='button'
                      className='px-5 py-1 rounded-full bg-white'
                    >
                      X
                    </button> */}
                  </div>
                </div>
              </div>
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
