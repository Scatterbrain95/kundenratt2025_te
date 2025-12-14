const menuData = {
    drinks: {
        "Cold-drink": [
            { name: "Doogh", price: "30 kr", img: "img/doogh.jpg" },
            { name: "Sharbat-e Tokhm-e Sharbati", price: "40 kr", img: "img/sharbat.jpg" },
            { name: "Iced Tea", price: "35 kr", img: "img/iced-tea.jpg" }
        ],
        "hot-drink": [
            { name: "Persian Tea", price: "30 kr", img: "img/persian-tea.jpg" },
            { name: "Turkish Coffee", price: "40 kr", img: "img/turkish-coffee.jpg" },
            { name: "Saffron Latte", price: "45 kr", img: "img/saffron-latte.jpg" }
        ],
        herbal: [
            { name: "Chamomile Tea", price: "35 kr", img: "img/chamomile.jpg" },
            { name: "Mint Tea", price: "35 kr", img: "img/mint-tea.jpg" },
            { name: "Rose Tea", price: "40 kr", img: "img/rose-tea.jpg" }
        ]
    },

    food: {
        sandwich: [
            { name: "Kebab Sandwich", price: "70 kr", img: "img/kebab.jpg" },
            { name: "Bandari Sandwich", price: "75 kr", img: "img/bandari.jpg" },
            { name: "Falafel", price: "60 kr", img: "img/falafel.jpg" }
        ],
        snacks: [
            { name: "Mirza Ghasemi", price: "65 kr", img: "img/mirza.jpg" },
            { name: "Kashk Bademjan", price: "65 kr", img: "img/kashk.jpg" },
            { name: "Olive & Bread", price: "45 kr", img: "img/olive.jpg" }
        ]
    },

    desserts: {
        cake: [
            { name: "Saffron Cake", price: "50 kr", img: "img/saffron-cake.jpg" },
            { name: "carrot Cake", price: "50 kr", img: "img/carrot-cake.jpg" },
            { name: "Walnut Cake", price: "55 kr", img: "img/walnut-cake.jpg" }
        ],
        "ice-cream": [
            { name: "Bastani Sonnati", price: "45 kr", img: "img/bastani.jpg" },
            { name: "Rose Ice Cream", price: "40 kr", img: "img/rose-ice.jpg" },
            { name: "Pistachio Ice Cream", price: "50 kr", img: "img/pistachio.jpg" }
        ],
        "persian-dessert": [
            { name: "Zoolbia Bamieh", price: "40 kr", img: "img/zoolbia.jpg" },
            { name: "Sholeh Zard", price: "45 kr", img: "img/sholeh.jpg" },
            { name: "Faloodeh", price: "50 kr", img: "img/faloodeh.jpg" }
        ]
    }
};



document.addEventListener("DOMContentLoaded", () => {
    const mainButtons = document.querySelectorAll(".main-menu-buttons");
    const sideGroups = document.querySelectorAll(".side-group");

    mainButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;

            sideGroups.forEach(group => {
                group.style.display = "none";
            });

            const activeGroup = document.querySelector(
                `.side-group[data-category="${category}"]`
            );

            if (activeGroup) {
                activeGroup.style.display = "flex";
            }
        });
    });
});

const menuContainer = document.querySelector(".menu-images");
const sideButtons = document.querySelectorAll(".side-btn, .sub-btn");

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.querySelector(".menu-images");
    const sideButtons = document.querySelectorAll(".side-btn, .sub-btn");

    sideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const sub = button.dataset.sub;

            let items = null;
            for (const category in menuData) {
                if (menuData[category][sub]) {
                    items = menuData[category][sub];
                    break;
                }
            }

            if (!items) return;

            menuContainer.innerHTML = "";

            items.forEach(item => {
                const card = document.createElement("div");
                card.className = "menu-card";
                card.style.display = "flex";

                card.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <h4>${item.name}</h4>
                    <p>${item.price}</p>
                `;

                menuContainer.appendChild(card);
            });
        });
    });
});


