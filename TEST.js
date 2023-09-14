//same id issues
// probably cannot use fixture id

const data = {
  get: "fixtures",
  parameters: {
    live: "all",
  },
  errors: [],
  results: 3,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      fixture: {
        id: 1071382,
        referee: null,
        timezone: "UTC",
        date: "2023-09-11T12:00:00+00:00",
        timestamp: 1694433600,
        periods: {
          first: 1694433600,
          second: null,
        },
        venue: {
          id: 11634,
          name: "Stadion Znamya",
          city: "Noginsk",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 31,
        },
      },
      league: {
        id: 650,
        name: "Second League - Group 3",
        country: "Russia",
        logo: "https://media-3.api-sports.io/football/leagues/650.png",
        flag: "https://media-1.api-sports.io/flags/ru.svg",
        season: 2023,
        round: "Group 3 - 8",
      },
      teams: {
        home: {
          id: 21537,
          name: "Kompozit",
          logo: "https://media-2.api-sports.io/football/teams/21537.png",
          winner: true,
        },
        away: {
          id: 6825,
          name: "Sakhalin",
          logo: "https://media-3.api-sports.io/football/teams/6825.png",
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 0,
      },
      score: {
        halftime: {
          home: 2,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 4,
            extra: null,
          },
          team: {
            id: 21537,
            name: "Kompozit",
            logo: "https://media-2.api-sports.io/football/teams/21537.png",
          },
          player: {
            id: null,
            name: "V. Gryaznov",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 9,
            extra: null,
          },
          team: {
            id: 21537,
            name: "Kompozit",
            logo: "https://media-1.api-sports.io/football/teams/21537.png",
          },
          player: {
            id: null,
            name: "V. Gryaznov",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1100659,
        referee: null,
        timezone: "UTC",
        date: "2023-09-11T12:00:00+00:00",
        timestamp: 1694433600,
        periods: {
          first: 1694433600,
          second: null,
        },
        venue: {
          id: 3385,
          name: "Hong Kong Stadium",
          city: "Hong Kong",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 31,
        },
      },
      league: {
        id: 10,
        name: "Friendlies",
        country: "World",
        logo: "https://media-2.api-sports.io/football/leagues/10.png",
        flag: null,
        season: 2023,
        round: "Friendlies 3",
      },
      teams: {
        home: {
          id: 4460,
          name: "Hong Kong",
          logo: "https://media-2.api-sports.io/football/teams/4460.png",
          winner: true,
        },
        away: {
          id: 5538,
          name: "Brunei",
          logo: "https://media-2.api-sports.io/football/teams/5538.png",
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 0,
      },
      score: {
        halftime: {
          home: 2,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 12,
            extra: null,
          },
          team: {
            id: 4460,
            name: "Hong Kong",
            logo: "https://media-3.api-sports.io/football/teams/4460.png",
          },
          player: {
            id: 110184,
            name: "E. Camargo",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 20,
            extra: null,
          },
          team: {
            id: 4460,
            name: "Hong Kong",
            logo: "https://media-2.api-sports.io/football/teams/4460.png",
          },
          player: {
            id: 110209,
            name: "C. Tan",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1102887,
        referee: null,
        timezone: "UTC",
        date: "2023-09-11T12:30:00+00:00",
        timestamp: 1694435400,
        periods: {
          first: 1694435400,
          second: null,
        },
        venue: {
          id: null,
          name: "Sân vận động Thiên Trường",
          city: "Nam Dinh",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 2,
        },
      },
      league: {
        id: 10,
        name: "Friendlies",
        country: "World",
        logo: "https://media-2.api-sports.io/football/leagues/10.png",
        flag: null,
        season: 2023,
        round: "Friendlies 3",
      },
      teams: {
        home: {
          id: 1542,
          name: "Vietnam",
          logo: "https://media-2.api-sports.io/football/teams/1542.png",
          winner: null,
        },
        away: {
          id: 1562,
          name: "Palestine",
          logo: "https://media-1.api-sports.io/football/teams/1562.png",
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [],
    },
  ],
};
