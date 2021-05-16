import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey ='7fbea83f46a49d2a30d6dc46c712bcbe2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = ()=>{

    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command,articles})=>{
                if(command==='newsHeadlines'){
                    console.log(articles);
                }
            }

        })
    },[]);

    return (
        <div>
            <h1>Anurag hi hai abi b</h1>
        </div>
    );
}
export default App;