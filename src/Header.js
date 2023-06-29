import React, { useState } from "react";

const Header = ({
  menuItems,
  setMenuItems,
  textInput,
  setTextInput,
  textInput2,
  setTextInput2,
  textInput3,
  setTextInput3,
  textInput4,
  setTextInput4,
  showDropDown,
  setShowDropDown,
}) => {
  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleChange_2 = (e) => {
    setTextInput2(e.target.value);
  };

  const handleChange_3 = (e) => {
    setTextInput3(e.target.value);
  };

  const handleChange_4 = (e) => {
    setTextInput4(e.target.value);
  };

  const addMenuItems = () => {
    let sortMenuItem = menuItems.sort((a, b) =>
      a.id > b.id ? 1 : a.id < b.id ? -1 : 0
    );

    const newMenuItem = {
      title: textInput,
      foodImg: textInput2,
      description: textInput3,
      time: textInput4,
      id: sortMenuItem[sortMenuItem.length - 1].id + 1,
    };

    const currentMenuItem = [...menuItems];
    currentMenuItem.push(newMenuItem);
    setMenuItems(currentMenuItem);
  };

  return (
    <>
      <div className="drop-down-wrapper">
        <button
          type="btn"
          className="button-1"
          onClick={setShowDropDown}
        >
          New Menu Item
        </button>
        {showDropDown && (
          <>
            <span>
              <h6 className="heading">Title</h6>
              <input
                className="text-box"
                type="text"
                name="title"
                onClick={handleChange}
                value={menuItems.title}
              />
            </span>
            <span>
              <h6 className="heading">Image URL</h6>
              <input
                className="text-box"
                type="url"
                name="foodImg"
                onClick={handleChange_2}
                value={menuItems.foodImg}
              />
            </span>
            <span>
              <h6 className="heading">Description</h6>
              <textarea
                className="text-box"
                type="text"
                name="description"
                rows="10"
                col="35"
                onClick={handleChange_3}
                value={menuItems.description}
              />
            </span>
            <span>
              <h6 className="heading">Prep Time</h6>
              <input
                className="text-box"
                type="text"
                name="time"
                onClick={handleChange_4}
                value={menuItems.time}
              />
            </span>
            <button type="btn" className="button" onClick={addMenuItems}>
              Add To Menu
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
