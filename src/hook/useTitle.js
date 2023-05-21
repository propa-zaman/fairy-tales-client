import { useEffect } from 'react';

const useTitle = title =>{
    useEffect(() =>{
        document.title  = `${title} - Fairy Tales`;
    },[title])
}

export default useTitle;