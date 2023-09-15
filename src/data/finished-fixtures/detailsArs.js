export const arsdata = {
  get: "fixtures",
  parameters: {
    id: "1035038",
  },
  errors: [],
  results: 1,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      fixture: {
        id: 1035038,
        referee: "M. Oliver",
        timezone: "UTC",
        date: "2023-08-12T11:30:00+00:00",
        timestamp: 1691839800,
        periods: {
          first: 1691839800,
          second: 1691843400,
        },
        venue: {
          id: 494,
          name: "Emirates Stadium",
          city: "London",
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90,
        },
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media-4.api-sports.io/football/leagues/39.png",
        flag: "https://media-4.api-sports.io/flags/gb.svg",
        season: 2023,
        round: "Regular Season - 1",
      },
      teams: {
        home: {
          id: 42,
          name: "Arsenal",
          logo: "https://media-4.api-sports.io/football/teams/42.png",
          winner: true,
        },
        away: {
          id: 65,
          name: "Nottingham Forest",
          logo: "https://media-4.api-sports.io/football/teams/65.png",
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 1,
      },
      score: {
        halftime: {
          home: 2,
          away: 0,
        },
        fulltime: {
          home: 2,
          away: 1,
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
            elapsed: 26,
            extra: null,
          },
          team: {
            id: 42,
            name: "Arsenal",
            logo: "https://media-4.api-sports.io/football/teams/42.png",
          },
          player: {
            id: 1468,
            name: "E. Nketiah",
          },
          assist: {
            id: 127769,
            name: "Gabriel Martinelli",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 28,
            extra: null,
          },
          team: {
            id: 65,
            name: "Nottingham Forest",
            logo: "https://media-4.api-sports.io/football/teams/65.png",
          },
          player: {
            id: 2771,
            name: "Ola Aina",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: {
            elapsed: 32,
            extra: null,
          },
          team: {
            id: 42,
            name: "Arsenal",
            logo: "https://media-4.api-sports.io/football/teams/42.png",
          },
          player: {
            id: 1460,
            name: "B. Saka",
          },
          assist: {
            id: 22090,
            name: "W. Saliba",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 45,
            extra: 5,
          },
          team: {
            id: 42,
            name: "Arsenal",
            logo: "https://media-4.api-sports.io/football/teams/42.png",
          },
          player: {
            id: 38746,
            name: "Jurriën Timber",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: {
            elapsed: 50,
            extra: null,
          },
          team: {
            id: 42,
            name: "Arsenal",
            logo: "https://media-4.api-sports.io/football/teams/42.png",
          },
          player: {
            id: 38746,
            name: "J. Timber",
          },
          assist: {
            id: 2597,
            name: "T. Tomiyasu",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 71,
            extra: null,
          },
          team: {
            id: 65,
            name: "Nottingham Forest",
            logo: "https://media-4.api-sports.io/football/teams/65.png",
          },
          player: {
            id: 275170,
            name: "Danilo",
          },
          assist: {
            id: 8598,
            name: "T. Awoniyi",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 72,
            extra: null,
          },
          team: {
            id: 65,
            name: "Nottingham Forest",
            logo: "https://media-4.api-sports.io/football/teams/65.png",
          },
          player: {
            id: 2771,
            name: "O. Aina",
          },
          assist: {
            id: 138780,
            name: "N. Williams",
          },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: {
            elapsed: 74,
            extra: null,
          },
          team: {
            id: 42,
            name: "Arsenal",
            logo: "https://media-4.api-sports.io/football/teams/42.png",
          },
          player: {
            id: 1468,
            name: "E. Nketiah",
          },
          assist: {
            id: 1946,
            name: "L. Trossard",
          },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: {
            elapsed: 80,
            extra: null,
          },
          team: {
            id: 65,
            name: "Nottingham Forest",
            logo: "https://media-4.api-sports.io/football/teams/65.png",
          },
          player: {
            id: 129711,
            name: "B. Johnson",
          },
          assist: {
            id: 153430,
            name: "A. Elanga",
          },
          type: "subst",
          detail: "Substitution 3",
          comments: null,
        },
        {
          time: {
            elapsed: 81,
            extra: null,
          },
          team: {
            id: 65,
            name: "Nottingham Forest",
            logo: "https://media-4.api-sports.io/football/teams/65.png",
          },
          player: {
            id: 24882,
            name: "Orel Mangala",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: "Foul",
        },
        {
          time: {
            elapsed: 82,
            extra: null,
          },
          team: {
            id: 65,
            name: "Nottingham Forest",
            logo: "https://media-4.api-sports.io/football/teams/65.png",
          },
          player: {
            id: 8598,
            name: "T. Awoniyi",
          },
          assist: {
            id: 153430,
            name: "A. Elanga",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 86,
            extra: null,
          },
          team: {
            id: 42,
            name: "Arsenal",
            logo: "https://media-4.api-sports.io/football/teams/42.png",
          },
          player: {
            id: 127769,
            name: "Gabriel Martinelli",
          },
          assist: {
            id: 22224,
            name: "Gabriel Magalhães",
          },
          type: "subst",
          detail: "Substitution 3",
          comments: null,
        },
        {
          time: {
            elapsed: 90,
            extra: 2,
          },
          team: {
            id: 42,
            name: "Arsenal",
            logo: "https://media-4.api-sports.io/football/teams/42.png",
          },
          player: {
            id: 19959,
            name: "Benjamin White",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: "Time wasting",
        },
        {
          time: {
            elapsed: 90,
            extra: null,
          },
          team: {
            id: 65,
            name: "Nottingham Forest",
            logo: "https://media-4.api-sports.io/football/teams/65.png",
          },
          player: {
            id: 1746,
            name: "J. Worrall",
          },
          assist: {
            id: 18931,
            name: "C. Wood",
          },
          type: "subst",
          detail: "Substitution 4",
          comments: null,
        },
        {
          time: {
            elapsed: 90,
            extra: null,
          },
          team: {
            id: 65,
            name: "Nottingham Forest",
            logo: "https://media-4.api-sports.io/football/teams/65.png",
          },
          player: {
            id: 24882,
            name: "O. Mangala",
          },
          assist: {
            id: 2991,
            name: "C. Kouyaté",
          },
          type: "subst",
          detail: "Substitution 5",
          comments: null,
        },
      ],
      lineups: [
        {
          team: {
            id: 42,
            name: "Arsenal",
            logo: "https://media-4.api-sports.io/football/teams/42.png",
            colors: {
              player: {
                primary: "e10000",
                number: "ffffff",
                border: "e10000",
              },
              goalkeeper: {
                primary: "44c62a",
                number: "ffffff",
                border: "44c62a",
              },
            },
          },
          coach: {
            id: 7248,
            name: "Mikel Arteta",
            photo: "https://media-4.api-sports.io/football/coachs/7248.png",
          },
          formation: "4-3-3",
          startXI: [
            {
              player: {
                id: 20355,
                name: "A. Ramsdale",
                number: 1,
                pos: "G",
                grid: "1:1",
              },
            },
            {
              player: {
                id: 49,
                name: "T. Partey",
                number: 5,
                pos: "D",
                grid: "2:4",
              },
            },
            {
              player: {
                id: 19959,
                name: "B. White",
                number: 4,
                pos: "D",
                grid: "2:3",
              },
            },
            {
              player: {
                id: 22090,
                name: "W. Saliba",
                number: 2,
                pos: "D",
                grid: "2:2",
              },
            },
            {
              player: {
                id: 38746,
                name: "J. Timber",
                number: 12,
                pos: "D",
                grid: "2:1",
              },
            },
            {
              player: {
                id: 37127,
                name: "M. Ødegaard",
                number: 8,
                pos: "M",
                grid: "3:3",
              },
            },
            {
              player: {
                id: 2937,
                name: "D. Rice",
                number: 41,
                pos: "M",
                grid: "3:2",
              },
            },
            {
              player: {
                id: 978,
                name: "K. Havertz",
                number: 29,
                pos: "M",
                grid: "3:1",
              },
            },
            {
              player: {
                id: 1460,
                name: "B. Saka",
                number: 7,
                pos: "F",
                grid: "4:3",
              },
            },
            {
              player: {
                id: 1468,
                name: "E. Nketiah",
                number: 14,
                pos: "F",
                grid: "4:2",
              },
            },
            {
              player: {
                id: 127769,
                name: "Gabriel Martinelli",
                number: 11,
                pos: "F",
                grid: "4:1",
              },
            },
          ],
          substitutes: [
            {
              player: {
                id: 2597,
                name: "T. Tomiyasu",
                number: 18,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 1946,
                name: "L. Trossard",
                number: 19,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 22224,
                name: "Gabriel Magalhães",
                number: 6,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 1161,
                name: "E. Smith Rowe",
                number: 10,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 41725,
                name: "Fábio Vieira",
                number: 21,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 2289,
                name: "Jorginho",
                number: 20,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 727,
                name: "R. Nelson",
                number: 24,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 169295,
                name: "K. Hein",
                number: 31,
                pos: "G",
                grid: null,
              },
            },
            {
              player: {
                id: 61431,
                name: "J. Kiwior",
                number: 15,
                pos: "D",
                grid: null,
              },
            },
          ],
        },
        {
          team: {
            id: 65,
            name: "Nottingham Forest",
            logo: "https://media-4.api-sports.io/football/teams/65.png",
            colors: {
              player: {
                primary: "ffffff",
                number: "2f3b53",
                border: "ffffff",
              },
              goalkeeper: {
                primary: "ffff33",
                number: "ffffff",
                border: "ffff33",
              },
            },
          },
          coach: {
            id: 98,
            name: "S. Cooper",
            photo: "https://media-4.api-sports.io/football/coachs/98.png",
          },
          formation: "3-4-3",
          startXI: [
            {
              player: {
                id: 50999,
                name: "M. Turner",
                number: 1,
                pos: "G",
                grid: "1:1",
              },
            },
            {
              player: {
                id: 18739,
                name: "W. Boly",
                number: 30,
                pos: "D",
                grid: "2:3",
              },
            },
            {
              player: {
                id: 1746,
                name: "J. Worrall",
                number: 4,
                pos: "D",
                grid: "2:2",
              },
            },
            {
              player: {
                id: 44811,
                name: "S. McKenna",
                number: 26,
                pos: "D",
                grid: "2:1",
              },
            },
            {
              player: {
                id: 163,
                name: "S. Aurier",
                number: 24,
                pos: "M",
                grid: "3:4",
              },
            },
            {
              player: {
                id: 19305,
                name: "R. Yates",
                number: 22,
                pos: "M",
                grid: "3:3",
              },
            },
            {
              player: {
                id: 24882,
                name: "O. Mangala",
                number: 5,
                pos: "M",
                grid: "3:2",
              },
            },
            {
              player: {
                id: 2771,
                name: "O. Aina",
                number: 43,
                pos: "M",
                grid: "3:1",
              },
            },
            {
              player: {
                id: 275170,
                name: "Danilo",
                number: 28,
                pos: "F",
                grid: "4:3",
              },
            },
            {
              player: {
                id: 129711,
                name: "B. Johnson",
                number: 20,
                pos: "F",
                grid: "4:2",
              },
            },
            {
              player: {
                id: 18746,
                name: "M. Gibbs-White",
                number: 10,
                pos: "F",
                grid: "4:1",
              },
            },
          ],
          substitutes: [
            {
              player: {
                id: 8598,
                name: "T. Awoniyi",
                number: 9,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 138780,
                name: "N. Williams",
                number: 7,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 153430,
                name: "A. Elanga",
                number: 21,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 18931,
                name: "C. Wood",
                number: 11,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 2991,
                name: "C. Kouyaté",
                number: 8,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 62,
                name: "E. Horvath",
                number: 34,
                pos: "G",
                grid: null,
              },
            },
            {
              player: {
                id: 20503,
                name: "L. O'Brien",
                number: 32,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 25916,
                name: "M. Niakhaté",
                number: 19,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 2807,
                name: "R. Freuler",
                number: 23,
                pos: "M",
                grid: null,
              },
            },
          ],
        },
      ],
      statistics: [
        {
          team: {
            id: 42,
            name: "Arsenal",
            logo: "https://media-4.api-sports.io/football/teams/42.png",
          },
          statistics: [
            {
              type: "Shots on Goal",
              value: 7,
            },
            {
              type: "Shots off Goal",
              value: 3,
            },
            {
              type: "Total Shots",
              value: 15,
            },
            {
              type: "Blocked Shots",
              value: 5,
            },
            {
              type: "Shots insidebox",
              value: 8,
            },
            {
              type: "Shots outsidebox",
              value: 7,
            },
            {
              type: "Fouls",
              value: 12,
            },
            {
              type: "Corner Kicks",
              value: 8,
            },
            {
              type: "Offsides",
              value: 2,
            },
            {
              type: "Ball Possession",
              value: "78%",
            },
            {
              type: "Yellow Cards",
              value: 2,
            },
            {
              type: "Red Cards",
              value: null,
            },
            {
              type: "Goalkeeper Saves",
              value: 1,
            },
            {
              type: "Total passes",
              value: 769,
            },
            {
              type: "Passes accurate",
              value: 693,
            },
            {
              type: "Passes %",
              value: "90%",
            },
            {
              type: "expected_goals",
              value: "0.83",
            },
          ],
        },
        {
          team: {
            id: 65,
            name: "Nottingham Forest",
            logo: "https://media-4.api-sports.io/football/teams/65.png",
          },
          statistics: [
            {
              type: "Shots on Goal",
              value: 2,
            },
            {
              type: "Shots off Goal",
              value: 3,
            },
            {
              type: "Total Shots",
              value: 6,
            },
            {
              type: "Blocked Shots",
              value: 1,
            },
            {
              type: "Shots insidebox",
              value: 4,
            },
            {
              type: "Shots outsidebox",
              value: 2,
            },
            {
              type: "Fouls",
              value: 12,
            },
            {
              type: "Corner Kicks",
              value: 3,
            },
            {
              type: "Offsides",
              value: 1,
            },
            {
              type: "Ball Possession",
              value: "22%",
            },
            {
              type: "Yellow Cards",
              value: 2,
            },
            {
              type: "Red Cards",
              value: null,
            },
            {
              type: "Goalkeeper Saves",
              value: 5,
            },
            {
              type: "Total passes",
              value: 200,
            },
            {
              type: "Passes accurate",
              value: 137,
            },
            {
              type: "Passes %",
              value: "69%",
            },
            {
              type: "expected_goals",
              value: "1.18",
            },
          ],
        },
      ],
      players: [
        {
          team: {
            id: 42,
            name: "Arsenal",
            logo: "https://media-4.api-sports.io/football/teams/42.png",
            update: "2023-09-05T04:13:07+00:00",
          },
          players: [
            {
              player: {
                id: 20355,
                name: "Aaron Ramsdale",
                photo:
                  "https://media-4.api-sports.io/football/players/20355.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 1,
                    position: "G",
                    rating: "6.7",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 1,
                    assists: null,
                    saves: 1,
                  },
                  passes: {
                    total: 25,
                    key: null,
                    accuracy: "19",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: 0,
                  },
                },
              ],
            },
            {
              player: {
                id: 49,
                name: "Thomas Partey",
                photo: "https://media-4.api-sports.io/football/players/49.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 5,
                    position: "D",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 102,
                    key: 2,
                    accuracy: "96",
                  },
                  tackles: {
                    total: 2,
                    blocks: 1,
                    interceptions: 2,
                  },
                  duels: {
                    total: 8,
                    won: 3,
                  },
                  dribbles: {
                    attempts: 1,
                    success: 1,
                    past: 2,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 19959,
                name: "Benjamin White",
                photo:
                  "https://media-4.api-sports.io/football/players/19959.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 4,
                    position: "D",
                    rating: "6.6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 103,
                    key: null,
                    accuracy: "92",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: 2,
                  },
                  duels: {
                    total: 3,
                    won: 1,
                  },
                  dribbles: {
                    attempts: 1,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 1,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 22090,
                name: "William Saliba",
                photo:
                  "https://media-4.api-sports.io/football/players/22090.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 2,
                    position: "D",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 1,
                    saves: null,
                  },
                  passes: {
                    total: 130,
                    key: 1,
                    accuracy: "127",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 3,
                    won: 2,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 38746,
                name: "Jurriën Timber",
                photo:
                  "https://media-4.api-sports.io/football/players/38746.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 50,
                    number: 12,
                    position: "D",
                    rating: "6.6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: 1,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 45,
                    key: null,
                    accuracy: "40",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 4,
                    won: 2,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: 2,
                  },
                  cards: {
                    yellow: 1,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 37127,
                name: "Martin Ødegaard",
                photo:
                  "https://media-4.api-sports.io/football/players/37127.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 8,
                    position: "M",
                    rating: "7.2",
                    captain: true,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 63,
                    key: 1,
                    accuracy: "53",
                  },
                  tackles: {
                    total: 3,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 8,
                    won: 5,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: 2,
                  },
                  fouls: {
                    drawn: 2,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2937,
                name: "Declan Rice",
                photo:
                  "https://media-4.api-sports.io/football/players/2937.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 41,
                    position: "M",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 3,
                    on: 3,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 91,
                    key: null,
                    accuracy: "84",
                  },
                  tackles: {
                    total: 4,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 14,
                    won: 6,
                  },
                  dribbles: {
                    attempts: 1,
                    success: null,
                    past: 1,
                  },
                  fouls: {
                    drawn: 1,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 978,
                name: "Kai Havertz",
                photo: "https://media-4.api-sports.io/football/players/978.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 29,
                    position: "M",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 53,
                    key: 2,
                    accuracy: "47",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 16,
                    won: 8,
                  },
                  dribbles: {
                    attempts: 1,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 4,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1460,
                name: "Bukayo Saka",
                photo:
                  "https://media-4.api-sports.io/football/players/1460.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 7,
                    position: "F",
                    rating: "8.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 2,
                    on: 2,
                  },
                  goals: {
                    total: 1,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 57,
                    key: 3,
                    accuracy: "47",
                  },
                  tackles: {
                    total: 5,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 13,
                    won: 6,
                  },
                  dribbles: {
                    attempts: 1,
                    success: null,
                    past: 2,
                  },
                  fouls: {
                    drawn: 1,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1468,
                name: "Edward Nketiah",
                photo:
                  "https://media-4.api-sports.io/football/players/1468.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 73,
                    number: 14,
                    position: "F",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: 1,
                  shots: {
                    total: 3,
                    on: 1,
                  },
                  goals: {
                    total: 1,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 15,
                    key: null,
                    accuracy: "15",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 7,
                    won: 4,
                  },
                  dribbles: {
                    attempts: 2,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 127769,
                name: "Gabriel Martinelli",
                photo:
                  "https://media-4.api-sports.io/football/players/127769.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 86,
                    number: 11,
                    position: "F",
                    rating: "7.2",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 1,
                    saves: null,
                  },
                  passes: {
                    total: 30,
                    key: 3,
                    accuracy: "28",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 19,
                    won: 6,
                  },
                  dribbles: {
                    attempts: 4,
                    success: 2,
                    past: null,
                  },
                  fouls: {
                    drawn: 2,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2597,
                name: "Takehiro Tomiyasu",
                photo:
                  "https://media-4.api-sports.io/football/players/2597.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 40,
                    number: 18,
                    position: "D",
                    rating: "6.9",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: 1,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 42,
                    key: null,
                    accuracy: "36",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 4,
                    won: 2,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1946,
                name: "Leandro Trossard",
                photo:
                  "https://media-4.api-sports.io/football/players/1946.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 17,
                    number: 19,
                    position: "F",
                    rating: "6.9",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 10,
                    key: 1,
                    accuracy: "7",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 3,
                    won: 2,
                  },
                  dribbles: {
                    attempts: 1,
                    success: 1,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 22224,
                name: "Gabriel Magalhães",
                photo:
                  "https://media-4.api-sports.io/football/players/22224.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 13,
                    number: 6,
                    position: "D",
                    rating: "6.3",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 3,
                    key: null,
                    accuracy: "2",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 1,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 169295,
                name: "Karl Hein",
                photo:
                  "https://media-4.api-sports.io/football/players/169295.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 31,
                    position: "G",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 61431,
                name: "Jakub Kiwior",
                photo:
                  "https://media-4.api-sports.io/football/players/61431.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 15,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1161,
                name: "Emile Smith Rowe",
                photo:
                  "https://media-4.api-sports.io/football/players/1161.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 10,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 41725,
                name: "Fábio Vieira",
                photo:
                  "https://media-4.api-sports.io/football/players/41725.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 21,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2289,
                name: "Jorginho",
                photo:
                  "https://media-4.api-sports.io/football/players/2289.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 20,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 727,
                name: "Reiss Nelson",
                photo: "https://media-4.api-sports.io/football/players/727.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 24,
                    position: "F",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
          ],
        },
        {
          team: {
            id: 65,
            name: "Nottingham Forest",
            logo: "https://media-4.api-sports.io/football/teams/65.png",
            update: "2023-09-05T04:13:07+00:00",
          },
          players: [
            {
              player: {
                id: 50999,
                name: "Matt Turner",
                photo:
                  "https://media-4.api-sports.io/football/players/50999.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 1,
                    position: "G",
                    rating: "7.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 2,
                    assists: null,
                    saves: 5,
                  },
                  passes: {
                    total: 21,
                    key: null,
                    accuracy: "10",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: 0,
                  },
                },
              ],
            },
            {
              player: {
                id: 18739,
                name: "Willy Boly",
                photo:
                  "https://media-4.api-sports.io/football/players/18739.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 30,
                    position: "D",
                    rating: "7",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: 1,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 27,
                    key: 1,
                    accuracy: "21",
                  },
                  tackles: {
                    total: 2,
                    blocks: 1,
                    interceptions: null,
                  },
                  duels: {
                    total: 12,
                    won: 6,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: 1,
                  },
                  fouls: {
                    drawn: null,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 1746,
                name: "Joe Worrall",
                photo:
                  "https://media-4.api-sports.io/football/players/1746.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 89,
                    number: 4,
                    position: "D",
                    rating: "6.6",
                    captain: true,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 16,
                    key: null,
                    accuracy: "10",
                  },
                  tackles: {
                    total: 1,
                    blocks: 1,
                    interceptions: 1,
                  },
                  duels: {
                    total: 8,
                    won: 5,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 44811,
                name: "Scott McKenna",
                photo:
                  "https://media-4.api-sports.io/football/players/44811.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 26,
                    position: "D",
                    rating: "6.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 17,
                    key: null,
                    accuracy: "11",
                  },
                  tackles: {
                    total: 2,
                    blocks: null,
                    interceptions: 2,
                  },
                  duels: {
                    total: 7,
                    won: 6,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 163,
                name: "Serge Aurier",
                photo: "https://media-4.api-sports.io/football/players/163.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 24,
                    position: "M",
                    rating: "6.7",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 11,
                    key: null,
                    accuracy: "6",
                  },
                  tackles: {
                    total: 2,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 11,
                    won: 6,
                  },
                  dribbles: {
                    attempts: 1,
                    success: null,
                    past: 1,
                  },
                  fouls: {
                    drawn: 2,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 19305,
                name: "Ryan Yates",
                photo:
                  "https://media-4.api-sports.io/football/players/19305.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 22,
                    position: "M",
                    rating: "6.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: 1,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 26,
                    key: null,
                    accuracy: "21",
                  },
                  tackles: {
                    total: 1,
                    blocks: 1,
                    interceptions: null,
                  },
                  duels: {
                    total: 10,
                    won: 6,
                  },
                  dribbles: {
                    attempts: 1,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 3,
                    committed: 2,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 24882,
                name: "Orel Mangala",
                photo:
                  "https://media-4.api-sports.io/football/players/24882.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 89,
                    number: 5,
                    position: "M",
                    rating: "6.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 13,
                    key: 1,
                    accuracy: "10",
                  },
                  tackles: {
                    total: 1,
                    blocks: 1,
                    interceptions: 1,
                  },
                  duels: {
                    total: 9,
                    won: 2,
                  },
                  dribbles: {
                    attempts: 1,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: 3,
                  },
                  cards: {
                    yellow: 1,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2771,
                name: "Ola Aina",
                photo:
                  "https://media-4.api-sports.io/football/players/2771.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 72,
                    number: 43,
                    position: "M",
                    rating: "6.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 13,
                    key: null,
                    accuracy: "9",
                  },
                  tackles: {
                    total: 3,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 7,
                    won: 5,
                  },
                  dribbles: {
                    attempts: 1,
                    success: 1,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: 1,
                  },
                  cards: {
                    yellow: 1,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 275170,
                name: "Danilo",
                photo:
                  "https://media-4.api-sports.io/football/players/275170.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 71,
                    number: 28,
                    position: "F",
                    rating: "6.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 17,
                    key: null,
                    accuracy: "11",
                  },
                  tackles: {
                    total: 3,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 9,
                    won: 6,
                  },
                  dribbles: {
                    attempts: 2,
                    success: 2,
                    past: 1,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 129711,
                name: "Brennan Johnson",
                photo:
                  "https://media-4.api-sports.io/football/players/129711.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 80,
                    number: 20,
                    position: "F",
                    rating: "6.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 6,
                    key: null,
                    accuracy: "6",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 8,
                    won: 3,
                  },
                  dribbles: {
                    attempts: 1,
                    success: null,
                    past: 1,
                  },
                  fouls: {
                    drawn: 2,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 18746,
                name: "Morgan Gibbs-White",
                photo:
                  "https://media-4.api-sports.io/football/players/18746.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 10,
                    position: "F",
                    rating: "6.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 16,
                    key: 1,
                    accuracy: "11",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 12,
                    won: 7,
                  },
                  dribbles: {
                    attempts: 7,
                    success: 3,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 8598,
                name: "Taiwo Awoniyi",
                photo:
                  "https://media-4.api-sports.io/football/players/8598.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 19,
                    number: 9,
                    position: "F",
                    rating: "7.3",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: 1,
                  },
                  goals: {
                    total: 1,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 5,
                    key: null,
                    accuracy: "3",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 3,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 138780,
                name: "Neco Williams",
                photo:
                  "https://media-4.api-sports.io/football/players/138780.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 18,
                    number: 7,
                    position: "D",
                    rating: "6.6",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 5,
                    key: null,
                    accuracy: "3",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: 2,
                  },
                  duels: {
                    total: 4,
                    won: 2,
                  },
                  dribbles: {
                    attempts: 1,
                    success: 1,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 153430,
                name: "Anthony Elanga",
                photo:
                  "https://media-4.api-sports.io/football/players/153430.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 10,
                    number: 21,
                    position: "F",
                    rating: "7.5",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 1,
                    saves: null,
                  },
                  passes: {
                    total: 3,
                    key: 2,
                    accuracy: "2",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 2,
                    won: 1,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: 1,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2991,
                name: "Cheikhou Kouyaté",
                photo:
                  "https://media-4.api-sports.io/football/players/2991.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 9,
                    number: 8,
                    position: "M",
                    rating: "6.6",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: 1,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 3,
                    key: null,
                    accuracy: "3",
                  },
                  tackles: {
                    total: null,
                    blocks: 1,
                    interceptions: null,
                  },
                  duels: {
                    total: 1,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 18931,
                name: "Chris Wood",
                photo:
                  "https://media-4.api-sports.io/football/players/18931.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 9,
                    number: 11,
                    position: "F",
                    rating: "6.3",
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 1,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 62,
                name: "Ethan Horvath",
                photo: "https://media-4.api-sports.io/football/players/62.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 34,
                    position: "G",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 25916,
                name: "Moussa Niakhaté",
                photo:
                  "https://media-4.api-sports.io/football/players/25916.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 19,
                    position: "D",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 20503,
                name: "Lewis O'Brien",
                photo:
                  "https://media-4.api-sports.io/football/players/20503.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 32,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
            {
              player: {
                id: 2807,
                name: "Remo Freuler",
                photo:
                  "https://media-4.api-sports.io/football/players/2807.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 23,
                    position: "M",
                    rating: null,
                    captain: false,
                    substitute: true,
                  },
                  offsides: null,
                  shots: {
                    total: null,
                    on: null,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: null,
                    key: null,
                    accuracy: null,
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: null,
                    won: null,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
                  },
                  fouls: {
                    drawn: null,
                    committed: null,
                  },
                  cards: {
                    yellow: 0,
                    red: 0,
                  },
                  penalty: {
                    won: null,
                    commited: null,
                    scored: 0,
                    missed: 0,
                    saved: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
