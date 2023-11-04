import React from 'react'

const SubFooter = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="flex flex-col  bg-gray-700 text-center text-neutral-900 relative">
      <div className="flex h-12 justify-between text-white mx-16 items-center">
        <p className='text-lg'>Erdem AY</p>
        <p className="font-lora text-lg font-normal leading-25">
          {currentDay}.{currentMonth}.{currentYear}
        </p>
      </div>
    </footer>
  )
}

export default SubFooter