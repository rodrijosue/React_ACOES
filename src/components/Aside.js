
import React from "react";

export default function Aside() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="#" className="brand-link">
        <img
          src="../../img/logo.jpg"
          alt
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">ACOES</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="../../dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="modulos/personas/perfil.html" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-users" />
                <p>
                  Personas
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    href="modulos/personas/estudiante.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Estudiantes</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="modulos/personas/coordinadores.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Coordinadores</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="modulos/personas/maestro.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Maestros</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/modulos/personas/Proveedores.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Proveedores</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="../widgets.html" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Planilla</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-truck" />
                <p>
                  Inventario y Transporte
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    href="modulos/inventario/inventario.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Inventario</p>
                  </a>
                </li>
              </ul>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    href="/modulos/inventario/Transporte.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Transporte</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="modulos/compras/Compras.html" className="nav-link">
                <i className="nav-icon fas fa-shopping-cart" />
                <p>Compras</p>
              </a>
            </li>
            <ul className="nav nav-treeview"></ul>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-folder-open" />
                <p>
                  Seguimiento
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    href="/modulos/seguimiento/seguimiento.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Proyectos</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/modulos/graph/reportes.html" className="nav-link">
                <i className="nav-icon fas fa-file" />
                <p>Reportes</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-lock " />
                <p>
                  Seguridad
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="/modulos/seguridad/roles.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Roles</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/modulos/seguridad/gestion bd.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Gestion Base de datos</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/modulos/seguridad/bitacora.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Bitacora</p>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="nav-link"></a>
              <center>
                <a href="#" className="nav-link"></a>
                <a
                  className="btn btn-danger btn-sm"
                  href="/login.html"
                  styledisplay="none"
                >
                  Salir
                </a>
              </center>
            </li>
          </ul>
        </nav>
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
