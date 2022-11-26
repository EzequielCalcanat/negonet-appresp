import React from 'react'
import servicios from '../assets/imgs/servicios.png'
import cocinero from '../assets/imgs/cocinero.jpg'
import carpintero from '../assets/imgs/carpintero.jpg'
import maestra from '../assets/imgs/maestra.jpg'

const ContainerIndex = () => {
    return (
        <>
            <div className='container-fluid containerbg'>
                <div className='row'>
                    <div className='col-md-4 text-center'>

                    </div>
                    <div className='col-md-8 text-center formbusqueda'>
                        <div>
                            <h1 className='mt-5 titulosearch'>Encuentra tu servicio y genera una cita</h1>
                            <div className='container w-75 mt-2 rounded bg-light border mt-4 p-3'>
                                <form>
                                    <div className='row'>
                                        <div className='col'>
                                            <label className='form-label'>Categoría</label>
                                        </div>
                                        <div className='col'>
                                            <label className='form-label'>Especialidad</label>
                                        </div>
                                        <div className='col'>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <select className="form-select notrounded" aria-label="Default select example">
                                                <option selected>Seleccionar Categoría</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className='col'>
                                            <select className="form-select notrounded" aria-label="Default select example">
                                                <option selected>Seleccionar Especialidad</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className='col text-center align-items-center justify-content-center'>
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-primary notrounded" type="button">Buscar Servicio</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid containertext divinclinado text-center'>
                <div className='row divtextinclinado'>
                    <div className="col-lg-4 contents">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns={cocinero} role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                        <h2 className="fw-normal">Heading</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <p><a className="btn btn-secondary" href="#">View details »</a></p>
                    </div>
                    <div className="col-lg-4 contents">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                        <h2 className="fw-normal">Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        <p><a className="btn btn-secondary" href="#">View details »</a></p>
                    </div>
                    <div className="col-lg-4 contents">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                        <h2 className="fw-normal">Heading</h2>
                        <p>And lastly this, the third column of representative placeholder content.</p>
                        <p><a className="btn btn-secondary" href="#">View details »</a></p>
                    </div>

                </div>
            </div>
            <div className='container-fluid containerwhite text-center'>
                ba
            </div>
            <div className='container-fluid containercolor divinclinado2 text-center'>

            </div>
            <div className='container-fluid containerfinal text-center'>
                bb
            </div>
            <div className='container-fluid containerfooter text-center'>
                bb
            </div>
        </>
    )
}

export default ContainerIndex