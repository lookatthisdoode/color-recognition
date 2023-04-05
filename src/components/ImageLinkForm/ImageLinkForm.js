import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
	return (
		<div>
			<p className="f2">
				{'This magic brain will detect pictures'}
			</p>
			<div className='form center pa4 br3 shadow-5'>
				<input className="f3 br2 pa2 w-70" type='text'/>
				<button className="f3 br2 ma2 w-30 grow link ph3 pv2 dib white bg-light-purple">Detect</button>
			</div>
		</div>
    )
}

export default ImageLinkForm;