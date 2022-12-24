-- для хранения информации о пользователях
create TABLE IF NOT EXISTS Users(
    id SERIAL PRIMARY KEY,
    email VARCHAR UNIQUE NOT NULL,
    phoneNumber INTEGER UNIQUE NOT NULL,
    password VARCHAR NOT NULL
);

-- для хранения информации о продаваемых цветах 
create TABLE IF NOT EXISTS Flowers(
    id SERIAL PRIMARY KEY,
    price INTEGER,
    photoPath VARCHAR,
    description TEXT
);

-- для хранения информации о совершенных покупках (кто когда и на какую сумму)
create TABLE IF NOT EXISTS Transactions(
    id SERIAL PRIMARY KEY,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES Users (id),
    amount NUMERIC(8, 2),
    timePurchase TIMESTAMP
);

-- для зранения информации о совершенных покупках (какие именно цветы были куплены)
create TABLE IF NOT EXISTS PurchasedFlowers(
    transactionId INTEGER,
    FOREIGN KEY (transactionId) REFERENCES Transactions (id),
    flowerId INTEGER,
    FOREIGN KEY (flowerId) REFERENCES Flowers (id),
    numberFlowers SMALLINT,

    PRIMARY Key (transactionId, flowerId)
);

-- для хранения информации о содержимом корзины
create TABLE IF NOT EXISTS Carts(
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES Users (id),
    flowerId INTEGER,
    FOREIGN KEY (flowerId) REFERENCES Flowers (id),
    numberFlowers SMALLINT,

    PRIMARY KEY (userId, flowerId)
);
