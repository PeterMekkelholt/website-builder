const M49_3_columns = props => (
    <>
        <div className="grid-container">
            <div className="grid-item">
                <div className="column_heading">{props.col_1_title}</div>
                <div dangerouslySetInnerHTML={createMarkup(props.col_1_body)} />
            </div>
            <div className="grid-item">
                <div className="column_heading">{props.col_2_title}</div>
                <div dangerouslySetInnerHTML={createMarkup(props.col_2_body)} />
            </div>
            <div className="grid-item">
                <div className="column_heading">{props.col_3_title}</div>
                <div dangerouslySetInnerHTML={createMarkup(props.col_3_body)} />
            </div>
        </div>
    </>
  )

  function createMarkup(content) {
    return {__html: content};
  }
  
  export default M49_3_columns