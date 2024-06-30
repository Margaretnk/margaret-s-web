// JavaScript code for managing products and cart functionality

// Array containing product information. 
// Each item in the menu has a name, category, price, image, and description.
const products = [
  {
      id: 1,
      name: "Adire",
      description: "A beautiful cotton fabric with vibrant Adire patterns. (6yrds)",
      category: "Fabrics",
      originalPrice: 9500,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/adire2-8500.jpg",
      rating: 4,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 2,
      name: "Adire",
      description: "A beautiful fabric with vibrant Adire patterns. (3yrds)",
      category: "Fabrics",
      originalPrice: 6000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/adire3-6l.jpg",
      rating: 5,
      reviews: [
        // { user: "User1", comment: "Great fabric!", stars: 5 },
        // { user: "User2", comment: "Nice design.", stars: 4 },
        // { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 3,
      name: "Adire",
      description: "Quality Adire (6yrds)",
      category: "Fabrics",
      originalPrice: 24000,
      discountPercentage: 15,
      imageUrl: "./fabrics-collection/adire4-4k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 4,
      name: "Adire",
      description: "A beautiful cotton fabric with vibrant Adire patterns. (6yrds)",
      category: "Fabrics",
      originalPrice: 12500,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/adire4-12k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 5,
      name: "Adire",
      description: "A beautiful Adire material. (6yrds)",
      category: "Fabrics",
      originalPrice: 17000,
      discountPercentage: 0,
      imageUrl: "./fabrics-collection/adire5-17k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 6,
      name: "Adire",
      description: "Adire patterns. (6yrds)",
      category: "Fabrics",
      originalPrice: 98000,
      discountPercentage: 5,
      imageUrl: "./fabrics-collection/adire6-9k.jpg",
      rating: 2,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 7,
      name: "Adire",
      description: "Quality Adire material. (6yrds)",
      category: "Fabrics",
      originalPrice: 17800,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/adire2800.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 8,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 6000,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara-5k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 9,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 7000,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara-6k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 10,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 11000,
      discountPercentage: 20,
      imageUrl: "./ankara/ankara-10k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 11,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 12000,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara-12lk.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 12,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 12500,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara-12500.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 13,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 6500,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara-a-4k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 14,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 6300,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara-a-5k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 15,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 7500,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara-a-7k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 16,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 8000,
      discountPercentage: 0,
      imageUrl: "./ankara/ankara-a-8k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 17,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 5500,
      discountPercentage: 0,
      imageUrl: "./ankara/ankara-a-5500.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 18,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 9500,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara-a-9500.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 19,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 6000,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara-b-6k.jpg",
      rating: 3,
      reviews: [
        // { user: "User1", comment: "Great fabric!", stars: 5 },
        // { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 20,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 7000,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara-b-7k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 21,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 10000,
      discountPercentage: 0,
      imageUrl: "ankara/ankara-b-10k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 22,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 6500,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara-b-6k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 23,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 6500,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara-c-5500.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 24,
      name: "Ankara",
      description: "Ankara-cotton for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 10000,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara-cotton-10k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Wow!", stars: 6 },
        { user: "User2", comment: "Great fabric!", stars: 5 },
        { user: "User3", comment: "Nice design.", stars: 4 },
        { user: "User4", comment: "Somewhat nice.", stars: 3 },
        { user: "User5", comment: "Mixed feelings.", stars: 2 },
        { user: "User6", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 25,
      name: "Ankara",
      description: "Ankara mismatch for several occasions. (3yrds each)",
      category: "Fabrics",
      originalPrice: 10000,
      discountPercentage: 15,
      imageUrl: "./ankara/ankara-mismatch-3yrds-each-5k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 26,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 6000,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara1-5k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 27,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 5000,
      discountPercentage: 0,
      imageUrl: "./ankara/ankara2-4k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 28,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 5000,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara3-4k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 29,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 13000,
      discountPercentage: 30,
      imageUrl: "./ankara/ankara4-11k.jpeg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 30,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 4000,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara5-3k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 31,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 18000,
      discountPercentage: 20,
      imageUrl: "./ankara/ankara6-18k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 32,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 5000,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara8-5k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 33,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 4000,
      discountPercentage: 0,
      imageUrl: "./ankara/ankara9-3500.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 34,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 15000,
      discountPercentage: 20,
      imageUrl: "./ankara/ankara10-15k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 35,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 15000,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara11-15k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 36,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 14000,
      discountPercentage: 20,
      imageUrl: "./ankara/ankara12-14k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 38,
      name: "Ankara",
      description: "Ankara mismatch for several occasions. (3yrds each)",
      category: "Fabrics",
      originalPrice: 9000,
      discountPercentage: 10,
      imageUrl: "./ankara/ankara14-mismatch-6k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 39,
      name: "Ankara",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 8000,
      discountPercentage: 20,
      imageUrl: "./ankara/ankarab-15k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 40,
      name: "Ankara",
      description: "Ankara Ghana for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 25000,
      discountPercentage: 10,
      imageUrl: "./ankara/ankaraGhana-25k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 41,
      name: "Cashmere",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 6000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/cashmere-5k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 42,
      name: "Cashmere",
      description: "Ankara for several occasions. (6yrds)",
      category: "Fabrics",
      originalPrice: 11000,
      discountPercentage: 20,
      imageUrl: "./fabrics-collection/cashmere-10k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 },
      ],
    },
    {
      id: 43,
      name: "Crepe",
      description: "Quality Crepe. (6yrds)",
      category: "Fabrics",
      originalPrice: 9000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/crepe1.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 44,
      name: "Crepe",
      description: "Quality Crepe. (6yrds)",
      category: "Fabrics",
      originalPrice: 9000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/crepe2.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 45,
      name: "Crepe",
      description: "Quality Crepe. (3yrds)",
      category: "Fabrics",
      originalPrice: 7500,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/crepe3-2500.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 46,
      name: "Crepe",
      description: "Quality Crepe. (6yrds)",
      category: "Fabrics",
      originalPrice: 12000,
      discountPercentage: 20,
      imageUrl: "./fabrics-collection/crepe4-7k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 47,
      name: "Crepe",
      description: "Quality Crepe. (6yrds)",
      category: "Fabrics",
      originalPrice: 9000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/crepe5-1500.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 48,
      name: "Crepe",
      description: "Quality Crepe. (3yrds)",
      category: "Fabrics",
      originalPrice: 9000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/crepe6-3k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 49,
      name: "Crepe",
      description: "Quality Crepe. (3yrds)",
      category: "Fabrics",
      originalPrice: 4500,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/crepe7-1500.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 50,
      name: "Crepe",
      description: "Quality Crepe. (3yrds)",
      category: "Fabrics",
      originalPrice: 6400,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/crepe8-2k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 51,
      name: "Damask",
      description: "Quality Damask. (3yrds)",
      category: "Fabrics",
      originalPrice: 6000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/damask-6k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 52,
      name: "Damask",
      description: "Quality Damask. (6yrds)",
      category: "Fabrics",
      originalPrice: 8000,
      discountPercentage: 0,
      imageUrl: "./fabrics-collection/damask-brocade-8k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 53,
      name: "Damask",
      description: "Quality Damask. (6yrds)",
      category: "Fabrics",
      originalPrice: 9000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/damask-brocade2-8k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 54,
      name: "Damask",
      description: "Quality Damask. (6yrds)",
      category: "Fabrics",
      originalPrice: 9000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/damask-brocade3-9k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 55,
      name: "Damask",
      description: "Quality Damask. (3yrds)",
      category: "Fabrics",
      originalPrice: 6500,
      discountPercentage: 0,
      imageUrl: "./fabrics-collection/damask2-6500.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 56,
      name: "Damask",
      description: "Quality Damask. (6yrds)",
      category: "Fabrics",
      originalPrice: 15000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/damask3-2500.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 57,
      name: "Damask",
      description: "Quality Damask and Cashmere. (3yrds each; Green)",
      category: "Fabrics",
      originalPrice: 15000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/damaskAndCashmere.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 58,
      name: "George",
      description: "Quality Indian George. (6yrds)",
      category: "Fabrics",
      originalPrice: 22000,
      discountPercentage: 20,
      imageUrl: "./fabrics-collection/george-india-22k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 59,
      name: "George",
      description: "Quality Indian George. (5yrds)",
      category: "Fabrics",
      originalPrice: 180000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/george-india-180k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 60,
      name: "George",
      description: "Quality Indian George. (5yrds)",
      category: "Fabrics",
      originalPrice: 220000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/george-indian-220k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 61,
      name: "George",
      description: "Quality George. (5yrds)",
      category: "Fabrics",
      originalPrice: 120000,
      discountPercentage: 20,
      imageUrl: "./fabrics-collection/george1-20k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 62,
      name: "George",
      description: "Quality George. (5yrds)",
      category: "Fabrics",
      originalPrice: 25000,
      discountPercentage: 0,
      imageUrl: "./fabrics-collection/george3-15k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 63,
      name: "George",
      description: "Quality George. (5yrds)",
      category: "Fabrics",
      originalPrice: 30000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/indian-goerge-30k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 64,
      name: "Kampala",
      description: "Quality Kampala. (6yrds)",
      category: "Fabrics",
      originalPrice: 12000,
      discountPercentage: 20,
      imageUrl: "./fabrics-collection/kampala2-4k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 65,
      name: "Kampala",
      description: "Quality Kampala. (6yrds)",
      category: "Fabrics",
      originalPrice: 10000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/kampala3-8k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 66,
      name: "Lace",
      description: "Quality Lace (5yrds)",
      category: "Fabrics",
      originalPrice: 20000,
      discountPercentage: 0,
      imageUrl: "./fabrics-collection/lace-20k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 67,
      name: "Lace",
      description: "Quality Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 28000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/lace-28k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 68,
      name: "Lace",
      description: "Quality Cord Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 30000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/lace-cord-30k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 69,
      name: "Lace",
      description: "Quality Cord Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 29000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/lace-cord2-29k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 70,
      name: "Lace",
      description: "Quality Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 18000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/lace1.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 71,
      name: "Lace",
      description: "Quality Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 20000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/lace2.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 72,
      name: "Lace",
      description: "Quality Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 21000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/lace3-21k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 73,
      name: "Lace",
      description: "Quality Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 18000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/lace3.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 74,
      name: "Lace",
      description: "Quality Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 45000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/lace4-45k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 75,
      name: "Lace",
      description: "Quality Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 15000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/lace5-15k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 76,
      name: "Lace",
      description: "Quality Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 35000,
      discountPercentage: 20,
      imageUrl: "./fabrics-collection/lace6-35k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 77,
      name: "Lace",
      description: "Quality Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 36000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/lace6-36k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 78,
      name: "Lace",
      description: "Quality Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 30000,
      discountPercentage: 20,
      imageUrl: "./fabrics-collection/lace7-7k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 79,
      name: "Lace",
      description: "Quality Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 50000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/lace8-50k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 80,
      name: "Lace",
      description: "Quality Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 30000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/lace9-30k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 81,
      name: "Lace",
      description: "Quality Lace. (5yrds)",
      category: "Fabrics",
      originalPrice: 50000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/lace10-50k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 82,
      name: "Senator",
      description: "Quality Senator. (4yrds)",
      category: "Fabrics",
      originalPrice: 15000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/senat0r4-3500.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 83,
      name: "Senator",
      description: "Quality Senator. (4yrds)",
      category: "Fabrics",
      originalPrice: 12000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/senator1-3k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 84,
      name: "Senator",
      description: "Quality Senator. (4yrds)",
      category: "Fabrics",
      originalPrice: 16000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/senator2-4k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 85,
      name: "Senator",
      description: "Quality Senator. (4yrds)",
      category: "Fabrics",
      originalPrice: 12000,
      discountPercentage: 0,
      imageUrl: "./fabrics-collection/senator3-3k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 86,
      name: "Senator",
      description: "Quality Senator. (4yrds)",
      category: "Fabrics",
      originalPrice: 17000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/senator4-5k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 87,
      name: "Senator",
      description: "Quality Senator. (4yrds)",
      category: "Fabrics",
      originalPrice: 16000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/senator5-4k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 88,
      name: "Senator",
      description: "Quality Senator. (4yrds)",
      category: "Fabrics",
      originalPrice: 11400,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/senator5-2800.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 89,
      name: "Silk",
      description: "Quality Silk. (4yrds)",
      category: "Fabrics",
      originalPrice: 12000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/silk-2k.jpg",
      rating: 0,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 90,
      name: "Silk",
      description: "Quality Silk. (4yrds)",
      category: "Fabrics",
      originalPrice: 30000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/silk-30k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 91,
      name: "Silk",
      description: "Quality Silk-adire. (4yrds)",
      category: "Fabrics",
      originalPrice: 30000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/silk-adire-6k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 92,
      name: "Silk",
      description: "Quality Silk-milkado. (4yrds)",
      category: "Fabrics",
      originalPrice: 18000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/silk-milkado-4k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 93,
      name: "Silk",
      description: "Quality Silk-strip. (4yrds)",
      category: "Fabrics",
      originalPrice: 12000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/silk-strip-3k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 94,
      name: "Silk",
      description: "Quality Silk (4yrds)",
      category: "Fabrics",
      originalPrice: 12000,
      discountPercentage: 0,
      imageUrl: "./fabrics-collection/silk-2k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 95,
      name: "Silk",
      description: "Quality Silk material. (4yrds)",
      category: "Fabrics",
      originalPrice: 10000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/silk2-3k.jpg",
      rating: 0,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 96,
      name: "Silk",
      description: "Quality Silk. (4yrds)",
      category: "Fabrics",
      originalPrice: 17000,
      discountPercentage: 20,
      imageUrl: "./fabrics-collection/silk5-4k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 97,
      name: "Silk",
      description: "Quality Silk. (4yrds)",
      category: "Fabrics",
      originalPrice: 11000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/silk6-2k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 98,
      name: "Silk",
      description: "Quality Silk. (4yrds)",
      category: "Fabrics",
      originalPrice: 17000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/silk7-4k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 99,
      name: "Silk",
      description: "Quality Silk. (4yrds)",
      category: "Fabrics",
      originalPrice: 14000,
      discountPercentage: 0,
      imageUrl: "./fabrics-collection/silk8-3500.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 100,
      name: "Silk",
      description: "Quality Silk. (4yrds)",
      category: "Fabrics",
      originalPrice: 8000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/silk9-1600.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 101,
      name: "Silk",
      description: "Quality Silk. (4yrds)",
      category: "Fabrics",
      originalPrice: 15000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/silk11-3500.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 102,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 15000,
      discountPercentage: 0,
      imageUrl: "./fabrics-collection/vintage-3k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 103,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 7000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintage-1700.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 104,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 7500,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintage-1800.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 105,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 16000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintage-beautiful-4k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 106,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 6000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintage2-1400.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 107,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 12000,
      discountPercentage: 20,
      imageUrl: "./fabrics-collection/vintage3-2300.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 108,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 7000,
      discountPercentage: 0,
      imageUrl: "./fabrics-collection/vintage5-1600.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 109,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 17000,
      discountPercentage: 20,
      imageUrl: "./fabrics-collection/vintage7-2l.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 110,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 9000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintage7-2500.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 111,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 10000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintage8-2500.jpg",
      rating: 0,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 112,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 13000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintage9-3k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 113,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 6000,
      discountPercentage: 0,
      imageUrl: "./fabrics-collection/vintage10-1300.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 114,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 16000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintage11-4k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 115,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 7200,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintage12-1700.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 111,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 10000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintage8-2500.jpg",
      rating: 0,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 112,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 13000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintage9-3k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 113,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 6000,
      discountPercentage: 0,
      imageUrl: "./fabrics-collection/vintage10-1300.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 114,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 16000,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintage11-4k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 115,
      name: "Vintage",
      description: "Quality Vintage material. (4yrds)",
      category: "Fabrics",
      originalPrice: 7200,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintage12-1700.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 116,
      name: "Vintage",
      description: "Quality Vintage newspaper material. (4yrds)",
      category: "Fabrics",
      originalPrice: 7200,
      discountPercentage: 10,
      imageUrl: "./fabrics-collection/vintagenewspaper-1700.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 117,
      name: "Ready-to-wear",
      description: "Adire short-gown",
      category: "Ready-to-wear",
      originalPrice: 14000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/adire-shortgown-7k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 118,
      name: "Ready-to-wear",
      description: "Adire Top and Trousers",
      category: "Ready-to-wear",
      originalPrice: 19500,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/adire-top-trouser-19k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 119,
      name: "Ready-to-wear",
      description: "Agbada Bubu(Long-gown)",
      category: "Ready-to-wear",
      originalPrice: 35000,
      discountPercentage: 20,
      imageUrl: "./Ready-to-wear/agbadagown-3k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 120,
      name: "Ready-to-wear",
      description: "Ankara shortgown with bell-sleeves",
      category: "Ready-to-wear",
      originalPrice: 9000,
      discountPercentage: 0,
      imageUrl: "./Ready-to-wear/ankara-gown-9k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 121,
      name: "Ready-to-wear",
      description: "Ankara gown(with fringe)",
      category: "Ready-to-wear",
      originalPrice: 20000,
      discountPercentage: 20,
      imageUrl: "./Ready-to-wear/ankarafringegown-20k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 122,
      name: "Ready-to-wear",
      description: "Ankara-velvet short gown",
      category: "Ready-to-wear",
      originalPrice: 15000,
      discountPercentage: 0,
      imageUrl: "./Ready-to-wear/ankaravelvet-15.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 123,
      name: "Ready-to-wear",
      description: "Bubu(long-gown)",
      category: "Ready-to-wear",
      originalPrice: 22500,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/bigmadambubu-22k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 124,
      name: "Ready-to-wear",
      description: "Bubu(long-gown: white)",
      category: "Ready-to-wear",
      originalPrice: 25000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/bubu-25k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 125,
      name: "Ready-to-wear",
      description: "Bubu-milkado(long-gown)",
      category: "Ready-to-wear",
      originalPrice: 15000,
      discountPercentage: 0,
      imageUrl: "./Ready-to-wear/bubu-milkado-15k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 126,
      name: "Ready-to-wear",
      description: "Bubu(long-gown: with fringe)",
      category: "Ready-to-wear",
      originalPrice: 17000,
      discountPercentage: 5,
      imageUrl: "./Ready-to-wear/shortGownFringe-17k.jpeg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 127,
      name: "Ready-to-wear",
      description: "Caribbean-gown(long)",
      category: "Ready-to-wear",
      originalPrice: 18000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/caribbeangown-18k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 128,
      name: "Ready-to-wear",
      description: "Caribbean-gown(long)",
      category: "Ready-to-wear",
      originalPrice: 20000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/carribeangown-20k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 129,
      name: "Ready-to-wear",
      description: "Short-flared gown",
      category: "Ready-to-wear",
      originalPrice: 29000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/flowered-shortgown-29k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 130,
      name: "Ready-to-wear",
      description: "Long gown",
      category: "Ready-to-wear",
      originalPrice: 19000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/gown-22k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 131,
      name: "Ready-to-wear",
      description: "Jumpsuit",
      category: "Ready-to-wear",
      originalPrice: 18000,
      discountPercentage: 20,
      imageUrl: "./Ready-to-wear/jumpsuit-18k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 132,
      name: "Ready-to-wear",
      description: "Kampala gown",
      category: "Ready-to-wear",
      originalPrice: 26000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/kampala-gown-26k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 133,
      name: "Ready-to-wear",
      description: "Kampala gown(orange)",
      category: "Ready-to-wear",
      originalPrice: 18000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/kampalagown-22k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 134,
      name: "Ready-to-wear",
      description: "Lace gown",
      category: "Ready-to-wear",
      originalPrice: 40000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/lacegown-40k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 135,
      name: "Ready-to-wear",
      description: "Gown",
      category: "Ready-to-wear",
      originalPrice: 12000,
      discountPercentage: 15,
      imageUrl: "./Ready-to-wear/long-gown.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 136,
      name: "Ready-to-wear",
      description: "silk gown(blue)",
      category: "Ready-to-wear",
      originalPrice: 8000,
      discountPercentage: 0,
      imageUrl: "./Ready-to-wear/long-silkgown-9k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 137,
      name: "Ready-to-wear",
      description: "Bubu gown(chocolate-brown)",
      category: "ready-to-wear",
      originalPrice: 20000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/rich-aunty-bubu-20k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 138,
      name: "Ready-to-wear",
      description: "2-piece stripped shirt & short",
      category: "Ready-to-wear",
      originalPrice: 8000,
      discountPercentage: 0,
      imageUrl: "./Ready-to-wear/shirt-short-7k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 139,
      name: "Ready-to-wear",
      description: "2-piece shirt & short",
      category: "Ready-to-wear",
      originalPrice: 9000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/shirt-short-8k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 140,
      name: "Ready-to-wear",
      description: "Short flared gown(black)",
      category: "ready-to-wear",
      originalPrice: 6000,
      discountPercentage: 0,
      imageUrl: "./Ready-to-wear/short-gown-5k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 141,
      name: "Ready-to-wear",
      description: "Short flared gown(orange)",
      category: "Ready-to-wear",
      originalPrice: 8000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/short-gown-8k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 142,
      name: "Ready-to-wear",
      description: "Short ankara gown",
      category: "Ready-to-wear",
      originalPrice: 15000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/shortankara-15k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 143,
      name: "Ready-to-wear",
      description: "Short ankara gown",
      category: "Ready-to-wear",
      originalPrice: 13000,
      discountPercentage: 20,
      imageUrl: "./Ready-to-wear/shortankaragown-12k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 144,
      name: "Ready-to-wear",
      description: "Short gown (red)",
      category: "Ready-to-wear",
      originalPrice: 7000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/shortgown-7k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 145,
      name: "Ready-to-wear",
      description: "Short gown",
      category: "Ready-to-wear",
      originalPrice: 8500,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/shortgown-8k.jpg",
      rating: 3,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 146,
      name: "Ready-to-wear",
      description: "Silk gown (long)",
      category: "Ready-to-wear",
      originalPrice: 10000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/silk-gown-10k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 147,
      name: "Ready-to-wear",
      description: "Shirt and Trousers (white)",
      category: "Ready-to-wear",
      originalPrice: 27000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/topandtrousers-27k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 148,
      name: "Ready-to-wear",
      description: "Turkey gown(black)",
      category: "Ready-to-wear",
      originalPrice: 120000,
      discountPercentage: 10,
      imageUrl: "./Ready-to-wear/turkey-gown-120k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 149,
      name: "Ready-to-wear",
      description: "Long gown(white)",
      category: "Ready-to-wear",
      originalPrice: 14000,
      discountPercentage: 20,
      imageUrl: "./Ready-to-wear/white-long-gown-14k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 150,
      name: "Purse/Souvenir purse",
      description: "Beautiful Ankara chainbag",
      category: "Bags",
      originalPrice: 18000,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/ankara-chainbag-18k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 151,
      name: "Purse/Souvenir purse",
      description: "Beautiful Ankara Handbag",
      category: "Bags",
      originalPrice: 22500,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/ankara-handbag-22500.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 152,
      name: "Purse/Souvenir purse",
      description: "Beautiful Ankara toileries bag",
      category: "Bags",
      originalPrice: 1500,
      discountPercentage: 0,
      imageUrl: "./Bags-Collection/ankara-toileteriesbag-1k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 153,
      name: "Tote bag",
      description: "Beautiful Ankara Tote-bag",
      category: "Bags",
      originalPrice: 1500,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/ankara-totebag-1500.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 154,
      name: "Purse/Souvenir purse",
      description: "Beautiful Ankara chain-bag",
      category: "Bags",
      originalPrice: 9000,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/ankarabag-8k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 155,
      name: "Purse/Souvenir purse",
      description: "Beautiful Aso-oke Handbag",
      category: "Bags",
      originalPrice: 35000,
      discountPercentage: 20,
      imageUrl: "./Bags-Collection/aso-oke-handbag-35k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 156,
      name: "Purse/Souvenir purse",
      description: "Crossbag",
      category: "Bags",
      originalPrice: 4500,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/crossbag-3500.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 157,
      name: "Purse/Souvenir purse",
      description: "Crossbag",
      category: "Bags",
      originalPrice: 5500,
      discountPercentage: 20,
      imageUrl: "./Bags-Collection/crossbag-4500.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 158,
      name: "Purse/Souvenir purse",
      description: "Crossbag (white)",
      category: "Bags",
      originalPrice: 6500,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/crossbag-purse-5k.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 159,
      name: "Purse/Souvenir purse",
      description: "Chain bag (black)",
      category: "Bags",
      originalPrice: 6500,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/handbag-5k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 160,
      name: "Purse/Souvenir purse",
      description: "Handbag (yellow)",
      category: "Bags",
      originalPrice: 5000,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/handbag-4500.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 161,
      name: "Purse/Souvenir purse",
      description: "Handbag",
      category: "Bags",
      originalPrice: 7000,
      discountPercentage: 20,
      imageUrl: "./Bags-Collection/handbag-supreme-13k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 162,
      name: "Purse/Souvenir purse",
      description: "Chain Handbag",
      category: "Bags",
      originalPrice: 12000,
      discountPercentage: 9,
      imageUrl: "./Bags-Collection/handbag1.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 163,
      name: "Purse/Souvenir purse",
      description: "Chain Handbag",
      category: "Bags",
      originalPrice: 15000,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/handbag2.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 164,
      name: "Purse/Souvenir purse",
      description: "Handbag",
      category: "Bags",
      originalPrice: 15000,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/handbag3.jpg",
      rating: 5,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 165,
      name: "Purse/Souvenir purse",
      description: "Handbag",
      category: "Bags",
      originalPrice: 12000,
      discountPercentage: 20,
      imageUrl: "./Bags-Collection/handbag4-8k.jpg",
      rating: 4,
      reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
      ]
    },
    {
      id: 166,
      name: "Purse/Souvenir purse",
      description: "Handbag",
      category: "Bags",
      originalPrice: 18000,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/handbag5-18k.jpg",
      rating: 5,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
  },
  {
      id: 167,
      name: "Purse/Souvenir purse",
      description: "Handbag (white)",
      category: "Bags",
      originalPrice: 6000,
      discountPercentage: 0,
      imageUrl: "./Bags-Collection/handbag6-5k.jpg",
      rating: 4,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
  },
  {
      id: 168,
      name: "Lunch box",
      description: "Insulated Lunch box",
      category: "Bags",
      originalPrice: 12000,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/lunch-supreme-15k.jpg",
      rating: 5,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
  },
  {
      id: 169,
      name: "Lunch box",
      description: "Insulated Lunch box",
      category: "Bags",
      originalPrice: 10000,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/lunchbox-6k.jpg",
      rating: 4,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
  },
  {
      id: 170,
      name: "Lunch box",
      description: "Lunch box",
      category: "Bags",
      originalPrice: 7000,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/lunchbox-7k.jpg",
      rating: 3,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
  },
  {
      id: 171,
      name: "Lunch box",
      description: "Insulated Lunch box (ash)",
      category: "Bags",
      originalPrice: 14000,
      discountPercentage: 20,
      imageUrl: "./Bags-Collection/lunchbox-collection.jpg",
      rating: 4,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
  },
  {
      id: 172,
      name: "Lunch box",
      description: "Insulated Lunch box (pink)",
      category: "Bags",
      originalPrice: 12000,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/lunchbox-pink-12k.jpg",
      rating: 5,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
  },
  {
    id: 173,
    name: "Lunch box",
    description: "Insulated Lunch box",
    category: "Bags",
    originalPrice: 7000,
    discountPercentage: 10,
    imageUrl: "./Bags-Collection/lunchbox4-4k.jpg",
    rating: 3,
    reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
    ]
},
{
    id: 174,
    name: "Lunch box",
    description: "Lunch box",
    category: "Bags",
    originalPrice: 6500,
    discountPercentage: 10,
    imageUrl: "./Bags-Collection/lunchbox6-6500.jpg",
    rating: 3,
    reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
    ]
},
{
    id: 175,
    name: "Purse/Souvenir purse",
    description: "Purse(brown)",
    category: "Bags",
    originalPrice: 5000,
    discountPercentage: 0,
    imageUrl: "./Bags-Collection/purse-collection.jpg",
    rating: 4,
    reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
    ]
},
{
    id: 176,
    name: "Purse/Souvenir purse",
    description: "Purse(N500 per 1. Dozen:6k)",
    category: "Bags",
    originalPrice: 6000,
    discountPercentage: 10,
    imageUrl: "./Bags-Collection/purse-souvenir-500.jpg",
    rating: 4,
    reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
    ]
},
{
    id: 177,
    name: "Purse/Souvenir purse",
    description: "Purse & Handbag",
    category: "Bags",
    originalPrice: 13000,
    discountPercentage: 10,
    imageUrl: "./Bags-Collection/purse1-9k.jpg",
    rating: 4,
    reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
    ]
},
{
    id: 178,
    name: "Lunch box",
    description: "School bag & Lunch box",
    category: "Bags",
    originalPrice: 10000,
    discountPercentage: 10,
    imageUrl: "./Bags-Collection/school-lunchbox-10k.jpg",
    rating: 3,
    reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
    ]
},
  {
    id: 179,
    name: "School bag",
    description: "Backpack/School bag",
    category: "Bags",
    originalPrice: 6500,
    discountPercentage: 0,
    imageUrl: "./Bags-Collection/schoolbag-4k.jpg",
    rating: 4,                                                              
    reviews: [
      { user: "User1", comment: "Great fabric!", stars: 5 },
      { user: "User2", comment: "Nice design.", stars: 4 },
      { user: "User3", comment: "Somewhat nice.", stars: 3 },
      { user: "User4", comment: "Mixed feelings.", stars: 2 },
      { user: "User5", comment: "Can be made better", stars: 1 }
    ]
  },
  {
    id: 180,
    name: "School bag",
    description: "School bag",
    category: "Bags",
    originalPrice: 5000,
    discountPercentage: 10,
    imageUrl: "./Bags-Collection/schoolbag-5k.jpg",
    rating: 3,
    reviews: [
      { user: "User1", comment: "Great fabric!", stars: 5 },
      { user: "User2", comment: "Nice design.", stars: 4 },
      { user: "User3", comment: "Somewhat nice.", stars: 3 },
      { user: "User4", comment: "Mixed feelings.", stars: 2 },
      { user: "User5", comment: "Can be made better", stars: 1 }
    ]
  },
  {
    id: 181,
    name: "School bag",
    description: "Ankara School bag",
    category: "Bags",
    originalPrice: 10000,
    discountPercentage: 10,
    imageUrl: "./Bags-Collection/schoolbag-10k.jpg",
    rating: 5,
    reviews: [
      { user: "User1", comment: "Great fabric!", stars: 5 },
      { user: "User2", comment: "Nice design.", stars: 4 },
      { user: "User3", comment: "Somewhat nice.", stars: 3 },
      { user: "User4", comment: "Mixed feelings.", stars: 2 },
      { user: "User5", comment: "Can be made better", stars: 1 }
    ]
  },
  {
      id: 182,
      name: "School bag",
      description: "School bag",
      category: "Bags",
      originalPrice: 10000,
      discountPercentage: 20,
      imageUrl: "./Bags-Collection/schoolbag-11k.jpg",
      rating: 4,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
  },
  {
      id: 183,
      name: "School bag",
      description: "School bag (black)",
      category: "Bags",
      originalPrice: 18000,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/schoolbag-collection.jpg",
      rating: 5,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
  },
  {
      id: 184,
      name: "School bag",
      description: "School bag",
      category: "Bags",
      originalPrice: 12000,
      discountPercentage: 20,
      imageUrl: "./Bags-Collection/schoolbag-supreme-15k.jpg",
      rating: 4,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
  },
  {
      id: 185,
      name: "School bag",
      description: "School bag",
      category: "Bags",
      originalPrice: 15000,
      discountPercentage: 20,
      imageUrl: "./Bags-Collection/schoolbag-supreme-19k.jpg",
      rating: 4,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
  },
  {
      id: 186,
      name: "School bag",
      description: "Schoolbag, purse and traveling bag",
      category: "Bags",
      originalPrice: 20000,
      discountPercentage: 0,
      imageUrl: "./Bags-Collection/schoolbag-travelingbag-purse-20k.jpg",
      rating: 4,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
  },
  {
      id: 187,
      name: "School bag",
      description: "School bag",
      category: "Bags",
      originalPrice: 11000,
      discountPercentage: 10,
      imageUrl: "./Bags-Collection/schoolbag2-11k.jpg",
      rating: 4,
      reviews: [
          { user: "User1", comment: "Great fabric!", stars: 5 },
          { user: "User2", comment: "Nice design.", stars: 4 },
          { user: "User3", comment: "Somewhat nice.", stars: 3 },
          { user: "User4", comment: "Mixed feelings.", stars: 2 },
          { user: "User5", comment: "Can be made better", stars: 1 }
      ]
  },
  {
    id: 188,
    name: "School bag",
    description: "School bag",
    category: "Bags",
    originalPrice: 5000,
    discountPercentage: 0,
    imageUrl: "./Bags-Collection/schoolbag7-6k.jpg",
    rating: 3,
    reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
    ]
},
{
    id: 189,
    name: "School bag",
    description: "School bag",
    category: "Bags",
    originalPrice: 7500,
    discountPercentage: 10,
    imageUrl: "./Bags-Collection/schoolbag8-7500.jpg",
    rating: 5,
    reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
    ]
},
{
    id: 190,
    name: "School bag",
    description: "School bag",
    category: "Bags",
    originalPrice: 5500,
    discountPercentage: 20,
    imageUrl: "./Bags-Collection/schoolbag12-5500.jpg",
    rating: 4,
    reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
    ]
},
{
    id: 191,
    name: "Souvenir bags/carrier bag",
    description: "School bag",
    category: "Bags",
    originalPrice: 3000,
    discountPercentage: 10,
    imageUrl: "./Bags-Collection/souvenir-bag-3k.jpg",
    rating: 4,
    reviews: [
        { user: "User1", comment: "Great fabric!", stars: 5 },
        { user: "User2", comment: "Nice design.", stars: 4 },
        { user: "User3", comment: "Somewhat nice.", stars: 3 },
        { user: "User4", comment: "Mixed feelings.", stars: 2 },
        { user: "User5", comment: "Can be made better", stars: 1 }
    ]
},
{
  id: 192,
  name: "Souvenir bags/carrier bag",
  description: "Sovenir bags (36pieces)",
  category: "Bags",
  originalPrice: 36000,
  discountPercentage: 10,
  imageUrl: "./Bags-Collection/souvenir-bags-collection.jpg",
  rating: 4,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 193,
  name: "Purse/Souvenir purse",
  description: "Sovenir purse (100pieces)",
  category: "Bags",
  originalPrice: 50000,
  discountPercentage: 10,
  imageUrl: "./Bags-Collection/souvenir-purses.jpg",
  rating: 4,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 194,
  name: "Tote bag",
  description: "2 Tote bags(black and red)",
  category: "Bags",
  originalPrice: 4500,
  discountPercentage: 10,
  imageUrl: "./Bags-Collection/tote-bag2-4k.jpg",
  rating: 4,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 195,
  name: "Tote bag",
  description: "Tote bag",
  category: "Bags",
  originalPrice: 3000,
  discountPercentage: 10,
  imageUrl: "./Bags-Collection/tote-bag5-3000.jpg",
  rating: 4,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 196,
  name: "Tote bag",
  description: "Tote bag",
  category: "Bags",
  originalPrice: 3000,
  discountPercentage: 10,
  imageUrl: "./Bags-Collection/tote-bag7-5500.jpg",
  rating: 5,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 197,
  name: "Tote bag",
  description: "Tote bag",
  category: "Bags",
  originalPrice: 4000,
  discountPercentage: 0,
  imageUrl: "./Bags-Collection/tote-bag8-4k.jpg",
  rating: 4,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 198,
  name: "Tote bag",
  description: "Tote bag (leather: brown)",
  category: "Bags",
  originalPrice: 12000,
  discountPercentage: 10,
  imageUrl: "./Bags-Collection/totebag-leather-12500.jpg",
  rating: 5,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 199,
  name: "Tote bag",
  description: "Tote bag",
  category: "Bags",
  originalPrice: 4000,
  discountPercentage: 10,
  imageUrl: "./Bags-Collection/totebag-use-4k.jpg",
  rating: 4,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 200,
  name: "Tote bag",
  description: "Fancy Tote bag",
  category: "Bags",
  originalPrice: 5000,
  discountPercentage: 10,
  imageUrl: "./Bags-Collection/totebag9-6k.jpg",
  rating: 5,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 201,
  name: "Traveling bag",
  description: "Traveling bag and purse",
  category: "Bags",
  originalPrice: 11000,
  discountPercentage: 20,
  imageUrl: "./Bags-Collection/traveling bags.jpg",
  rating: 5,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 202,
  name: "Traveling bag",
  description: "Traveling bag",
  category: "Bags",
  originalPrice: 7000,
  discountPercentage: 10,
  imageUrl: "./Bags-Collection/travelingbag2-12k.jpg",
  rating: 4,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 203,
  name: "Purse/Souvenir purse",
  description: "Waist bag",
  category: "Bags",
  originalPrice: 5000,
  discountPercentage: 0,
  imageUrl: "./Bags-Collection/waistbag-5k.jpg",
  rating: 5,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 204,
  name: "Ready-to-wear",
  description: "Adire short gown",
  category: "Ready-to-wear",
  originalPrice: 18000,
  discountPercentage: 5,
  imageUrl: "./Ready-to-wear/shortAdiregown-use18k.jpeg",
  rating: 4,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 205,
  name: "Ready-to-wear",
  description: "2-piece top gown and trousers(navy blue)",
  category: "Ready-to-wear",
  originalPrice: 30000,
  discountPercentage: 0,
  imageUrl: "./Ready-to-wear/TopAndT-30k.jpeg",
  rating: 5,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 206,
  name: "Ready-to-wear",
  description: "2-piece top gown and trousers",
  category: "Ready-to-wear",
  originalPrice: 27000,
  discountPercentage: 2,
  imageUrl: "./Ready-to-wear/TopandTrouser-27k.jpeg",
  rating: 4,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 207,
  name: "Ready-to-wear",
  description: "2-piece top gown and trousers (chocolate-brown)",
  category: "Ready-to-wear",
  originalPrice: 30000,
  discountPercentage: 8,
  imageUrl: "./Ready-to-wear/TopAndTrousers-30k.jpeg",
  rating: 5,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 208,
  name: "Ready-to-wear",
  description: "2-piece top gown and trousers (brown)",
  category: "Ready-to-wear",
  originalPrice: 20000,
  discountPercentage: 0,
  imageUrl: "./Ready-to-wear/TopTrouser-20k.jpeg",
  rating: 0,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
},
{
  id: 209,
  name: "Ready-to-wear",
  description: "2-piece top gown and trousers",
  category: "Ready-to-wear",
  originalPrice: 35000,
  discountPercentage: 10,
  imageUrl: "./Ready-to-wear/TopTrouser-35k.jpg",
  rating: 6,
  reviews: [
    { user: "User1", comment: "Great fabric!", stars: 5 },
    { user: "User2", comment: "Nice design.", stars: 4 },
    { user: "User3", comment: "Somewhat nice.", stars: 3 },
    { user: "User4", comment: "Mixed feelings.", stars: 2 },
    { user: "User5", comment: "Can be made better", stars: 1 }
  ]
}
]



