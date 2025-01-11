import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults: 0
  //   };




  //   

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    // console.log(parseData);

    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)

    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false,
      
    // })
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
      
    updateNews();
    // eslint disable-next-line
  }, [])


  // async componentDidMount() {
    // console.log("cdm");
    // let url = "https://gnews.io/api/v4/top-headlines?country=in&token=17ffccf668d78750937d57957c89c4a0"
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2e857b97d2764dafacab720cf58e7ae2&page=1&pageSize=${props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({articles:parseData.articles,
    //               totalResults: parseData.totalResults,
    //             loading: false})
    // this.updateNews();
  // }

  // const handlePrevClick = async () => {
  //   // console.log("previous");

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2e857b97d2764dafacab720cf58e7ae2&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // console.log(parseData);
  //   // this.setState({
  //   //     page: this.state.page - 1,
  //   //     articles:parseData.articles
  //   //   })
  //   // this.setState({ page: this.state.page - 1 });
  //   setPage(page-1)
  //   updateNews();
  // };

  // const handleNextClick = async () => {
    
  //   // console.log("next");
  //   // if(!(this.state.page + 1>Math.ceil(this.state.totalResults/props.pageSize))){

  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2e857b97d2764dafacab720cf58e7ae2&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //   //   this.setState({loading: true});
  //   //   let data = await fetch(url);
  //   //   let parseData = await data.json();
  //   //   this.setState({
  //   //       page: this.state.page + 1,
  //   //       articles:parseData.articles,
  //   //       loading: false
  //   //     })
  //   // }
  //   // this.setState({ page: this.state.page + 1 });
  //   setPage(page+1)
  //   updateNews();
  // };

  const fetchMoreData = async() => {
    // setPage(page+1)
    // this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    // this.setState({
    //   articles: this.state.articles.concat(parseData.articles),
    //   totalResults: parseData.totalResults
      // loading: false,
      
    // });
  };

 
    // console.log("render")
    return (
      <>
      
     
      {/* <div className="container my-3"> */}
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop: '90px' }}>
          NewsMonkey - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
         >

          <div className="container">
          <div className="row">
            {
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(thies.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      {/* </div> */}
      </>
    );
  
}



News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
