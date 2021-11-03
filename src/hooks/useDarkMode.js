import { useLocalStorage } from "./useLocalStorage"


 const useDarkMode =(initialValue) =>{
    const [darkMode, setDarkMode] = useLocalStorage(initialValue, false)
    const setDarkModeValue= (value) => {
        setDarkMode(value)
    }
    
    
    
      return (darkMode, setDarkModeValue);
}
export default useDarkMode