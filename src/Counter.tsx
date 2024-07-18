/*
 * @Author: chenzhongsheng
 * @Date: 2024-07-15 17:51:04
 * @Description: Coding something
 */
'use lim'

export default function Counter () {
  let count = 1;

  return <>
      <button onClick={()=>count ++}>
        count is {count}
      </button>
    </>
}
