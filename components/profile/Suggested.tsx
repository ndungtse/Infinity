import React from 'react'

const Suggested = () => {
  return (
    <div className="flex w-full items-center justify-between px-3">
      <div className="flex items-center">
        <img
          className="h-[40px] w-[40px] rounded-full object-cover"
          src="/images/infinity.jpg"
          alt=""
        />
        <div className="ml-2 flex flex-col">
          <p>Infinity</p>
          <p>Wed 5 Jan</p>
        </div>
      </div>
      <p className="text-violet-700">Add Friend</p>
    </div>
  )
}

export default Suggested
