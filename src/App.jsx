import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DateCounter from './components/DateCounter'


const App =()=> (
    <div className='px-5 min-h-dvh gap-30 flex flex-col justify-center items-center'>
        <section className='flex gap-20'>
          <img className='h-30 '
            src={reactLogo} alt='react-logo' 
          />
          <img className='h-30'
            src={viteLogo} alt='vite-logo' 
          />
        </section>

        <DateCounter />

    </div>
  )


export default App
