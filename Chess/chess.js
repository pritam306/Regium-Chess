//  PIECE SVGs
const PIECE_SVG = {
  wK:`<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5" stroke-linejoin="miter"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#fff" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#fff"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/></g></svg>`,
  bK:`<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5" stroke-linejoin="miter"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#000" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#000"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" stroke="#fff"/></g></svg>`,
  wQ:`<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm16.5-4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm17 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/><path d="M9 26c8.5-8.5 15-9 22.5 0L38 12l-6.5 14c0 0-2-4-9.5-4S13 26 13 26L6.5 12 9 26z" stroke-linecap="butt"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c4-1.5 17-1.5 21 0" fill="none"/></g></svg>`,
  bQ:`<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm16.5-4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm17 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/><path d="M9 26c8.5-8.5 15-9 22.5 0L38 12l-6.5 14c0 0-2-4-9.5-4S13 26 13 26L6.5 12 9 26z" stroke-linecap="butt"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c4-1.5 17-1.5 21 0" fill="none" stroke="#fff"/></g></svg>`,
  wR:`<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zm3.5-7 1.5-2.5h17l1.5 2.5h-20zm-.5 4v-4h21v4H12z" stroke-linecap="butt"/><path d="M14 29.5v-13h17v13H14z" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M9 9h4v2H9V9zm5 0h4v4H14V9zm5 0h4v2H19V9zm5 0h4v4H24V9zm5 0h4v2H29V9z"/><path d="M9 12h27" fill="none" stroke-linecap="butt" stroke-linejoin="miter"/></g></svg>`,
  bR:`<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zm3.5-7 1.5-2.5h17l1.5 2.5h-20zm-.5 4v-4h21v4H12z" stroke-linecap="butt"/><path d="M14 29.5v-13h17v13H14z" stroke-linecap="butt" stroke-linejoin="miter"/><path d="M9 9h4v2H9V9zm5 0h4v4H14V9zm5 0h4v2H19V9zm5 0h4v4H24V9zm5 0h4v2H29V9z"/><path d="M9 12h27" fill="none" stroke="#fff" stroke-linecap="butt" stroke-linejoin="miter"/></g></svg>`,
  wB:`<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#fff" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke-linejoin="miter"/></g></svg>`,
  bB:`<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#000" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke="#fff" stroke-linejoin="miter"/></g></svg>`,
  wN:`<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#fff"/><path d="M24 18c.38 5.1-5.55 4.9-6 8 2.27 0 3.83 3.27 6 8 .27 1.41.6 2.85.75 4.25H6.75c-.42-3.42 4.5-3.17 3.5-7.5 0-3-3-1-3-6.5s9.5-9 14.75-6.25z" fill="#fff"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5.43-9.75a.5 1.5 55 1 1-.86 1.5.5 1.5 55 0 1 .86-1.5z" fill="#000" stroke="none"/></g></svg>`,
  bN:`<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#000"/><path d="M24 18c.38 5.1-5.55 4.9-6 8 2.27 0 3.83 3.27 6 8 .27 1.41.6 2.85.75 4.25H6.75c-.42-3.42 4.5-3.17 3.5-7.5 0-3-3-1-3-6.5s9.5-9 14.75-6.25z" fill="#000"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5.43-9.75a.5 1.5 55 1 1-.86 1.5.5 1.5 55 0 1 .86-1.5z" fill="#fff" stroke="none"/></g></svg>`,
  wP:`<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03L17 39h11l-1.41-12.97A6.992 6.992 0 0 0 29 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  bP:`<svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03L17 39h11l-1.41-12.97A6.992 6.992 0 0 0 29 21c0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#000" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`
};

// Captured piece glyphs
const PIECE_GLYPH = { K:'♔',Q:'♛',R:'♜',B:'♝',N:'♞',P:'♟', k:'♚',q:'♛',r:'♜',b:'♝',n:'♞',p:'♟' };

//  GAME STATE
const FILES = ['a','b','c','d','e','f','g','h'];
let board = [];            // 8x8 array of piece strings or ''
let turn = 'w';
let playerColor = 'white'; 
let aiColor = 'black';
let selectedSq = null;
let legalMoves = [];
let moveHistory = []; //pritam created array to store move history for undo functionality
let castleRights = {wK:true,wQ:true,bK:true,bQ:true};
let enPassantSq = null;   // e.g. 'e3'
let halfMoves = 0;
let fullMoves = 1;
let gameOver = false;
let promotionCallback = null;
let scores = {human:0,ai:0,draw:0};
let timers = {w:600,b:600};
let timerInterval = null;
let aiDepth = 2;
let isFlipped = false;
let capturedByWhite = [];
let capturedByBlack = []; 

