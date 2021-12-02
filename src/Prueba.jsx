const Prueba = ({ openModal, setOpenModal }) => {
  const onClickBtn = (event) => {
    event.target.textContent === "Login"
      ? setOpenModal({...openModal, login: true})
      : setOpenModal({...openModal, signUp: true}); 
  };
  
  return (
    <div>
      <button className="btn-outline-primary" onClick={onClickBtn}>
        Login
      </button>
      <button className="btn-outline-primary" onClick={onClickBtn}>
        Sign up
      </button>
    </div>
  );
};

export { Prueba };
