import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"
import { useState } from 'react';
import  Modal  from 'react-modal';

Modal.setAppElement('#root');//para modal parecer em qualquer pagina


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen]= useState(false);
 
   function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

    function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    
     <> 
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
     <Dashboard />
     
     <Modal 
                isOpen={isNewTransactionModalOpen} 
                onRequestClose={handleCloseNewTransactionModal}
                >
                    <h2>Cadastrar Transação</h2>
                </Modal>
     <GlobalStyle /> 
    
    </>
  );
}


