use dinosaurs;

db.dropDatabase();

db.dinosaurs.insertMany([
    {
        "name": "Apatosaurus",
        "description": "The dinosaur formerly known as Brontosaurus.",
        "diet": "Herbivorous",
        "weight": "16,000 - 22,000kg",
        "length": "21.0m",
        "found_in": "USA",
        "image": "https://i.ibb.co/23z2L5X/dinosaur-23694220.jpg"
    },
    {
        "name": "Saurolophus",
        "description": "One of the few hadrosaurs known to have lived on two continents.",
        "diet": "Herbivorous",
        "weight": "1,900kg",
        "length": "9.0m",
        "found_in": "Canada, Mongolia",
        "image": "https://i.ibb.co/23z2L5X/dinosaur-23694220.jpg"
    },
    {
        "name": "Tyrannosaurus Rex",
        "description": "The once—and always—king of the dinosaurs.",
        "diet": "Carnivorous",
        "weight": "7,000kg",
        "length": "12.0m",
        "found_in": "Canada, USA",
        "image": "https://i.ibb.co/23z2L5X/dinosaur-23694220.jpg"
    },
    {
        "name": "Stegosaurus",
        "description": "The small-brained, spike-tailed, plant-eating dinosaur.",
        "diet": "Herbivorous",
        "weight": "5,000kg",
        "length": "9.0m",
        "found_in": "USA",
        "image": "https://i.ibb.co/23z2L5X/dinosaur-23694220.jpg"

    },
    {
        "name": "Triceratops",
        "description": "The famous, three-horned, plant-eating dinosaur.",
        "diet": "Herbivorous",
        "weight": "5,500kg",
        "length": "9.0m",
        "found_in": "USA",
        "image": "https://i.ibb.co/23z2L5X/dinosaur-23694220.jpg"

    },
    {
        "name": "Pterodactylus",
        "description": "Became extinct around the same time as dinosaurs, however tehy were not dinosaurs, rather were flying reptiles",
        "diet": "Carnivorous",
        "weight": "50kg",
        "length": "Body length: 1.83m, Wingspan length: 6m",
        "found_in": "Germany",
        "image": "https://i.ibb.co/23z2L5X/dinosaur-23694220.jpg"

    },
    {
        "name": "Elasmosaurus",
        "description": "Believed to be a very close relative of Limusaurus",
        "diet": "Carnivorous",
        "weight": "100-300kg",
        "length": "6.2m",
        "found_in": "Tanzania",
        "image": "https://i.ibb.co/23z2L5X/dinosaur-23694220.jpg"
    },
    {
        "name": "Muttaburrasaurus",
        "description": "The most complete dinosaur fossil ever found in Australia.",
        "diet": "Herbivorous",
        "weight": "2,800kg",
        "length": "7.0m",
        "found_in": "Australia",
        "image": "https://i.ibb.co/23z2L5X/dinosaur-23694220.jpg"
    },
    {
        "name": "Oviraptor",
        "description": "Turns out that this \"egg thief\" got a bad rap.",
        "diet": "Omnivorous",
        "weight": "20kg",
        "length": "2.0m",
        "found_in": "Mongolia",
        "image": "https://i.ibb.co/23z2L5X/dinosaur-23694220.jpg"
    },
    {
        "name": "Hypsilophodon",
        "description": "This man-sized herbivore liked to eat and run.",
        "diet": "Herbivorous",
        "weight": "50kg",
        "length": "2.3m",
        "found_in": "Spain, United Kingdom",
        "image": "https://i.ibb.co/23z2L5X/dinosaur-23694220.jpg"

    },
])