// Piece-square tables (from white's perspective)
const PST = {
  P:[[ 0, 0, 0, 0, 0, 0, 0, 0],
     [50,50,50,50,50,50,50,50],
     [10,10,20,30,30,20,10,10],
     [ 5, 5,10,25,25,10, 5, 5],
     [ 0, 0, 0,20,20, 0, 0, 0],
     [ 5,-5,-10, 0, 0,-10,-5, 5],
     [ 5,10,10,-20,-20,10,10, 5],
     [ 0, 0, 0, 0, 0, 0, 0, 0]],
  N:[[-50,-40,-30,-30,-30,-30,-40,-50],
     [-40,-20,  0,  0,  0,  0,-20,-40],
     [-30,  0, 10, 15, 15, 10,  0,-30],
     [-30,  5, 15, 20, 20, 15,  5,-30],
     [-30,  0, 15, 20, 20, 15,  0,-30],
     [-30,  5, 10, 15, 15, 10,  5,-30],
     [-40,-20,  0,  5,  5,  0,-20,-40],
     [-50,-40,-30,-30,-30,-30,-40,-50]],
  B:[[-20,-10,-10,-10,-10,-10,-10,-20],
     [-10,  0,  0,  0,  0,  0,  0,-10],
     [-10,  0,  5, 10, 10,  5,  0,-10],
     [-10,  5,  5, 10, 10,  5,  5,-10],
     [-10,  0, 10, 10, 10, 10,  0,-10],
     [-10, 10, 10, 10, 10, 10, 10,-10],
     [-10,  5,  0,  0,  0,  0,  5,-10],
     [-20,-10,-10,-10,-10,-10,-10,-20]],
  R:[[  0,  0,  0,  0,  0,  0,  0,  0],
     [  5, 10, 10, 10, 10, 10, 10,  5],
     [ -5,  0,  0,  0,  0,  0,  0, -5],
     [ -5,  0,  0,  0,  0,  0,  0, -5],
     [ -5,  0,  0,  0,  0,  0,  0, -5],
     [ -5,  0,  0,  0,  0,  0,  0, -5],
     [ -5,  0,  0,  0,  0,  0,  0, -5],
     [  0,  0,  0,  5,  5,  0,  0,  0]],
  Q:[[-20,-10,-10, -5, -5,-10,-10,-20],
     [-10,  0,  0,  0,  0,  0,  0,-10],
     [-10,  0,  5,  5,  5,  5,  0,-10],
     [ -5,  0,  5,  5,  5,  5,  0, -5],
     [  0,  0,  5,  5,  5,  5,  0, -5],
     [-10,  5,  5,  5,  5,  5,  0,-10],
     [-10,  0,  5,  0,  0,  0,  0,-10],
     [-20,-10,-10, -5, -5,-10,-10,-20]],
  K:[[-30,-40,-40,-50,-50,-40,-40,-30],
     [-30,-40,-40,-50,-50,-40,-40,-30],
     [-30,-40,-40,-50,-50,-40,-40,-30],
     [-30,-40,-40,-50,-50,-40,-40,-30],
     [-20,-30,-30,-40,-40,-30,-30,-20],
     [-10,-20,-20,-20,-20,-20,-20,-10],
     [ 20, 20,  0,  0,  0,  0, 20, 20],
     [ 20, 30, 10,  0,  0, 10, 30, 20]]
};
const PIECE_VALUE = {P:100,N:320,B:330,R:500,Q:900,K:20000};

// ─── helpers ───
const rc2sq  = (r,c) => FILES[c]+''+(8-r);
const sq2rc  = sq   => [8-parseInt(sq[1]), FILES.indexOf(sq[0])];
const inBounds= (r,c)=> r>=0&&r<8&&c>=0&&c<8;
const pieceColor = p => p ? (p===p.toUpperCase()?'w':'b') : null;
const pieceType  = p => p.toUpperCase();

// ─── INIT BOARD ───
function initBoard() {
  board = Array.from({length:8},()=>Array(8).fill(''));
  const back = ['R','N','B','Q','K','B','N','R'];
  for(let c=0;c<8;c++){
    board[0][c] = back[c].toLowerCase();
    board[1][c] = 'p';        
    board[6][c] = 'P';         
    board[7][c] = back[c];      
  }
  turn='w'; selectedSq=null; legalMoves=[];
  castleRights={wK:true,wQ:true,bK:true,bQ:true};
  enPassantSq=null; halfMoves=0; fullMoves=1;
  moveHistory=[]; gameOver=false;
  capturedByWhite=[]; capturedByBlack=[];
}

