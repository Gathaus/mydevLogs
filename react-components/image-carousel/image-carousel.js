import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Pagination, Parallax } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/pagination/pagination.scss";
import "./image-carousel.css";

SwiperCore.use([EffectFade, Pagination, Parallax]);
//TODO 1.5 put woman collection and explore now same div, then write text-aling center
export default function ImageCarousel() {
	return (
		<Swiper pagination={{ clickable: true }} effect="fade">
			<SwiperSlide>
				<div className="Carouse_Image-link">
					<p className="Carousel__Image-header">
						Woman
						<br />
						Collection
					</p>
					<a href="#" className="Carousel__Image-link">
						Explore Now
					</a>
					<img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/revslider/classic/slider1-hp3.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="Carouse_Image-link">
					<p className="Carousel__Image-header">
						Man
						<br />
						Collection
					</p>
					<a href="#" className="Carousel__Image-link">
						Explore Now
					</a>
					<img src="https://img5.goodfon.com/original/1280x721/3/2b/paren-muzhchina-poza-rubashka-portret-belyi-fon-ten.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="Carouse_Image-link">
					<p className="Carousel__Image-header">
						Home
						<br />
						Collection
					</p>
					<a href="#" className="Carousel__Image-link">
						Explore Now
					</a>
					<img src="https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/revslider/furniture-6/1-41.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="Carouse_Image-link">
					<p className="Carousel__Image-header">
						Any
						<br />
						Collection
					</p>
					<a href="#" className="Carousel__Image-link">
						Explore Now
					</a>
					<img src="https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/revslider/furniture-2/2-2.jpg" />{" "}
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="Carouse_Image-link">
					<p className="Carousel__Image-header">
						Last
						<br />
						Collection
					</p>
					<a href="#" className="Carousel__Image-link">
						Explore Now
					</a>
					<img src="https://demo.uix.store/sober-furniture/wp-content/uploads/sites/3/revslider/furniture-2/1-2.jpg" />
				</div>
			</SwiperSlide>
		</Swiper>
	);
}
