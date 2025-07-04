// Score display component showing player vs computer wins
interface ScoreDisplayProps {
  countWinsYou: number
  countWinsPC: number
}

export default function ScoreDisplay({ countWinsYou, countWinsPC }: ScoreDisplayProps) {
  return (
    // Score text (You - Computer format)
    <h1 className="text-[64px] md:text-[128px] text-white leading-none">
      {countWinsYou} - {countWinsPC}
    </h1>
  )
}
