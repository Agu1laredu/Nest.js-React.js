import Headers from "../../Components/Headers/index";
import Table from "react-bootstrap/Table";

function Products() {
  const products = [
    {
      id: 1,
      name: "Sofá Chesterfield",
      description:
        "Sofá tapizado en cuero de alta calidad con patas de madera maciza. Disponible en varios colores y tamaños.",
      price: 1000,
      image: "https://www.example.com/images/chesterfield.jpg",
      category: "sofas",
      stock: 10,
    },
    {
      id: 2,
      name: "Mesa de centro de vidrio",
      description:
        "Mesa de centro de diseño moderno con base de metal y superficie de vidrio templado. Disponible en varios tamaños.",
      price: 500,
      image: "https://www.example.com/images/mesa_centro_vidrio.jpg",
      category: "mesas",
      stock: 5,
    },
  ];
  return (
    <div className="App">
      <Headers />
      <h1>Productos</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products) => (
            <tr key={products.id}>
              <td>{products.id}</td>
              <td>{products.name}</td>
              <td>{products.price}</td>
              <td>{products.description}</td>
              <td>{products.stock}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Products;