// ─── RAW MOVES (without check filtering) ───
function rawMoves(r,c,bd,cr,ep) {
  const p=bd[r][c]; if(!p) return [];
  const color=pieceColor(p); const type=pieceType(p);
  const moves=[]; const opp=color==='w'?'b':'w';
  const addIf=(tr,tc)=>{ if(inBounds(tr,tc)&&pieceColor(bd[tr][tc])!==color) moves.push([tr,tc]); };
  const slide=(dr,dc)=>{
    let nr=r+dr,nc=c+dc;
    while(inBounds(nr,nc)){ const pc=pieceColor(bd[nr][nc]); if(pc===color)break; moves.push([nr,nc]); if(pc===opp)break; nr+=dr;nc+=dc; }
  };
  if(type==='P'){
    const dir=color==='w'?-1:1; const startRow=color==='w'?6:1;
    if(inBounds(r+dir,c)&&!bd[r+dir][c]){ moves.push([r+dir,c]); if(r===startRow&&!bd[r+2*dir][c]) moves.push([r+2*dir,c]); }
    for(const dc of[-1,1]){ const nr=r+dir,nc=c+dc; if(!inBounds(nr,nc))continue; if(pieceColor(bd[nr][nc])===opp) moves.push([nr,nc]); else if(ep&&rc2sq(nr,nc)===ep) moves.push([nr,nc]); }
  } else if(type==='N'){
    for(const [dr,dc] of[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]) addIf(r+dr,c+dc);
  } else if(type==='B'){ for(const [dr,dc] of[[-1,-1],[-1,1],[1,-1],[1,1]]) slide(dr,dc);
  } else if(type==='R'){ for(const [dr,dc] of[[-1,0],[1,0],[0,-1],[0,1]]) slide(dr,dc);
  } else if(type==='Q'){ for(const [dr,dc] of[[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0],[0,-1],[0,1]]) slide(dr,dc);
  } else if(type==='K'){
    for(const [dr,dc] of[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]) addIf(r+dr,c+dc);
    // castling
    if(color==='w'&&cr.wK&&!bd[7][5]&&!bd[7][6]&&!isAttacked(7,4,'b',bd,cr,ep)&&!isAttacked(7,5,'b',bd,cr,ep)) moves.push([7,6]);
    if(color==='w'&&cr.wQ&&!bd[7][3]&&!bd[7][2]&&!bd[7][1]&&!isAttacked(7,4,'b',bd,cr,ep)&&!isAttacked(7,3,'b',bd,cr,ep)) moves.push([7,2]);
    if(color==='b'&&cr.bK&&!bd[0][5]&&!bd[0][6]&&!isAttacked(0,4,'w',bd,cr,ep)&&!isAttacked(0,5,'w',bd,cr,ep)) moves.push([0,6]);
    if(color==='b'&&cr.bQ&&!bd[0][3]&&!bd[0][2]&&!bd[0][1]&&!isAttacked(0,4,'w',bd,cr,ep)&&!isAttacked(0,3,'w',bd,cr,ep)) moves.push([0,2]);
  }
  return moves;
}

function isAttacked(r,c,byColor,bd,cr,ep){
  for(let sr=0;sr<8;sr++) for(let sc=0;sc<8;sc++){
    if(pieceColor(bd[sr][sc])!==byColor) continue;
    const mv=rawMovesNoKingCastle(sr,sc,bd,ep);
    if(mv.some(([mr,mc])=>mr===r&&mc===c)) return true;
  }
  return false;
}
function rawMovesNoKingCastle(r,c,bd,ep){
  const p=bd[r][c]; if(!p) return [];
  const color=pieceColor(p); const type=pieceType(p);
  const moves=[]; const opp=color==='w'?'b':'w';
  const addIf=(tr,tc)=>{ if(inBounds(tr,tc)&&pieceColor(bd[tr][tc])!==color) moves.push([tr,tc]); };
  const slide=(dr,dc)=>{ let nr=r+dr,nc=c+dc; while(inBounds(nr,nc)){const pc=pieceColor(bd[nr][nc]);if(pc===color)break;moves.push([nr,nc]);if(pc===opp)break;nr+=dr;nc+=dc;} };
  if(type==='P'){
    const dir=color==='w'?-1:1;
    for(const dc of[-1,1]){ const nr=r+dir,nc=c+dc; if(!inBounds(nr,nc))continue; moves.push([nr,nc]); }
  } else if(type==='N'){
    for(const [dr,dc] of[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]) addIf(r+dr,c+dc);
  } else if(type==='B'){ for(const [dr,dc] of[[-1,-1],[-1,1],[1,-1],[1,1]]) slide(dr,dc);
  } else if(type==='R'){ for(const [dr,dc] of[[-1,0],[1,0],[0,-1],[0,1]]) slide(dr,dc);
  } else if(type==='Q'){ for(const [dr,dc] of[[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0],[0,-1],[0,1]]) slide(dr,dc);
  } else if(type==='K'){
    for(const [dr,dc] of[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]) addIf(r+dr,c+dc);
  }
  return moves;
}

