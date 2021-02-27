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
    author: string;
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
        author: 'David Baldacci',
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
        author: 'Khaled Hosseini',
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
        author: 'Amanda Gorman',
        description:
            'Amanda Gorman’s powerful and historic poem “The Hill We Climb,” read at President Joe Biden’s inauguration, is now available as a collectible gift edition.',
        price: 12.25,
        category: Category.poetry,
        createDate: 2021,
        isAvailable: false,
    },
    {
        id: 4,
        name: "Alice's Adventures in Wonderland",
        author: 'Lewis Carroll',
        description:
            "One of the English language's most popular and frequently quoted books, Alice's Adventures in Wonderland was the creation of Charles Lutwidge Dodgson (1832–1898), a distinguished scholar and mathematician who wrote under the pseudonym of Lewis Carroll. Intended for young readers but enjoyed equally by adults, the fantastic tale transformed children's literature, liberating it from didactic constraints.",
        price: 2.99,
        category: Category.fantasy,
        createDate: 1865,
        isAvailable: true,
    },
];
