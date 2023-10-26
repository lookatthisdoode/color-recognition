import { React, Component } from 'react'
import './App.css'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Logo from './components/Logo/Logo'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'

const requestOptions = (imgUrl) => {
  const PAT = '3555f4c5b75a41a58af10ca2a876be0f'
  const USER_ID = 'lookatthisdoode'
  const APP_ID = 'my-first-application'
  const IMAGE_URL = imgUrl

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  })

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Key ' + PAT,
    },
    body: raw,
  }

  return requestOptions
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      faces: [],
      colors: [],
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value, colors: [] })
  }

  onButtonSubmit = () => {
    fetch(
      'https://api.clarifai.com/v2/models/color-recognition/outputs',
      requestOptions(this.state.input)
    )
      .then((result) => result.json())
      .then((data) => {
        console.log('req sent')
        let newColorsArray = data.outputs[0].data.colors.map((color) => {
          return color.raw_hex
        })
        this.setState({ colors: newColorsArray })

        // previously this were detecting faces on the picture, for that probably need to change link to model

        /*let newFacesArray = data.outputs[0].data.regions.map(face => {
          let box = face.region_info.bounding_box
          let image = document.getElementById('imgDisp')
          let width = Number(image.width)
          let height = Number(image.height)

          return {
            top: box.top_row * height,
            right: width - (box.right_col * width),
            bottom: height - (box.bottom_row * height),
            left: box.left_col * width,
          }
        })
        this.setState({ faces: newFacesArray })
        //face recognition stuff
        */
      })
  }

  render() {
    return (
      <div className='App helvetica'>
        <Logo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition
          image={this.state.input}
          faces={this.state.faces}
          colors={this.state.colors}
        />
      </div>
    )
  }
}

export default App
