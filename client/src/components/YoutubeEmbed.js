import "../css/YoutubeEmbed.css"


const YoutubeEmbed = ({url}) => {
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    let match = url.match(regExp)
    let songYoutubeID = match && match[7].length == 11 ? match[7] : false

return (
  <div className='video-responsive'>
    <iframe
      width='853'
      height='480'
      src={`https://www.youtube.com/embed/${songYoutubeID}`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
    />
  </div>
)
}


export default YoutubeEmbed
