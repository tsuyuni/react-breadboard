import { BreadBoard, Wire } from "react-breadboard";

const App = () => {
  return (
    <BreadBoard>
      <Wire from="A12" to="B14" />
    </BreadBoard>
  );
};

export default App;
