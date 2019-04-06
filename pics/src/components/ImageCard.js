import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef);
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  // Always remember to create a arrow function
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    // Earlier every row was 150px of height that means if the size of the image is 151px,
    // it will allocate another 150px row to that image. which is not really required.
    // So making the row of 10px will give us more details than 150px row as
    // it will allocate only 10px is the size is greater.
    // also the distance between each grid is 10px. hence making it ideal solution.
    // const spans = Math.ceil(height / 150);

    // how many rows?
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
