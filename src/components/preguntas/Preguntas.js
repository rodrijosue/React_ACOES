import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Preguntas.css"

import React from 'react'

export default function Preguntas() {
    return (
        <div>
            <meta charSet="UTF-8" />
            <title>Preguntas</title>
            {/*Load angular bootstrap */}
            {/* CSS ===================== */}
            {/*load font awesome*/}
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossOrigin="anonymous" />
            {/* load bootstrap */}
            <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" />
            <style dangerouslySetInnerHTML={{ __html: "\n    body {\n      padding-top: 30px;\n    }\n  " }} />
            <div className="container" data-ng-controller="RegistrationController">
                {/* PAGE HEADER */}
                <header className="page-header">
                    <div className="branding">
                        <h1>Preguntas de recuperacion</h1>
                        <p> <a href="https://acoes.org/">ACOES</a></p>
                    </div>
                </header>
                <data-uib-tabset data-active="activeJustified" data-justified="true">
                    <data-uib-tab data-heading="Por favor complete los campos" data-index={0} />
                    <br />
                    <div className="col-sm-8">
                        {/* FORM */}
                        <form name="forms.userForm" noValidate>
                            {/* novalidate prevents HTML5 validation since we will be validating ourselves */}
                            {/*Security Questions*/}
                            <div className="center-block row">
                                <div className="btn-group form-group col-sm-6">
                                    <button id="securityQuestionOne" type="button" className="btn btn-default" data-uib-dropdown-toggle data-ng-disabled="disabled" style={{ width: '100%' }}>
                                        Pregunta de seguridad 1
                                        <div>
                                            <select className="form-control" id="pregunta1">
                                                <option id="apodo">Apodo de pequeño?</option>
                                                <option id="mascota">Nombre de tu mascota?</option>
                                                <option id="pelicula">La mejor pelicula para ti?</option>
                                                <option id="lugarN">Lugar de Nacimiento?</option>
                                            </select>
                                        </div>
                                    </button>
                                </div>
                                <br />
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Respuesta" />
                                </div>
                            </div>
                            <br />
                            <div className="center-block row">
                                <div className="btn-group form-group col-sm-6">
                                    <button id="securityQuestionOne" type="button" className="btn btn-default" data-uib-dropdown-toggle data-ng-disabled="disabled" style={{ width: '100%' }}>
                                        Pregunta de seguridad 2
                                        <div>
                                            <select className="form-control" id="pregunta1">
                                                <option id="apodo">Apodo de pequeño?</option>
                                                <option id="mascota">Nombre de tu mascota?</option>
                                                <option id="pelicula">La mejor pelicula para ti?</option>
                                                <option id="lugarN">Lugar de Nacimiento?</option>
                                            </select>
                                        </div>
                                    </button>
                                </div>
                                <br />
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Respuesta" />
                                </div>
                            </div>
                            <br />
                            <div className="center-block row">
                                <div className="btn-group form-group col-sm-6">
                                    <button id="securityQuestionOne" type="button" className="btn btn-default" data-uib-dropdown-toggle data-ng-disabled="disabled" style={{ width: '100%' }}>
                                        Pregunta de seguridad 3
                                        <div>
                                            <select className="form-control" id="pregunta1">
                                                <option id="apodo">Apodo de pequeño?</option>
                                                <option id="mascota">Nombre de tu mascota?</option>
                                                <option id="pelicula">La mejor pelicula para ti?</option>
                                                <option id="lugarN">Lugar de Nacimiento?</option>
                                            </select>
                                        </div>
                                    </button>
                                </div>
                                <br />
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Respuesta" />
                                </div>
                            </div>
                            <p className="text-center text-muted">Si olvida su contraseña, estas preguntas de seguridad se utilizarán para
                                restablecer la contraseña</p>
                            <hr />
                            {/*USER CONSENT*/}
                        </form></div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="text-center">Una vez finalizada las respuestas presione el boton enviar</p>
                    {/* SUBMIT BUTTON */}
                    <a href="/login.html"><button type="submit" className="center-block btn btn-primary" data-ng-disabled="!(forms.userForm.validEmail &&
                                forms.userForm.validConfirmedPasswords &&
                                forms.userForm.allSecurityAnswered)">
                        Enviar
                    </button></a>
                </data-uib-tabset></div>
        </div>

    )
}
