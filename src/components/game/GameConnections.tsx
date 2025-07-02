const connections = [
  'spock--rock',
  'paper--rock',
  'scissors--paper',
  'lizard--spock',
  'scissors--lizard',
  'rock--lizard',
  'rock--scissors',
  'paper--spock',
  'spock--scissors',
  'lizard--paper',
]

export default function GameConnections() {
  return (
    <>
      {connections.map(connection => (
        <div key={connection} className={`connection ${connection}`}>
          <span className="stem">
            <span className="head"></span>
          </span>
        </div>
      ))}
    </>
  )
}
