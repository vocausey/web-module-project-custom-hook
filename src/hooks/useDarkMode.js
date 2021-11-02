import { useLocalStorage } from "./useLocalStorage"


export default function useDarkMode(key, initialFormValues, cb){
    const [formValues, setFormValues] = useLocalStorage(key, initialFormValues)


}