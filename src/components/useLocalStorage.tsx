import  {useState, useEffect} from 'react'

//Helper function to get saved data from local storage
function getSavedData(k:string, initVal:any) {
  //Get saved data from local storage with key
  // (localStorage.getItem(k) || "")
  const savedData = localStorage.getItem(k)
  //If savedData exists return it
  if(savedData) return JSON.parse(savedData)
  //No saved data, return initVal
  if(initVal instanceof Function) return initVal()
  return initVal
}

//Custom hook - useLocalStorage
//Takes in a key and initial value
export const useLocalStorage = (key:string, initVal:string | object) => {
  const [saveData, setSaveData] = useState(() => {
    return getSavedData(key, initVal)
  })

  useEffect(() => {
    console.log("Saving to local storage")
    localStorage.setItem(key, JSON.stringify(saveData))

  }, [saveData])

  return [saveData, setSaveData]
}