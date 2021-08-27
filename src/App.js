import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Phone from "./Phone";

function App() {
  const handleForm = (e) => {
    e.preventDefault();
  };

  const [search, setSearch] = useState("");
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  useEffect(() => {
    console.log("effect has been running");
  }, []);

  return (
    <div className="App">
      <h1>Phone Catalogue</h1>

      <form onSubmit={handleForm}>
        <TextField
          id="standard-basic"
          label="Phone Search"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <Button variant="contained" color="primary" disabled={!search}>
          Search
        </Button>
      </form>
      <Phone key={Phone.id} />
    </div>
  );
}

export default App;
