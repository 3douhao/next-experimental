const Tailwind = () => {
  const color = false
  return (
    <div>
      <form action="" className='flex flex-col'>
        <input type="text" className='border-red-900' placeholder='one'/>
        <input type="text" className='border border-purple-900' placeholder='two'/>
        <input type="text" placeholder='three'/>
      </form>
      {/* Conditional Tailwind */}
      <button className={ `${color ? 'text-black' : 'text-red-200'} border-green-500 border` }>Color</button>
    </div>
  )
}

export default Tailwind
