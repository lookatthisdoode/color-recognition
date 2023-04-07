import React from 'react';
import './FaceRecognition.css'



const FaceRecognition = ({ image, faces, colors }) => {

	if(image.includes('.jpg')) {
		return (
			<div className=" img-color-wrapper center relative ma4">

				{/*{
					faces.map((face, i) => {
						return (
			        <div 
								className="absolute ba bw2 shadow-5 br-pill b--hot-pink"
								key={i}
								style={{ 
									top: face.top, 
									right: face.right,
									bottom: face.bottom,
									left: face.left,
								}}
							>
							</div>
						)
					})
				}
				//face recognition box display
				*/}

				<div className='color-wrapper'>
				{
					colors.map((color, i) => {
						return(
							<div
								className="hide-child h3 center"
								key={i}
								style={{
									backgroundColor: color,
									width: (100/colors.length) + '%',
								}}>
								<p className="child">{color}</p>
							</div>
		      	)
					})
				}
				</div>

				<img id='imgDisp' src={image} alt={'your pic will be here'}/>
			</div>
	)}

}

export default FaceRecognition;