import {Link} from "react-router-dom";

export default function Item_s({item}) {
    return (
        <figure>
            <Link to={`/paramItem_s/${item.id}`}>
                <div className="circle"><img src={item.thumb}/></div>
                <figcaption className="bold">{item.price}</figcaption>
                <figcaption>{item.name}</figcaption>
            </Link>
        </figure>
    )
}