function findKing(color,bd){ for(let r=0;r<8;r++) for(let c=0;c<8;c++) if(bd[r][c]===(color==='w'?'K':'k')) return [r,c]; return null; }

function legalMovesFor(r,c,bd,cr,ep){
  const p=bd[r][c]; if(!p) return [];
  const color=pieceColor(p);
  const raw=rawMoves(r,c,bd,cr,ep);
  return raw.filter(([tr,tc])=>{
    const nb=applyMoveBoard(r,c,tr,tc,bd,null,ep);
    const [kr,kc]=findKing(color,nb);
    return !isAttacked(kr,kc,color==='w'?'b':'w',nb,cr,ep);
  });
}

function applyMoveBoard(fr,fc,tr,tc,bd,promo,ep){
  const nb=bd.map(row=>[...row]);
  const p=nb[fr][fc]; nb[fr][fc]=''; nb[tr][tc]=p;
  // en passant capture
  if(pieceType(p)==='P'&&fc!==tc&&!bd[tr][tc]){
    const epR=pieceColor(p)==='w'?tr+1:tr-1; nb[epR][tc]='';
  }
  // castling rook
  if(pieceType(p)==='K'){
    if(fr===7&&fc===4&&tc===6&&tr===7){ nb[7][5]=nb[7][7];nb[7][7]=''; }
    if(fr===7&&fc===4&&tc===2&&tr===7){ nb[7][3]=nb[7][0];nb[7][0]=''; }
    if(fr===0&&fc===4&&tc===6&&tr===0){ nb[0][5]=nb[0][7];nb[0][7]=''; }
    if(fr===0&&fc===4&&tc===2&&tr===0){ nb[0][3]=nb[0][0];nb[0][0]=''; }
  }
  // promotion
  if(pieceType(p)==='P'&&(tr===0||tr===7)){
    const q=promo||(pieceColor(p)==='w'?'Q':'q');
    nb[tr][tc]=pieceColor(p)==='w'?q.toUpperCase():q.toLowerCase();
  }
  return nb;
}

function updateCastleRights(fr,fc,tr,tc,piece,cr){
  const ncr={...cr};
  if(piece==='K') { ncr.wK=false; ncr.wQ=false; }
  if(piece==='k') { ncr.bK=false; ncr.bQ=false; }
  if(fr===7&&fc===0||tr===7&&tc===0) ncr.wQ=false;
  if(fr===7&&fc===7||tr===7&&tc===7) ncr.wK=false;
  if(fr===0&&fc===0||tr===0&&tc===0) ncr.bQ=false;
  if(fr===0&&fc===7||tr===0&&tc===7) ncr.bK=false;
  return ncr;
}

function computeEnPassant(fr,fc,tr,tc,piece){
  if(pieceType(piece)==='P'&&Math.abs(tr-fr)===2) return rc2sq(fr+(tr-fr)/2, fc);
  return null;
}

// ─── EVALUATION ───
function evalBoard(bd){
  let score=0;
  for(let r=0;r<8;r++) for(let c=0;c<8;c++){
    const p=bd[r][c]; if(!p) continue;
    const t=pieceType(p); const color=pieceColor(p);
    const pstRow=color==='w'?r:7-r;
    const val=(PIECE_VALUE[t]||0)+(PST[t]?PST[t][pstRow][c]:0);
    score+=color==='w'?val:-val;
  }
  return score;
}

function getAllMoves(color,bd,cr,ep){
  const moves=[];
  for(let r=0;r<8;r++) for(let c=0;c<8;c++){
    if(pieceColor(bd[r][c])!==color) continue;
    const lm=legalMovesFor(r,c,bd,cr,ep);
    for(const [tr,tc] of lm) moves.push({fr:r,fc:c,tr,tc});
  }
  return moves;
}

function isInCheck(color,bd,cr,ep){ const [kr,kc]=findKing(color,bd); return isAttacked(kr,kc,color==='w'?'b':'w',bd,cr,ep); }

