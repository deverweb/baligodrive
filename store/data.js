const bikes = [
  {
    id: "9269",
    hourPriceUsd: "18",
    img: "https://rentsyst.com/static/cache/vehicle/22507/vehicle_list_33385.png",
    allImages: [
      "https://rentsyst.com/static/cache/vehicle/22507/vehicle_thumbnail_33385.png",
    ],
    description: {
      title: "Описание",
      value: "",
    },
    brand: "HONDA",
    group: "Honda PCX 160 cc + Test",
    mark: "PCX 160 CC",
    name: "HONDA PCX 160 CC",
    drawing: "Test",
  },
  {
    id: "9221",
    hourPriceUsd: "15",
    img: "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg",
    allImages: [
      "https://rentsyst.com/static/cache/vehicle/22441/vehicle_thumbnail_33445.jpg",
    ],
    brand: "HONDA",
    group: "Honda Vario 160 cc + Red Bull",
    mark: "VARIO 160 CC",
    name: "HONDA VARIO 160 CC",
    drawing: "Red Bull",
  },
  {
    id: "8365",
    hourPriceUsd: "18",
    img: "https://rentsyst.com/static/cache/vehicle/20815/vehicle_list_33439.jpg",
    allImages: [
      "https://rentsyst.com/static/cache/vehicle/20815/vehicle_thumbnail_33439.jpg",
    ],
    brand: "HONDA",
    group: "Honda PCX 160 cc + Red Bull",
    mark: "PCX 160 CC",
    name: "HONDA PCX 160 CC",
    drawing: "Red Bull",
  },
];
const location =
  "Jl. Batu Mejan Canggu No.38, Canggu, Kec. Kuta Utara, Kabupatén Badung, Bali 80351, Индонезия";
