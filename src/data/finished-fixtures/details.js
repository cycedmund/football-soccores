const data = {
  get: "fixtures",
  parameters: {
    id: "1035037",
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
        id: 1035037,
        referee: "C. Pawson",
        timezone: "UTC",
        date: "2023-08-11T19:00:00+00:00",
        timestamp: 1691780400,
        periods: {
          first: 1691780400,
          second: 1691784000,
        },
        venue: {
          id: 512,
          name: "Turf Moor",
          city: "Burnley",
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
          id: 44,
          name: "Burnley",
          logo: "https://media-4.api-sports.io/football/teams/44.png",
          winner: false,
        },
        away: {
          id: 50,
          name: "Manchester City",
          logo: "https://media-4.api-sports.io/football/teams/50.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 3,
      },
      score: {
        halftime: {
          home: 0,
          away: 2,
        },
        fulltime: {
          home: 0,
          away: 3,
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
            id: 50,
            name: "Manchester City",
            logo: "https://media-4.api-sports.io/football/teams/50.png",
          },
          player: {
            id: 1100,
            name: "E. Haaland",
          },
          assist: {
            id: 44,
            name: "Rodri",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 23,
            extra: null,
          },
          team: {
            id: 50,
            name: "Manchester City",
            logo: "https://media-4.api-sports.io/football/teams/50.png",
          },
          player: {
            id: 629,
            name: "K. De Bruyne",
          },
          assist: {
            id: 2291,
            name: "M. Kovačić",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 36,
            extra: null,
          },
          team: {
            id: 50,
            name: "Manchester City",
            logo: "https://media-4.api-sports.io/football/teams/50.png",
          },
          player: {
            id: 1100,
            name: "E. Haaland",
          },
          assist: {
            id: 6009,
            name: "J. Álvarez",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 61,
            extra: null,
          },
          team: {
            id: 44,
            name: "Burnley",
            logo: "https://media-4.api-sports.io/football/teams/44.png",
          },
          player: {
            id: 359603,
            name: "L. Koleosho",
          },
          assist: {
            id: 22,
            name: "J. Bruun Larsen",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 61,
            extra: null,
          },
          team: {
            id: 44,
            name: "Burnley",
            logo: "https://media-4.api-sports.io/football/teams/44.png",
          },
          player: {
            id: 123469,
            name: "Z. Amdouni",
          },
          assist: {
            id: 129169,
            name: "A. Zaroury",
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
            id: 44,
            name: "Burnley",
            logo: "https://media-4.api-sports.io/football/teams/44.png",
          },
          player: {
            id: 25628,
            name: "J. Beyer",
          },
          assist: {
            id: 8589,
            name: "B. Manuel",
          },
          type: "subst",
          detail: "Substitution 3",
          comments: null,
        },
        {
          time: {
            elapsed: 75,
            extra: null,
          },
          team: {
            id: 50,
            name: "Manchester City",
            logo: "https://media-4.api-sports.io/football/teams/50.png",
          },
          player: {
            id: 44,
            name: "Rodri",
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
            elapsed: 79,
            extra: null,
          },
          team: {
            id: 50,
            name: "Manchester City",
            logo: "https://media-4.api-sports.io/football/teams/50.png",
          },
          player: {
            id: 18861,
            name: "N. Aké",
          },
          assist: {
            id: 622,
            name: "Aymeric Laporte",
          },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: {
            elapsed: 79,
            extra: null,
          },
          team: {
            id: 50,
            name: "Manchester City",
            logo: "https://media-4.api-sports.io/football/teams/50.png",
          },
          player: {
            id: 284230,
            name: "R. Lewis",
          },
          assist: {
            id: 129033,
            name: "J. Gvardiol",
          },
          type: "subst",
          detail: "Substitution 3",
          comments: null,
        },
        {
          time: {
            elapsed: 80,
            extra: null,
          },
          team: {
            id: 50,
            name: "Manchester City",
            logo: "https://media-4.api-sports.io/football/teams/50.png",
          },
          player: {
            id: 1100,
            name: "E. Haaland",
          },
          assist: {
            id: 152982,
            name: "C. Palmer",
          },
          type: "subst",
          detail: "Substitution 4",
          comments: null,
        },
        {
          time: {
            elapsed: 90,
            extra: 4,
          },
          team: {
            id: 44,
            name: "Burnley",
            logo: "https://media-4.api-sports.io/football/teams/44.png",
          },
          player: {
            id: 129169,
            name: "Anass Zaroury",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Red Card",
          comments: "Foul",
        },
        {
          time: {
            elapsed: 90,
            extra: 3,
          },
          team: {
            id: 44,
            name: "Burnley",
            logo: "https://media-4.api-sports.io/football/teams/44.png",
          },
          player: {
            id: 129169,
            name: "Anass Zaroury",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Var",
          detail: "Card upgrade",
          comments: null,
        },
        {
          time: {
            elapsed: 90,
            extra: 1,
          },
          team: {
            id: 44,
            name: "Burnley",
            logo: "https://media-4.api-sports.io/football/teams/44.png",
          },
          player: {
            id: 98936,
            name: "L. Foster",
          },
          assist: {
            id: 18948,
            name: "N. Redmond",
          },
          type: "subst",
          detail: "Substitution 4",
          comments: null,
        },
        {
          time: {
            elapsed: 90,
            extra: 1,
          },
          team: {
            id: 44,
            name: "Burnley",
            logo: "https://media-4.api-sports.io/football/teams/44.png",
          },
          player: {
            id: 1934,
            name: "S. Berge",
          },
          assist: {
            id: 19268,
            name: "J. Brownhill",
          },
          type: "subst",
          detail: "Substitution 5",
          comments: null,
        },
        {
          time: {
            elapsed: 90,
            extra: 5,
          },
          team: {
            id: 50,
            name: "Manchester City",
            logo: "https://media-4.api-sports.io/football/teams/50.png",
          },
          player: {
            id: 627,
            name: "K. Walker",
          },
          assist: {
            id: 158697,
            name: "J. McAtee",
          },
          type: "subst",
          detail: "Substitution 5",
          comments: null,
        },
      ],
      lineups: [
        {
          team: {
            id: 44,
            name: "Burnley",
            logo: "https://media-4.api-sports.io/football/teams/44.png",
            colors: {
              player: {
                primary: "990033",
                number: "64b1ff",
                border: "990033",
              },
              goalkeeper: {
                primary: "66ffff",
                number: "000000",
                border: "66ffff",
              },
            },
          },
          coach: {
            id: 12590,
            name: "V. Kompany",
            photo: "https://media-4.api-sports.io/football/coachs/12590.png",
          },
          formation: "5-4-1",
          startXI: [
            {
              player: {
                id: 162489,
                name: "J. Trafford",
                number: 1,
                pos: "G",
                grid: "1:1",
              },
            },
            {
              player: {
                id: 19331,
                name: "C. Roberts",
                number: 14,
                pos: "D",
                grid: "2:5",
              },
            },
            {
              player: {
                id: 323449,
                name: "A. Al Dakhil",
                number: 28,
                pos: "D",
                grid: "2:4",
              },
            },
            {
              player: {
                id: 17597,
                name: "D. O'Shea",
                number: 2,
                pos: "D",
                grid: "2:3",
              },
            },
            {
              player: {
                id: 25628,
                name: "J. Beyer",
                number: 5,
                pos: "D",
                grid: "2:2",
              },
            },
            {
              player: {
                id: 8661,
                name: "Vitinho",
                number: 22,
                pos: "D",
                grid: "2:1",
              },
            },
            {
              player: {
                id: 359603,
                name: "L. Koleosho",
                number: 30,
                pos: "M",
                grid: "3:4",
              },
            },
            {
              player: {
                id: 1934,
                name: "S. Berge",
                number: 16,
                pos: "M",
                grid: "3:3",
              },
            },
            {
              player: {
                id: 19827,
                name: "J. Cullen",
                number: 24,
                pos: "M",
                grid: "3:2",
              },
            },
            {
              player: {
                id: 98936,
                name: "L. Foster",
                number: 17,
                pos: "M",
                grid: "3:1",
              },
            },
            {
              player: {
                id: 123469,
                name: "Z. Amdouni",
                number: 25,
                pos: "F",
                grid: "4:1",
              },
            },
          ],
          substitutes: [
            {
              player: {
                id: 22,
                name: "J. Bruun Larsen",
                number: 34,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 129169,
                name: "A. Zaroury",
                number: 19,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 8589,
                name: "B. Manuel",
                number: 10,
                pos: "F",
                grid: null,
              },
            },
            {
              player: {
                id: 18948,
                name: "N. Redmond",
                number: 15,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 19268,
                name: "J. Brownhill",
                number: 8,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 47903,
                name: "H. Ekdal",
                number: 18,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 2790,
                name: "J. Guðmunds­son",
                number: 7,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 18922,
                name: "J. Cork",
                number: 4,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 616,
                name: "A. Murić",
                number: 49,
                pos: "G",
                grid: null,
              },
            },
          ],
        },
        {
          team: {
            id: 50,
            name: "Manchester City",
            logo: "https://media-4.api-sports.io/football/teams/50.png",
            colors: {
              player: {
                primary: "ffffff",
                number: "4c0b0d",
                border: "ffffff",
              },
              goalkeeper: {
                primary: "ff6929",
                number: "ffffff",
                border: "ff6929",
              },
            },
          },
          coach: {
            id: 4,
            name: "Pep Guardiola",
            photo: "https://media-4.api-sports.io/football/coachs/4.png",
          },
          formation: "4-2-3-1",
          startXI: [
            {
              player: {
                id: 617,
                name: "Ederson",
                number: 31,
                pos: "G",
                grid: "1:1",
              },
            },
            {
              player: {
                id: 627,
                name: "K. Walker",
                number: 2,
                pos: "D",
                grid: "2:4",
              },
            },
            {
              player: {
                id: 5,
                name: "M. Akanji",
                number: 25,
                pos: "D",
                grid: "2:3",
              },
            },
            {
              player: {
                id: 18861,
                name: "N. Aké",
                number: 6,
                pos: "D",
                grid: "2:2",
              },
            },
            {
              player: {
                id: 284230,
                name: "R. Lewis",
                number: 82,
                pos: "D",
                grid: "2:1",
              },
            },
            {
              player: {
                id: 629,
                name: "K. De Bruyne",
                number: 17,
                pos: "M",
                grid: "3:2",
              },
            },
            {
              player: {
                id: 44,
                name: "Rodri",
                number: 16,
                pos: "M",
                grid: "3:1",
              },
            },
            {
              player: {
                id: 636,
                name: "Bernardo Silva",
                number: 20,
                pos: "M",
                grid: "4:3",
              },
            },
            {
              player: {
                id: 6009,
                name: "J. Álvarez",
                number: 19,
                pos: "M",
                grid: "4:2",
              },
            },
            {
              player: {
                id: 631,
                name: "P. Foden",
                number: 47,
                pos: "M",
                grid: "4:1",
              },
            },
            {
              player: {
                id: 1100,
                name: "E. Haaland",
                number: 9,
                pos: "F",
                grid: "5:1",
              },
            },
          ],
          substitutes: [
            {
              player: {
                id: 2291,
                name: "M. Kovačić",
                number: 8,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 622,
                name: "Aymeric Laporte",
                number: 14,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 129033,
                name: "J. Gvardiol",
                number: 24,
                pos: "D",
                grid: null,
              },
            },
            {
              player: {
                id: 152982,
                name: "C. Palmer",
                number: 80,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 158697,
                name: "J. McAtee",
                number: 87,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 19187,
                name: "J. Grealish",
                number: 10,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 25004,
                name: "S. Ortega",
                number: 18,
                pos: "G",
                grid: null,
              },
            },
            {
              player: {
                id: 23,
                name: "Sergio Gómez",
                number: 21,
                pos: "M",
                grid: null,
              },
            },
            {
              player: {
                id: 19130,
                name: "K. Phillips",
                number: 4,
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
            id: 44,
            name: "Burnley",
            logo: "https://media-4.api-sports.io/football/teams/44.png",
          },
          statistics: [
            {
              type: "Shots on Goal",
              value: 1,
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
              value: 2,
            },
            {
              type: "Shots insidebox",
              value: 5,
            },
            {
              type: "Shots outsidebox",
              value: 1,
            },
            {
              type: "Fouls",
              value: 11,
            },
            {
              type: "Corner Kicks",
              value: 6,
            },
            {
              type: "Offsides",
              value: null,
            },
            {
              type: "Ball Possession",
              value: "34%",
            },
            {
              type: "Yellow Cards",
              value: null,
            },
            {
              type: "Red Cards",
              value: 1,
            },
            {
              type: "Goalkeeper Saves",
              value: 5,
            },
            {
              type: "Total passes",
              value: 365,
            },
            {
              type: "Passes accurate",
              value: 290,
            },
            {
              type: "Passes %",
              value: "79%",
            },
            {
              type: "expected_goals",
              value: "0.33",
            },
          ],
        },
        {
          team: {
            id: 50,
            name: "Manchester City",
            logo: "https://media-4.api-sports.io/football/teams/50.png",
          },
          statistics: [
            {
              type: "Shots on Goal",
              value: 8,
            },
            {
              type: "Shots off Goal",
              value: 4,
            },
            {
              type: "Total Shots",
              value: 17,
            },
            {
              type: "Blocked Shots",
              value: 5,
            },
            {
              type: "Shots insidebox",
              value: 14,
            },
            {
              type: "Shots outsidebox",
              value: 3,
            },
            {
              type: "Fouls",
              value: 8,
            },
            {
              type: "Corner Kicks",
              value: 5,
            },
            {
              type: "Offsides",
              value: 1,
            },
            {
              type: "Ball Possession",
              value: "66%",
            },
            {
              type: "Yellow Cards",
              value: null,
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
              value: 706,
            },
            {
              type: "Passes accurate",
              value: 634,
            },
            {
              type: "Passes %",
              value: "90%",
            },
            {
              type: "expected_goals",
              value: "2.08",
            },
          ],
        },
      ],
      players: [
        {
          team: {
            id: 44,
            name: "Burnley",
            logo: "https://media-4.api-sports.io/football/teams/44.png",
            update: "2023-09-05T04:13:05+00:00",
          },
          players: [
            {
              player: {
                id: 162489,
                name: "James Trafford",
                photo:
                  "https://media-4.api-sports.io/football/players/162489.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 1,
                    position: "G",
                    rating: "7.5",
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
                    conceded: 3,
                    assists: null,
                    saves: 5,
                  },
                  passes: {
                    total: 44,
                    key: null,
                    accuracy: "31",
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
                id: 19331,
                name: "Connor Roberts",
                photo:
                  "https://media-4.api-sports.io/football/players/19331.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 14,
                    position: "D",
                    rating: "6.5",
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
                    total: 38,
                    key: null,
                    accuracy: "33",
                  },
                  tackles: {
                    total: 2,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 4,
                    won: 3,
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
                id: 323449,
                name: "Ameen Al-Dakhil",
                photo:
                  "https://media-4.api-sports.io/football/players/323449.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 28,
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
                    total: 36,
                    key: null,
                    accuracy: "30",
                  },
                  tackles: {
                    total: 2,
                    blocks: 1,
                    interceptions: 1,
                  },
                  duels: {
                    total: 11,
                    won: 5,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: 1,
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
                id: 17597,
                name: "Dara O'Shea",
                photo:
                  "https://media-4.api-sports.io/football/players/17597.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 2,
                    position: "D",
                    rating: "6.5",
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
                    total: 56,
                    key: null,
                    accuracy: "42",
                  },
                  tackles: {
                    total: null,
                    blocks: 2,
                    interceptions: 1,
                  },
                  duels: {
                    total: 5,
                    won: 3,
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
                id: 25628,
                name: "Jordan Beyer",
                photo:
                  "https://media-4.api-sports.io/football/players/25628.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 74,
                    number: 5,
                    position: "D",
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
                    total: 35,
                    key: null,
                    accuracy: "28",
                  },
                  tackles: {
                    total: 4,
                    blocks: null,
                    interceptions: 4,
                  },
                  duels: {
                    total: 7,
                    won: 5,
                  },
                  dribbles: {
                    attempts: 1,
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
                id: 8661,
                name: "Vitinho",
                photo:
                  "https://media-4.api-sports.io/football/players/8661.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 22,
                    position: "D",
                    rating: "6.2",
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
                    total: 22,
                    key: 1,
                    accuracy: "17",
                  },
                  tackles: {
                    total: null,
                    blocks: 1,
                    interceptions: 1,
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
                id: 359603,
                name: "Luca Koleosho",
                photo:
                  "https://media-4.api-sports.io/football/players/359603.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 61,
                    number: 30,
                    position: "M",
                    rating: "6.5",
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
                    total: 13,
                    key: 2,
                    accuracy: "8",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 5,
                    won: null,
                  },
                  dribbles: {
                    attempts: 2,
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
                id: 1934,
                name: "Sander Berge",
                photo:
                  "https://media-4.api-sports.io/football/players/1934.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 89,
                    number: 16,
                    position: "M",
                    rating: "6.5",
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
                    total: 28,
                    key: null,
                    accuracy: "23",
                  },
                  tackles: {
                    total: null,
                    blocks: 1,
                    interceptions: null,
                  },
                  duels: {
                    total: 5,
                    won: 2,
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
                id: 19827,
                name: "Josh Cullen",
                photo:
                  "https://media-4.api-sports.io/football/players/19827.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 24,
                    position: "M",
                    rating: "6.3",
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
                    total: 41,
                    key: null,
                    accuracy: "36",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 4,
                    won: 3,
                  },
                  dribbles: {
                    attempts: null,
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
                id: 98936,
                name: "Lyle Foster",
                photo:
                  "https://media-4.api-sports.io/football/players/98936.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 89,
                    number: 17,
                    position: "M",
                    rating: "6.5",
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
                    total: 20,
                    key: 1,
                    accuracy: "14",
                  },
                  tackles: {
                    total: 2,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 13,
                    won: 5,
                  },
                  dribbles: {
                    attempts: 3,
                    success: 1,
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
                id: 123469,
                name: "Zeki Amdouni",
                photo:
                  "https://media-4.api-sports.io/football/players/123469.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 61,
                    number: 25,
                    position: "F",
                    rating: "6.9",
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
                    total: 11,
                    key: null,
                    accuracy: "10",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 11,
                    won: 6,
                  },
                  dribbles: {
                    attempts: 4,
                    success: 2,
                    past: null,
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
                id: 129169,
                name: "Anass Zaroury",
                photo:
                  "https://media-4.api-sports.io/football/players/129169.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 33,
                    number: 19,
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
                    total: 8,
                    key: 1,
                    accuracy: "8",
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
                    committed: 1,
                  },
                  cards: {
                    yellow: 0,
                    red: 1,
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
                id: 22,
                name: "Jacob Bruun Larsen",
                photo: "https://media-4.api-sports.io/football/players/22.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 29,
                    number: 34,
                    position: "F",
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
                id: 8589,
                name: "Manuel Benson",
                photo:
                  "https://media-4.api-sports.io/football/players/8589.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 16,
                    number: 10,
                    position: "F",
                    rating: "5.9",
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
                    total: 4,
                    key: null,
                    accuracy: "4",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 6,
                    won: null,
                  },
                  dribbles: {
                    attempts: 4,
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
                id: 19268,
                name: "Josh Brownhill",
                photo:
                  "https://media-4.api-sports.io/football/players/19268.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 8,
                    number: 8,
                    position: "M",
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
                    total: 2,
                    key: null,
                    accuracy: "2",
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
                id: 18948,
                name: "Nathan Redmond",
                photo:
                  "https://media-4.api-sports.io/football/players/18948.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 8,
                    number: 15,
                    position: "M",
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
                    total: 2,
                    key: null,
                    accuracy: "1",
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
                id: 616,
                name: "Arijanet Murić",
                photo: "https://media-4.api-sports.io/football/players/616.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 49,
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
                id: 47903,
                name: "Hjalmar Ekdal",
                photo:
                  "https://media-4.api-sports.io/football/players/47903.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 18,
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
                id: 18922,
                name: "Jack Cork",
                photo:
                  "https://media-4.api-sports.io/football/players/18922.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 4,
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
                id: 2790,
                name: "Jóhann Guðmundsson",
                photo:
                  "https://media-4.api-sports.io/football/players/2790.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 7,
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
        {
          team: {
            id: 50,
            name: "Manchester City",
            logo: "https://media-4.api-sports.io/football/teams/50.png",
            update: "2023-09-05T04:13:05+00:00",
          },
          players: [
            {
              player: {
                id: 617,
                name: "Ederson",
                photo: "https://media-4.api-sports.io/football/players/617.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 31,
                    position: "G",
                    rating: "7.5",
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
                    saves: 1,
                  },
                  passes: {
                    total: 70,
                    key: null,
                    accuracy: "57",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 1,
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
                    saved: 0,
                  },
                },
              ],
            },
            {
              player: {
                id: 627,
                name: "Kyle Walker",
                photo: "https://media-4.api-sports.io/football/players/627.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 89,
                    number: 2,
                    position: "D",
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
                    total: 64,
                    key: 1,
                    accuracy: "59",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 5,
                    won: 3,
                  },
                  dribbles: {
                    attempts: 1,
                    success: null,
                    past: null,
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
                id: 5,
                name: "Manuel Akanji",
                photo: "https://media-4.api-sports.io/football/players/5.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 25,
                    position: "D",
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
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 101,
                    key: null,
                    accuracy: "89",
                  },
                  tackles: {
                    total: 3,
                    blocks: 1,
                    interceptions: null,
                  },
                  duels: {
                    total: 10,
                    won: 7,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
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
                id: 18861,
                name: "Nathan Aké",
                photo:
                  "https://media-4.api-sports.io/football/players/18861.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 79,
                    number: 6,
                    position: "D",
                    rating: "7.5",
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
                    total: 68,
                    key: null,
                    accuracy: "64",
                  },
                  tackles: {
                    total: 3,
                    blocks: null,
                    interceptions: 2,
                  },
                  duels: {
                    total: 8,
                    won: 7,
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
                id: 284230,
                name: "Rico Lewis",
                photo:
                  "https://media-4.api-sports.io/football/players/284230.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 79,
                    number: 82,
                    position: "D",
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
                    total: 39,
                    key: null,
                    accuracy: "33",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 5,
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
                id: 629,
                name: "Kevin De Bruyne",
                photo: "https://media-4.api-sports.io/football/players/629.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 23,
                    number: 17,
                    position: "M",
                    rating: "6.9",
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
                    total: 6,
                    key: 1,
                    accuracy: "4",
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
                id: 44,
                name: "Rodri",
                photo: "https://media-4.api-sports.io/football/players/44.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 16,
                    position: "M",
                    rating: "9.3",
                    captain: false,
                    substitute: false,
                  },
                  offsides: 1,
                  shots: {
                    total: 3,
                    on: 3,
                  },
                  goals: {
                    total: 1,
                    conceded: 0,
                    assists: 1,
                    saves: null,
                  },
                  passes: {
                    total: 110,
                    key: 1,
                    accuracy: "107",
                  },
                  tackles: {
                    total: 5,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 9,
                    won: 6,
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
                id: 636,
                name: "Bernardo Silva",
                photo: "https://media-4.api-sports.io/football/players/636.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 20,
                    position: "M",
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
                    total: 67,
                    key: null,
                    accuracy: "61",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
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
                id: 6009,
                name: "Julián Álvarez",
                photo:
                  "https://media-4.api-sports.io/football/players/6009.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 19,
                    position: "M",
                    rating: "8.2",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 2,
                    on: 1,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: 1,
                    saves: null,
                  },
                  passes: {
                    total: 38,
                    key: 6,
                    accuracy: "33",
                  },
                  tackles: {
                    total: 1,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 9,
                    won: 3,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: 1,
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
                id: 631,
                name: "Phil Foden",
                photo: "https://media-4.api-sports.io/football/players/631.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 90,
                    number: 47,
                    position: "M",
                    rating: "6.9",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 2,
                    on: 1,
                  },
                  goals: {
                    total: null,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 45,
                    key: 2,
                    accuracy: "37",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: 1,
                  },
                  duels: {
                    total: 8,
                    won: 2,
                  },
                  dribbles: {
                    attempts: 2,
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
                id: 1100,
                name: "Erling Haaland",
                photo:
                  "https://media-4.api-sports.io/football/players/1100.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 80,
                    number: 9,
                    position: "F",
                    rating: "8.6",
                    captain: false,
                    substitute: false,
                  },
                  offsides: null,
                  shots: {
                    total: 3,
                    on: 2,
                  },
                  goals: {
                    total: 2,
                    conceded: 0,
                    assists: null,
                    saves: null,
                  },
                  passes: {
                    total: 11,
                    key: 2,
                    accuracy: "9",
                  },
                  tackles: {
                    total: null,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 8,
                    won: 3,
                  },
                  dribbles: {
                    attempts: null,
                    success: null,
                    past: null,
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
                id: 2291,
                name: "Mateo Kovačić",
                photo:
                  "https://media-4.api-sports.io/football/players/2291.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 67,
                    number: 8,
                    position: "M",
                    rating: "7.7",
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
                    total: 64,
                    key: 1,
                    accuracy: "61",
                  },
                  tackles: {
                    total: 2,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 8,
                    won: 5,
                  },
                  dribbles: {
                    attempts: 1,
                    success: 1,
                    past: null,
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
                id: 129033,
                name: "Joško Gvardiol",
                photo:
                  "https://media-4.api-sports.io/football/players/129033.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 11,
                    number: 24,
                    position: "D",
                    rating: "7",
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
                    total: 7,
                    key: null,
                    accuracy: "5",
                  },
                  tackles: {
                    total: 2,
                    blocks: null,
                    interceptions: null,
                  },
                  duels: {
                    total: 4,
                    won: 4,
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
                id: 622,
                name: "Aymeric Laporte",
                photo: "https://media-4.api-sports.io/football/players/622.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 11,
                    number: 14,
                    position: "D",
                    rating: "7",
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
                    total: 11,
                    key: null,
                    accuracy: "11",
                  },
                  tackles: {
                    total: null,
                    blocks: 1,
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
                id: 152982,
                name: "Cole Palmer",
                photo:
                  "https://media-4.api-sports.io/football/players/152982.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 10,
                    number: 80,
                    position: "M",
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
                    total: 5,
                    key: null,
                    accuracy: "4",
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
                id: 158697,
                name: "James McAtee",
                photo:
                  "https://media-4.api-sports.io/football/players/158697.png",
              },
              statistics: [
                {
                  games: {
                    minutes: 1,
                    number: 87,
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
                id: 25004,
                name: "Stefan Ortega",
                photo:
                  "https://media-4.api-sports.io/football/players/25004.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 18,
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
                id: 19130,
                name: "Kalvin Phillips",
                photo:
                  "https://media-4.api-sports.io/football/players/19130.png",
              },
              statistics: [
                {
                  games: {
                    minutes: null,
                    number: 4,
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
                id: 23,
                name: "Sergio Gómez",
                photo: "https://media-4.api-sports.io/football/players/23.png",
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
                id: 19187,
                name: "Jack Grealish",
                photo:
                  "https://media-4.api-sports.io/football/players/19187.png",
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
          ],
        },
      ],
    },
  ],
};
