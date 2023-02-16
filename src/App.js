import "./App.css";
import CartGroup from "./components/CardGroup/CartGroup";
import { Button, Spinner } from "react-bootstrap";
import GridCard from "./components/GridCard/GridCard";
import ColorSchemesExample from "./components/Navbar/Navbar";
import BasicExample from "./components/Toast/Toast";

function App() {
  return (
    <div className="App">
      <ColorSchemesExample></ColorSchemesExample>
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <CartGroup></CartGroup>
      <Button variant="danger">Bootstrap Button</Button>
      <Spinner animation="grow" variant="danger" />
      <GridCard></GridCard>
      <BasicExample></BasicExample>
    </div>
  );
}

export default App;
