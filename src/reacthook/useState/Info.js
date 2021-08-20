import React, {useState, useEffect} from 'react';

const Info = () => {

    const[name, setName] = useState('');
    const[nickname, setNickname] = useState('');
    
    
    // useEffect 기본
    useEffect(()=>{
        console.log('랜더링되었습니다.');
    })
    // mount시에만 실행
    useEffect(()=>{
        console.log('마운트에만 실행됩니다');
    },[])
    // 특정값 업데이트 시
    useEffect(()=>{
        console.log('특정 값만 업데이트시 발생'+name);    
    },[name])
    //뒷정리하기
    useEffect(()=>{
        console.log('effect');
        console.log(name);
        return () =>{
            console.log('cleanUp');
            console.log(name);
        }
    })

    const onChangeName = (e) =>{
        setName(e.target.value);
    }
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }

    return (
        <>
        <h1>useState 예제2</h1>
        <div>
            <input value={name} onChange={onChangeName}/>
            <input value={nickname} onChange={onChangeNickname}/>
        </div>
        <div>
            <div><b>이름</b>{name}</div>
            <div><b>별명</b>{nickname}</div>
        </div>
        </>
    );
};

export default Info;