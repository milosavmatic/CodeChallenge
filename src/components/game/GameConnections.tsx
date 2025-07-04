// Game connections visual component

import { gameConnections } from '../../utils/gameConnections'

export default function GameConnections() {
  return (
    <>
      {gameConnections.map(connection => (
        <div key={connection} className={`connection ${connection}`}>
          <span className="stem">
            <span className="head"></span>
          </span>
        </div>
      ))}
    </>
  )
}
