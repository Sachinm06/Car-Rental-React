import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useRoutes } from 'react-router-dom';



function Cars() {
    const [carsList, setCars] = useState([])

    //api to access data

    const getData = async () => {
        const result = await fetch('/car_rentals.json')
        result.json().then(data => setCars(data.car_rentals))
    }
    console.log(carsList);

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='container'>
            <Row>
                {
                    carsList.map(cars => (
                        <Col id='c1' lg={4} md={6} sm={12}>

                            <Link id='l1' to={`/viewRest/${cars.id}`}>

                                <Card className='mb-3 mt-5' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={cars.photo} />
                                    <Card.Body>
                                        <Card.Title>{cars.name}</Card.Title>
                                        <Card.Text>
                                            {cars.location}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Link>

                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Cars