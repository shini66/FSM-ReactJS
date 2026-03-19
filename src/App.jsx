import ListaDeUsuarios from '@/components/UserList.jsx'
import UserForm from './components/UserFrom'
import ContadorReducer from './components/Example2.jsx';

function App() {
  return (
    <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
      <ContadorReducer />
      <h1 className="text-3xl font-bold mb-6">Lista de Usuarios</h1>
      <ListaDeUsuarios />
    </main>
  )
}

export default App
