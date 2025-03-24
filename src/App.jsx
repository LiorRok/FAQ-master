import Fqa from './Fqa'

export default function App() {
  return (
    <div>
      <div id='header'>
        <h1 className='title'>Frequently Asked Questions</h1>
        <h3 className='subtitle'>
          Browse through the most frequently asked questions
        </h3>
      </div>
      <div id='main'>
        <Fqa />
      </div>
    </div>
  )
}
