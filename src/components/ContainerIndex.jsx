import React from 'react'
import servicios from '../assets/imgs/servicios.png'

const ContainerIndex = () => {
    return (
        <>
            <div className='container-fluid containerbg'>
                <div className='row'>
                    <div className='col-md-4 text-center'>

                    </div>
                    <div className='col-md-8 text-center formbusqueda'>
                        <div>
                            <h1 className='mt-5'>Encuentra tu servicio y genera una cita</h1>
                            <div className='container w-75 mt-2 rounded bg-light border p-3'>
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
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seleccionar Categoría</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className='col'>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seleccionar Especialidad</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className='col text-center align-items-center justify-content-center'>
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-primary" type="button">Buscar Servicio</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid containertext text-center'>
                b
            </div>
            <div className='container-fluid containerwhite text-center'>
                b
            </div>
            <div className='container-fluid containercolor text-center'>
                b
            </div>
        </>
    )
}

export default ContainerIndex