// Get parent element
// This line finds the part of the webpage where we'll put our menu items.
const pictureSegment = document.querySelector(".picture-segment"); //div with the products
// This line finds the part of the webpage where we'll put our filter buttons(the 4 buttons).
const btnSelect = document.querySelector(".menu-bar");



// Function to calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
return originalPrice - (originalPrice * (discountPercentage / 100)); // To calculate any %
}

// Function to generate star rating
function generateStarRating(rating) {
let stars = '';
for (let i = 0; i < 5; i++) {
    if (i < rating) {
        stars += '<span class="star filled">&#9733;</span>';
    } else {
        stars += '<span class="star">&#9733;</span>';
    }
}
return stars;
}

// My code for displaying product items
function displayProductItems(products) {
const displayProducts = products.map(function (item) {
    const discountedPrice = calculateDiscountedPrice(item.originalPrice, item.discountPercentage);
    return `
        <div class="col-md-3">
            <div class="product-item hover-scale position-relative" style="cursor: pointer;">
                <img src="${item.imageUrl}" alt="${item.name}" class="rounded-2 img-fluid">
                
                <div class="text-start name mt-1" style="font-size: 14px;">
                    ${item.name}
                </div>

                <!-- Description -->
                <div class="description" style="font-size: 12px;">
                    ${item.description}
                </div>
                
                <div class="price" style="font-size: 13px;">
                    <div class="d-flex align-items-center">
                        <div class="text-start discounted-price" style="font-weight: bold;">N ${discountedPrice.toFixed(2)}</div>
                        <div class="text-start original-price text-decoration-line-through" style="opacity: 0.7; margin-left: 5px;">N ${item.originalPrice}</div>
                        
                        <div class="discount-badge" style="background-color: #FEF3E9; color: #F68B1E; padding: 0.25rem 0.5rem; font-size: 12px; border-radius: 0.25rem; margin-left: 5px;">
                            -${item.discountPercentage}%
                        </div>
                    </div>
                </div>

                <div class="star-rating">
                    ${generateStarRating(item.rating)}
                    <span class="rating-number">(${item.reviews.length})</span>
                </div>

                <div class="d-flex align-items-center">
                    <span style="font-size: 12px;" class="me-1">NK's <i class="fa-solid fa-rocket" style="color: #FF5722;"></i></span>
                    <span style="font-size: 12px; color: #F68B1E; font-weight: bold;">Express</span>
                </div>

                <div class="add-to-cart-btn">
                    <button class="btn btn-warning text-white">Add to Cart</button>
                </div>
            </div>
        </div>`;
}).join('');

// Ensure the dynamically generated product items are wrapped inside a row
pictureSegment.innerHTML = `<div class="row">${displayProducts}</div>`;

// Call setupAddToCartButtons after displaying products
setupAddToCartButtons();
}

