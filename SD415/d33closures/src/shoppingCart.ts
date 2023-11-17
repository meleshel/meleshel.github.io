//This closure exercise involves a common real-world scenario.  

// This exercise uses closures to create a shopping cart. It encapsulates the cart array, allowing you to
//  add items, remove items, and calculate the total cost. The items and their prices are private and can only be 
//  accessed or modified through the provided methods, demonstrating the concept of closures in a different context.
// Exercise: Closure and a Shopping Cart

// Create a function that simulates a shopping cart. The cart should allow you to add items,
// remove items, and calculate the total cost. Items and their prices should be private
// and not directly accessible.

type Item = {
    item: string;
    price: number;
}

type Cart = {
    addItem: (item: string, price: number) => void;
    removeItem: (item: string) => void;
    getTotal: () => number;
}

export function createShoppingCart():  Cart {
 //IMPLEMENT THIS FUNCTION

    const cart: Item[] = [];
  
    return {
      addItem: (item: string, price: number) => {
        const newItem: Item = { item, price };
        cart.push(newItem);
        console.log(`${item} added to the cart.`);
      },
      removeItem: (item: string) => {
        const index = cart.findIndex((cartItem) => cartItem.item === item);
        if (index !== -1) {
          cart.splice(index, 1);
          console.log(`${item} removed from the cart.`);
        } else {
          console.log(`${item} not found in the cart.`);
        }
      },
      getTotal: () => {
        const total = cart.reduce((acc, item) => acc + item.price, 0);
        return total;
      },
    };
  }
