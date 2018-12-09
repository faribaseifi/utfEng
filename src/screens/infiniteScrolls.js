import React, { Component } from 'react';
import InfiniteScroller from 'react-infinite-scroller';
import { Link } from 'react-router-dom';

class infScr extends Component {
  state = {
    items: [],
    hasMore: true
  };

  loadMore = pageNum => {
    const postId = 1;
    if (pageNum === 20) this.setState({ hasMore: false });
    fetch(
      `https://www.kanoonbook.ir/index.php/app/utfGetNews/${postId}?pageNum=${pageNum}&pageCount=5`
    )
      .then(res => res.json())
      .then(data =>
        this.setState(state => ({ items: state.items.concat(data) }))
      )
      .catch(err => console.error(err));
  };

  render() {
    return (
      <InfiniteScroller
        pageStart={0}
        loadMore={this.loadMore}
        hasMore={this.state.hasMore}
        loader={<div>LOADING>>>></div>}>
        {this.state.items.map(item => (
          <div>{JSON.stringify(item)}</div>
        ))}
      </InfiniteScroller>
    );
  }
}

export default infScr;
