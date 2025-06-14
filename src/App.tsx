import "./App.css";

import Loading from "./components/loading";
import CustomizedInput from "./components/CustomInput";
import CustomizedButton from "./components/CustomButton";

function App() {
  return (
    <>
      <div className="h-dvh bg-background-primary">
        {/* <Loading /> */}
        <div className="p-10">
          <CustomizedInput
            className="w-72 h-20"
            type="password"
            name="email"
            required={true}
          />
          <CustomizedButton className="w-80 h-10 mt-10" label="Login" onClick={() => console.log("login")}/>
        </div>
        <div>Hello World!</div>
      </div>
    </>
  );
}

export default App;
