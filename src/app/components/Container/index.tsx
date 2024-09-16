import React from 'react'

const Container = (props: { children: React.ReactNode }) => {
  return (
    <div className='w-full max-w-[1230px] relative mx-auto my-0 px-4 py-0'>
      {props.children}
    </div>
  )
}

export default Container
