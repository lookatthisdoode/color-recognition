import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className="f2 white">
				{'Make your own color palette'}
			</p>
			<div className='form center pa4 br3 shadow-5'>
				<input 
					className="f3 br2 pa2 w-70" 
					type='text' 
					onChange={onInputChange}
				/>
				<button 
					className="f3 br2 ma2 w-40 grow link ph3 pv2 dib black bg-light-blue"
					onClick={onButtonSubmit}
					>Detect Colors
				</button>
			</div>
		</div>
  )
}

export default ImageLinkForm;