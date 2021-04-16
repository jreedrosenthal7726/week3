// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Read the "Musicessories" database into memory; write information
// about products and promotions to the JavaScript Console.
// - PART 1: Write out the number of products/promotions in the database, in a human-readable
//   format, to the JavaScript console, e.g. "There are x products."
// - PART 2: Write the name, description, and price of the first 3 products to the JavaScript
//   console – the name, description, and price should each be on its own line, and the
//   price should be formatted like "$5.49 each".
// - PART 3: Get a random promotion from the list of promotions. Display the description of the
//   promotion, along with the appropriate emoji.
//   - Discount = 🤑
//   - Shipping = 🚛
//   - Contest = 🏆

// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from products API endpoint
  let response = await fetch('https://kiei451.com/api/products.json')
  let data = await response.json()

  // writes the product data to the JavaScript console
  console.log(data)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // PART 1
  // Figure out how products there are, and store that number in memory

let products = data.products

let numberProducts = products.length

  // Figure out how promotions there are, and store that number in memory
let promotions = data.promotions

let numberPromotions = promotions.length

  // Write the number of products to the JavaScript console
  console.log(numberProducts)

  // Write the number of promotions to the JavaScript console
  console.log(numberPromotions)

  // PART 2
  // Store the first product in memory
let firstProduct = products[0]

  // Write the first product to the JavaScript console, on three separate lines
console.log(firstProduct.name)
console.log(firstProduct.description)
console.log(firstProduct.price)
console.log(firstProduct.image)
  // Repeat for the 2nd and 3rd products

  // Store the second product in memory
  let secondProduct = products[1]
  // Write the product to the JavaScript console, on three separate lines
console.log(secondProduct.name)
console.log(secondProduct.description)
console.log(secondProduct.price)
console.log(secondProduct.image)
  // Store the third product in memory
  let thirdProduct = products[2]
  // Write the product to the JavaScript console, on three separate lines
console.log(thirdProduct.name)
console.log(thirdProduct.description)
console.log(thirdProduct.price)
console.log(thirdProduct.image)
  // PART 3
  // Get a random integer between 1 and 10
let random = getRandomInt(10)
  // Subtract one from that random integer because Arrays are zero-based
let arrayRandom = random - 1
  // Use the random integer to grab a promotion from the Array of promotions
  // and store it in memory
let discount = `🤑`
let shipping = `🚛`
let contest = `🏆`

  // Figure out which emoji should be displayed, store it in memory (you will need
  // an empty variable for this before you write any conditional)
console.log(promotions[arrayRandom])
let randomPromotion = promotions[arrayRandom]

  // Create a sentence that displays the emoji along with the description 
  // of the promotion
let emoji
  if (randomPromotion.type == `discount`) {
  emoji = discount
} else if (randomPromotion.type == `shipping`) {
  emoji = shipping
} else {
  emoji = contest
}

  // Write the sentence to the JavaScript console
console.log(`${randomPromotion.description} ${emoji}`)
  // 🔥 YOUR CODE ENDS HERE 🔥
})
