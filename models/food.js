class Food {
    constructor(id, categoryIds, title, affordability, complexity, imageUrl, ingredients) {
        this.id = id;
        this.title = title;
        this.categoryIds = categoryIds;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
    }
}


export default Food;