import React from 'react'

function VSpacer({height}) {
  return (
    <div className={`min-w-auto min-h-${height} bg-transparent`} style={{minHeight:`calc(1rem * ${height})`}}></div>
  )
}

export default VSpacer