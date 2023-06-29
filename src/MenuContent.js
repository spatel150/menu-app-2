import MenuItem from "./MenuItem";

const MenuContent = ({
  menuItems,
  setMenuItems,
  textInput,
  textInput2,
  textInput3,
  textInput4,
}) => {
  return (
    <>
      <section className="menulist">
        {menuItems.map((item) => {
          return (
            <MenuItem
              {...item}
              key={item.id}
              menuItems={menuItems}
              setMenuItems={setMenuItems}
              textInput={textInput}
              textInput2={textInput2}
              textInput3={textInput3}
              textInput4={textInput4}
            />
          );
        })}
      </section>
    </>
  );
};
export default MenuContent;
