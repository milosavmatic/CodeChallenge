interface ScoreDisplayProps {
  countWinsYou: number
  countWinsPC: number
}

export default function ScoreDisplay({ countWinsYou, countWinsPC }: ScoreDisplayProps) {
  return (
    <h1 className="text-[64px] md:text-[128px] text-white leading-none">{countWinsYou} - {countWinsPC}</h1>
  )
}
