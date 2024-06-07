const UserForm = () => {
  return (
    <form>
      <h3 className="mt-4 mb-3">Add user</h3>
      <div className="form-group mb-3 text-start fs-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="form-control"
        />
      </div>
      <div className="form-group mb-3 text-start fs-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <div className="form-check text-start row-2 p-0 fs-4">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Activity
          </label>

          <div className="d-inline-block">
            <input className="form-check-input ms-2" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
          </div>
        </div>
      </div>
      <div className="form-group mb-3 text-start">
        <select className="form-select fs-4" aria-label="Default select example" value="Default select">
          <option value="user" selected>User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-2 fs-4">Add user</button>
    </form>
  );
};

export default UserForm;