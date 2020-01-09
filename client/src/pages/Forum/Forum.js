import React from 'react'
import { useParams } from "react-router-dom";
import ToolBar from '../../components/ToolBar'

const Forum = () => {
  const { id } = useParams()

  return (
    <div>
      <ToolBar />
      Id: {id}
    </div>
  )
}

export default Forum
