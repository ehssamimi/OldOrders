import React, {Component} from 'react';
import {Colxx} from "../../../../../components/common/CustomBootstrap";
import GlideComponentThumbs from "../../../../../components/carousel/GlideComponentThumbs";
import { detailImages, detailThumbs } from "../../../../../data/carouselItems";
import SliderPageEdit from "./SliderPageEdit/SliderPageEdit";


class SliderOnePage extends Component {
    render() {
        return (

                <div   className="w-100">

                            <SliderPageEdit className='brb2 img-self-fill '  divClass={'height30vh'} settingsImages={
                                {
                                    bound: true,
                                    rewind: false,
                                    focusAt: 0,
                                    startAt: 0,
                                    gap: 5,
                                    perView: 1,
                                    data: detailImages,
                                }
                            } settingsThumbs={
                                {
                                    bound: true,
                                    rewind: false,
                                    focusAt: 0,
                                    startAt: 0,
                                    gap: 10,
                                    perView: 5,
                                    data: detailThumbs,
                                    breakpoints: {
                                        576: {
                                            perView: 4
                                        },
                                        420: {
                                            perView: 3
                                        }
                                    }
                                }
                            } />

                </div>
        );
    }
}

export default SliderOnePage;