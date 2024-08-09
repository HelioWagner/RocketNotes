import { Container } from './styles'
import { Button } from '../../components/Button';

export function Details() {
  return (
       <Container>
          <h1>Hello </h1>
          <span>Helio wagner</span>
          <Button title="Entrar" loading/>
          <Button title="Cadastrar"/>
          <Button title="Voltar"/>
        </Container>  
  )
}