/// 11 TEST LATTER @@@@@@@@@@@@
export const getCartProducts = async (req, res) => {
  try {
    // check latter if its correct, chatgpt says its not correct
    // we have the object products instead of "product" field inside object
    const products = await Product.find({ _id: { $in: req.user.cartItems } });

    // add quantity for each product
    const cartItems = products.map((product) => {
      const item = req.user.cartItems.find(
        (cartItem) => cartItem.id === product.id
      );
      return { ...product.toJSON(), quantity: item.quantity };
    });

    res.json(cartItems);
  } catch (error) {
    console.log("Error in getCartProducts controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// //// 22 also works..... FIND WHY LATTER @@@@@@@@
// export const getCartProducts = async (req, res) => {
//   try {
//     // Extract an array of product IDs from the user's cartItems
//     const productIds = req.user.cartItems.map((item) => item.product);

//     // Find all products whose _id is in the productIds array
//     const products = await Product.find({ _id: { $in: productIds } });

//     // Map over the fetched products to add the corresponding quantity from cartItems
//     const cartItems = products.map((product) => {
//       const item = req.user.cartItems.find(
//         (cartItem) => cartItem.product.toString() === product._id.toString()
//       );
//       return { ...product.toJSON(), quantity: item.quantity };
//     });

//     res.json(cartItems);
//   } catch (error) {
//     console.log("Error in getCartProducts controller", error.message);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

export const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = req.user; // this is the user that is logged in

    const existingItem = user.cartItems.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      user.cartItems.push(productId);
    }

    await user.save();
    res.json(user.cartItems);
  } catch (error) {
    console.log("Error in addToCart controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const removeAllFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = req.user;
    if (!productId) {
      user.cartItems = [];
    } else {
      user.cartItems = user.cartItems.filter((item) => item.id !== productId);
    }
    await user.save();
    res.json(user.cartItems);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateQuantity = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const { quantity } = req.body;
    const user = req.user;
    const existingItem = user.cartItems.find((item) => item.id === productId);

    if (existingItem) {
      // if quantity is 0, remove the item
      if (quantity === 0) {
        user.cartItems = user.cartItems.filter((item) => item.id !== productId);
        await user.save();
        return res.json(user.cartItems);
      }

      // if quantity is greater than 0, update the quantity
      existingItem.quantity = quantity;
      await user.save();
      res.json(user.cartItems);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log("Error in updateQuantity controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
