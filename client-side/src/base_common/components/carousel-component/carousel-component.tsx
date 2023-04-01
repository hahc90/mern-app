import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
  return (
	<Carousel>
		<Carousel.Item interval={ 2500 }>
			<img
			className="d-block w-100"
			src="img/technologie-2.jpg"
			alt="Third slide"
			/>
			<Carousel.Caption>
			<h1 className='dancing-script-font'>Welcome to HAHC90 website!</h1>
			<p className='roboto-font'>Image by <a href="https://www.freepik.com/free-vector/gradient-network-connection-background_12643219.htm#query=technology&position=1&from_view=search&track=sph">Freepik</a></p>
			</Carousel.Caption>
      	</Carousel.Item>
		<Carousel.Item interval={ 2500 }>
			<img
			className="d-block w-100"
			src="img/cover-1.jpg"
			alt="First slide"
			/>
			<Carousel.Caption>
			<h3 className='roboto-font'></h3>
			<p><a href="https://www.freepik.com/free-vector/blue-futuristic-waves-background-with-computer-code-technology_16406729.htm#query=technology&position=24&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={ 2000 }>
			<img
			className="d-block w-100"
			src="img/technologie.jpg"
			alt="Second slide"
			/>
			<Carousel.Caption>
			<h3 className='roboto-font'>Second slide label</h3>
			<p>Image by <a href="https://www.freepik.com/free-vector/gradient-network-connection-background_12643219.htm#query=technology&position=1&from_view=search&track=sph">Freepik</a>.</p>
			</Carousel.Caption>
		</Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponent