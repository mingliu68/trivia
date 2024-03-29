export const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
]

export const badgeColors = {
    "hard": "#C34A36",
    "medium": "#FFC75F",
    "easy": "#00C9A7"
}

export const scoreUnit = {
    "hard": 3,
    "medium": 2,
    "easy": 1
}

export const myData = {
    "id": 0,
    "userName": "MinaSkye",

    "bestScore": { "category": "Animal", "score": 66, 'questionCount': 7 },
    "scores": [
        { "category": "Animal", "score": 48, 'questionCount': 5 },
        { "category": "Animal", "score": 32, 'questionCount': 4 },
        { "category": "Animal", "score": 48, 'questionCount': 5 },
        { "category": "Animal", "score": 39, 'questionCount': 4 },
        { "category": "Animal", "score": 62, 'questionCount': 6 },
        { "category": "Animal", "score": 52, 'questionCount': 5 },
        { "category": "Animal", "score": 66, 'questionCount': 7 },
        { "category": "Animal", "score": 12, 'questionCount': 1 },
        { "category": "Animal", "score": 15, 'questionCount': 1 },
        { "category": "Animal", "score": 25, 'questionCount': 2 },
        { "category": "Animal", "score": 30, 'questionCount': 3 },
        { "category": "Animal", "score": 28, 'questionCount': 3 },
        { "category": "Animal", "score": 18, 'questionCount': 2 },
        { "category": "Animal", "score": 42, 'questionCount': 4 },
        { "category": "Animal", "score": 19, 'questionCount': 2 },
        { "category": "Animal", "score": 48, 'questionCount': 5 },


    ],


}

export const leaderBoard = [
    { "id": 0, "name": "Crapkin", "bestScore": 97 },
    { "id": 1, "name": "Scuttlebutt", "bestScore": 95 },
    { "id": 2, "name": "Samovar", "bestScore": 92 },
    { "id": 3, "name": "Appaloosa", "bestScore": 91 },
    { "id": 4, "name": "Phialiform", "bestScore": 89 },
    { "id": 5, "name": "Samarra", "bestScore": 85 },
    { "id": 5, "name": "Highfalutin", "bestScore": 85 },
    { "id": 5, "name": "Jest", "bestScore": 85 },
    { "id": 8, "name": "Moschate", "bestScore": 82 },
    { "id": 9, "name": "Hotfoot", "bestScore": 78 },
    { "id": 9, "name": "Lambasted", "bestScore": 78 },
    { "id": 11, "name": "Steezynat12345_", "bestScore": 77 },
    { "id": 12, "name": "Tater", "bestScore": 76 },
    { "id": 12, "name": "Rubberneck", "bestScore": 76 },
    { "id": 12, "name": "Hullabaloo", "bestScore": 76 },
    { "id": 15, "name": "Cerography", "bestScore": 75 },

]


export const gameOverMsgs = {
    10: "Ok, you are just showing off now!",
    9: "MENSA is awaiting your application.",
    8: "Some message - level 8",
    7: "Some message - level 7",
    6: "Some message - level 6",
    5: "Some message - level 5",
    4: "Some message - level 4",
    3: "Some message - level 3",
    2: "Some message - level 2",
    1: "Why are you even here?",
    0: "You must be a genius! Even select 3rd choice on every question will get you more points!"

}

export const gradients = [
    // "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
    // "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
    // "linear-gradient(to right top, #845EC2, #D65DB1, #FF6F91)",

]

export function getGradients() {
    for (let i = 0; i < colors.length - 2; i++) {
        for (let j = i + 1; j < colors.length - 1; j++) {
            for (let k = j + 1; k < colors.length; k++) {
                gradients.push([colors[i], colors[j], colors[k]])
            }
        }
    }
}


export const category = [
    { "index": 0, "id": 9, "cat": "General Knowledge", "img": "https://images.pexels.com/photos/7203727/pexels-photo-7203727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 1, "id": 10, "cat": "Entertainmant: Books", "img": "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 2, "id": 11, "cat": "Entertainmant: Film", "img": "https://images.pexels.com/photos/918281/pexels-photo-918281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 3, "id": 12, "cat": "Entertainmant: Music", "img": "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?cs=srgb&dl=pexels-elviss-railijs-bit%C4%81ns-1389429.jpg&fm=jpg" },
    { "index": 4, "id": 13, "cat": "Entertainmant: Musicals & Theatres", "img": "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 5, "id": 14, "cat": "Entertainmant: Television", "img": "https://images.pexels.com/photos/668296/pexels-photo-668296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 6, "id": 15, "cat": "Entertainmant: Video Games", "img": "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 7, "id": 16, "cat": "Entertainmant: Board Games", "img": "https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 8, "id": 17, "cat": "Science & Nature", "img": "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 9, "id": 18, "cat": "Science: Computers", "img": "https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 10, "id": 19, "cat": "Science: Mathematics", "img": "https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 11, "id": 20, "cat": "Mythology", "img": "https://images.pexels.com/photos/951531/pexels-photo-951531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 12, "id": 21, "cat": "Sports", "img": "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 13, "id": 22, "cat": "Geography", "img": "https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 14, "id": 23, "cat": "History", "img": "https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 15, "id": 24, "cat": "Politics", "img": "https://images.pexels.com/photos/2100942/pexels-photo-2100942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 16, "id": 25, "cat": "Art", "img": "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 17, "id": 26, "cat": "Celebrities", "img": "https://images.pexels.com/photos/3812384/pexels-photo-3812384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 18, "id": 27, "cat": "Animals", "img": "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 19, "id": 28, "cat": "Vehicles", "img": "https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 20, "id": 29, "cat": "Entertainmant: Comics", "img": "https://images.pexels.com/photos/16516/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 21, "id": 30, "cat": "Science: Gadgets", "img": "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 22, "id": 31, "cat": "Entertainmant: Japanese Anime & Manga", "img": "https://images.pexels.com/photos/69378/pexels-photo-69378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { "index": 23, "id": 32, "cat": "Entertainmant: Cartoon & Animations", "img": "https://images.pexels.com/photos/5571711/pexels-photo-5571711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
]

// interesting images
const images = [
    "https://images.pexels.com/photos/932261/pexels-photo-932261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]
