# 목표

### 전역 관리
ModalProvider와 useModal 훅을 통해 애플리케이션 전역에서 모달을 쉽게 관리

### 스택
여러 모달을 스택 형태로 관리하여, 중첩된 모달의 처리 가능

### 유연성
모달 컴포넌트를 별도로 정의하여 다양한 형태의 모달 구현 가능

### 결과 처리
resolve와 reject 메서드를 사용하여 모달의 결과를 쉽게 처리



### 예시
```javascript
export default function App() {
  return (
    <ModalProvider>
      <Component />
    </ModalProvider>
  );
}

function Component() {
  const modalManager = useModal();

  const openModal = async () => {
    try{
      await modalManager.push("Key", Modal, {
        title: "Test Modal",
        content: "Test Modal Content",
      });

      onConfirm();
    } catch {
      onCancel();
    }
  };

  return <button onClick={openModal}>모달 오픈</button>;
}

function Modal({ title, content, resolve, reject }) {
  return (
    <div className="modal-container">
      <h2 className="modal-title">{title}</h2>
      <p className="modal-content">{content=}</p>
      <div className="button-container">
        <button onClick={resolve}>확인</button>
        <button onClick={reject}>취소</button>
      </div>
    </div>
  );
}
```

참고 : https://www.youtube.com/watch?v=gMzYOE0TV0g&t=470s
