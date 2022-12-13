module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
        what_to_do: {
            type: DataTypes.STRING
        }
    
    })

    return Product

}