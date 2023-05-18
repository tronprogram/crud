"use client"
import {createContext, useContext} from 'react'
export const TaskContext=createContext()
export const useTasks=()=>{
    const context=useContext(TaskContext)
    if(!context) throw new Error('useTasks blah blah blah blah')
    return context
}
export const TaskProvider = ({ children }) => {
    const tasks = [
      {
        id: 1,
        title: "my first task",
        description: "whatever",
      },
      {
        id: 2,
        title: "my secondst task",
        description: "who's deez?",
      },
      {
        id: 3,
        title: "my thirdst task",
        description: "deez NU--",
      },
    ];
  
    return (
      <TaskContext.Provider value={{ tasks }}>
        {children}
      </TaskContext.Provider>
    );
  };    