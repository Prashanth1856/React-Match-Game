import './index.css'

const ImageItem = props => {
  const {imageDetails, onSelectThumbnail} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    onSelectThumbnail(id)
  }

  return (
    <li>
      <button
        type="button"
        onClick={onClickThumbnail}
        className="thumbnail-button"
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ImageItem
