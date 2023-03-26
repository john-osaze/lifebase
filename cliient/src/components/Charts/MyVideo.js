import YouTube from 'react-youtube';

function MyVideo({identity}) {
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <YouTube videoId={identity} opts={opts} />
  );
}

export default MyVideo;