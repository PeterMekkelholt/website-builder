import Image from 'next/image'
const m49_banner_image = {
  objectFit: 'cover',
  overflow: 'hidden',
  zIndex: 1,
}

const M49_banner = (props) => (
  <>
    <div className="m49_banner">
      <Image
        src={props.banner_image}
        fill
        style={m49_banner_image}
        alt="alt text"
      />
      <div className="m49_banner_caption">{props.banner_caption}</div>
    </div>
  </>
)

export default M49_banner
