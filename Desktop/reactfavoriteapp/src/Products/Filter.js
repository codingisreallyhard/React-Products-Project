// const getProductListingData = async () => {
//   try {
//     const response = await fetch(
//       "https://reactcartapp-b4204-default-rtdb.firebaseio.com/"
//     );
//     const data = await response.json();
//     if (data) {
//       setLoading(false);
//       setProducts(data.products);

//       //send all the products
//       setAllProducts(data.products);

//       setFilters(data.filters);
//     } else {
//       setProducts("PRODUCT LISTING DATA NOT FOUND");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const searchFilterFunction = (e) => {
//   const inputValue = e;
//   console.log(inputValue);
//   if (inputValue !== "") {
//     console.log(inputValue);
//     const newArray = products.filter((item) => {
//       return item.heading.toLowerCase().match(inputValue);
//     });
//     console.log(inputValue);
//     setProducts(newArray);
//   } else {
//     // set allProducts here
//     setProducts(allProducts);
//   }
// };
