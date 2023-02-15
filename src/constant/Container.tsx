import React from 'react'

const Container = ({children, small}:any) => {
  return (
    <div className={`px-4 md:px-10 ld:px-0 lg:container mx-auto ${small && 'lg:px-40'}`}>{children}</div>
  )
}

export default Container