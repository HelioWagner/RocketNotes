import { Container, Link } from './styles'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';



export function Details() {
  return (
       <Container>
          <Header/>
          <Section title="Links úteis">
            <Link>
              <li><a href="#">https://rocketseat.com.br</a></li>
              <li><a href="#">https://rocketseat.com.br</a></li>
            </Link>
          </Section>
          <Section title="Marcadores">
             <Tag title="express"/>
             <Tag title="node js"/>
          </Section>
          <Button title="Voltar"/>
        </Container>  
  )
}