// ─── MINIMAX with alpha-beta ───
function minimax(bd,depth,alpha,beta,maxim,cr,ep){
  const color=maxim?'b':'w';
  const moves=getAllMoves(color,bd,cr,ep);
  if(moves.length===0){ const inChk=isInCheck(color,bd,cr,ep); return inChk?(maxim?-20000:20000):0; }
  if(depth===0) return evalBoard(bd)*(maxim?-1:1); // from AI perspective
  if(maxim){
    let best=-Infinity;
    for(const mv of moves){
      const nb=applyMoveBoard(mv.fr,mv.fc,mv.tr,mv.tc,bd,null,ep);
      const ncr=updateCastleRights(mv.fr,mv.fc,mv.tr,mv.tc,bd[mv.fr][mv.fc],cr);
      const nep=computeEnPassant(mv.fr,mv.fc,mv.tr,mv.tc,bd[mv.fr][mv.fc]);
      const val=minimax(nb,depth-1,alpha,beta,false,ncr,nep);
      best=Math.max(best,val); alpha=Math.max(alpha,val); if(beta<=alpha) break;
    }
    return best;
  } else {
    let best=Infinity;
    for(const mv of moves){
      const nb=applyMoveBoard(mv.fr,mv.fc,mv.tr,mv.tc,bd,null,ep);
      const ncr=updateCastleRights(mv.fr,mv.fc,mv.tr,mv.tc,bd[mv.fr][mv.fc],cr);
      const nep=computeEnPassant(mv.fr,mv.fc,mv.tr,mv.tc,bd[mv.fr][mv.fc]);
      const val=minimax(nb,depth-1,alpha,beta,true,ncr,nep);
      best=Math.min(best,val); beta=Math.min(beta,val); if(beta<=alpha) break;
    }
    return best;
  }
}

function bestAIMove(){
  const depth=aiDepth;
  const moves=getAllMoves(aiColor[0],board,castleRights,enPassantSq);
  if(!moves.length) return null;
  // shuffle for variety at same score
  moves.sort(()=>Math.random()-0.5);
  let best=-Infinity, bestMove=null;
  for(const mv of moves){
    const nb=applyMoveBoard(mv.fr,mv.fc,mv.tr,mv.tc,board,null,enPassantSq);
    const ncr=updateCastleRights(mv.fr,mv.fc,mv.tr,mv.tc,board[mv.fr][mv.fc],castleRights);
    const nep=computeEnPassant(mv.fr,mv.fc,mv.tr,mv.tc,board[mv.fr][mv.fc]);
    const val=minimax(nb,depth-1,-Infinity,Infinity,aiColor[0]==='w',ncr,nep);
    if(val>best){best=val;bestMove=mv;}
  }
  return bestMove;
}

// ─── MOVE EXECUTION ───
function executeMove(fr,fc,tr,tc,promo){
  const piece=board[fr][fc];
  const captured=board[tr][tc];
  // en passant capture piece
  let epCapture='';
  if(pieceType(piece)==='P'&&fc!==tc&&!board[tr][tc]){
    const epR=turn==='w'?tr+1:tr-1; epCapture=board[epR][tc];
  }
  const newBoard=applyMoveBoard(fr,fc,tr,tc,board,promo,enPassantSq);
  const newCR=updateCastleRights(fr,fc,tr,tc,piece,castleRights);
  const newEP=computeEnPassant(fr,fc,tr,tc,piece);

  // SAN (simplified)
  const san=makeSAN(fr,fc,tr,tc,piece,captured||epCapture,promo,board,castleRights,enPassantSq);

  // update captured
  const cap=captured||epCapture;
  if(cap){ (turn==='w'?capturedByWhite:capturedByBlack).push(cap); }

  // history entry
  moveHistory.push({fr,fc,tr,tc,piece,captured:cap,promo,san,board:board.map(r=>[...r]),cr:{...castleRights},ep:enPassantSq});

  board=newBoard; castleRights=newCR; enPassantSq=newEP;
  halfMoves=(cap||pieceType(piece)==='P')?0:halfMoves+1;
  if(turn==='b') fullMoves++;
  turn=turn==='w'?'b':'w';

  selectedSq=null; legalMoves=[];
  render();
  updateMoveList();
  updateCaptured();
  checkGameState();
  if(!gameOver && turn===aiColor[0]) scheduleAI();
}

function makeSAN(fr,fc,tr,tc,piece,captured,promo,bd,cr,ep){
  const t=pieceType(piece); const files='abcdefgh';
  const toSq=files[tc]+(8-tr);
  if(t==='K'){
    if(fc===4&&tc===6) return 'O-O';
    if(fc===4&&tc===2) return 'O-O-O';
  }
  const capt=captured?'x':'';
  const pref=t==='P'?(captured?files[fc]:''):(t+(files[fc]+(8-fr)));
  const promoStr=promo?'='+promo.toUpperCase():'';
  return pref+capt+toSq+promoStr;
}

