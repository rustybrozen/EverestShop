const mongoose = require('mongoose');
const Product = require('./models/Product');
const Brand = require('./models/Brand');
const Order = require('./models/Order');
const User = require('./models/User');
const Inbox = require('./models/Inbox');





mongoose.connect('mongodb://127.0.0.1:27017/everestShop', {
})
  .then(() => {
    console.log('Đã kết nối tới MongoDB');
    console.log('Bắt đầu tạo cơ sở dữ liệu cho ứng dụng web');
    importMockData();
  })
  .catch(err => {
    console.error('Lỗi kết nối tới MongoDB', err);
  });




async function importMockData() {

  const mockUsers = [
    {
      username: 'admin',
      password: 'admin',
      firstName: 'Admin',
      lastName: 'User',
      role: 'Admin',
      email: '12@gmail.com'
    },
    {
      username: 'banhang',
      password: 'banhang',
      firstName: 'John',
      lastName: 'Doe',
      role: 'Nhân viên bán hàng',
      email: '132@gmail.com'
    },
    {
      username: 'khohang',
      password: 'khohang',
      firstName: 'Jane',
      lastName: 'Smith',
      role: 'Nhân viên kho hàng',
      email: '1342@gmail.com'
    },
    {
      username: 'truong',
      password: 'truong',
      firstName: 'Trường',
      lastName: 'Phạm Đức',
      email: '2412@gmail.com'
    },
    {
      username: 'khoi',
      password: 'khoi',
      firstName: 'Khôi',
      lastName: 'Lê Trọng',
      email: '342@gmail.com'
    },
    {
      username: 'Nga',
      password: 'nga',
      firstName: 'Nga',
      lastName: 'Nguyễn Thị Ngọc',
      email: '2343@gmail.com'
    },
    {
      username: 'khachhang',
      password: 'khachhang',
      firstName: 'Khach',
      lastName: 'Hang',
      email: '3243@gmail.com'
    },
    {
      username: 'customer5',
      password: 'customer5',
      firstName: 'William',
      lastName: 'Garcia',
      email: '4545@gmail.com'
    },
    {
      username: 'customer6',
      password: 'customer6',
      firstName: 'Olivia',
      lastName: 'Miller',
      email: '234234@gmail.com'
    },
    {
      username: 'customer7',
      password: 'customer7',
      firstName: 'Jacob',
      lastName: 'Davis',
      email: '22234@gmail.com'
    },
  ];


  const brands = [
    { brand: 'iPhone', description: 'Apple smartphones' },
    { brand: 'Samsung', description: 'Samsung smartphones' },
    { brand: 'Vivo', description: 'Vivo smartphones' },
    { brand: 'Xiaomi', description: 'Xiaomi smartphones' },
  ];

  const products = [
    // iPhone Products
    {
      name: 'iPhone 12',
      model: '12',
      description: 'The latest iPhone with A14 Bionic chip',
      image: 'iphone12.jpg',
      generalSpecifications: {
        cpu: 'A14 Bionic',
        camera: { primary: '12MP', secondary: '12MP' },
        battery: 2815,
        display: '6.1-inch Super Retina XDR'
      },
      colorVariants: [
        {
          color: 'Black',
          specVariations: [
            { ram: 4, storage: 64, price: 20000000, stock: 10 },
            { ram: 4, storage: 128, price: 22000000, stock: 15 }
          ]
        },
        {
          color: 'White',
          specVariations: [
            { ram: 4, storage: 64, price: 20000000, stock: 10 },
            { ram: 4, storage: 128, price: 22000000, stock: 15 }
          ]
        }
      ],
      minPrice: 20000000,
      minPriceWithRam: 4,
      minPriceWithStorage: 64,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    {
      name: 'iPhone 14 Pro Max',
      model: '14 pro Max',
      description: 'iPhone 14 Pro Max một siêu phẩm trong giới smartphone được nhà Táo tung ra thị trường vào tháng 09/2022. Máy trang bị con chip Apple A16 Bionic vô cùng mạnh mẽ, đi kèm theo đó là thiết kế màn hình mới, hứa hẹn mang lại những trải nghiệm đầy mới mẻ cho người dùng iPhone.',
      image: '14promax.jpg',
      generalSpecifications: {
        cpu: 'Apple A16 Bionic',
        camera: { primary: 'Chính 48 MP & Phụ 12 MP, 12 MP', secondary: '12MP' },
        battery: 4323,
        display: 'OLED, 6.7", Super Retina XDR'
      },
      colorVariants: [
        {
          color: 'Black',
          specVariations: [
            { ram: 8, storage: 128, price: 19200000, stock: 10 },
            { ram: 8, storage: 256, price: 21000000, stock: 15 }
          ]
        },
        {
          color: 'White',
          specVariations: [
            { ram: 8, storage: 128, price: 19200000, stock: 10 },
            { ram: 8, storage: 256, price: 21000000, stock: 15 }
          ]
        }
      ],
      minPrice: 19200000,
      minPriceWithRam: 8,
      minPriceWithStorage: 128,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    {
      name: 'iPhone 12 Pro',
      model: '12 Pro',
      description: 'The latest iPhone Pro with A14 Bionic chip',
      image: 'iphone12pro.jpg',
      generalSpecifications: {
        cpu: 'A14 Bionic',
        camera: { primary: '12MP', secondary: '12MP' },
        battery: 2815,
        display: '6.1-inch Super Retina XDR'
      },
      colorVariants: [
        {
          color: 'Black',
          specVariations: [
            { ram: 6, storage: 128, price: 30000000, stock: 10 },
            { ram: 6, storage: 256, price: 32000000, stock: 15 }
          ]
        },
        {
          color: 'White',
          specVariations: [
            { ram: 6, storage: 128, price: 30000000, stock: 10 },
            { ram: 6, storage: 256, price: 32000000, stock: 15 }
          ]
        }
      ],
      minPrice: 30000000,
      minPriceWithRam: 6,
      minPriceWithStorage: 128,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    {
      name: 'iPhone 11',
      model: '11',
      description: 'Previous generation iPhone with A13 Bionic chip',
      image: 'iphone11.jpg',
      generalSpecifications: {
        cpu: 'A13 Bionic',
        camera: { primary: '12MP', secondary: '12MP' },
        battery: 3110,
        display: '6.1-inch Liquid Retina HD'
      },
      colorVariants: [
        {
          color: 'Black',
          specVariations: [
            { ram: 4, storage: 64, price: 15000000, stock: 20 },
            { ram: 4, storage: 128, price: 17000000, stock: 25 }
          ]
        },
        {
          color: 'White',
          specVariations: [
            { ram: 4, storage: 64, price: 15000000, stock: 20 },
            { ram: 4, storage: 128, price: 17000000, stock: 25 }
          ]
        }
      ],
      minPrice: 15000000,
      minPriceWithRam: 4,
      minPriceWithStorage: 64,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    {
      name: 'iPhone SE',
      model: 'SE',
      description: 'Affordable iPhone with A13 Bionic chip',
      image: 'iphonese.jpg',
      generalSpecifications: {
        cpu: 'A13 Bionic',
        camera: { primary: '12MP', secondary: '7MP' },
        battery: 1821,
        display: '4.7-inch Retina HD'
      },
      colorVariants: [
        {
          color: 'Black',
          specVariations: [
            { ram: 3, storage: 64, price: 12000000, stock: 30 },
            { ram: 3, storage: 128, price: 14000000, stock: 35 }
          ]
        },
        {
          color: 'White',
          specVariations: [
            { ram: 3, storage: 64, price: 12000000, stock: 30 },
            { ram: 3, storage: 128, price: 14000000, stock: 35 }
          ]
        }
      ],
      minPrice: 12000000,
      minPriceWithRam: 3,
      minPriceWithStorage: 64,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    // Samsung Products
    {
      name: 'Samsung Galaxy S21',
      model: 'S21',
      description: 'Flagship Samsung phone with Exynos 2100',
      image: 'samsungs21.jpg',
      generalSpecifications: {
        cpu: 'Exynos 2100',
        camera: { primary: '64MP', secondary: '10MP' },
        battery: 4000,
        display: '6.2-inch Dynamic AMOLED'
      },
      colorVariants: [
        {
          color: 'Phantom Gray',
          specVariations: [
            { ram: 8, storage: 128, price: 21000000, stock: 10 },
            { ram: 8, storage: 256, price: 23000000, stock: 15 }
          ]
        },
        {
          color: 'Phantom White',
          specVariations: [
            { ram: 8, storage: 128, price: 21000000, stock: 10 },
            { ram: 8, storage: 256, price: 23000000, stock: 15 }
          ]
        }
      ],
      minPrice: 21000000,
      minPriceWithRam: 8,
      minPriceWithStorage: 128,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    {
      name: 'Samsung Galaxy Note 20',
      model: 'Note 20',
      description: 'High-end Samsung phone with S-Pen',
      image: 'samsungnote20.jpg',
      generalSpecifications: {
        cpu: 'Exynos 990',
        camera: { primary: '64MP', secondary: '10MP' },
        battery: 4300,
        display: '6.7-inch Super AMOLED Plus'
      },
      colorVariants: [
        {
          color: 'Mystic Bronze',
          specVariations: [
            { ram: 8, storage: 128, price: 25000000, stock: 10 },
            { ram: 8, storage: 256, price: 27000000, stock: 15 }
          ]
        },
        {
          color: 'Mystic Gray',
          specVariations: [
            { ram: 8, storage: 128, price: 25000000, stock: 10 },
            { ram: 8, storage: 256, price: 27000000, stock: 15 }
          ]
        }
      ],
      minPrice: 25000000,
      minPriceWithRam: 8,
      minPriceWithStorage: 128,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    {
      name: 'Samsung Galaxy A52',
      model: 'A52',
      description: 'Mid-range Samsung phone with Snapdragon 720G',
      image: 'samsunga52.jpg',
      generalSpecifications: {
        cpu: 'Snapdragon 720G',
        camera: { primary: '64MP', secondary: '12MP' },
        battery: 4500,
        display: '6.5-inch Super AMOLED'
      },
      colorVariants: [
        {
          color: 'Awesome Black',
          specVariations: [
            { ram: 6, storage: 128, price: 10000000, stock: 20 },
            { ram: 8, storage: 128, price: 12000000, stock: 25 }
          ]
        },
        {
          color: 'Awesome Blue',
          specVariations: [
            { ram: 6, storage: 128, price: 10000000, stock: 20 },
            { ram: 8, storage: 128, price: 12000000, stock: 25 }
          ]
        }
      ],
      minPrice: 10000000,
      minPriceWithRam: 6,
      minPriceWithStorage: 128,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    {
      name: 'Samsung Galaxy M51',
      model: 'M51',
      description: 'Samsung phone with massive 7000mAh battery',
      image: 'samsungm51.jpg',
      generalSpecifications: {
        cpu: 'Snapdragon 730G',
        camera: { primary: '64MP', secondary: '12MP' },
        battery: 7000,
        display: '6.7-inch Super AMOLED Plus'
      },
      colorVariants: [
        {
          color: 'Electric Blue',
          specVariations: [
            { ram: 6, storage: 128, price: 15000000, stock: 20 },
            { ram: 8, storage: 128, price: 17000000, stock: 25 }
          ]
        },
        {
          color: 'Celestial Black',
          specVariations: [
            { ram: 6, storage: 128, price: 15000000, stock: 20 },
            { ram: 8, storage: 128, price: 17000000, stock: 25 }
          ]
        }
      ],
      minPrice: 15000000,
      minPriceWithRam: 6,
      minPriceWithStorage: 128,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    // Vivo Products
    {
      name: 'Vivo V21',
      model: 'V21',
      description: 'Vivo phone with 44MP front camera',
      image: 'vivov21.jpg',
      generalSpecifications: {
        cpu: 'Dimensity 800U',
        camera: { primary: '64MP', secondary: '8MP' },
        battery: 4000,
        display: '6.44-inch AMOLED'
      },
      colorVariants: [
        {
          color: 'Dusk Blue',
          specVariations: [
            { ram: 8, storage: 128, price: 9000000, stock: 20 },
            { ram: 8, storage: 256, price: 11000000, stock: 25 }
          ]
        },
        {
          color: 'Sunset Dazzle',
          specVariations: [
            { ram: 8, storage: 128, price: 9000000, stock: 20 },
            { ram: 8, storage: 256, price: 11000000, stock: 25 }
          ]
        }
      ],
      minPrice: 9000000,
      minPriceWithRam: 8,
      minPriceWithStorage: 128,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    {
      name: 'Vivo Y51',
      model: 'Y51',
      description: 'Vivo phone with 48MP camera and 5000mAh battery',
      image: 'vivoy51.jpg',
      generalSpecifications: {
        cpu: 'Snapdragon 665',
        camera: { primary: '48MP', secondary: '8MP' },
        battery: 5000,
        display: '6.58-inch IPS LCD'
      },
      colorVariants: [
        {
          color: 'Crystal Symphony',
          specVariations: [
            { ram: 8, storage: 128, price: 6000000, stock: 30 },
            { ram: 8, storage: 256, price: 8000000, stock: 35 }
          ]
        },
        {
          color: 'Titanium Sapphire',
          specVariations: [
            { ram: 8, storage: 128, price: 6000000, stock: 30 },
            { ram: 8, storage: 256, price: 8000000, stock: 35 }
          ]
        }
      ],
      minPrice: 6000000,
      minPriceWithRam: 8,
      minPriceWithStorage: 128,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    {
      name: 'Vivo X50',
      model: 'X50',
      description: 'Vivo phone with gimbal camera system',
      image: 'vivox50.jpg',
      generalSpecifications: {
        cpu: 'Snapdragon 765G',
        camera: { primary: '48MP', secondary: '13MP' },
        battery: 4200,
        display: '6.56-inch AMOLED'
      },
      colorVariants: [
        {
          color: 'Frost Blue',
          specVariations: [
            { ram: 8, storage: 128, price: 12000000, stock: 20 },
            { ram: 8, storage: 256, price: 14000000, stock: 25 }
          ]
        },
        {
          color: 'Alpha Gray',
          specVariations: [
            { ram: 8, storage: 128, price: 12000000, stock: 20 },
            { ram: 8, storage: 256, price: 14000000, stock: 25 }
          ]
        }
      ],
      minPrice: 12000000,
      minPriceWithRam: 8,
      minPriceWithStorage: 128,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    {
      name: 'Vivo Y20',
      model: 'Y20',
      description: 'Budget Vivo phone with large battery',
      image: 'vivoy20.jpg',
      generalSpecifications: {
        cpu: 'Snapdragon 460',
        camera: { primary: '13MP', secondary: '2MP' },
        battery: 5000,
        display: '6.51-inch IPS LCD'
      },
      colorVariants: [
        {
          color: 'Obsidian Black',
          specVariations: [
            { ram: 4, storage: 64, price: 4000000, stock: 50 },
            { ram: 4, storage: 128, price: 5000000, stock: 55 }
          ]
        },
        {
          color: 'Dawn White',
          specVariations: [
            { ram: 4, storage: 64, price: 4000000, stock: 50 },
            { ram: 4, storage: 128, price: 5000000, stock: 55 }
          ]
        }
      ],
      minPrice: 4000000,
      minPriceWithRam: 4,
      minPriceWithStorage: 64,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    // Xiaomi Products
    {
      name: 'Xiaomi Mi 11',
      model: 'Mi 11',
      description: 'Flagship Xiaomi phone with Snapdragon 888',
      image: 'mi11.jpg',
      generalSpecifications: {
        cpu: 'Snapdragon 888',
        camera: { primary: '108MP', secondary: '13MP' },
        battery: 4600,
        display: '6.81-inch AMOLED'
      },
      colorVariants: [
        {
          color: 'Horizon Blue',
          specVariations: [
            { ram: 8, storage: 128, price: 18000000, stock: 10 },
            { ram: 12, storage: 256, price: 20000000, stock: 15 }
          ]
        },
        {
          color: 'Cloud White',
          specVariations: [
            { ram: 8, storage: 128, price: 18000000, stock: 10 },
            { ram: 12, storage: 256, price: 20000000, stock: 15 }
          ]
        }
      ],
      minPrice: 18000000,
      minPriceWithRam: 8,
      minPriceWithStorage: 128,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    {
      name: 'Xiaomi Redmi Note 10',
      model: 'Redmi Note 10',
      description: 'Affordable Xiaomi phone with AMOLED display',
      image: 'redminote10.jpg',
      generalSpecifications: {
        cpu: 'Snapdragon 678',
        camera: { primary: '48MP', secondary: '8MP' },
        battery: 5000,
        display: '6.43-inch AMOLED'
      },
      colorVariants: [
        {
          color: 'Aqua Green',
          specVariations: [
            { ram: 4, storage: 64, price: 5000000, stock: 30 },
            { ram: 6, storage: 128, price: 7000000, stock: 35 }
          ]
        },
        {
          color: 'Shadow Black',
          specVariations: [
            { ram: 4, storage: 64, price: 5000000, stock: 30 },
            { ram: 6, storage: 128, price: 7000000, stock: 35 }
          ]
        }
      ],
      minPrice: 5000000,
      minPriceWithRam: 4,
      minPriceWithStorage: 64,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    {
      name: 'Xiaomi Poco X3 Pro',
      model: 'Poco X3 Pro',
      description: 'Performance-focused Xiaomi phone',
      image: 'mipocox3.jpg',
      generalSpecifications: {
        cpu: 'Snapdragon 860',
        camera: { primary: '48MP', secondary: '8MP' },
        battery: 5160,
        display: '6.67-inch IPS LCD'
      },
      colorVariants: [
        {
          color: 'Metal Bronze',
          specVariations: [
            { ram: 6, storage: 128, price: 8000000, stock: 20 },
            { ram: 8, storage: 256, price: 10000000, stock: 25 }
          ]
        },
        {
          color: 'Phantom Black',
          specVariations: [
            { ram: 6, storage: 128, price: 8000000, stock: 20 },
            { ram: 8, storage: 256, price: 10000000, stock: 25 }
          ]
        }
      ],
      minPrice: 8000000,
      minPriceWithRam: 6,
      minPriceWithStorage: 128,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null
    },
    {
      name: 'Xiaomi Mi Note 10',
      model: 'Mi Note 10',
      description: 'Xiaomi phone with penta-camera setup',
      image: 'minote10.jpg',
      generalSpecifications: {
        cpu: 'Snapdragon 730G',
        camera: { primary: '108MP', secondary: '12MP' },
        battery: 5260,
        display: '6.47-inch AMOLED'
      },
      colorVariants: [
        {
          color: 'Aurora Green',
          specVariations: [
            { ram: 6, storage: 128, price: 15000000, stock: 20 },
            { ram: 8, storage: 256, price: 17000000, stock: 25 }
          ]
        },
        {
          color: 'Glacier White',
          specVariations: [
            { ram: 6, storage: 128, price: 15000000, stock: 20 },
            { ram: 8, storage: 256, price: 17000000, stock: 25 }
          ]
        }
      ],
      minPrice: 15000000,
      minPriceWithRam: 6,
      minPriceWithStorage: 128,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null,
      isHot : true
    },

    //s24,14ultra,ip15

    {
      name: 'Samsung Galaxy S24 Ultra 5G',
      model: 'S24 Ultra 5G',
      description: 'Samsung Galaxy S24 Ultra 5G 512GB khi ra mắt đã tạo nên cơn sốt thị trường, đặc điểm nổi bật là chip Snapdragon 8 Gen 3 for Galaxy và camera 200 MP tích hợp AI. Mẫu điện thoại này hứa hẹn làm nổi bật trong năm 2024 với sức mạnh và nhiều tính năng đỉnh cao.',
      image: 's24ultra.jpg',
      os: 'Android 14',
      generalSpecifications: {
        cpu: 'Snapdragon 8 Gen 3 for Galaxy',
        camera: { primary: 'Chính 200 MP & Phụ 50 MP, 12 MP, 10 MP', secondary: '12 MP' },
        battery: 5000,
        display: 'Dynamic AMOLED 2X, 6.8", Quad HD+ (2K+)'
      },
      colorVariants: [
        {
          color: 'Xám',
          specVariations: [
            { ram: 12, storage: 256, price: 33990000, stock: 20 },
            { ram: 12, storage: 512, price: 37490000, stock: 25 }
          ]
        },
        {
          color: 'Tím',
          specVariations: [
            { ram: 12, storage: 256, price: 33990000, stock: 20 },
            { ram: 12, storage: 512, price: 35490000, stock: 25 }
          ]
        }
      ],
      minPrice: 33990000,
      minPriceWithRam: 12,
      minPriceWithStorage: 256,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null,
      customersPurchased: 345,
      isHot : true
    },
    {
      name: 'Xiaomi 14 Ultra 5G',
      model: '14 Ultra 5G',
      description: 'Xiaomi một lần nữa tái định nghĩa sự hoàn hảo trong ngành công nghệ di động với dòng sản phẩm mới nhất của mình, Xiaomi 14 Ultra. Đây không chỉ là một thiết bị thông minh mà còn là một tác phẩm nghệ thuật, chứa đựng trong mình những đột phá về mọi mặt từ thiết kế cho đến hiệu suất.',
      image: '14ultra5g.jpg',
      os: 'Android 14',
      generalSpecifications: {
        cpu: '	Snapdragon 8 Gen 3 8',
        camera: { primary: '4 camera 50 MP', secondary: '	32 MP' },
        battery: 5260,
        display: 'AMOLED 6.73" Quad HD+ (2K+)'
      },
      colorVariants: [
        {
          color: 'Bạc',
          specVariations: [
            { ram: 16, storage: 512, price: 32900000, stock: 20 }
          ]
        },
        {
          color: 'Đen',
          specVariations: [
            { ram: 16, storage: 512, price: 32900000, stock: 20 }
          ]
        }
      ],
      minPrice: 32900000,
      minPriceWithRam: 16,
      minPriceWithStorage: 512,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null,
      customersPurchased: 435,
      isHot : true
    },
    {
      name: 'iPhone 15',
      model: 'iPhone 15',
      description: 'Với những điều hết sức tuyệt vời trên iPhone 15 128GB mang lại, điều này giúp máy sẽ trở thành một trong những chiếc điện thoại đáng mua nhất năm 2023 và những năm tới. Không đơn thuần là một smartphone cơ bản mà đây còn là một món phụ kiện cao cấp giúp bạn toát lên được vẻ ngoài hào nhoáng sang trọng khi cầm nắm trên tay.',
      image: 'iphone15.jpg',
      os: 'iOS 17',
      generalSpecifications: {
        cpu: 'Apple A16 Bionic',
        camera: { primary: 'Chính 48 MP & Phụ 12 MP', secondary: '12 MP' },
        battery: 3349,
        display: 'OLED, 6.1", Super Retina XDR'
      },
      colorVariants: [
        {
          color: 'Đen',
          specVariations: [
            { ram: 6, storage: 128, price: 22990000, stock: 20 },
            { ram: 6, storage: 256, price: 25990000, stock: 25 }
          ]
        },
        {
          color: 'Hồng nhạt',
          specVariations: [
            { ram: 6, storage: 128, price: 22900000, stock: 20 },
            { ram: 6, storage: 256, price: 25990000, stock: 25 }
          ]
        }
      ],
      minPrice: 22990000,
      minPriceWithRam: 6,
      minPriceWithStorage: 128,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null,
      customersPurchased: 234,
      isHot : true
    },
    {
      name: 'iPhone 15 Pro',
      model: 'iPhone 15 Pro',
      description: 'Vào tháng 09/2023, cuối cùng Apple cũng đã chính thức giới thiệu iPhone 15 Pro 512GB thuộc dòng iPhone 15, tại sự kiện ra mắt thường niên với nhiều điểm đáng chú ý, nổi bật trong số đó có thể kể đến như sự góp mặt của chipset Apple A17 Pro có trên máy, thiết kế khung titan hay cổng Type-C lần đầu có mặt trên điện thoại iPhone.',
      image: 'iphone15promax.jpg',
      os: 'iOS 17',
      generalSpecifications: {
        cpu: 'Apple A17 Pro',
        camera: { primary: 'Chính 48 MP & Phụ 12 MP, 12 MP ', secondary: '12 MP' },
        battery: 4422,
        display: 'OLED, 6.7", Super Retina XDR'
      },
      colorVariants: [
        {
          color: 'Titan xanh',
          specVariations: [
            { ram: 8, storage: 512, price: 40990000, stock: 20 },
            { ram: 8, storage: 1024, price: 46900000, stock: 25 }
          ]
        },
        {
          color: 'Titan đen',
          specVariations: [
            { ram: 8, storage: 512, price: 40990000, stock: 20 },
            { ram: 8, storage: 1024, price: 46900000, stock: 25 }
          ]
        }
      ],
      minPrice: 40990000,
      minPriceWithRam: 8,
      minPriceWithStorage: 512,
      minDefaultPrice: 0,
      isSpecs: true,
      outOfStock: 'Còn hàng',
      productBrand: null,
      customersPurchased: 120,
      isHot : true
    }
  ];

  try {
    // Clear existing data

    await Brand.deleteMany({});
    await Product.deleteMany({});
    await Order.deleteMany({});
    await User.deleteMany({});
    await Inbox.deleteMany({});


    const users = await User.create(mockUsers);
    // Insert brands and get their IDs
    const insertedBrands = await Brand.insertMany(brands, { ordered: false });


    const brandMap = insertedBrands.reduce((map, brand) => {
      map[brand.brand] = brand._id;
      return map;
    }, {});

    // Assign brand IDs to products
    products.forEach(product => {
      product.productBrand = brandMap[product.name.split(' ')[0]];
    });

    // Insert products
    await Product.insertMany(products, { ordered: false });
    console.log('.')
    console.log('.')
    console.log('.')
    console.log('.')
    console.log('.')
    console.log('.')
    console.log('.')
    console.log('\x1b[32m%s\x1b[0m', 'Tạo dữ liệu thành công!');
    process.exit()
  } catch (error) {
    console.error('Tạo dữ liệu thất bại: ' + error.message);
  }
};