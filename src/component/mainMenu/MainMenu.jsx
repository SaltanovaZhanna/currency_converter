import {NavLink} from "react-router-dom";
import '../../assets/scss/style.scss'


function MainMenu(props){
    const items = props.links.map((item, index) => {
        return (
            <li key={index}>
                <NavLink to={item.path}>{item.link}</NavLink>
            </li>
        )
    });
    return (
        <nav>
            <ul>{items}</ul>
        </nav>
    );

};
MainMenu.defaultProps = {
    class: 'nav',
    links: [
        {
            link: "Link",
            path: "/",
        },
    ]
}
export default MainMenu;