function checkGameState(){
  const color=turn;
  const moves=getAllMoves(color,board,castleRights,enPassantSq);
  const inChk=isInCheck(color,board,castleRights,enPassantSq);
  if(moves.length===0){
    if(inChk){
      const winner=color==='w'?'Black':'White';
      const winnerIsHuman=(winner.toLowerCase()===playerColor);
      endGame('checkmate',winner,winnerIsHuman);
    } else {
      endGame('stalemate','',false);
    }
  } else if(inChk){
    setStatus('CHECK! '+( color==='w'?'White':'Black')+' king is in check','check');
    const [kr,kc]=findKing(color,board);
    document.querySelector('#sq-'+kr+'-'+kc)?.classList.add('in-check');
  } else if(halfMoves>=100){
    endGame('draw50','',false);
  } else {
    setStatus((turn==='w'?'White':'Black')+' to move','');
  }
}

function endGame(reason,winner,humanWon){
  gameOver=true;
  stopTimer();
  let title='', sub='', crown='';
  if(reason==='checkmate'){
    title='Checkmate!';
    sub=winner+' wins the match';
    crown=winner==='White'?'♔':'♚';
    if(humanWon){ scores.human++; } else { scores.ai++; }
  } else if(reason==='stalemate'){ title='Stalemate'; sub='The game is a draw'; crown='⚖'; scores.draw++; }
  else if(reason==='draw50'){   title='Draw'; sub='50-move rule'; crown='⚖'; scores.draw++; }
  else if(reason==='resign'){
    title=winner+' wins!'; sub='By resignation'; crown=winner==='White'?'♔':'♚';
    if(humanWon){ scores.human++; } else { scores.ai++; }
  }
  setStatus(title+' – '+sub,'win');
  updateScores();
  setTimeout(()=>showGameOver(crown,title,sub),600);
}

function scheduleAI(){
  document.getElementById('ai-thinking').classList.add('show');
  setTimeout(()=>{
    if(gameOver) return;
    const mv=bestAIMove();
    document.getElementById('ai-thinking').classList.remove('show');
    if(!mv) return;
    const piece=board[mv.fr][mv.fc];
    const needPromo=pieceType(piece)==='P'&&(mv.tr===0||mv.tr===7);
    if(needPromo){ executeMove(mv.fr,mv.fc,mv.tr,mv.tc,'Q'); }
    else { executeMove(mv.fr,mv.fc,mv.tr,mv.tc,null); }
  }, 50);
}

// ─── BOARD SIZE ───
function calcBoardSize(){
  const vw=window.innerWidth, vh=window.innerHeight;
  const side=Math.min(vw-16, vh-220, vw>760?vw-280:460, 560);
  return Math.floor(side/8)*8;
}

// ─── RENDER ───
function render(){
  const sz=calcBoardSize();
  const sqSz=sz/8;
  const cb=document.getElementById('chessboard');
  cb.style.width=sz+'px'; cb.style.height=sz+'px';

  const [lkr,lkc]=findKing(turn==='w'?'b':'w',board)||[-1,-1];
  const inCheck=isInCheck(turn,board,castleRights,enPassantSq);
  const [ckr,ckc]=inCheck?findKing(turn,board)||[-1,-1]:[-1,-1];

  const lastMove=moveHistory.length?moveHistory[moveHistory.length-1]:null;

  cb.innerHTML='';
  for(let r=0;r<8;r++){
    for(let c=0;c<8;c++){
      const dr=isFlipped?7-r:r; const dc=isFlipped?7-c:c;
      const p=board[dr][dc];
      const isLight=(dr+dc)%2===0;
      const sq=document.createElement('div');
      sq.className='sq '+(isLight?'light':'dark');
      sq.id='sq-'+dr+'-'+dc;
      sq.style.width=sqSz+'px'; sq.style.height=sqSz+'px';
      sq.style.fontSize=sqSz*0.82+'px';

      if(selectedSq&&selectedSq[0]===dr&&selectedSq[1]===dc) sq.classList.add('selected');
      if(lastMove&&lastMove.fr===dr&&lastMove.fc===dc) sq.classList.add('last-from');
      if(lastMove&&lastMove.tr===dr&&lastMove.tc===dc) sq.classList.add('last-to');
      if(inCheck&&ckr===dr&&ckc===dc) sq.classList.add('in-check');

      // move dots
      const isLegal=legalMoves.some(([mr,mc])=>mr===dr&&mc===dc);
      if(isLegal){
        const dot=document.createElement('div');
        dot.className='move-dot';
        if(p&&pieceColor(p)!==(turn)) sq.classList.add('has-enemy');
        sq.appendChild(dot);
      }

      // piece
      if(p){
        const color=pieceColor(p); const type=pieceType(p);
        const key=(color==='w'?'w':'b')+type;
        const pdiv=document.createElement('div');
        pdiv.className='piece';
        pdiv.innerHTML=PIECE_SVG[key]||'';
        sq.appendChild(pdiv);
      }

      sq.addEventListener('click',()=>handleSquareClick(dr,dc));
      sq.addEventListener('touchstart',e=>{ e.preventDefault(); handleSquareClick(dr,dc); },{passive:false});
      cb.appendChild(sq);
    }
  }
  renderLabels(sqSz);
  updatePlayerHighlight();
}

