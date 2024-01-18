console.log(
  'Create class ProductManager (new ProductManager()) \nAnd use methods addProduct(), getProducts() and getProductById() \ngetProducts method arguments: title, description, price, thumbnail, code, stock'
)

class ProductManager {
  constructor () {
    ;(this.products = []), (this.nextId = 0)
  }

  addProduct (title, description, price, thumbnail, code, stock) {
    const args = [title, description, price, thumbnail, code, stock]
    for (let i = 0; i < args.length - 1; i++) {
      if (args[i] === null || args[i] === undefined) {
        return console.log(
          'One or more arguments are not defined, \nPlease add missing arguments to the call \ntitle, description, price, thumbnail, code, stock'
        )
      }
    }
    if (typeof price !== 'number')
      return console.log('price argument must be a number')
    if (typeof stock !== 'number')
      return console.log('stock argument must be a number')
    if (this.products.find(item => item.code === code)) {
      return console.log('Item already exists, enter a different code')
    }
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: this.nextId
    }
    this.nextId++
    this.products.push(product)
    return product
  }

  getProducts () {
    return console.log(this.products)
  }

  getProductById (id) {
    const found = this.products.find(item => item.id === id)
    return found ? console.log(found) : 'Not found'
  }
}
