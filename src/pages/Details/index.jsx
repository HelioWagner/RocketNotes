import { Container, Link, Content } from './styles'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';



export function Details() {
  return (
       <Container>
          <Header/>
          <main>
            <Content>
                <ButtonText title="Excluir nota"/>   
                 <h1>Intorudução ao REACT</h1>

                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, impedit. Laudantium quam recusandae sequi animi numquam minus 
                    eaque ipsum nemo quis cumque repellat, quo ab vel aliquam voluptate reprehenderit accusantium.</p>
                
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
             </Content>
          </main>
        </Container>  
  )
}