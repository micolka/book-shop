enum Category {
    fiction = 'fiction',
    fantasy = 'fantasy',
    documentary = 'documentary',
    crime = 'crime novel',
    poetry = 'poetry',
}

export interface BookModel {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    createDate: number;
    isAvailable: boolean;
}

export const bookList: BookModel[] = [
    {
        id: 1,
        name: 'Last Man Standing',
        description:
            'The sole survivor of a devastating ambush, FBI Hostage Rescue Team agent Web London would do anything to find out what really happened that night--and a ten year old boy may be the unexpected key in this #1 New York Times bestselling thriller.',
        price: 20,
        category: Category.crime,
        createDate: 2017,
        isAvailable: true,
    },
    {
        id: 2,
        name: 'The Kite Runner',
        description:
            'The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father’s servant, caught in the tragic sweep of history, The Kite Runner transports readers to Afghanistan at a tense and crucial moment of change and destruction. A powerful story of friendship, it is also about the power of reading, the price of betrayal, and the possibility of redemption; and an exploration of the power of fathers over sons—their love, their sacrifices, their lies.',
        price: 105,
        category: Category.fiction,
        createDate: 2003,
        isAvailable: true,
    },
    {
        id: 3,
        name: 'The Hill We Climb',
        description:
            'Amanda Gorman’s powerful and historic poem “The Hill We Climb,” read at President Joe Biden’s inauguration, is now available as a collectible gift edition.',
        price: 12.25,
        category: Category.poetry,
        createDate: 2021,
        isAvailable: false,
    },
];
