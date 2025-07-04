// Positioned reload button with hover rotation effect
import ReloadIcon from '../../assets/icons/reload.svg?react'

interface ReloadButtonProps {
  onReload?: () => void
}

export default function ReloadButton({ onReload }: ReloadButtonProps) {
  return (
    <button className="w-7 h-7 md:w-16 md:h-16 top-5 right-3 absolute md:top-3" onClick={onReload}>
      <ReloadIcon className="cursor-pointer transition-transform duration-300 md:hover:-rotate-90 text-white w-7 h-7 md:w-14 md:h-14" />
    </button>
  )
}