function renderLabels(sqSz){
  const tl=document.getElementById('labels-top');
  const bl=document.getElementById('labels-bottom');
  const ll=document.getElementById('labels-left');
  const lr=document.getElementById('labels-right');
  const files=isFlipped?[...FILES].reverse():FILES;
  const ranks=isFlipped?[1,2,3,4,5,6,7,8]:[8,7,6,5,4,3,2,1];
  tl.innerHTML=bl.innerHTML=ll.innerHTML=lr.innerHTML='';
  files.forEach(f=>{ ['labels-top','labels-bottom'].forEach(id=>{ const l=document.createElement('div'); l.className='board-label'; l.style.width=sqSz+'px'; l.textContent=f; document.getElementById(id).appendChild(l); }); });
  ranks.forEach(rk=>{ ['labels-left','labels-right'].forEach(id=>{ const l=document.createElement('div'); l.className='board-label'; l.style.height=sqSz+'px'; l.textContent=rk; document.getElementById(id).appendChild(l); }); });
}

// ─── CLICK HANDLER ───
function handleSquareClick(r,c){
  if(gameOver) return;
  if(turn!==playerColor[0]) return; // not player's turn

  const p=board[r][c];
  // If a legal move target is clicked
  if(selectedSq && legalMoves.some(([mr,mc])=>mr===r&&mc===c)){
    const [fr,fc]=selectedSq;
    const piece=board[fr][fc];
    const needPromo=pieceType(piece)==='P'&&(r===0||r===7);
    if(needPromo){ showPromotion(pieceColor(piece),promo=>executeMove(fr,fc,r,c,promo)); }
    else { executeMove(fr,fc,r,c,null); }
    return;
  }
  // Select own piece
  if(p&&pieceColor(p)===turn){
    selectedSq=[r,c];
    legalMoves=legalMovesFor(r,c,board,castleRights,enPassantSq);
    render(); return;
  }
  // Deselect
  selectedSq=null; legalMoves=[]; render();
}

// ─── PROMOTION UI ───
function showPromotion(color,cb){
  promotionCallback=cb;
  const pieces=color==='w'?['Q','R','B','N']:['q','r','b','n'];
  const labels=color==='w'?['♕','♖','♗','♘']:['♛','♜','♝','♞'];
  const box=document.getElementById('promo-pieces'); box.innerHTML='';
  pieces.forEach((p,i)=>{
    const btn=document.createElement('div');
    btn.className='promo-piece';
    btn.innerHTML=labels[i];
    btn.onclick=()=>{ document.getElementById('promo-overlay').classList.remove('show'); promotionCallback(p); };
    box.appendChild(btn);
  });
  document.getElementById('promo-overlay').classList.add('show');
}

// ─── GAME OVER UI ───
function showGameOver(crown,title,sub){
  document.getElementById('gameover-crown').textContent=crown;
  document.getElementById('gameover-title').textContent=title;
  document.getElementById('gameover-sub').textContent=sub;
  document.getElementById('gameover-overlay').classList.add('show');
}
function closeGameOver(){ document.getElementById('gameover-overlay').classList.remove('show'); }

// ─── STATUS ───
function setStatus(msg,type){
  const bar=document.getElementById('status-bar');
  bar.textContent=msg;
  bar.className='status-bar'+(type?(' '+type+'-status'):'');
}

// ─── TIMER ───
function startTimer(){
  stopTimer();
  timerInterval=setInterval(()=>{
    if(gameOver) return;
    timers[turn]=Math.max(0,timers[turn]-1);
    updateTimerDisplay();
    if(timers[turn]===0){ endGame('timeout',turn==='w'?'Black':'White',turn!==playerColor[0]); }
  },1000);
}
function stopTimer(){ clearInterval(timerInterval); }
function formatTime(s){ const m=Math.floor(s/60); const sec=s%60; return m+':'+(sec<10?'0':'')+sec; }
function updateTimerDisplay(){
  const playerTurn=playerColor==='white'?'w':'b';
  const aiTurn=playerTurn==='w'?'b':'w';
  const bt=document.getElementById('bottom-timer');
  const tt=document.getElementById('top-timer');
  bt.textContent=formatTime(timers[playerTurn]);
  tt.textContent=formatTime(timers[aiTurn]);
  bt.className='player-timer'+(timers[playerTurn]<30?' low-time':'');
  tt.className='player-timer'+(timers[aiTurn]<30?' low-time':'');
}
function updatePlayerHighlight(){
  const isPlayerTurn=turn===playerColor[0];
  document.getElementById('bottom-player').className='player-card'+(isPlayerTurn?' active-player':'');
  document.getElementById('top-player').className='player-card'+(!isPlayerTurn?' active-player':'');
}

