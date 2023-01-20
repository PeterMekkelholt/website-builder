/*
            style={{ 
                backgroundImage: 'url(`{props.banner_image}`)' }}
*/
const M49_banner = props => (
    <>
        <div 
            className="banner_image" 
            style={{ 
                backgroundImage: 'url("https://cdn.builder.io/api/v1/image/assets%2F5104cfed9d57493fb6993382c28cd166%2Fc01fed972b804d1180a91d491a4601fe")' }}
        >
           
            
            <div className="banner_caption">{props.banner_caption} and {props.banner_image}</div>
            <div>Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh.

            </div>
        </div>
    </>
  )

  export default M49_banner