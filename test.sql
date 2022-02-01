select firstname, lastname, product.name, price from person
inner join customerorder on customerorder.personId=person.personId
inner join product on customerorder.productNumber=product.productId;

        -- {
        --     "tableName":"customerorder",
        --     "columns":[
        --         "orderNumber integer not null primary key",
        --         "personId integer not null",
        --         "productNumber integer not null",
        --         "foreign key (personId) references person(id)",
        --         "foreign key (productNumber) references product(productId)"
        --     ],
        --     "data":[
        --        [1,1,1],
        --        [2,1,2],
        --        [3,2,2]
        --     ]
        -- }