// ─── CAPTURED PIECES ───
function updateCaptured(){
  const wCap=capturedByWhite.map(p=>PIECE_GLYPH[p]||'').join(' ');
  const bCap=capturedByBlack.map(p=>PIECE_GLYPH[p]||'').join(' ');
  // white player captured black pieces
  if(playerColor==='white'){
    document.getElementById('bottom-captured').textContent=wCap;
    document.getElementById('top-captured').textContent=bCap;
  } else {
    document.getElementById('bottom-captured').textContent=bCap;
    document.getElementById('top-captured').textContent=wCap;
  }
}

// ─── MOVE LIST ───
function updateMoveList(){
  const ml=document.getElementById('move-list'); ml.innerHTML='';
  for(let i=0;i<moveHistory.length;i+=2){
    const div=document.createElement('div'); div.className='move-pair';
    const num=document.createElement('span'); num.className='move-num'; num.textContent=(Math.floor(i/2)+1)+'.';
    const mw=document.createElement('span'); mw.className='move-w'+(i===moveHistory.length-1?' last-move':''); mw.textContent=moveHistory[i].san;
    div.appendChild(num); div.appendChild(mw);
    if(moveHistory[i+1]){
      const mb=document.createElement('span'); mb.className='move-b'+(i+1===moveHistory.length-1?' last-move':''); mb.textContent=moveHistory[i+1].san; div.appendChild(mb);
    }
    ml.appendChild(div);
  }
  ml.scrollTop=ml.scrollHeight;
}

// ─── SCORES ───
function updateScores(){
  document.getElementById('score-human').textContent=scores.human;
  document.getElementById('score-ai').textContent=scores.ai;
  document.getElementById('score-draw').textContent=scores.draw;
}

// ─── PUBLIC CONTROLS ───
function newGame(){
  stopTimer();
  timers={w:600,b:600};
  initBoard();
  if(playerColor==='random'){ const r=Math.random()<0.5?'white':'black'; playerColor=r; aiColor=r==='white'?'black':'white'; }
  isFlipped=(playerColor==='black');
  aiColor=(playerColor==='white'?'black':'white');
  updatePlayerLabels();
  updateTimerDisplay();
  updateCaptured();
  document.getElementById('move-list').innerHTML='';
  render();
  setStatus('White to move','');
  document.getElementById('ai-thinking').classList.remove('show');
  startTimer();
  if(turn===aiColor[0]) scheduleAI();
}

function updatePlayerLabels(){
  const isWhite=playerColor==='white';
  document.getElementById('bottom-name').textContent='You';
  document.getElementById('bottom-role').textContent=(isWhite?'White':'Black')+' · Human';
  document.getElementById('bottom-avatar').className='player-avatar '+(isWhite?'white-av':'black-av');
  document.getElementById('bottom-avatar').textContent=isWhite?'♙':'♟';
  document.getElementById('top-name').textContent='Regium AI';
  document.getElementById('top-role').textContent=(isWhite?'Black':'White')+' · AI';
  document.getElementById('top-avatar').className='player-avatar '+(isWhite?'black-av':'white-av');
  document.getElementById('top-avatar').textContent=isWhite?'♟':'♙';
}

function setPlayerColor(col){
  playerColor=col;
  document.querySelectorAll('.color-btn').forEach(b=>b.classList.remove('selected'));
  document.getElementById('col-'+col.slice(0,4)).classList.add('selected');
}

function undoMove(){
  if(gameOver||moveHistory.length<2) return;
  // undo 2 moves (player + AI)
  const nm=turn===aiColor[0]?1:2;
  for(let i=0;i<nm&&moveHistory.length;i++){
    const last=moveHistory.pop();
    board=last.board; castleRights=last.cr; enPassantSq=last.ep;
    turn=last.piece===last.piece.toUpperCase()?'w':'b';
    if(last.captured){ (turn==='w'?capturedByWhite:capturedByBlack).pop(); }
  }
  selectedSq=null; legalMoves=[];
  render(); updateMoveList(); updateCaptured();
  setStatus((turn==='w'?'White':'Black')+' to move','');
}

function offerDraw(){ if(gameOver) return; endGame('stalemate','',false); }
function resignGame(){
  if(gameOver) return;
  const winner=playerColor==='white'?'Black':'White';
  endGame('resign',winner,false);
}

// diff
document.getElementById('diff-select').addEventListener('change',function(){ aiDepth=parseInt(this.value); });

// ─── RESIZE ───
window.addEventListener('resize',()=>render());

// ─── INIT ───
newGame();
