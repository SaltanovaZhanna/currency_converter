import {NavLink} from "react-router-dom";

function SocialMenu(props){
    const items = props.links.map((item, index) => {
        return (
            <li key={index}>
                <NavLink to={item.path}>{item.svg}</NavLink>
            </li>
        )
    });
    return (
        <nav>
            <ul>{items}</ul>
        </nav>
    );

};
SocialMenu.defaultProps = {
    class: 'icons',
    links: [
        {
            link: "Link",
            path: "/",
        },
    ]
}
export default SocialMenu;