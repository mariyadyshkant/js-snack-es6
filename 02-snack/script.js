// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 'Nome' sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti fatti" e “falli subiti”.Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const soccer_teams = [
    {
        team_name: "Aquila Tempesta FC",
        points: 0,
        fouls: 0,
    },
    {
        team_name: "Real Valbruna",
        points: 0,
        fouls: 0,
    },
    {
        team_name: "Drago Verde United",
        points: 0,
        fouls: 0,
    },
    {
        team_name: "Stella di Fuoco 1907",
        points: 0,
        fouls: 0,
    },
    {
        team_name: "Dynamo Marziana",
        points: 0,
        fouls: 0,
    },
    {
        team_name: "Atletico Foschia",
        points: 0,
        fouls: 0,
    },
    {
        team_name: "Lupi del Nord FC",
        points: 0,
        fouls: 0,
    },
    {
        team_name: "Sporting Miraglio",
        points: 0,
        fouls: 0,
    },
];

// Devo generare dei numeri casuali da riassegnare alle key degli oggetti - vado con il for in
for (let points in soccer_teams) {
    soccer_teams[points] = Number(Math.floor(Math.random) * 101);
}




