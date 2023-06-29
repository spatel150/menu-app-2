// import { useState } from 'react';
// // import MenuContent from './MenuContent'
// import { data }  from "./data";

// const SearchItem = ({title}) => {

//   const [menuItems, setMenuItems] = useState(data);
//   const [searchText, setSearchText] = useState("");

  
//   // const searchFilter = menuItems.filter((menu) => {
//     //   return menu.title.toLowerCase().includes(searchText)
//     //   })
//     //   setMenuItems(searchFilter);
    
//   const searchFilter = (menuItems, searchText) => {
//     if (!searchText) {
//       return menuItems;
//     }
//     return menuItems.filter((menu) => {
//       const menuTitle = menu.title.toLowerCase();
//       return menuTitle.includes(searchText);
//     });
//   };

//   const searchFiltered = searchFilter(menuItems, searchText);

//   const handleChange = (e) => {
//     console.log("e", e);
//     setSearchText(e.target.value);
//   };

//   return (
//     <>
//     <div>
//       <input type="text" onChange={handleChange} value={searchText} />
//     </div>
//     <section className="menulist">
//           {searchFiltered.map((item) => {
//           return (
//             <div className='menu-content'>
//               <article className="menu">
//                 <h2>{item.title}</h2>
//                 <img src={item.foodImg} alt={item.title} />
//                 <h4>{item.description}</h4>
//                 <h4>Prep Time: {item.time}</h4>
//               </article>
//             </div>
//           );

//           })}
//     </section>
//     </>
//   )
// }
// export default SearchItem;