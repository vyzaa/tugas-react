// src/services/getAllProducts.js
export const getAllProducts = () => {
  return [
    {
      id: 'VGA-1',
      slug: 'nvidia-geforce-rtx-3080',
      name: "NVIDIA GeForce RTX 3080",
      category: 'Graphics Card',
      price: 12_000_000,
      stock: 50,
      imageUrl: '/assets/images/rtx-3080.png',
      description: `The NVIDIA GeForce RTX 3080 is a powerful graphics card that delivers high performance for gaming and creative applications. It features ray tracing, AI-enhanced graphics, and high-speed performance for the latest games.`
    },
    {
      id: 'VGA-2',
      slug: 'amd-radeon-rx-6800',
      name: "AMD Radeon RX 6800",
      category: 'Graphics Card',
      price: 10_500_000,
      stock: 30,
      imageUrl: '/assets/images/rx-6800.png',
      description: `The AMD Radeon RX 6800 offers exceptional performance for gaming and content creation, with support for ray tracing and high frame rates in the latest titles.`
    },
    {
      id: 'VGA-3',
      slug: 'nvidia-geforce-rtx-3070',
      name: "NVIDIA GeForce RTX 3070",
      category: 'Graphics Card',
      price: 8_000_000,
      stock: 20,
      imageUrl: '/assets/images/rtx-3070.png',
      description: `The NVIDIA GeForce RTX 3070 is designed for gamers who want high performance at a more affordable price, offering excellent frame rates and ray tracing capabilities.`
    },
    {
      id: 'VGA-4',
      slug: 'amd-radeon-rx-6700-xt',
      name: "AMD Radeon RX 6700 XT",
      category: 'Graphics Card',
      price: 7_500_000,
      stock: 15,
      imageUrl: '/assets/images/rx-6700-xt.png',
      description: `The AMD Radeon RX 6700 XT is a mid-range graphics card that provides excellent performance for gaming at 1440p resolution, with advanced features for a smooth gaming experience.`
    },
    {
      id: 'VGA-5',
      slug: 'nvidia-geforce-rtx-3060-ti',
      name: "NVIDIA GeForce RTX 3060 Ti",
      category: 'Graphics Card',
      price: 6_000_000,
      stock: 25,
      imageUrl: '/assets/images/rtx-3060-ti.png',
      description: `The NVIDIA GeForce RTX 3060 Ti offers great performance for gamers looking for a budget-friendly option, capable of handling most games at high settings.`
    },
  ];
};