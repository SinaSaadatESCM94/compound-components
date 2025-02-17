import { ChangeEvent, useState } from "react";
import {
  NonCompoundInput,
  NonCompoundInputProps,
  CompoundInput,
  CompoundInputProps,
  Fieldset,
  Label,
  ErrorMessage,
} from "./components";
import "./App.css";

function App() {
  //#region states
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [errorFirstName, setErrorFirstName] = useState<string>("");
  const [errorLastName, setErrorLastName] = useState<string>("");
  //#endregion

  //#region actions
  const onChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFirstName(value);
    setErrorFirstName(!value ? "field required" : "");
  };
  const onChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setLastName(value);
    setErrorLastName(!value ? "field required" : "");
  };
  //#endregion

  //#region DOM
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-light app-container p-6 gap-6">
      <Fieldset className="w-full md:w-1/2 xl:w-1/3">
        <NonCompoundInput
          tabIndex={1}
          id="firstName"
          name="firstName"
          type="text"
          label="First Name"
          placeholder="John"
          value={firstName}
          errorMessage={errorFirstName}
          onChange={onChangeFirstName}
        />
      </Fieldset>
      <Fieldset>
        <Label text="Last Name" />
        <CompoundInput
          tabIndex={2}
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Doe"
          value={lastName}
          onChange={onChangeLastName}
        />
        <ErrorMessage textError={errorLastName} />
      </Fieldset>
    </main>
  );
  //#endregion
}

export default App;
