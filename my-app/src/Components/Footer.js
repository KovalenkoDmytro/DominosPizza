import './Footer.scss'

function Footer(props){
    let links = props.list.map(elem=><li className="footer --link_item"> <a href="#!">{elem}</a></li>);
    let title = props.titles.map(elem=> <ul className="footer__title" >{elem}{links}</ul>);

    return(
        <>
        <div className="footer__content">{title}</div>
        <div className="footer__author">&copy;powered by DKovalenko</div>
        </>
    )
}

export default Footer