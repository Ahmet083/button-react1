import Button from "./Button"


function App() {
  return (
    <div>
      <Button type="primary" buttonText="Button-1" basilinca={() => alert("ben 1. buttonum, rengim mavi")}/>
      <Button type="secondary" buttonText="Button-2" basilinca={() => alert("ben 2. buttonum, rengim gri")}/>
      <Button type="danger" buttonText="Button-3" basilinca={() => alert("ben 3. buttonum, rengim kirmizi")}/>
    </div>
  );
}

export default App;
