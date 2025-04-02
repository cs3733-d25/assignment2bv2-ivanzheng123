import Title from './components/title.tsx'
import Intro from './components/intro.tsx'
import Hobby1 from './components/hobby1.tsx'
import List1 from './components/list1.tsx'
import Table1 from './components/table1.tsx'
import Form1 from './components/form1.tsx'


function App() {

  return (
    <>
        <Title />
        <Intro  name1 = "Ivan Zheng" name2 = "Ethan Shanbaum"/>
        <Hobby1 />
        <List1 />
        <Table1 />
        <Form1 />
    </>
  )
}

export default App
