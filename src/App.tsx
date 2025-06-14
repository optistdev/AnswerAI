import "./App.css";

import Loading from "./components/loading";
import CustomizedInput from "./components/CustomInput";

function App() {
  return (
    <>
      <div className="h-dvh bg-background-primary">
        {/* <Loading /> */}
        <div className="p-10">
          <CustomizedInput
            width={300}
            height={30}
            type="password"
            name="email"
            required={true}
          />
        </div>
        <div>Hello World!</div>
      </div>
    </>
  );
}

export default App;
