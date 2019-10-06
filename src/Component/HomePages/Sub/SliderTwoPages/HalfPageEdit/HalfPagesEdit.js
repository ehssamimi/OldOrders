import React from "react";
import ReactDOM from "react-dom";
import { Glide } from "react-glide";
import "react-glide/lib/reactGlide.css";
// import "@glidejs/glide/dist/css/glide.core.min.css";
// import "@glidejs/glide/dist/css/glide.theme.min.css";



export default class HalfPagesEdit extends React.Component {

    render() {
        return (
            <div>
                <Glide
                    height={400}
                    width={400}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    dots={true}
                    infinite={true}
                    onSlideChange={() => console.log("slide changed")}
                >
                    <img src="https://picsum.photos/id/312/400/400" alt="image1" />
                    <img src="https://picsum.photos/id/313/400/400" alt="image2" />
                    <img src="https://picsum.photos/id/314/400/400" alt="image3" />
                    <div>
                        <iframe
                            title="video"
                            width="400"
                            height="400"
                            src="https://www.youtube.com/embed/6emElQDVqF4"
                            frameBorder="0"
                            allowFullScreen
                        />
                    </div>
                </Glide>
            </div>
        )
    }
}
