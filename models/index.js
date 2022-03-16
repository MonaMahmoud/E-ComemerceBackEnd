// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.hasOne(Category, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL',
})

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
})

// Products belongToMany Tags (through ProductTag)
Tag.hasMany(Product, {
    throught: {
        model: ProductTag,
        unique: false,
    }
});

// Tags belongToMany Products (through ProductTag)

Product.hasMany(Tag, {
    through: {
        model: Tag,
        unique: false,
    }
})

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};