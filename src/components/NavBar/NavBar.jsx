import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (
        <nav className="d-flex justify-content-evenly align-items-center bg-secondary ">
            <div>
                <ul className="d-flex">
                    <li> <button className="btn btn-success mx-2">Home</button> </li>
                    <li> <button className="btn btn-success mx-2">Productos</button> </li>
                    <li> <button className="btn btn-success mx-2">Contactos</button> </li>
                </ul>
            </div>
            <div>
                <h3 className="">Clothes Sell</h3>
            </div>
            <div className="d-flex">
                <CartWidget />
                </div>
            </nav>
          )
}

export default NavBar

