import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: [""],
  };

  handleClickImage = (e) => {
    this.setState({
      active: e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="grid grid-cols-2">
        <img src={images[active]} alt="car" className="max-h-60 rounded-md" />
        <div className="grid max-h-60 grid-cols-4 gap-3 pl-4">
          {images.map((image, index) => (
            // eslint-disable-next-line
            <img
              key={image}
              src={image}
              alt="car thumbnail"
              className="size-20 cursor-pointer rounded-full"
              data-index={index}
              onClick={this.handleClickImage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
