import React, { Component } from 'react';
class ArticleDetails extends Component {
  state = {
    showMore: false
  };

  changeState = () =>
    this.setState(prevState => ({ showMore: !prevState.showMore }));

  generateArticleDOM = () => {
    const { title, url, byline, abstract, section } = this.props.data;
    return (
      <div>
        <h2>{title}</h2>
        <p>{byline}</p>
        {!this.state.showMore && (
          <span onClick={this.changeState} className="details-button">
            Show More
          </span>
        )}
        {this.state.showMore && (
          <div>
            <p>Description: {abstract}</p>
            <p>
              Url:
              <a href={url} target="_blank" rel="noopener noreferrer">
                Click Here
              </a>
            </p>
            <p>Section: {section}</p>
            <span onClick={this.changeState}>Show Less</span>
          </div>
        )}
      </div>
    );
  };
  render(props, state) {
    return (
      <div className="articledetails">
        {this.generateArticleDOM()}
        <style global jsx>
          {`
            .articledetails {
              display: inline-block;
              position: relative;
            }
            .articledetails h2 {
              font-size: 15px;
              margin: 0;
              padding: 0 8px 8px;
            }
            .articledetails p {
              font-size: 14px;
              margin: 0;
              padding: 0 8px 8px;
            }
            .articledetails span {
              position: absolute;
              font-size: 12px;
              bottom: -5px;
              right: 0;
              cursor: pointer;
              color: #003f72;
              font-weight: 600;
              display: inline;
            }
            .articledetails a {
              padding: 0 2px;
              color: #fe801b;
            }
          `}
        </style>
      </div>
    );
  }
}
export default ArticleDetails;
