import React from 'react'

export default function Container(props: {
    children: React.ReactNode,
}) {
  return (
    <div className="flex flex-col h-screen items-center justify-between">
        {props.children}
    </div>
  )
}
