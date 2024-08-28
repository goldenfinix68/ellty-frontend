import { useState } from "react";
import "./App.css";
import { CustomButton } from "./components/custom.button/CustomButton";
import { CustomCheckbox } from "./components/custom.checkbox/CustomCheckbox";

function App() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const [pageStatus, setPageStatus] = useState<Record<string, boolean>>(
    pages.reduce((pv, cur) => {
      return { ...pv, [cur]: false };
    }, {})
  );
  const [isAllChecked, setAllChecked] = useState<boolean>(false);

  const handleCheckbox = (name: string, checked: boolean) => {
    if (name === "All pages") {
      const newPageStatus = pages.reduce((pv, cur) => {
        return { ...pv, [cur]: checked };
      }, {});

      setAllChecked(checked);
      setPageStatus(newPageStatus);
    } else {
      const newPageStatus = { ...pageStatus, [name]: checked };
      const checkedPages = pages.reduce(
        (pv, cur) => (newPageStatus[cur] ? pv + 1 : pv),
        0
      );

      const allChecked = checkedPages === pages.length ? true : false;

      setAllChecked(allChecked);
      setPageStatus(newPageStatus);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <CustomCheckbox
          title="All pages"
          checked={isAllChecked}
          setChecked={handleCheckbox}
        />
        <div className="line" />
        {pages.map((val) => (
          <CustomCheckbox
            key={val}
            title={val}
            checked={pageStatus[val]}
            setChecked={handleCheckbox}
          />
        ))}
        <div className="line" />
        <CustomButton
          title="Done"
          onClick={() => handleCheckbox("All pages", false)}
        />
      </div>
    </div>
  );
}

export default App;
