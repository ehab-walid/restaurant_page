import res_img from "../images/kamilla-isalieva-iPGL5WbPkYI-unsplash.jpg"

const About = () => {
  const content_card = document.createElement("div");
  content_card.classList.add("content-card");

  // --- Header ---
  const about_header = document.createElement("div");
  about_header.classList.add("about-header");
  about_header.textContent = "About Us";

  // --- Hero Image ---
  const about_img = document.createElement("img");
  about_img.classList.add("about-img");
  about_img.src = res_img; // add your image import at the top
  about_img.alt = "Our restaurant";

  // --- Story Section ---
  const story_section = document.createElement("div");
  story_section.classList.add("about-section");

  const story_title = document.createElement("div");
  story_title.classList.add("about-section-title");
  story_title.textContent = "Our Story";

  const story_desc = document.createElement("div");
  story_desc.classList.add("about-section-desc");
  story_desc.textContent =
    "Founded in 2010, our restaurant was born out of a passion for bringing people together through great food. What started as a small family kitchen has grown into a beloved local dining destination.";

  story_section.appendChild(story_title);
  story_section.appendChild(story_desc);

  // --- Mission Section ---
  const mission_section = document.createElement("div");
  mission_section.classList.add("about-section");

  const mission_title = document.createElement("div");
  mission_title.classList.add("about-section-title");
  mission_title.textContent = "Our Mission";

  const mission_desc = document.createElement("div");
  mission_desc.classList.add("about-section-desc");
  mission_desc.textContent =
    "We are committed to serving fresh, locally sourced ingredients in every dish. Our chefs craft each meal with care, ensuring every visit is a memorable experience.";

  mission_section.appendChild(mission_title);
  mission_section.appendChild(mission_desc);

  // --- Team Section ---
  const teamData = [
    { name: "Jane Doe", role: "Head Chef" },
    { name: "John Smith", role: "Sous Chef" },
    { name: "Emily Clark", role: "Restaurant Manager" },
  ];

  const team_section = document.createElement("div");
  team_section.classList.add("about-section");

  const team_title = document.createElement("div");
  team_title.classList.add("about-section-title");
  team_title.textContent = "Meet the Team";

  const team_grid = document.createElement("div");
  team_grid.classList.add("team-grid");

  teamData.forEach(({ name, role }) => {
    const member_card = document.createElement("div");
    member_card.classList.add("member-card");

    const member_name = document.createElement("div");
    member_name.classList.add("member-name");
    member_name.textContent = name;

    const member_role = document.createElement("div");
    member_role.classList.add("member-role");
    member_role.textContent = role;

    member_card.appendChild(member_name);
    member_card.appendChild(member_role);
    team_grid.appendChild(member_card);
  });

  team_section.appendChild(team_title);
  team_section.appendChild(team_grid);

  // --- Contact Info ---
  const contact_section = document.createElement("div");
  contact_section.classList.add("about-section");

  const contact_title = document.createElement("div");
  contact_title.classList.add("about-section-title");
  contact_title.textContent = "Find Us";

  const contactDetails = [
    { label: "Address", value: "123 Main Street, Your City, ST 00000" },
    { label: "Hours", value: "Mon–Sat: 11am – 10pm | Sun: 12pm – 8pm" },
    { label: "Phone", value: "(555) 123-4567" },
    { label: "Email", value: "hello@restaurantname.com" },
  ];

  const contact_list = document.createElement("div");
  contact_list.classList.add("contact-list");

  contactDetails.forEach(({ label, value }) => {
    const contact_item = document.createElement("div");
    contact_item.classList.add("contact-item");

    const contact_label = document.createElement("span");
    contact_label.classList.add("contact-label");
    contact_label.textContent = `${label}: `;

    const contact_value = document.createElement("span");
    contact_value.classList.add("contact-value");
    contact_value.textContent = value;

    contact_item.appendChild(contact_label);
    contact_item.appendChild(contact_value);
    contact_list.appendChild(contact_item);
  });

  contact_section.appendChild(contact_title);
  contact_section.appendChild(contact_list);

  // --- Assemble ---
  content_card.appendChild(about_header);
  content_card.appendChild(about_img);
  content_card.appendChild(story_section);
  content_card.appendChild(mission_section);
  content_card.appendChild(team_section);
  content_card.appendChild(contact_section);

  return content_card;
};

export default About;