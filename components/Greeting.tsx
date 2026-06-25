type Props = {
  name: string;
  player: string;
};

// simple greeting using props
export default function Greeting({ name, player }: Props) {

  return (
    <div className="card">

      <h2>Welcome {name}!</h2>

      <p>Your favourite player is {player}.</p>

    </div>
  );
}