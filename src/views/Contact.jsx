const Contact = () => {
    return(
        <div className="contact-section">
        <h1>Cuentanos, ¿en qué te podemos ayudar?</h1>
        <form className="form-section">
            <label>
                Correo:<br></br>
                    <input type="mail" placeholder="name@example.com" size="100" /><br></br><br></br>
                Descripción:<br></br>
                    <input type="text" size="100" /><br></br>
            <br></br>
            <button className="form-button" type="button" value="Enviar">Enviar</button>
            </label>
        </form>
        </div>
    )
}

export default Contact 