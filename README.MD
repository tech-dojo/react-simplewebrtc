react webRTC component built with SimpleWebRTC.

Do include the script "https://simplewebrtc.com/latest-v2.js" in the header of the html.
Put the  webRTC component in the render function inside div.
and pass obj = {infoObject} for props.


# example use case
<pre>
<div class = "hljs">
<div class="line">
import WebRtc from 'react-simplewebrtc';

class WebRtcDemo extends React.Component {

constructor(props) {
    super(props);
  }

  render() {
    var infoObject = {
      roomname : "test33333",
      ****provide a valid url for signalmaster otherwise this won't work****
      signalmasterUrl : "www.example.com"
    }
    return ( < div >
<WebRtc obj = {infoObject}/>
      < /div>
    );
  };
}
</div>
</div>
</pre>

Jsfiddle example  https://jsfiddle.net/shoque/7jwg7etm/
