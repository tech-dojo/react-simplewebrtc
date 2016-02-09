## react webRTC component built with SimpleWebRTC. ##

The webRTC component takes a roomname for the room to join and the signal server url.

1. Include the script "https://simplewebrtc.com/latest-v2.js" in the header of the html
2. Put the  webRTC component in the render function
1. Pass options = {infoObject} as props.

### Example Use Case ###

```

import WebRtc from 'react-simplewebrtc';

class WebRtcDemo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var infoObject = {
      roomname : "test33333",
      /*provide a valid url for signalmaster otherwise this won't work*/
      signalmasterUrl : "www.example.com"
    }
    return ( 
          < div >
            <WebRtc obj = {infoObject}/>
          </div>
    );
  };
}
```





Jsfiddle example  https://jsfiddle.net/shoque/7jwg7etm/