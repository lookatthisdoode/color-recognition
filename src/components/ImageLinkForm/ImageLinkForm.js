import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <h1 className='f2 white'>{'Make your own color palette'}</h1>
      <p className='f2 white'>{'Past your picture url down below'}</p>
      <div className='form center pa4 br3 shadow-5'>
        <input
          className='f3 br2 pa2 w-70'
          type='text'
          onChange={onInputChange}
        />
        <button
          className='f3 br2 ma2 w-40 grow link ph3 pv2 dib black'
          onClick={onButtonSubmit}
        >
          Detect Colors
        </button>
      </div>
    </div>
  )
}

export default ImageLinkForm
