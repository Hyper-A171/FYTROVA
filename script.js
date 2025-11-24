const ingredients = [
    {
        name: "Cocoa Powder",
        image: "assets/cocoa.jpg",
        color: "#8B4513",
        benefits: [
            "Improves blood flow → better muscle recovery",
            "Rich in antioxidants → reduces inflammation after workouts",
            "Boosts mood & energy naturally"
        ]
    },
    {
        name: "Almonds",
        image: "assets/almond.jpg",
        color: "#DEB887",
        benefits: [
            "High-quality plant protein for muscle repair",
            "Healthy fats → sustained energy",
            "Rich in Vitamin E → improves skin & immunity"
        ]
    },
    {
        name: "Cashew (Kaju)",
        image: "assets/sattu.jpg",
        color: "#F4A460",
        benefits: [
            "Good plant protein for lean muscle",
            "Healthy minerals like magnesium → boosts strength",
            "Supports heart health & energy metabolism"
        ]
    },
    {
        name: "Sattu",
        image: "assets/cashew.jpg",
        color: "#DAA520",
        benefits: [
            "High natural protein → great for muscle growth",
            "Keeps stomach cool & improves digestion",
            "Low-glycemic → long-lasting energy for workouts"
        ]
    },
    {
        name: "Oats",
        image: "assets/b.jpeg",
        color: "#F0E68C",
        benefits: [
            "Complex carbs → slow, steady energy release",
            "High fiber → good digestion and fat loss",
            "Contains beta-glucan → improves heart health"
        ]
    },
    {
        name: "Peanuts",
        image: "assets/oats.jpg", // Placeholder
        color: "#CD853F",
        benefits: [
            "High-protein + good fats → muscle gain + energy",
            "Rich in B-vitamins → improves metabolism",
            "Helps in appetite control, ideal for athletes"
        ]
    },
    {
        name: "Soya",
        image: "assets/a (1).jpeg", // Placeholder
        color: "#D2B48C",
        benefits: [
            "One of the highest plant-protein sources",
            "Contains all essential amino acids → muscle building",
            "Supports bone health & overall strength"
        ]
    }
];

const sliderTrack = document.getElementById('slider-track');
const flavorTitle = document.getElementById('flavor-title');
const benefitsList = document.getElementById('benefits-list');
const productImg = document.getElementById('product-img');
const root = document.documentElement;

// Initialize Slider
function initSlider() {
    ingredients.forEach((ing, index) => {
        const slideItem = document.createElement('div');
        slideItem.classList.add('slide-item');
        if (index === 0) slideItem.classList.add('active');

        slideItem.innerHTML = `
            <img src="${ing.image}" alt="${ing.name}">
            <h4>${ing.name.split(' ')[0]}</h4>
        `;

        slideItem.addEventListener('click', () => updateContent(index));
        sliderTrack.appendChild(slideItem);
    });

    // Initial Load
    updateContent(0);
}

function updateContent(index) {
    const data = ingredients[index];

    // Update Active State in Slider
    document.querySelectorAll('.slide-item').forEach((item, i) => {
        if (i === index) item.classList.add('active');
        else item.classList.remove('active');
    });

    // Update Text Content with Animation
    flavorTitle.style.opacity = 0;
    benefitsList.style.opacity = 0;
    productImg.style.opacity = 0;
    productImg.style.transform = "scale(0.9) rotate(-5deg)";

    setTimeout(() => {
        flavorTitle.innerText = data.name;

        benefitsList.innerHTML = data.benefits.map(benefit => `<li>${benefit}</li>`).join('');

        productImg.src = data.image;
        root.style.setProperty('--accent-color', data.color);

        // Fade In
        flavorTitle.style.opacity = 1;
        benefitsList.style.opacity = 1;
        productImg.style.opacity = 1;
        productImg.style.transform = "scale(1) rotate(0deg)";
    }, 300);
}

initSlider();
