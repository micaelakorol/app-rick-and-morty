import React from 'react'

export const Loading = () => {
//spinner
  return (
    <>
        <div className="d-flex justify-content-center">
        <div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
       </div>
      </div>

    </>
  )
}

