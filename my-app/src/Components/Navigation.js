import '../Styles/Nav.scss'
function Nav(props){
    let nav = props.list.map(elem=><li className="nav --item"><a href="#!">{elem}</a></li>)

    return(
        <>
        <nav className="NavMain">{nav}</nav>
        </>
    )
}

export default Nav