import React, {useState} from 'react';

const IterationSample = () => {
    
    const [numbers, setNumbers] = useState([
        {id: 1, text : "a"},
        {id: 2, text : "b"},
        {id: 3, text : "c"},
        {id: 4, text : "d"}
    ]);

    const[inputText, setInputText] = useState('');
    const[nextId, setNextId] = useState(5);

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () =>{
        const nextnumbers = numbers.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId +1);
        setNumbers(nextnumbers);
        setInputText('');
    }
    const onRemove = (id) =>{
        const nextNumbers = numbers.filter(number => number.id !== id);
        setNumbers(nextNumbers);
    }

    const numberList = numbers.map(number => <li key={number.id} onDoubleClick={()=>onRemove(number.id)}>{number.text}</li>);
    return (
        <>
            <h1>반복 사용</h1>
            <input value={inputText} onChange={onChange}/>
            <button onClick = {onClick}>추가</button>
            <ul>{numberList}</ul>
        </>    
    );
};

export default IterationSample;