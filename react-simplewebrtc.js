'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var WebRTC = (function (_React$Component) {
  _inherits(WebRTC, _React$Component);

  function WebRTC(props) {
    _classCallCheck(this, WebRTC);

    _get(Object.getPrototypeOf(WebRTC.prototype), 'constructor', this).call(this, props);
    this.addVideo = this.addVideo.bind(this);
    this.removeVideo = this.removeVideo.bind(this);
    this.readyToCall = this.readyToCall.bind(this);
  }

  _createClass(WebRTC, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.webrtc = new SimpleWebRTC({
        localVideoEl: _reactDom2['default'].findDOMNode(this.refs.local),
        remoteVideosEl: "",
        autoRequestMedia: true,
        url: this.props.obj.signalmasterUrl
      });

      console.log("webrtc component mounted");
      this.webrtc.on('videoAdded', this.addVideo);
      this.webrtc.on('videoRemoved', this.removeVideo);
      this.webrtc.on('readyToCall', this.readyToCall);
    }
  }, {
    key: 'addVideo',
    value: function addVideo(video, peer) {
      console.log('video added', peer);
      //  console.log(this.refs.remotes);
      var remotes = _reactDom2['default'].findDOMNode(this.refs.remotes);
      console.log(remotes);
      if (remotes) {

        var container = document.createElement('div');
        container.className = 'videoContainer';
        container.id = 'container_' + this.webrtc.getDomId(peer);
        container.appendChild(video);
        // suppress contextmenu
        video.oncontextmenu = function () {
          return false;
        };
        console.log(container);
        remotes.appendChild(container);
      }
    }
  }, {
    key: 'removeVideo',
    value: function removeVideo(video, peer) {
      console.log('video removed ', peer);
      var remotes = _reactDom2['default'].findDOMNode(this.refs.remotes);
      var el = document.getElementById(peer ? 'container_' + this.webrtc.getDomId(peer) : 'localScreenContainer');
      if (remotes && el) {
        remotes.removeChild(el);
      }
    }
  }, {
    key: 'readyToCall',
    value: function readyToCall() {
      return this.webrtc.joinRoom(this.props.obj.roomname);
    }
  }, {
    key: 'connect',
    value: function connect() {
      console.log("connected");
      // alert("connected");
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      console.log("disconnected");
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement('video', { className: 'local', id: 'localVideo', ref: 'local' }),
        _react2['default'].createElement('div', { className: 'remotes', id: 'remoteVideos', ref: 'remotes' })
      );
    }
  }]);

  return WebRTC;
})(_react2['default'].Component);

exports['default'] = WebRTC;
module.exports = exports['default'];
