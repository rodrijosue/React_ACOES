import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Bitacorac() {
  return (
    <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Bitacora</h1>
        </div>
        
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Fecha</th>
                    <th>Id Usuario</th>
                    <th>Id Objeto</th>
                    <th>Accion</th>
                    <th>Descripcion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                  <th>Id</th>
                    <th>Fecha</th>
                    <th>Id Usuario</th>
                    <th>Id Objeto</th>
                    <th>Accion</th>
                    <th>Descripcion</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>

  )
}
