
const navLinkStyle = {cursor: "pointer"};

function List ({name, active}){
    const classes= `nav-link ${active ? 'active' : ''}`;
    return <li className={classes} style={navLinkStyle}>{name}</li>;  
}

export default function ListNames() {
    return (
        <ul className="nav nav-pills flex-column mb-auto">
            <List name="Importante" active={true} />
            <List name="Film da vedere" active={false} />
            <List name="Libri da leggere" active={false} />
        </ul>
    );
}