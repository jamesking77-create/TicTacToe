import React, {useState} from 'react';
import '../styles/tictactoe.css'


function Tictactoe(){
    let word = "PRESS PLAY TO START GAME"
    let restext = document.getElementsByClassName  (".restext"); 
    const X = "X";
       
    const O = "O";
    let currentPlayer = 0;
 
    
          
    let players = [

       {
          name: "PLAYER 1",
          symbol: X
       
       },
       
       {
          name: "PLAYER 2",
          symbol: O
       
       }
       
    ]

    
    function isWon(){
        return isWon;
    }

    function getCurrentPlayerName(){
        return players[currentPlayer].name;
     }    
     
     function resetCurrentPlayer(){
        currentPlayer++;
        if(currentPlayer === players.length) currentPlayer = 0;
     }
     
     function getCurrentSymbol(){
        return players[currentPlayer].symbol;
        
     }


    function checkForWinner(columns){

        let divArray = [];
        for (let i = 0; i < 9; i += 1) {
            divArray.push(columns[i].innerHTML);
            console.log(columns[i].innerHTML);

           
                   
            if((divArray[0] === X && divArray[1] === X && divArray[2] === X) ||
                (divArray[0] === O && divArray[1] === O && divArray[2] === O )){
                    isWon = true;
                document.querySelector(".restext").innerHTML = `${getCurrentPlayerName()} WON!!!`;  
               let c0 =  document.getElementById("row0column0").style.backgroundColor = 'transparent';
               setTimeout(c0, 1000)
               let c1 =  document.getElementById("row0column1").style.backgroundColor = 'transparent';
               setTimeout(c1, 2000)
               let c2 =  document.getElementById("row0column2").style.backgroundColor = 'transparent';
               setTimeout(c2, 3000)
                        
            }
            
            if((divArray[0] === X && divArray[3] === X && divArray[6] === X) ||
                (divArray[0] === O && divArray[3] === O && divArray[6] === O) ){
                    isWon = true;
                document.querySelector(".restext").innerHTML = `${getCurrentPlayerName()} WON!!!`;  
                
            }
            
            if((divArray[0] === X && divArray[3] === X && divArray[6] === X) ||
                (divArray[0] === O && divArray[3] === O && divArray[6] === O )){
                    isWon = true;
                document.querySelector(".restext").innerHTML = `${getCurrentPlayerName()} WON!!!`; 
                
            }
            
            if((divArray[6] === X && divArray[7] === X && divArray[8] === X) ||
                (divArray[6] === O && divArray[7] === O && divArray[8] === O) ){
                    isWon = true;
                document.querySelector(".restext").innerHTML = `${getCurrentPlayerName()} WON!!!`; 
            
            }
            
            if((divArray[2] === X && divArray[5] === X && divArray[8] === X )||
                (divArray[2] === O && divArray[5] === O && divArray[8] === O )){
                    isWon = true;
                document.querySelector(".restext").innerHTML = `${getCurrentPlayerName()} WON!!!`; 
                
            }
            
            if((divArray[1] === X && divArray[4] === X && divArray[7] === X )||
                (divArray[1] === O && divArray[4] === O && divArray[7] === O )){
                    isWon = true;
                document.querySelector(".restext").innerHTML = `${getCurrentPlayerName()} WON!!!`; 
            }
            
            
            if((divArray[0] === X && divArray[4] === X && divArray[8] === X) || 
                (divArray[0] === O && divArray[4] === O && divArray[8] === O )){
                    isWon = true;
                document.querySelector(".restext").innerHTML = `${getCurrentPlayerName()} WON!!!`; 
            }
            
            if((divArray[2] === X && divArray[4] === X && divArray[6] === X )||
                (divArray[2] === O && divArray[4] === O && divArray[6] === O )){
                    isWon = true;
                document.querySelector(".restext").innerHTML = `${getCurrentPlayerName()} WON!!!`; 
            
            }
    
    
            if((divArray[3] === X && divArray[4] === X && divArray[5] === X) ||
                (divArray[3] === O && divArray[4] === O && divArray[5] === O) ){
                document.querySelector(".restext").innerHTML = `${getCurrentPlayerName()} WON!!!`;  
                    
            }
          }
       }
     
    

    function handleClick(){

        let playButton = document.querySelector(".play");
        let exitButton = document.querySelector(".exit");
        playButton.disabled = true;
        playButton.style.opacity = "0.3";
        exitButton.style.opacity = "1";
       
       let columns = document.querySelectorAll(".column");
       
       let restext = document.querySelector(".restext");


                document.querySelector(".restext").innerHTML = "START GAME!!!";
                columns.forEach(element => {
                   element.addEventListener("click", function(){
                    if (element.innerHTML === ".") {
                        element.innerHTML = getCurrentSymbol();
                        restext.innerHTML = `${getCurrentPlayerName()} HAS PLAYED ( IT'S' YOUR TURN TO PLAY )`; 
                        checkForWinner(columns)
                        resetCurrentPlayer();
                   }else if(element.innerHTML !== "." && isWon === false){
                        document.querySelector(".restext").innerHTML = "OOPS! it's a tie....";  
                }
                }); 
                }); 
    }


    function resetGame (){
        let exitButton = document.querySelector(".exit");
        document.querySelector(".restext").innerHTML = "PRESS -> ( PLAY ) BUTTON TO START GAME!!";
        let columns = document.querySelectorAll(".column");
        let playButton = document.querySelector(".play");
        // playButton.onClick = null;
        playButton.style.opacity = "1";
        exitButton.style.opacity = "0.3";
       
        columns.forEach(element => {
            element.innerHTML = ".";  

            
        });
      columns.innerHTML = null;
    }
    




    return(
<body>
    <div className="maincontainer">

        <div className="gameBoard">
            <div className="row0">
                <div id="row0column0" className="column">.</div>
                <div id="row0column1" className="column">.</div>
                <div id="row0column2" className="column">.</div>
            </div>

            <div className="row1">
                <div id="row1column0" className="column">.</div>
                <div id="row1column1" className="column">.</div>
                <div id="row1column2" className="column">.</div>
            </div>

            <div className="row2">
                <div id="row2column0" className="column">.</div>
                <div id="row2column1" className="column">.</div>
                <div id="row2column2" className="column">.</div>
            </div>

        </div>

        <div className="resultBoard">

        <div className="result">
            <h3 className="restext">{word}</h3>
        </div>

        <div className="buttons">
            <button className="play" onClick={handleClick}>PLAY</button>
            <div className= "sign">Tic-Tac-Toe</div>
            <button className="exit" onClick={resetGame}>EXIT</button>
        </div>

        </div>
    </div>

    <script src="./tictactoe.js"></script>
</body>

    )
}

export default Tictactoe;