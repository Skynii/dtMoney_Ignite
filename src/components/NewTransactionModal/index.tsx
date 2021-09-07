import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react';
import { Container, TransactionTypeContainer , RadioBox} from './styles';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose:() => void;
}



export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, setType]= useState('deposit');
    
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose} 
            overlayClassName= "react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" 
            onClick={onRequestClose}
            className="react-modal-close" >
                <img src={closeImg} alt="Fechar Modal"/>
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder = "Valor"
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive= {type === 'deposit'}
                        activeColor ="green"
                    >
                        <img src= {incomeImg} alt= "Seta de Entrada"/>
                        Entrada
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor ="red"
                    >
                        <img src= {outcomeImg} alt= "Seta de Saída"/>
                        Saída
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                placeholder="Categoria"
                />

                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    );
}