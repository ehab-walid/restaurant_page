import restaurant_img from "../images/kamilla-isalieva-iPGL5WbPkYI-unsplash.jpg";

const Homepage = () => {
//   const content = document.getElementById("content");
  const content_card = document.createElement("div");
  content_card.classList.add("content-card");
  const res_title = document.createElement("div");
  res_title.classList.add("res-title");
  res_title.textContent = "Restaurant Name";
  const res_img = document.createElement("img");
  res_img.id = "res-img";
  res_img.src = restaurant_img;
  const res_desc = document.createElement("div");
  res_desc.classList.add("res-desc");
  res_desc.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi minus ex pariatur unde possimus praesentium iste illo animi eveniet nostrum impedit ducimus voluptatibus veritatis quas deleniti ipsa, fugiat suscipit obcaecati? Placeat exercitationem fugit a dignissimos quidem iusto dicta labore illo eos voluptates, nam necessitatibus ducimus, at nesciunt, quis asperiores?";

//   content.appendChild(content_card);
  content_card.appendChild(res_title);
  content_card.appendChild(res_img);
  content_card.appendChild(res_desc);

  return content_card;

};


export default Homepage;