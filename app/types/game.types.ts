export type SquareValue = 'X' | 'O' | null;

export interface SquareProps {
  value: SquareValue;
  onSquareClick: () => void;
}

export interface BoardProps {
  xIsNext: boolean;
  squares: SquareValue[];
  onPlay: (nextSquares: SquareValue[]) => void;
}