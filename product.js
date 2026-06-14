const products = {
  "elara-silk-blouse": {
    name: "Elara Silk Blouse",
    material: "Silk",
    price: "$890.00",
    color: "Ivory Pearl (101)",
    swatch: "#f5f0e6",
    image: "assets/product-blouse.png",
    alt: "Ivory silk blouse",
    description:
      "Cut from fluid silk with a soft matte finish, the Elara blouse is shaped for a relaxed shoulder and a precise, luminous drape.",
    details: "100% silk. Concealed front placket, fine cuffs, relaxed fit, mother-of-pearl buttons, made in limited runs."
  },
  "cendre-shoulder-bag": {
    name: "Cendre Shoulder Bag",
    material: "Calf leather",
    price: "$2,450.00",
    color: "Cendre Taupe (221)",
    swatch: "#a1907d",
    image: "assets/product-bag.png",
    alt: "Taupe leather shoulder bag",
    description:
      "A structured shoulder bag in smooth calf leather, finished with restrained hardware and hand-painted edges.",
    details: "Calf leather exterior, suede lining, interior slip pocket, adjustable shoulder strap, magnetic closure."
  },
  "serein-summer-jacket": {
    name: "Serein Summer Jacket",
    material: "Linen and silk",
    price: "$1,780.00",
    color: "Oatmeal (124)",
    swatch: "#d9cdb9",
    image: "assets/product-scarf.png",
    alt: "Oatmeal linen summer jacket",
    description:
      "An unstructured summer jacket with a calm shoulder, open weave, and breathable linen-silk hand.",
    details: "Linen-silk blend. Unlined construction, patch pockets, horn buttons, relaxed fit, finished by hand."
  },
  "onde-silk-scarf": {
    name: "Onde Silk Scarf",
    material: "Silk twill",
    price: "$520.00",
    color: "Ivory / Ink (009)",
    swatch: "#efe9dd",
    image: "assets/product-jacket.png",
    alt: "Folded silk scarf with abstract moire waves",
    description:
      "A hand-rolled silk scarf printed with a quiet wave motif inspired by the optical movement of moiré cloth.",
    details: "100% silk twill. Hand-rolled edges, archive wave artwork, square format, made in Italy."
  }
};

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function setImage(selector, product) {
  const image = document.querySelector(selector);
  if (!image) return;
  image.src = product.image;
  image.alt = product.alt;
}

function renderProduct(product) {
  document.title = `Moiré | ${product.name}`;
  setText("[data-product-name]", product.name);
  setText("[data-product-material]", product.material);
  setText("[data-product-price]", product.price);
  setText("[data-product-color]", product.color);
  setText("[data-product-description]", product.description);
  setText("[data-product-details]", product.details);
  setImage("[data-product-image]", product);
  setImage("[data-product-detail-image]", product);
  setImage("[data-product-crop-image]", product);

  const swatch = document.querySelector("[data-product-swatch]");
  if (swatch) {
    swatch.style.background = product.swatch;
    swatch.setAttribute("aria-label", `Selected color ${product.color}`);
  }
}

const params = new URLSearchParams(window.location.search);
const productSlug = params.get("product") || "elara-silk-blouse";
const product = products[productSlug] || products["elara-silk-blouse"];

renderProduct(product);
