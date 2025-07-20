import Header from "./components/Header";
import UserBoard from "./components/UserBoard";
import Results from "./components/Results";
import { useState } from "react";
function App() {
  const [inputnumbers, setInputNumbers] = useState({
    initialInvestissement: 10000,
    annualInvestissement: 1200,
    expectedResults: 6,
    duration: 10,
  });

  // const valid = inputnumbers.duration >= 1;

  function handleChange(inputId, newValue) {
    setInputNumbers((prev) => {
      return {
        ...prev,
        [inputId]: +newValue,
      };
    });
  }

  return (
    <>
      <Header></Header>
      <UserBoard
        inputnb={inputnumbers}
        onChangeInput={handleChange}
      ></UserBoard>

      <Results input={inputnumbers}></Results>
    </>
  );
}

export default App;
