import React from "./ProtfolioList.scss";

const ProtfolioList = ({ id, title, active, setSelected }) => {
  return (
    <li className={active ? "protfolioList active" : "protfolioList"} onClick={() => setSelected(id)}>
      {title}
    </li>
  );
};

export default ProtfolioList;
