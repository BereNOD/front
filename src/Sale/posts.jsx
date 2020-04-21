state = {
  posts: []
};
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(albums => this.setState({ posts: posts }))
}
  {_.map(this.state.posts, post => (
      <div className="mainPost">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      </div>
    ))}
