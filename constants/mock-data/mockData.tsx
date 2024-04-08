export const mockFileData = [
  {
    fileHash: 'QmXp4FGDzFbPzcypwA6rLf1LuA2jT2Z3MgJYVJuY8rhJFm',
    name: 'Avatar',
    size: 2000,
  },
  {
    fileHash: 'QmV5T6Nw8SCFKe3t7H8KZuTyuX5DmLZ39uMMu5oBDHZFfv',
    name: 'The Dark Knight',
    size: 1800,
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFLd',
    name: 'Inception',
    size: 2200,
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFL3',
    name: 'Barbie',
    size: 2500,
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFL4',
    name: 'Minions',
    size: 2200,
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFL5',
    name: 'Minions 2',
    size: 2600,
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFL6',
    name: 'Minions 3',
    size: 2700,
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFL7',
    name: 'Minions 4',
    size: 2800,
  },
  {
    fileHash: 'QmUx6Qe3c56JpV93HZqo51FUsXbt7YvLpcRUPFDK5ewFL8',
    name: 'Minions 5',
    size: 2900,
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

export const mockMarketData2 = {
  fileHash: 'demo2',
  name: 'Minions 7',
  size: 2000,
  id: '2',
  ip: '192.168.1.103',
  port: 8080,
  price: 0.06,
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

export const User1 = {
  files: mockFileData,
  id: 'Pretend this is USER 1 ID',
  amount: 100000,
  transactions: mockTransaction,
};

export const User2 = {
  files: [],
  id: 'Pretend this is USER 2 ID',
  amount: 100000,
  transactions: mockTransaction,
};

export const User3 = {
  files: [],
  id: 'Pretend this is USER 3 ID',
  amount: 0,
  transactions: mockTransaction,
};
