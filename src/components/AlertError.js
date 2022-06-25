const AlertError = ({message}) => {
    return(
        <div className="alert alert-danger text-center mx-4" role="alert">
            {message}
        </div>

    )
}

export default AlertError

//                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
