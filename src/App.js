import { useState } from "react";

function Square({value,onSquareClick}) {

  return <button className="square" onClick={onSquareClick} >{value}</button>;
}

export default function Board() {
  const [xisNext,setXisNext]=useState(true)
  const [squares,setSquares]=useState(Array(9).fill(null))
  let handleClick=(i)=>{
    if(squares[i] ||  calculateWiner(squares)){
      return
    }
    if(squares[i]) return
    let NextSquare=squares.slice();
    if(xisNext) {
      NextSquare[i]="X";
    }else{
      NextSquare[i]="O"
    } 
    setSquares(NextSquare)
    setXisNext(!xisNext)
  }
  const winner= calculateWiner(squares)

 

   let status;
   if(winner){
    status='The winner is '+ winner;
   }
   else if(squares.find((item)=>{return item=="X"})){
    status='Next player is '+ (xisNext?"X":"O")
   }else{
    status="Please start the game by clicking the square box below"
   }

  return (
    <>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </>
  );
}

function calculateWiner(square)
{
  const line = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for(var i=1;i<line.length;i++){
        const[a,b,c]=line[i];
        if(square[a] && square[a]===square[b] && square[a]===square[c]){
          return square[a]
        }
  }
  return null;
}