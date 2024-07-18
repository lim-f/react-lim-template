/*
 * @Author: chenzhongsheng
 * @Date: 2024-07-15 17:51:04
 * @Description: Coding something
 */
'use lim'

import Counter from "./Counter"
import './App.css'

export default function App() {

  return (
    <div className='app-container'>
      <div>
        <div style={{textAlign: "center"}}>
          <img src='/react.svg'/>
          <img src='/vite.svg'/>
        </div>
        <h1>
          <a href='https://github.com/lim-f/react-lim'>React Lim</a>
        </h1>
        <h2>
           Mark React easier to Use
        </h2>
        <div className="counter-container">
          <Counter />
        </div>
      </div>
    </div>
  )
}
