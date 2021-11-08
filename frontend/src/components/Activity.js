import React from 'react'

const Activity = ({activity}) => {
  return (
    <div className="activity">
      <h1 className="topic">{activity.activity}</h1>
      <p className="description">{activity.description}</p>
    </div>
  )
}

export default Activity
