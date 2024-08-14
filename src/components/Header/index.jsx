import { Container , Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
    return (
       <Container>
         <Profile>
          <img src="https://github.com/HelioWagner.png" 
               alt="Foto usuário" />  
           <div>
            <span>Bem vindo</span>
            <strong>Hélio Wagner</strong>
         </div>          
         </Profile> 
         <Logout>
            <RiShutDownLine/>
        </Logout>       
       </Container>

    )
}