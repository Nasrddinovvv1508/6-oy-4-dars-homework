// style
import './App.css'
import { useState } from "react";


// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer'
import UserList from './components/userList/UserList';

function App() {
  let [users, setUsers] = useState([]);

  // delete users
  let deleteUsers = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      })
    })
  }

  return (
    <div className='App'>
      <Navbar usersLenght={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUsers={deleteUsers}/>
      </main>
      <button className='create-user'>Create Users</button>
      <Footer />
    </div>
  )
}

export default App

// id: 1,
// image: `https://picsum.photos/400/400?random=1`,
// firstName: `Najmiddin`,
// lastName: `Nasriddinov`,
// age: 16,
// from: `Uzbekistan`,
// job: `Frontend Developer`,
// gender: `Male`,