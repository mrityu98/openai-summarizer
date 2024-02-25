import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex flex-col justify-center items-center'>
     <nav className='flex justify-end items-center w-full mb-10 pt-3 '>
     <button type='submit' onClick={()=>{window.open('https://github.com/mrityu98')}} className='black_btn'>
     Github   
     </button>
     </nav>
     <h1 className='head_text'>
     Article Summarization using <br className='max-md:hidden'/> 
     <span className='orange_gradient'>OpenAI GPT-4</span>
     </h1>
     <h2 className='desc'>
      An article summarizer based on OpenAI's GPT-4 model. Just copy and paste the article link in the box below and see a concise and clear summary of the same. Happy summarising!!
     </h2>
    </header>
  )
}

export default Hero
