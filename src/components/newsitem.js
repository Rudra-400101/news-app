import React from 'react'

class NewsItem extends React.Component {

  render() {
    let { title, description, imageUrl, newsUrl,author,date,source } = this.props;
    return (
      <>

        <span className="d-flex justify-content-end" style={{left:'91%',}}>
       <span className=' badge rounded-pill bg-danger'>{source}</span> 
  </span>
        <div className="card">
          <img src={imageUrl} className="imagesize" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='blank' className="btn btn-dark">Read more</a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;