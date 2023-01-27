import React, { useContext, useState } from "react";
import { SignImage } from "../../Utils/SignImage";
import { Context } from "../../context/userProvider";
import imagesData from "../../Utils/ImagesData";
import { useEffect } from "react";
import "./translate.css";
import InputContainer from "../../Utils/input-container/InputContainer";
import Card from "../../Utils/card/Card";
const Translate = () => {
  const { user, setUser } = useContext(Context);
  const [searchInput, setSearchInput] = useState("");
  const [filterData, setFilterData] = useState([]);
  const copiedArr = [];

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parseUser = JSON.parse(user);
    if (parseUser) {
      setUser(parseUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const submitValue = () => {
    searchInput
      .toLowerCase()
      .split("")
      .forEach((input) => {
        imagesData.forEach((item) => {
          if (input === item.key) {
            copiedArr.push(item);
          }
        });
      });
    setUser({ ...user, translations: [...user.translations, searchInput] });
    setFilterData([...copiedArr]);
  };
  return (
    <>
      <div className="upper-body">
        <InputContainer
          handleClick={submitValue}
          style={{ width: "50%", margin: "auto", padding: "5px" }}
        >
          <input
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
          />
        </InputContainer>
      </div>
      {filterData.length > 0 && (
        <Card style={{ width: "60%", height: "auto" }}>
          {filterData.map((data, index) => {
            return <SignImage key={index} src={data.src} />;
          })}
        </Card>
      )}
    </>
  );
};
export default Translate;
