import { useState } from 'react';

function CountriesForm({data, onAdd}){

    const [text, setText] = useState("");
    
    function search(name){
        name = name[0].toUpperCase() + name.slice(1);
        
        let bool;

        for(let i = 0; i < Object.values(data).length; i++){
            if(Object.values(data)[i].match(name)){
                bool = true;
                onAdd(Object.keys(data)[i], bool)
            }
                
        }
        if(bool === undefined){
            bool = false;
            onAdd("Please enter valid name", bool)
        }
    }

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                search(text);
                setText("");
            }}>
                <input type="text" value={text} placeholder="Enter country name" onChange={e => {
                    setText(e.target.value);
                }} required />
                <button>Search</button>
            </form>
        </div>
    )
        
}

export default CountriesForm;