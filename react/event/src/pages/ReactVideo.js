import ReactPlayer from 'react-player'

export default function ReactVideo() {
  {/*onEnded=>영상이 끝나는 시점에 이 함수가 열리게끔 만듬*/}
  const endVideo = function(){
    alert('영상 끝났다');
  }
  const playVideo =()=>{
    console.log('플레이 중...');
  }
  return (
    <>
      <h2>React Video</h2>
      <ReactPlayer
        playing={!true}
        // loop
        controls
        muted
        onEnded={endVideo}
        onPlay={playVideo}
        url={'./puppies.mp4'}
      /> 
    </>
  )
}
