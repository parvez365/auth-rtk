
const ImagePz = ({src, className}) => {
  return (
    <picture>
      <img src={src} alt={src} className={className} />
    </picture>
  )
}

export default ImagePz;