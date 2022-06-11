import React from "react";

export default function Content() {
  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6"></div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Info boxes */}
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <i className="fas fa-atlas" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Comunidades</span>
                    <span className="info-box-number">10</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-danger elevation-1">
                    <i className="fas fa-restroom" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Alumnos </span>
                    <span className="info-box-number">1,200</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              {/* fix for small devices only */}
              <div className="clearfix hidden-md-up" />
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-success elevation-1">
                    <i className="	fas fa-chalkboard-teacher" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Maestros</span>
                    <span className="info-box-number">100</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-warning elevation-1">
                    <i className="far fa-address-card" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Coordinadores</span>
                    <span className="info-box-number">30</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">
                      Reporte Cuatrimestral de alumnos
                    </h5>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <p className="text-center">
                          <strong>Proyeccion: 1 Feb 2022 - 30 May 2022</strong>
                        </p>
                        <div className="chart">
                          {/* Sales Chart Canvas */}
                          <canvas
                            id="salesChart"
                            height={180}
                            style={{ height: 180 }}
                          />
                        </div>
                        {/* /.chart-responsive */}
                      </div>
                      {/* /.col */}
                      <div className="col-md-4">
                        <p className="text-center">
                          <strong>Resultados</strong>
                        </p>
                        <div className="progress-group">
                          Alumnos Secundaria aprobados
                          <span className="float-right">
                            <b>450</b>/500
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                        <div className="progress-group">
                          Alumnos Primaria aprobados
                          <span className="float-right">
                            <b>595</b>/600
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-danger"
                              style={{ width: "95%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                        <div className="progress-group">
                          <span className="progress-text">
                            Alumnos Superior Aprobados
                          </span>
                          <span className="float-right">
                            <b>80</b>/100
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                      </div>
                      {/* /.progress-group */}
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                <div>
                  <h3>
                    <center>Porcentaje de Aprobacion</center>
                  </h3>
                </div>
                {/* ./card-body */}
                <div className="card-footer">
                  <div className="row">
                    <div className="col-sm-3 col-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-success">
                          <i className="fas fa-caret-up" /> 93.75%
                        </span>
                        <h5 className="description-header">Total</h5>
                        <span className="description-text">
                          Alumnos aprobados
                        </span>
                      </div>
                      {/* /.description-block */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-3 col-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-warning">
                          <i className="fas fa-caret-left" /> 0%
                        </span>
                        <h5 className="description-header">Total</h5>
                        <span className="description-text">
                          Alumnos retirados
                        </span>
                      </div>
                      {/* /.description-block */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-3 col-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-success">
                          <i className="fas fa-caret-up" /> 70%
                        </span>
                        <h5 className="description-header">Total</h5>
                        <span className="description-text">
                          Materias retrasadas aprobadas
                        </span>
                      </div>
                      {/* /.description-block */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-3 col-6">
                      <div className="description-block">
                        <span className="description-percentage text-danger">
                          <i className="fas fa-caret-down" /> 6.25%
                        </span>
                        <h5 className="description-header">Total</h5>
                        <span className="description-text">
                          Alumnos Reprobados
                        </span>
                      </div>
                      {/* /.description-block */}
                    </div>
                  </div>
                  {/* /.row */}
                </div>
                {/* /.card-footer */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          {/* Main row */}
          <div className="row">
            {/* Left col */}
            <div className="col-md-8">
              {/* MAP & BOX PANE */}
              {/* /.card */}
              {/* /.row */}
              {/* TABLE: LATEST ORDERS */}
              <div className="card">
                <div className="card-header border-transparent">
                  <h3 className="card-title">Ultimas compras de proyecto</h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table m-0">
                      <thead>
                        <tr>
                          <th>Orden ID</th>
                          <th>Articulo</th>
                          <th>Codigo Proyecto</th>
                          <th>Descripción</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="pages/examples/invoice.html">OR9842</a>
                          </td>
                          <td>Cemento</td>
                          <td>TGU234</td>
                          <td>
                            <div
                              className="sparkbar"
                              data-color="#00a65a"
                              data-height={20}
                            >
                              20 bolsas de cemento
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="pages/examples/invoice.html">OR1848</a>
                          </td>
                          <td>Libros</td>
                          <td>SPS12</td>
                          <td>
                            <div
                              className="sparkbar"
                              data-color="#f39c12"
                              data-height={20}
                            >
                              Lote de 30 Aprende conmigo
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="pages/examples/invoice.html">OR7429</a>
                          </td>
                          <td>Utiles</td>
                          <td>SG5r5</td>
                          <td>
                            <div
                              className="sparkbar"
                              data-color="#f56954"
                              data-height={20}
                            >
                              10 Docenas de lapices tinta multicolor
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="pages/examples/invoice.html">OR7429</a>
                          </td>
                          <td>Pupitres</td>
                          <td>CM12J</td>
                          <td>
                            <div
                              className="sparkbar"
                              data-color="#00c0ef"
                              data-height={20}
                            >
                              Lote de 30 pupitres de madera y metal
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="pages/examples/invoice.html">OR1848</a>
                          </td>
                          <td>Uniformes</td>
                          <td>CB45</td>
                          <td>
                            <div
                              className="sparkbar"
                              data-color="#f39c12"
                              data-height={20}
                            >
                              20 cuballeras para los niños de primaria
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="pages/examples/invoice.html">OR7429</a>
                          </td>
                          <td>Mochilas</td>
                          <td>VL34</td>
                          <td>
                            <div
                              className="sparkbar"
                              data-color="#f56954"
                              data-height={20}
                            >
                              Lote de 50 mochilas
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /.table-responsive */}
                </div>
                {/* /.card-body */}
                <div className="card-footer clearfix">
                  <a
                    href="modulos/compras/Compras.html"
                    className="btn btn-sm btn-info float-left"
                  >
                    Agregar historial de compra
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-sm btn-secondary float-right"
                  >
                    Ver todas las compras
                  </a>
                </div>
                {/* /.card-footer */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
            <div className="col-md-4">
              {/* Info Boxes Style 2 */}
              <div className="info-box mb-3 bg-warning">
                <span className="info-box-icon">
                  <i className="far fa-id-badge" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Estudiantes Activos</span>
                  <span className="info-box-number">1,200</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
              <div className="info-box mb-3 bg-success">
                <span className="info-box-icon">
                  <i className="fas fa-user-graduate" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Estudiantes graduados</span>
                  <span className="info-box-number">1,000</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
              <div className="info-box mb-3 bg-danger">
                <span className="info-box-icon">
                  <i className="	fas fa-user-times" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">
                    Estudiantes con retrasadas
                  </span>
                  <span className="info-box-number">200</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
              <div className="info-box mb-3 bg-info">
                <span className="info-box-icon">
                  <i className="fas fa-user-plus" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Estudiantes nuevos</span>
                  <span className="info-box-number">150</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Rendimiento en materias</h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="chart-responsive">
                        <canvas id="pieChart" height={300} />
                      </div>
                      {/* ./chart-responsive */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-6">
                      <ul className="chart-legend clearfix">
                        <li>
                          <i className="far fa-circle text-danger" /> Español
                        </li>
                        <li>
                          <i className="far fa-circle text-success" />{" "}
                          Matematicas
                        </li>
                        <li>
                          <i className="far fa-circle text-warning" /> Naturales
                        </li>
                        <li>
                          <i className="far fa-circle text-info" /> Sociales
                        </li>
                        <li>
                          <i className="far fa-circle text-primary" /> Fisica
                        </li>
                        <li>
                          <i className="far fa-circle text-secondary" />{" "}
                          Computacion
                        </li>
                      </ul>
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.card-body */}
                <div className="card-footer p-0">
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Español
                        <span className="float-right text-danger">
                          <i className="fas fa-arrow-down text-sm" />
                          12%
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Matematicas
                        <span className="float-right text-success">
                          <i className="fas fa-arrow-up text-sm" /> 4%
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Naturales
                        <span className="float-right text-warning">
                          <i className="fas fa-arrow-left text-sm" /> 0%
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /.footer */}
              </div>
              {/* /.card */}
              {/* PRODUCT LIST */}
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/*/. container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
}
