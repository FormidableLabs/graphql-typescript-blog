export interface Book {
  id: number;
  name: string;
  ISBN: string;
  Authors?: string[];
  NumberOfPages: number;
  Publisher: string;
  MediaType: string;
  Country: string;
  releaseDate: string;
  FollowedBy?: number;
}

export const books: Book[] = [
  {
    id: 1,
    name: "A Game of Thrones",
    ISBN: "978-0553103540",
    Authors: ["George R. R. Martin"],
    NumberOfPages: 694,
    Publisher: "Bantam Books",
    MediaType: "Hardcover",
    Country: "United States",
    releaseDate: "1996-08-01T00:00:00",

    FollowedBy: 2
  },
  {
    id: 2,
    name: "A Clash of Kings",
    ISBN: "978-0553108033",
    Authors: ["George R. R. Martin"],
    NumberOfPages: 768,
    Publisher: "Bantam Books",
    MediaType: "Hardback",
    Country: "United States",
    releaseDate: "1999-02-02T00:00:00",

    FollowedBy: 3
  },
  {
    id: 3,
    name: "A Storm of Swords",
    ISBN: "978-0553106633",
    Authors: ["George R. R. Martin"],
    NumberOfPages: 992,
    Publisher: "Bantam Books",
    MediaType: "Hardcover",
    Country: "United States",
    releaseDate: "2000-10-31T00:00:00",

    FollowedBy: 5
  },
  {
    id: 4,
    name: "The Hedge Knight",
    ISBN: "978-0976401100",
    Authors: ["George R. R. Martin"],
    NumberOfPages: 164,
    Publisher: "Dabel Brothers Publishing",
    MediaType: "Graphic Novel",
    Country: "United States",
    releaseDate: "2005-03-09T00:00:00",

    FollowedBy: 6
  },
  {
    id: 5,
    name: "A Feast for Crows",
    ISBN: "978-0553801507",
    Authors: ["George R. R. Martin"],
    NumberOfPages: 784,
    Publisher: "Bantam Books",
    MediaType: "Hardcover",
    Country: "United Status",
    releaseDate: "2005-11-08T00:00:00",

    FollowedBy: 8
  },
  {
    id: 6,
    name: "The Sworn Sword",
    ISBN: "978-0785126508",
    Authors: ["George R. R. Martin"],
    NumberOfPages: 152,
    Publisher: "Marvel",
    MediaType: "Hardcover",
    Country: "United States",
    releaseDate: "2008-06-18T00:00:00",

    FollowedBy: 7
  },
  {
    id: 7,
    name: "The Mystery Knight",
    ISBN: "978-0765360267",
    Authors: ["George R. R. Martin"],
    NumberOfPages: 416,
    Publisher: "Tor Fantasy",
    MediaType: "Paperback",
    Country: "United States",
    releaseDate: "2011-03-29T00:00:00"
  },
  {
    id: 8,
    name: "A Dance with Dragons",
    ISBN: "978-0553801477",
    Authors: ["George R. R. Martin"],
    NumberOfPages: 1040,
    Publisher: "Bantam Books",
    MediaType: "Hardcover",
    Country: "United States",
    releaseDate: "2011-07-12T00:00:00"
  },
  {
    id: 9,
    name: "The Princess and the Queen",
    ISBN: "978-0765332066",
    Authors: ["George R. R. Martin"],
    NumberOfPages: 784,
    Publisher: "Tor Books",
    MediaType: "Hardcover",
    Country: "United States",
    releaseDate: "2013-12-03T00:00:00"
  },
  {
    id: 10,
    name: "The Rogue Prince",
    ISBN: "978-0345537263",
    Authors: ["George R. R. Martin"],
    NumberOfPages: 832,
    Publisher: "Bantam Books",
    MediaType: "Hardcover",
    Country: "United States",
    releaseDate: "2014-06-17T00:00:00"
  },
  {
    id: 11,
    name: "The World of Ice and Fire",
    ISBN: "978-0553805444",
    Authors: ["Elio Garcia", "Linda Antonsson", "George R. R. Martin"],
    NumberOfPages: 336,
    Publisher: "Bantam Books",
    MediaType: "Hardcover",
    Country: "United States",
    releaseDate: "2014-10-28T00:00:00"
  },
  {
    id: 12,
    name: "A Knight of the Seven Kingdoms",
    ISBN: "978-0345533487",
    Authors: ["George R. R. Martin"],
    NumberOfPages: 368,
    Publisher: "Bantam Books",
    MediaType: "Hardcover",
    Country: "United States",
    releaseDate: "2015-10-06T00:00:00"
  }
];
