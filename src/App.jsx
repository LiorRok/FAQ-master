import Fqa from './Fqa'
import qa from '../qa.json'

export default function App() {
  const fqa = qa

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <h3> Browse through the most frequently asked questions</h3>
      {fqa.map((qa, i) => (
        <Fqa qa={qa} key={i} />
      ))}
    </div>
  )
}