const bikeModels = [
  {
    name: "HONDA PCX 160 CC",
    drawings: {
      id: "9269",
      year: 2023,
      number_seats: 1,
      number_doors: 2,
      large_bags: 1,
      small_bags: 1,
      odometer: 0,
      brand: "HONDA",
      mark: "PCX 160 CC",
      group: "Honda PCX 160 cc + Test",
      color: {
        title: "Red",
        code: "#ff0205",
      },
      type: "Bike",
      body_type: "Bicycle",
      min_price: "18.00",
      price: "18.00",
      status: "active",
      currency: "$",
      fuel: "Gasoline",
      volume_tank: null,
      volume_engine: null,
      transmission: "Automatic Transmission (AT)",
      locations: [
        [
          {
            id: 4913,
            name: "BaliGo Bike Canggu",
            address:
              "Jl. Batu Mejan Canggu No.38, Canggu, Kec. Kuta Utara, Kabupatén Badung, Bali 80351, Индонезия",
          },
        ],
      ],
      options: [[]],
      thumbnail:
        "https://rentsyst.com/static/cache/vehicle/22507/vehicle_list_33385.png",
      thumbnails: [
        "https://rentsyst.com/static/cache/vehicle/22507/vehicle_thumbnail_33385.png",
      ],
      photos: [
        "https://rentsyst.com/static/cache/vehicle/22507/vehicle_list_33385.png",
      ],
      custom_fields: [
        {
          title: "Описание",
          value: "",
        },
      ],
      _links: {
        self: {
          href: "http://api.rentsyst.com/v1/vehicle/vehicle/view?id=22507",
        },
      },
      periods_price: [],
      insurance_deposit: 0,
    },
  },
  {
    name: "HONDA VARIO 160 CC",
    drawings: {
      id: "9221",
      year: 2023,
      number_seats: 1,
      number_doors: 2,
      large_bags: 1,
      small_bags: 1,
      odometer: 0,
      brand: "HONDA",
      mark: "VARIO 160 CC",
      group: "Honda Vario 160 cc + Red Bull",
      color: {
        title: "Red",
        code: "#ff0205",
      },
      type: "Bike",
      body_type: "Scooter",
      min_price: "23.00",
      price: "15.00",
      status: "active",
      currency: "$",
      fuel: "Gasoline",
      volume_tank: null,
      volume_engine: null,
      transmission: "Automatic Transmission (AT)",
      locations: [
        [
          {
            id: 4913,
            name: "BaliGo Bike Canggu",
            address:
              "Jl. Batu Mejan Canggu No.38, Canggu, Kec. Kuta Utara, Kabupatén Badung, Bali 80351, Индонезия",
          },
        ],
      ],
      options: [
        [
          {
            id: "usb",
            name: "USB",
            icon: "trunk",
          },
        ],
      ],
      thumbnail:
        "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg",
      thumbnails: [
        "https://rentsyst.com/static/cache/vehicle/22441/vehicle_thumbnail_33445.jpg",
      ],
      photos: [
        "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg",
      ],
      custom_fields: [],
      _links: {
        self: {
          href: "http://api.rentsyst.com/v1/vehicle/vehicle/view?id=22441",
        },
      },
      periods_price: [
        {
          period_from: 5,
          period_to: 7,
          discount: 0,
          name: "Vario 5-7 Days",
          type: "day",
          limit_value: " Km/day",
          limit_price: " $ / Km",
          currency: "$",
        },
        {
          period_from: 8,
          period_to: 14,
          discount: -20,
          name: "Vario 8-14 Days",
          type: "day",
          limit_value: " Km/day",
          limit_price: " $ / Km",
          currency: "$",
        },
        {
          period_from: 15,
          period_to: 21,
          discount: -40,
          name: "Vario 15-21 Days",
          type: "day",
          limit_value: " Km/day",
          limit_price: " $ / Km",
          currency: "$",
        },
        {
          period_from: 22,
          period_to: 31,
          discount: -53.33333,
          name: "22-31 Days",
          type: "day",
          limit_value: " Km/day",
          limit_price: " $ / Km",
          currency: "$",
        },
      ],
      insurance_deposit: 0,
    },
  },
  {
    name: "HONDA PCX 160 CC",
    drawings: {
      id: "8365",
      year: 2023,
      number_seats: 2,
      number_doors: 2,
      large_bags: 1,
      small_bags: 1,
      odometer: 0,
      brand: "HONDA",
      mark: "PCX 160 CC",
      group: "Honda PCX 160 cc + Red Bull",
      color: {
        title: "Red",
        code: "#ff0205",
      },
      type: "Bike",
      body_type: "Scooter",
      min_price: "27.00",
      price: "18.00",
      status: "active",
      currency: "$",
      fuel: "Gasoline",
      volume_tank: null,
      volume_engine: 155,
      transmission: "Automatic Transmission (AT)",
      locations: [
        [
          {
            id: 4913,
            name: "BaliGo Bike Canggu",
            address:
              "Jl. Batu Mejan Canggu No.38, Canggu, Kec. Kuta Utara, Kabupatén Badung, Bali 80351, Индонезия",
          },
        ],
      ],
      options: [
        [
          {
            id: "usb",
            name: "USB",
            icon: "trunk",
          },
        ],
      ],
      thumbnail:
        "https://rentsyst.com/static/cache/vehicle/20815/vehicle_list_33439.jpg",
      thumbnails: [
        "https://rentsyst.com/static/cache/vehicle/20815/vehicle_thumbnail_33439.jpg",
      ],
      photos: [
        "https://rentsyst.com/static/cache/vehicle/20815/vehicle_list_33439.jpg",
      ],
      custom_fields: [],
      _links: {
        self: {
          href: "http://api.rentsyst.com/v1/vehicle/vehicle/view?id=20815",
        },
      },
      periods_price: [
        {
          period_from: 5,
          period_to: 7,
          discount: 0,
          name: "PCX 5-7 Days",
          type: "day",
          limit_value: " Km/day",
          limit_price: " $ / Km",
          currency: "$",
        },
        {
          period_from: 8,
          period_to: 14,
          discount: -16.6667,
          name: "PCX 8-14 Days",
          type: "day",
          limit_value: " Km/day",
          limit_price: " $ / Km",
          currency: "$",
        },
        {
          period_from: 15,
          period_to: 21,
          discount: -33.33333,
          name: "PCX 15-21 Days",
          type: "day",
          limit_value: " Km/day",
          limit_price: " $ / Km",
          currency: "$",
        },
        {
          period_from: 22,
          period_to: 31,
          discount: -50,
          name: "PCX 22-31 days",
          type: "day",
          limit_value: " Km/day",
          limit_price: " $ / Km",
          currency: "$",
        },
      ],
      insurance_deposit: 0,
    },
  },
];
const bikeModelsArray = [
  {
    model: "HONDA PCX 160 CC",
    bikes: [
      {
        id: "9269",
        hourPriceUsd: "18",
        img: "https://rentsyst.com/static/cache/vehicle/22507/vehicle_list_33385.png",
        allImages: [
          "https://rentsyst.com/static/cache/vehicle/22507/vehicle_thumbnail_33385.png",
        ],
        description: {
          title: "Описание",
          value: "",
        },
        brand: "HONDA",
        group: "Honda PCX 160 cc + Test",
        mark: "PCX 160 CC",
        name: "HONDA PCX 160 CC",
        drawing: "Test",
      },
      {
        id: "8365",
        hourPriceUsd: "18",
        img: "https://rentsyst.com/static/cache/vehicle/20815/vehicle_list_33439.jpg",
        allImages: [
          "https://rentsyst.com/static/cache/vehicle/20815/vehicle_thumbnail_33439.jpg",
        ],
        brand: "HONDA",
        group: "Honda PCX 160 cc + Red Bull",
        mark: "PCX 160 CC",
        name: "HONDA PCX 160 CC",
        drawing: "Red Bull",
      },
    ],
    id: "9269",
    hourPriceUsd: "18",
    img: "https://rentsyst.com/static/cache/vehicle/22507/vehicle_list_33385.png",
    allImages: [
      "https://rentsyst.com/static/cache/vehicle/22507/vehicle_thumbnail_33385.png",
    ],
    description: {
      title: "Описание",
      value: "",
    },
    brand: "HONDA",
    group: "Honda PCX 160 cc + Test",
    mark: "PCX 160 CC",
    name: "HONDA PCX 160 CC",
    drawing: "Test",
  },
  {
    model: "HONDA VARIO 160 CC",
    bikes: [
      {
        id: "9221",
        hourPriceUsd: "15",
        img: "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg",
        allImages: [
          "https://rentsyst.com/static/cache/vehicle/22441/vehicle_thumbnail_33445.jpg",
        ],
        brand: "HONDA",
        group: "Honda Vario 160 cc + Red Bull",
        mark: "VARIO 160 CC",
        name: "HONDA VARIO 160 CC",
        drawing: "Red Bull",
      },
    ],
    id: "9221",
    hourPriceUsd: "15",
    img: "https://rentsyst.com/static/cache/vehicle/22441/vehicle_list_33445.jpg",
    allImages: [
      "https://rentsyst.com/static/cache/vehicle/22441/vehicle_thumbnail_33445.jpg",
    ],
    brand: "HONDA",
    group: "Honda Vario 160 cc + Red Bull",
    mark: "VARIO 160 CC",
    name: "HONDA VARIO 160 CC",
    drawing: "Red Bull",
  },
];