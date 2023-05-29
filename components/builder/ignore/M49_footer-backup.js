import Link from 'next/link'

const m49_footer_italic = {
  fontStyle: 'italic',
}

const M49_footer = (props) => (
  <>
    <div className="m49_footer">
        Content hard coded in ???
        <span style={m49_footer_italic}>Next.js &gt; M49_footer.js</span>


      <div className="m49_footer_bar">
        {props.links.map((menu, idx) => (
          <div className="m49_footer_link" key={idx}>
            <Link href={menu.url}>{menu.caption} </Link>
          </div>
        ))}
      </div>
    </div>
  </>
)

export default M49_footer
