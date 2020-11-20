import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail-container">
          <div className="detail-wrap">
            <img className="detail-poster" src={location.state.poster} />
            <div className="detail-content">
              <div className="content-title">{location.state.title}</div>
              <div className="content-rating">{location.state.rating}</div>
              <div className="content-year">{location.state.year}</div>
              <div className="content-genres">{location.state.genres}</div>
              <div className="content-summary">
                <div className="summary-title">줄거리</div> <br /> {location.state.summary}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;