// My code for displaying filter buttons
function displayProductButtons() {
// Your code to display filter buttons goes here
}

// This part of the code waits for the webpage to finish loading before it runs the new js instruction.
window.addEventListener("DOMContentLoaded", function () {
// When the page is loaded, it shows all the menu items on js.
displayProductItems(products);
// We also create buttons for filtering the product items.
displayProductButtons(); //without this, the different classifications wont show
});




// Setting up the category selection using the id given in the html for the 4
// Function to display product items based on selected category
function displayCategoryButtons() {
// Get the "All" category link
const allCategory = document.querySelector("#allCategory a");
// Get the "Fabrics" category link
const fabricsCategory = document.querySelector("#fabricsCategory a");
// Get the "Ready-to-wear" category link
const readyToWearCategory = document.querySelector("#readyToWearCategory a");
// Get the "Bags" category link
const bagsCategory = document.querySelector("#bagsCategory a");

// Add click event listener to the "All" category link
allCategory.addEventListener("click", function () {
    // Display all product items
    displayProductItems(products);
});

// Add click event listener to the "Fabrics" category link
fabricsCategory.addEventListener("click", function () {
    // Filter and display only "Fabrics" product items
    const filteredProducts = products.filter(product => product.category === "Fabrics");
    displayProductItems(filteredProducts);
});

// Add click event listener to the "Ready-to-wear" category link
readyToWearCategory.addEventListener("click", function () {
    // Filter and display only "Ready-to-wear" product items
    const filteredProducts = products.filter(product => product.category === "Ready-to-wear");
    displayProductItems(filteredProducts);
});

// Add click event listener to the "Bags" category link
bagsCategory.addEventListener("click", function () {
    // Filter and display only "Bags" product items
    const filteredProducts = products.filter(product => product.category === "Bags");
    displayProductItems(filteredProducts);
});
}

