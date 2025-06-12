import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from './assets/tailwindcss.svg'
import './App.css'
import DateCounter from './components/DateCounter'


const App =()=> (
    <div className='py-20 min-h-dvh gap-20 flex flex-col justify-center items-center'>
        <section className='flex gap-20'>
          <img className='h-15 '
            src={reactLogo} alt='react-logo' 
          />
          <img className='h-15'
            src={viteLogo} alt='vite-logo' 
          />
          <img className='h-15'
            src={tailwindLogo} alt='vite-logo' 
          />

        </section>
        <section>
          <h2 className='text-2xl text-center font-mono font-bold'>Date Counter</h2>
          <p className='text-center font-mono'>Count + to advances the date by the current Steps</p>
          <p className='text-center font-mono'>Count - to go back the date by the current Steps</p>
          <p className='text-center font-mono'>TODAY resets the date to today</p>

        </section>

        <DateCounter />
        <footer>
          <p className='text-center text-xs'>This website was developed to learn React + Tailwind + Vite and has no direct connection to any of these brands </p>
        </footer>

    </div>
  )


export default App
