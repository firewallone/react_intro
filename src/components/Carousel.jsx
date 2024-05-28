import { Component, Suspense } from "react";
import SuspenseImage from "./SuspenseImage";

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
        <Suspense
          fallback={
            <div className="max-h-60 animate-pulse rounded-md bg-gray-400" />
          }
        >
          <SuspenseImage
            src={images[active]}
            alt="car"
            className="max-h-60 rounded-md"
          />
        </Suspense>
        <div className="grid max-h-60 grid-cols-4 gap-3 pl-4">
          {images.map((image, index) => (
            // eslint-disable-next-line
            <Suspense
              key={image}
              fallback={
                <div className="size-20 animate-pulse cursor-pointer rounded-full bg-slate-400" />
              }
            >
              <SuspenseImage
                src={image}
                alt="car thumbnail"
                className="size-20 cursor-pointer rounded-full"
                data-index={index}
                onClick={this.handleClickImage}
              />
            </Suspense>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
