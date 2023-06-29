const MenuItem = ({
  id,
  foodImg,
  title,
  description,
  time,
  menuItems,
  setMenuItems,
}) => {
  const handleDelete = () => {
    const filteredItems = menuItems.filter((item) => item.id !== id);
    setMenuItems(filteredItems);
  };

  return (
    <>
      <div>
        <article className="menu">
          <h2>{title}</h2>
          <img src={foodImg} alt={title} />
          <h4>{description}</h4>
          <h4>Prep Time: {time}</h4>
          <button type="button" onClick={() => handleDelete()}>
            Delete Item
          </button>
        </article>
      </div>
    </>
  );
};

export default MenuItem;
