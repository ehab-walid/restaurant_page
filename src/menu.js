import food_img from "../images/05dbafde-b769-43ad-909e-a3ab5f6dd7ea.jpg";

const menuData = [
  {
    category: "Category 1",
    items: [
      { name: "Item One", desc: "A short description.", price: "$9.99", img: food_img },
      { name: "Item Two", desc: "Another description.", price: "$12.99", img: food_img },
    ],
  },
  {
    category: "Category 2",
    items: [
      { name: "Item Three", desc: "Yet another description.", price: "$7.49", img: food_img },
    ],
  },
];

const createMenuItem = ({ name, desc, price, img }) => {
  const menu_item = document.createElement("div");
  menu_item.classList.add("menu-item");

  const item_header = document.createElement("div");
  item_header.classList.add("item-header");
  item_header.textContent = name;

  const item_desc = document.createElement("div");
  item_desc.classList.add("item-desc");
  item_desc.textContent = desc;

  const item_price = document.createElement("div");
  item_price.classList.add("item-price");
  item_price.textContent = price;

  const item_pic = document.createElement("img");
  item_pic.classList.add("item-pic");
  item_pic.src = img;

  menu_item.appendChild(item_header);
  menu_item.appendChild(item_desc);
  menu_item.appendChild(item_price);
  menu_item.appendChild(item_pic);

  return menu_item;
};

const Menu = () => {
  const content_card = document.createElement("div");
  content_card.classList.add("content-card");

  const menu_header = document.createElement("div");
  menu_header.classList.add("menu-header");
  menu_header.textContent = "Menu";
  content_card.appendChild(menu_header);

  menuData.forEach(({ category, items }) => {
    const menu_cat = document.createElement("div");
    menu_cat.classList.add("menu-cat");
    menu_cat.textContent = category;
    content_card.appendChild(menu_cat);

    items.forEach((item) => {
      content_card.appendChild(createMenuItem(item));
    });
  });

  return content_card;
};

export default Menu;