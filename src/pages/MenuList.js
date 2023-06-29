import { useState } from "react";
import { data } from "../data";
import Header from "../Header";
import MenuContent from "../MenuContent";
// import Navbar from "../Navbar";
// import SearchItem from "../SearchItem";

const MenuList = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [textInput, setTextInput] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [textInput3, setTextInput3] = useState("");
  const [textInput4, setTextInput4] = useState("");
  // const [searchText, setSearchText] = useState("")
  const [showDropDown, setShowDropDown] = useState(false);

  // const searchResults = () => {
  //     if (searchText === "") {
  //       setMenuItems(data);
  //       return;
  //   }
  //   const searchFilter = menuItems.filter((menu) => {
  //     if (menu.name.toLowerCase().includes(searchText.toLowerCase())) {
  //       return menu;
  //     }
  //   })
  //   setMenuItems(searchFilter);
  // }

  // const handleChange = (e) => {
  //   setSearchText(e.target.value)
  // }

  return (
    <>
      {/* <SearchItem /> */}
      <div className="header-content">
        <Header
          style={{ display: "flex", "align-items": "center" }}
          menuItems={menuItems}
          setMenuItems={setMenuItems}
          textInput={textInput}
          textInput2={textInput2}
          textInput3={textInput3}
          textInput4={textInput4}
          setTextInput={setTextInput}
          setTextInput2={setTextInput2}
          setTextInput3={setTextInput3}
          setTextInput4={setTextInput4}
          showDropDown={showDropDown}
          setShowDropDown={() => setShowDropDown(!showDropDown)}
        />
      </div>
      <div className="menu-content">
        <MenuContent
          menuItems={menuItems}
          setMenuItems={setMenuItems}
          textInput={textInput}
        />
      </div>
    </>
  );
};

export default MenuList;
