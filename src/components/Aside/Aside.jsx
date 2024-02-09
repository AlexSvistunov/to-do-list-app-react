import React from 'react'

const Aside = ({children}) => {
  console.log(children);
  return (
    <>
      <aside>
        {/* <Calendar></Calendar> */}
        <h3>Tasks</h3>
        <div>Today <span>2</span></div>
      </aside>
    </>
  )
}

export default Aside