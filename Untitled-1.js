// /**
//  * My assumptions: the script is going to be run from an extension.
//  * 
//  * The main challenge when building scripts for scraping websites is that the structure of given page might change over time.
//  * Today, we can employ LLMs to identify if something have changed and use it to overcome the change with minimal time effort.
//  * 
//  * For example, I have used ChatGPT 3.5 to build the initial script and applied my own skills and knowledge to improve it.
//  * The comments below are from me.
//  */

// function extractProductDetails() {
//   //Amazon uses [data-asin] for each recond on the search page 
//   const productElements = document.querySelectorAll('[data-asin]');

//   let cheapestProduct = null;
//   let highestRatingProduct = null;
//   let soonestArrivalProduct = null;

//   let cheapestPrice = Number.MAX_VALUE;
//   let highestRating = 0;
//   let soonestArrival = Number.MAX_VALUE;

//   productElements.forEach((productElement) => {
//     // Extract relevant information from the product element
//     // ChatGPT gave me `span[title]` which is not how it is right now. There is no `title` attribute anymore.
//     // So I had to identify elements that higher in the tree.
//     // unfortunately
//     const title = productElement.querySelector('span[title]')?.textContent;
//     const price = productElement.querySelector('.a-price .a-offscreen')?.textContent;
//     const rating = productElement.querySelector('.a-popover-trigger .a-icon-star .a-icon-alt')?.textContent;
//     const deliveryInfo = productElement.querySelector('.a-text-right .a-text-bold')?.textContent;

//     if (price) {
//       const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));

//       if (numericPrice < cheapestPrice) {
//         cheapestPrice = numericPrice;
//         cheapestProduct = { title, price };
//       }
//     }

//     if (rating) {
//       const numericRating = parseFloat(rating.split(' ')[0]);

//       if (numericRating > highestRating) {
//         highestRating = numericRating;
//         highestRatingProduct = { title, rating };
//       }
//     }

//     if (deliveryInfo) {
//       const numericDeliveryDays = parseInt(deliveryInfo.split(' ')[0]);

//       if (numericDeliveryDays < soonestArrival) {
//         soonestArrival = numericDeliveryDays;
//         soonestArrivalProduct = { title, deliveryInfo };
//       }
//     }
//   });

//   return { cheapestProduct, highestRatingProduct, soonestArrivalProduct };
// }

// // Call the function to get the product details
// const productDetails = extractProductDetails();

// console.log('Cheapest Product:', productDetails.cheapestProduct);
// console.log('Highest Rated Product:', productDetails.highestRatingProduct);
// console.log('Soonest Arrival Product:', productDetails.soonestArrivalProduct);