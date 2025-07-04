// Player placeholder component for pending choice state
interface PlayerPlaceholderProps {
  label: string
}

export default function PlayerPlaceholder({ label }: PlayerPlaceholderProps) {
  return (
    <div className="text-center">
      <div className="h-[100px] w-[100px] md:w-[182px] md:h-[188px] border-4 border-dashed border-white/50 rounded-full flex items-center justify-center mb-4 mx-auto">
        <p className="text-white/50 text-5xl md:text-7xl">?</p>
      </div>
      <p className="text-[31px] md:text-[72px] text-white">{label}</p>
    </div>
  )
}
