// style
import './App.css'
import { useState } from "react";


// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer'
import UserList from './components/userList/UserList';
import NewUserForm from './components/newUser/NewUserForm';

function App() {
  let [users, setUsers] = useState([]);
  let [showModal, setShowModal] = useState(false)

  // delete users
  let deleteUsers = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      })
    })
  }

  // close Modal 
  let closeModal = (e) => {
    if (e.target.className === `overlay` || e.key === `Escape`) setShowModal(false);
  }

  // Add users
  let addUsers = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    })
    setShowModal(false)
  }

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'>
      <Navbar usersLenght={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUsers={deleteUsers}/>
      </main>
      {showModal && <NewUserForm addUsers={addUsers}/>}
      <button onClick={() => setShowModal(true)} className='create-user'>Create Users</button>
      <Footer />
    </div>
  )
}

export default App