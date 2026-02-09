const products = [
    {sku: "SKU-001", name: "16 oz Protein Shake", category: "Protein Shake", price: 5.99, inventory: 20},
    {sku: "SKU-002", name: "Pepperoni Flatbread", category: "Flatbread", price: 9.99, inventory: 50},
    {sku: "SKU-003", name: "20 oz Green Juice", category: "Pressed Juices", price: 7.99, inventory: 30},
    {sku: "SKU-004", name: "Kids Acai Bowl", category: "Acai Bowls", price: 5.99, inventory: 10},
    {sku: "SKU-005", name: "Large Acai Bowl", category: "Acai Bowls", price: 9.99, inventory: 25},
];

for (const product of products) {
    let discount = 0

    switch (product.category) {
        case "Acai Bowls":
            discount = 0.15;
            break;
        case "Flatbread":
            discount = 0.10;
            break;
        case "Pressed Juices":
        case "Protein Shake":
            discount = 0.20;
            break;
        default:
            break;
    }
    product.promoPrice = product.price * (1-discount);
}

console.log(products)


