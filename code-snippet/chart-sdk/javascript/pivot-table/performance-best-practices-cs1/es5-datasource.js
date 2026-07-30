var gData = [
    {
        'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1001,
        'Sold': 2

    },
    {
        'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1002,
        'Sold': 3

    },
    {
        'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1003,
        'Sold': 5

    },
    {
        'Date': '1/1/2015 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1004,
        'Sold': 1

    },
    {
        'Date': '1/1/2016 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1005,
        'Sold': 1

    },
    {
        'Date': '1/1/2016 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1001,
        'Sold': 2

    },
    {
        'Date': '1/1/2016 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1002,
        'Sold': 1

    },
    {
        'Date': '1/1/2016 20:18:15 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1003,
        'Sold': 3
    },
    {
        'Date': '2/2/2016 10:22:07 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1004,
        'Sold': 2

    },
    {
        'Date': '2/10/2016 10:23:07 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1005,
        'Sold': 4
    },
    {
        'Date': '9/1/2017 04:14:43 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1001,
        'Sold': 1
    },
    
    {
        'Date': '9/29/2017 05:14:43 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1002,
        'Sold': 3
    },
    {
        'Date': '9/05/2017 05:14:43 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Bikes',
        'Product_ID': 1003,
        'Sold': 2
    },
    {
        'Date': '9/12/2017 04:14:43 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1004,
        'Sold': 3
    },
    {
        'Date': '9/25/2017 04:15:43 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1005,
        'Sold': 2
    },
    {
        'Date': '9/29/2017 05:14:43 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Clothings',
        'Product_ID': 1006,
        'Sold': 7
    },
    {
        'Date': '1/3/2018 17:26:11 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1004,
        'Sold': 5

    },
    {
        'Date': '1/4/2018 15:26:11 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1001,
        'Sold': 4

    },
    {
        'Date': '1/5/2018 17:30:11 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1002,
        'Sold': 3

    },
    {
        'Date': '1/8/2018 07:26:11 GMT+0530 (India Standard Time)',
        'Product_Categories': 'Accessories',
        'Product_ID': 1003,
        'Sold': 2

    },
    ];

    var Group_Data = getGroupData(gData);
    function getGroupData(data) {
        var date;
        var products = ['', 'Bottles and Cages', 'Cleaners', 'Fenders', 'Mountain Bikes', 'Road Bikes', 'Touring Bikes', 'Gloves', 'Jerseys', 'Shorts', 'Vests'];
        var amount = [0, 2, 3, 8, 60, 75, 65, 3, 5, 4, 2];
        for (var ln = 0, lt = data.length; ln < lt; ln++) {
            date = new Date(data[ln].Date.toString());
            data[ln].Date = date.toString();
            data[ln].Products = products[data[ln].Product_ID - 1000];
            data[ln].Sold = data[ln].Sold * (date.getFullYear() === 2015 ? 3 : date.getFullYear() === 2016 ? 4 : date.getFullYear() === 2017 ? 2 : 5);
            data[ln].Amount = ((date.getFullYear() === 2018 ? 2 : 0) + data[ln].Sold) * amount[data[ln].Product_ID - 1000];
        }
        return data;
    }