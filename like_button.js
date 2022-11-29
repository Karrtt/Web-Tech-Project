//'use strict';


class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return <span >You liked this product.</span>;
    }

    return (
        <button style = {{backgroundColor: "#007bff",border: "none",color:"white"}} onClick={() => this.setState({ liked: true })}>Like!!!
        </button>
      );
  }
}
const domContainer = document.querySelector('#like_button_container');

ReactDOM.render(<LikeButton/>, domContainer);
ReactDOM.render(<LikeButton/>, document.querySelector('#like_button_container1'));
ReactDOM.render(<LikeButton/>, document.querySelector('#like_button_container2'));
ReactDOM.render(<LikeButton/>, document.querySelector('#like_button_container3'));