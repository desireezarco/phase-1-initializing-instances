class Breakfast {
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
        console.log(this)
    }
}

new Breakfast('eggs', 'juice')

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad
        this.soup = soup
        this.drink = drink
        console.log(this)
    }
}

new Lunch('side salad', 'broccoli cheddar soup', 'iced tea')

class Dinner{
    #dessert
    constructor(salad, soup, entree, dessert){
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this.#dessert = dessert
        console.log(this)
    }
}

new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake')













// class Cat{
//     constructor(name, breed, age){
//         this.name = name
//         this.breed = breed
//         this.age = age
//         console.log(this)
//     }
// }

// new Cat('rose', 'domestic longhair', 9)