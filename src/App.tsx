import './App.css'
import UsersForm from './components/UserForm/UserForm'
import User from './components/User/User'

const App = () => {
  return (
    <>
      <div className="container text-center mt-5">
        <div className="row justify-content-between">
          <div className="col-5 bg-body-tertiary rounded">
            <h3>Create user</h3>
            <UsersForm/>
          </div>
          <div className="col-5 bg-body-tertiary rounded">
            <h3>Users</h3>
            <User/>
          </div>
        </div>
      </div>
    </>
  )
};

export default App
