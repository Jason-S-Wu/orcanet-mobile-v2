export const mockFileData = [
  {
    fileHash:
      '048102a4f190995555a330eb8ae28fd8ab9b0e630033ba9377d54eb2d262a4eb',
    name: 'Pottery',
    size: 2000, // 2 GB
  },
  {
    fileHash:
      '1af813df540bd115290d73ae360e8134aa28bf72af331e713a7e1c850e6c045f',
    name: 'Dark-Green',
    size: 2000, // 2 GB
  },
  {
    fileHash:
      'eca144fa26342d9e5cc9ce9d9d1f889da7b9111cb1a2fead756243900a2c961a',
    name: 'Green',
    size: 2000, // 2 GB
  },
  {
    fileHash:
      '877f8f8ba012157ad72930c5cae3a001962b8223ff1ccc4ce917982143ed8ff8',
    name: 'Purple',
    size: 2000, // 2 GB
  },
  {
    fileHash:
      'c7c0b0caf20d657c0f8e1f9d1c28a94de941a85d9d5667b4f9eab31a7232d4a3',
    name: 'Hands',
    size: 2000, // 2 GB
  },
  {
    fileHash: 'QmXp4FGDzFbPzcypwA6rLf1LuA2jT2Z3MgJYVJuY8rhJFm',
    name: 'Avatar',
    size: 2000, // 2 GB
  },
  {
    fileHash: 'QmV5T6Nw8SCFKe3t7H8KZuTyuX5DmLZ39uMMu5oBDHZFfv',
    name: 'The Dark Knight',
    size: 1800, // 1.8 GB
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFLd',
    name: 'Inception',
    size: 2200, // 2.2 GB
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFL3',
    name: 'Barbie',
    size: 2500, // 2.5 GB
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFL4',
    name: 'Minions',
    size: 2200, // 1.2 GB
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFL5',
    name: 'Minions 2',
    size: 2600, // 1.2 GB
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFL6',
    name: 'Minions 3',
    size: 2700, // 1.2 GB
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFL7',
    name: 'Minions 4',
    size: 2800, // 1.2 GB
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFL8',
    name: 'Minions 5',
    size: 2900, // 1.2 GB
  },
  // Add more mock files as needed
];

export const mockUserData = [
  {
    id: '1',
    name: 'Alice',
    ip: '192.168.1.101',
    port: 8080,
    price: 0.05,
  },
  {
    id: '2',
    name: 'Bob',
    ip: '192.168.1.102',
    port: 8081,
    price: 0.06,
  },
  {
    id: '3',
    name: 'Charlie',
    ip: '192.168.1.103',
    port: 8082,
    price: 0.07,
  },
  {
    id: '4',
    name: 'David',
    ip: '192.168.1.104',
    port: 8083,
    price: 0.08,
  },
  {
    id: '5',
    name: 'Eve',
    ip: '192.168.1.105',
    port: 8084,
    price: 0.09,
  },
];

export const mockTransaction = [
  {
    id: 'mno345hbdou18dh2h12qq',
    note: 'minions1',
    status: 'pending',
    date: '2024-04-05',
    amount: 35.25,
  },
  {
    id: 'mno345hbdou18dh2h12pp',
    note: 'minions2',
    status: 'pending',
    date: '2024-04-04',
    amount: 135.25,
  },
  {
    id: 'mno345hbdou18dh2ll2u8',
    note: 'minions3',
    status: 'pending',
    date: '2024-04-03',
    amount: 235.25,
  },
  {
    id: 'mno345jjdou18dh2h12u8',
    note: 'minions4',
    status: 'success',
    date: '2024-04-02',
    amount: 335.25,
  },
  {
    id: 'mno345hbdou18dh2h12u8',
    note: 'minions5',
    status: 'success',
    date: '2024-04-01',
    amount: 435.25,
  },
];

export const mockMarketData1 = {
  fileHash: 'demo1',
  name: 'Minions 6',
  size: 3000,
  id: '1',
  ip: '192.168.1.101',
  port: 8080,
  price: 0.05,
};

export const mockStatsMonthData = [
  {label: '', value: 0},
  {label: 'Jan', value: 50},
  {label: 'Feb', value: 90},
  {label: 'Mar', value: 70},
  {label: 'Apr', value: 120},
  {label: 'May', value: 180},
  {label: 'Jun', value: 140},
  {label: 'Jul', value: 90},
];
