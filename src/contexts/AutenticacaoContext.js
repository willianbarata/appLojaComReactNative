import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({children}){

    const [ usuario, setUsuario] = useState({});

    function login(email, senha){
        if(email == 'willian@email.com'
            && senha == 123){
                setUsuario({
                    nome: 'Willian',
                    email: 'willian@email.com',
                    endereco: 'Av. Brasil',
                    telefone: '(11) 99999-9999'
                })
                return 'ok';
            }else{
                return 'E-mail ou senha incorretos';
            }
    }

    return(
        <AutenticacaoContext.Provider value={{
            usuario,
            login
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}