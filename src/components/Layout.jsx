function Col({ children, size = "", className = "", style }) {
  const classes = `col${size ? `-${size}` : ""}`;

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}

/**
 * Perché questa sintassi?
Il motivo è rendere i componenti riutilizzabili e flessibili. Senza questa logica, ogni volta che usi <Container> o <Row> sei costretto ad usare sempre le stesse classi fisse. Con questa costruzione invece:
jsx// Componente base → "container"
<Container>...</Container>

// Con variante Bootstrap → "container-fluid"
<Container fluid={true}>...</Container>

// Con classe extra → "container mt-4"
<Container className="mt-4">...</Container>
 */

function Container({ fluid, children, className }) {
  const classes = `container${fluid ? "-fluid" : ""}${className ? className : ""}`;
  return <div className={classes}>{children}</div>;
}

function Row({ children, className }) {
  const classes = `row ${className ? className : ""}`;
  return <div className={classes}>{children}</div>;
}

export default function Layout({ children }) {
  return (
    <Container fluid={true}>
      <Row>{children}</Row>
    </Container>
  );
}

export function LeftCol({ children }) {
  const customStyle = {
    boxShadow: "inset -1px 0 0 rgba(0, 0, 0, 0.1)",
  };
  return (
    <Col
      size={3}
      className="bg-light p-3 overflow-scroll vh-100"
      style={customStyle}
    >
      {children}
    </Col>
  );
}

export function RightCol({ children }) {
  return (
    <Col size={9} className="p-3 overflow-scroll vh-100">
      {children}
    </Col>
  );
}
