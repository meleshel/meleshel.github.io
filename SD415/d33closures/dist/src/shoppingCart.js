//This closure exercise involves a common real-world scenario.  
export function createShoppingCart() {
    let items = [];
    return {
        addItem: function (item, price) {
            items.push({ item: item, price: price });
        },
        removeItem: function (item) {
            const index = items.findIndex((i) => i.item === item);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },
        getTotal: function () {
            return items.reduce((total, item) => total + item.price, 0);
        },
    };
}
// export function createShoppingCart():  Cart {
//  //IMPLEMENT THIS FUNCTION
//     const cart: Item[] = [];
//     return {
//       addItem: (item: string, price: number) => {
//         const newItem: Item = { item, price };
//         cart.push(newItem);
//         console.log(`${item} added to the cart.`);
//       },
//       removeItem: (item: string) => {
//         const index = cart.findIndex((cartItem) => cartItem.item === item);
//         if (index !== -1) {
//           cart.splice(index, 1);
//           console.log(`${item} removed from the cart.`);
//         } else {
//           console.log(`${item} not found in the cart.`);
//         }
//       },
//       getTotal: () => {
//         const total = cart.reduce((acc, item) => acc + item.price, 0);
//         return total;
//       },
//     };
//   }
