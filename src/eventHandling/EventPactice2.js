import React, {useState}from 'react';

const EventPractice2 = () => {

    //const[userName, setUsername] = useState('');
    //const[message, setMessage] = useState('');
    //useState객체 생성 (e.target.name을 사용하기 위함 // 인풋 갯수가 많을 때)
    const[form, setForm] = useState({
        userName:'',
        message:''
    })


    //const onChangeUserName = e => setUsername(e.target.value);
    //const onChangeMessage = e => setMessage(e.target.value);
    
    //1. 기존 form 선언 
    const {userName, message} = form;
    //2. 변경함수 선언
    const onChange = e => {
        //2.1 변경되는 form 선언
        const nextForm = {
            //2.1.1 이문법 study 필요!!
            ...form,
            //2.2.2 새로운 입력값 name:value 세팅 
            [e.target.name] : e.target.value
        };
        //2.2 변경되는 form 으로 state 변경
        setForm(nextForm)
    }

    
    const onClick = () => {
        alert(userName + ':' + message);
        setForm({
            userName:'',
            message:''
        })

    };
    const onKeyPress = e => {
        if(e.key ==='Enter'){
            onClick();
        }
    }

    return (
        <div>
            <h1> 이벤트 연습</h1>
            <input
                type="text"
                name="userName"
                placeholder="사용자명"
                value={userName}
                onChange={onChange}
            />
            <input 
                type="text"
                name="message"
                placeholder="입력해주세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}> 클릭</button>           
        </div>
    );
}

export default EventPractice2;