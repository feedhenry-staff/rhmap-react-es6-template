
import React from 'react';
import HeaderComponent from '../components/header.js';
import takePicture from '../camera';

class CameraView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: ''
    };
  }
  onImageCaptured(err, dataUrl) {
    if (err) {
      window.alert('Failed to capture an image: ' + err.toString());
    } else {
      this.setState({
        imageUrl: dataUrl
      });
    }
  }
  captureImage() {
    takePicture(this.onImageCaptured.bind(this));
  }
  render() {
    return (
      <div>
        <p>Cordova enables you to access native device functionality using plugins.</p>
        <p>Plugins work by enabling you to call native Java/Objective-C/C# code from our JavaScript code.</p>
        <br></br>
        <p>Use the button below to use this device's camera!</p>


        <img
          style={{maxWidth: '100%', maxHeight: '25vh'}}
          src={this.state.imageUrl}>
        </img>
        
        <p>{this.state.imageUrl}</p>


        <button onClick={this.captureImage.bind(this)} className="bottom center rh-navy-background">
          Take a Picture
        </button>
      </div>
    );
  }
}

export default CameraView;