// When the DOM content is fully loaded
window.addEventListener("DOMContentLoaded", function () {
// Display all product items initially
displayProductItems(products);
// Display product filter buttons
displayProductButtons();
// Call the function to add event listeners to category buttons
displayCategoryButtons();
});


// Define an array to store cart items
let cartItems = [];

// Function to add item to cart
function addToCart(item) {
    // Add item to cartItems array
    cartItems.push(item);
    // Update cart display
    updateCartDisplay();
}

// Function to remove item from cart
function removeFromCart(index) {
    // Remove item from cartItems array at the specified index
    cartItems.splice(index, 1);
    // Update cart display
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    // Get cart icon element
    const cartIcon = document.querySelector(".fa-cart-shopping");
    // Count total items in cart
    const totalItems = cartItems.length;
    // Set cart icon text to total items
    cartIcon.innerText = ` ${totalItems}`;

    // Get cart items container
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""; // Clear previous items

    // Loop through cartItems and create HTML for each item
    let totalPrice = 0;
    cartItems.forEach((item, index) => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";
        cartItemDiv.innerHTML = `
            <div class="item-info">
                <img src="${item.imageUrl}" alt="${item.name}" width="50">
                <div>
                    <h5>${item.name}</h5>
                    <p>N ${item.price.toFixed(2)}</p>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
        totalPrice += item.price;
    });

    // Update total price
    document.getElementById("total-price").innerText = `N ${totalPrice.toFixed(2)}`;
}

// Function to handle click event on "Add to Cart" buttons
// Function to setup "Add to Cart" button event listeners
function setupAddToCartButtons() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn button");
  addToCartButtons.forEach(button => {
      button.addEventListener("click", addToCartHandler);
  });
}


// Function to handle "Add to Cart" button click
function addToCartHandler(event) {
  const button = event.target;
  const parentElement = button.closest('.product-item');
  const productName = parentElement.querySelector(".name").innerText;
  const productPrice = parseFloat(parentElement.querySelector(".discounted-price").innerText.split(" ")[1]);
  const productImage = parentElement.querySelector("img").src;

  const item = {
      name: productName,
      price: productPrice,
      imageUrl: productImage
  };

  addToCart(item);
}



// Event listener for clicking on cart icon
const cartIcon = document.querySelector(".fa-cart-shopping");
cartIcon.addEventListener("click", function () {
    // Display cart items and total amount
    let cartContent = "Cart Items:\n";
    let totalPrice = 0;
    cartItems.forEach(item => {
        cartContent += `${item.name}: N ${item.price}\n`;
        totalPrice += item.price;
    });
    cartContent += `Total Amount: N ${totalPrice.toFixed(2)}`;
    alert(cartContent);
});

// Call the setup function when the DOM is loaded
window.addEventListener("DOMContentLoaded", function () {
    setupAddToCartButtons();
    displayProductItems(products);
});