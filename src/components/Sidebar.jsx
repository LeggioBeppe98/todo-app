import ListNames from "./ListNames";
import User from "./User";
import Col from "./Col";

const defaultImage = "https://via.placeholder.com/32x32.png";

const customStyle = {
    boxShadow: "inset 1px 0 0rgba(0, 0, 0, 0.1)"
}

export default function Sidebar({ user: {id, name, image} }) {
    return (
      
        <Col size={3} className="bg-light" style={customStyle}>
           <User user={{name, image}} />
           <hr />
           <ListNames />
        </Col>
    );
}
