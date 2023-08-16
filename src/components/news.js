import React from "react";
import NewsItem from "./newsitem";
// import Loader from "./loader";
import InfiniteScroll from "react-infinite-scroll-component";

// import {PropTypes} from 'prop-types'

class News extends React.Component {
  // static defaultProps = {
  //   country: 'in',
  //   category:'general',
  //   page:1,
  //   pageSize:6
  //   }
  // static propTypes  = {
  //   country: PropTypes.string,
  //   category:PropTypes.string,
  //   page:PropTypes.number,
  //   pageSize:PropTypes.number
  //   }
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      country: "in",
      pageSize: 6,
      // loader: false,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    this.props.setProgress(20)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=000bcadc5cca495d962fc670360bd090&page=${this.state.page}&pagesize=${this.state.pageSize}`;
    // this.setState({ loader: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.props.setProgress(100)
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      page: this.state.page + 1,
      // loader: false,
      scrollLoader:false,
    });
    
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=000bcadc5cca495d962fc670360bd090&page=${this.state.page}&pagesize=${this.state.pageSize}`;
    this.setState({scrollLoader:true,})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      page: this.state.page + 1,
      scrollLoader:false,
   
    });
  };
  render() {
    return (
      <>
        <center className="mt-3">
          <h2>NewsApp-Top {this.props.category} Headlines</h2>
        </center>
        {/* { this.state.loader &&
       <center><Loader src='loader.gif'/></center>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.scrollLoader ? <div className={`d-flex justify-content-center my-3`}>
      <img src='loader.gif' alt='...'></img>
    </div> : ' '}
        >
        { !this.state.loader ?
                    <div className="container">
            <div className="row">
              {this.state.articles
                ? this.state.articles.map((articles, index) => {
                    return (
                      <div className=" col-md-4 my-4" key={index}>
                        <NewsItem
                          title={
                            articles.title ? articles.title.slice(0, 60) : " "
                          }
                          description={
                            articles.description
                              ? articles.description.slice(0, 100)
                              : " "
                          }
                          imageUrl={
                            articles.urlToImage
                              ? articles.urlToImage
                              : "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/galaxy-flip-5-renders-onleaks-4.png"
                          }
                          newsUrl={articles.url}
                          author={articles.author ? articles.author : "Unknown"}
                          date={
                            articles.publishedAt ? articles.publishedAt : ""
                          }
                          source={articles.source.name}
                        />
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        :''}
        </InfiniteScroll>

        <div className="d-flex justify-content-center">
          {/* <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Preview</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/6)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button> */}
        </div>
      </>
    );
  }
}

export default News;
