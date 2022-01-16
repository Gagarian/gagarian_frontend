import React from "react";

const HomeCarousel = () => {
	return (
		<div className='w-full carousel'>
			<div id='slide1' className='relative w-full  carousel-item'>
				<img
					src='https://media.istockphoto.com/photos/ethiopian-traditional-hand-held-eating-injera-picture-id908729848?b=1&k=20&m=908729848&s=170667a&w=0&h=SnyaXB_sx0HhJbt6WBMTsENoiyDv9SPU6ouIZHD8vRk='
					className='w-full h-3/4'
				/>
				<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a href='/components/carousel#slide4' className='btn btn-circle'>
						❮
					</a>
					<a href='/components/carousel#slide2' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide2' className='relative w-full pt-20 carousel-item'>
				<img src='https://picsum.photos/id/501/800/300' className='w-full' />
				<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a href='/components/carousel#slide1' className='btn btn-circle'>
						❮
					</a>
					<a href='/components/carousel#slide3' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide3' className='relative w-full pt-20 carousel-item'>
				<img src='https://picsum.photos/id/502/800/300' className='w-full' />
				<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a href='/components/carousel#slide2' className='btn btn-circle'>
						❮
					</a>
					<a href='/components/carousel#slide4' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide4' className='relative w-full pt-20 carousel-item'>
				<img src='https://picsum.photos/id/503/800/300' className='w-full' />
				<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a href='/components/carousel#slide3' className='btn btn-circle'>
						❮
					</a>
					<a href='/components/carousel#slide1' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
		</div>
	);
};
export default HomeCarousel;
