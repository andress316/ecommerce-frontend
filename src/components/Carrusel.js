import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
            crossOrigin='anonymous'
          className="d-block w-100"
          style={{height: "500px", objectFit: "cover"}}
          src="https://i.ibb.co/5W4fM3v/baner-1.jpg"
          alt="Imagen 1"
        />
        <Carousel.Caption>
          <h3>El poder del Metal</h3>
          <p>Rudeza, rapidez y un estilo único con la nueva linea RG</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: "500px", objectFit: "cover"}}
          src="https://i.ibb.co/GnzvyHq/baner-2.jpg"
          alt="Imagen 2"
        />

        <Carousel.Caption>
          <h3>Único como tu estilo</h3>
          <p>Deja que tu sonido sea único como tu actitud</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: "500px", objectFit: "cover"}}
          src="https://i.ibb.co/4Y7wd7X/baner-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Todo lo que necesitas</h3>
          <p>
            Para ser el mejor y tocar con los mejores.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;