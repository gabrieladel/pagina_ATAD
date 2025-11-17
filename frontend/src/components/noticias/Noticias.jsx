import { useEffect, useState } from "react";
import "./Noticias.css";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

const Noticia = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/noticias");
                setNoticias(res.data);
            } catch (error) {
                console.error("Error al obtener noticias:", error);
            }
        };

        fetchNoticias();
    }, []);

    // Divide las noticias en grupos de 2
    const chunkNoticias = (array, size) => {
        return array.reduce((acc, _, i) => {
            if (i % size === 0) acc.push(array.slice(i, i + size));
            return acc;
        }, []);
    };

    const grupos = chunkNoticias(noticias, 2);

    return (
        <section className="noticias-section">
            {grupos.length > 0 ? (
                <Carousel
                    interval={5000}
                    controls={true}
                    indicators={true}
                    className="w-100"
                >
                    {grupos.map((grupo, index) => (
                        <Carousel.Item key={index} className="carousel-item-full">
                            <Row className="justify-content-center m-0">
                                {grupo.map((noticia) => (
                                    <Col
                                        md={4}
                                        sm={6}
                                        xs={12}
                                        className="d-flex justify-content-center"
                                        key={noticia.id}
                                    >
                                        <Card className="card1 shadow-sm p-3 mb-3 h-100">
                                            <Card.Body className="d-flex flex-column">

                                                <h5 className="fw-bold text-primary text-center mb-2">
                                                    {noticia.titulo}
                                                </h5>

                                                <p className="flex-grow-1 text-muted" style={{ wordBreak: "break-word" }}>
                                                    {noticia.contenido}
                                                </p>

                                                {noticia.fecha && (
                                                    <small className="text-end text-secondary mt-2">
                                                        {new Date(noticia.fecha).toLocaleDateString()}
                                                    </small>
                                                )}

                                            </Card.Body>
                                        </Card>

                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                <p className="text-center">Cargando noticias...</p>
            )}
        </section>
    );
};

export default Noticia;
