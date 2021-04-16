import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Lim Hiep Tien",
      email: "hieptien@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Nhan",
      email: "nhan@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Canyon Spectral CF 8.0",
      category: "Bikes",
      images: "/images/p1.jpg",
      price: "4000",
      countInStock: 0,
      brand: "Canyon",
      rating: 4.5,
      numReviews: 10,
      description: "High end enduro bike",
    },
    {
      name: "NS Snabb",
      category: "Bikes",
      images: "/images/p2.jpg",
      price: "3500",
      countInStock: 10,
      brand: "NS Bikes",
      rating: 4.5,
      numReviews: 12,
      description: "High end enduro bike",
    },
    {
      name: "Yeti",
      category: "Bikes",
      images: "/images/p3.jpg",
      price: "4000",
      countInStock: 5,
      brand: "Yeti",
      rating: 5.0,
      numReviews: 10,
      description: "High end enduro bike",
    },
    {
      name: "Marin ",
      category: "Bikes",
      images: "/images/p4.jpg",
      price: "3000",
      countInStock: 0,
      brand: "Marin",
      rating: 4.0,
      numReviews: 10,
      description: "High end enduro bike",
    },
    {
      name: "Giant",
      category: "Bikes",
      images: "/images/p5.jpg",
      price: "1000",
      countInStock: 10,
      brand: "Giant",
      rating: 4.0,
      numReviews: 10,
      description: "High end enduro bike",
    },
    {
      name: "Trek",
      category: "Bikes",
      images: "/images/p6.jpg",
      price: "6000",
      countInStock: 10,
      brand: "Trek",
      rating: 4.0,
      numReviews: 10,
      description: "High end enduro bike",
    },
  ],
};

export default data;
