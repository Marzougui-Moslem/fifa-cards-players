import React from 'react'
import PlayerList from './PlayerList'

function Players() {
    const players=[
        {
            nom:"Lionel messi",
            equipe:"inter miami",
            Nationalite:"argentine",
            numm:10,
            age:36,
            url:"https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
        
        },
        {
            nom:"Crestiano ronaldo",
            equipe:"Al-Nassr FC",
            Nationalite:"Portugaise",
            numm:7,
            age:38,
            url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cristiano_Ronaldo_with_Al_Nassr%2C_19_September_2023_-_83.jpg/375px-Cristiano_Ronaldo_with_Al_Nassr%2C_19_September_2023_-_83.jpg",
        
        },
        {
            nom:"Erling Haaland",
            equipe:" Manchester City ",
            Nationalite:"norvégien",
            numm:9,
            age:23,
            url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Erling_Haaland_2023_%28cropped%29.jpg/375px-Erling_Haaland_2023_%28cropped%29.jpg",
        
        },
        {
            nom:"Frenkie de Jong",
            equipe:"FC Barcelone",
            Nationalite:" Néerlandais",
            numm:21,
            age:26,
            url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_34.jpg/285px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_34.jpg",
        
        },
        {
            nom:"Jordan Pickford",
            equipe:"Everton FC",
            Nationalite:" Britannique",
            numm:1,
            age:29,
            url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jordan_Pickford_2018.jpg/405px-Jordan_Pickford_2018.jpg",
        
        }
    ]
  return (
    <div>
     <PlayerList players={players}/>
    </div>
  )
}

export default Players
