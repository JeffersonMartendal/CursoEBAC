import Titulo from '../../components/Titulo'
import Paragrafro from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafro tipo="secundario">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
      exercitationem temporibus eaque voluptatibus voluptate voluptates iure
      tempora fugiat pariatur repellendus porro itaque autem nam in, mollitia,
      ullam sit odit ducimus.
    </Paragrafro>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=JeffersonMartendal&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JeffersonMartendal&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
