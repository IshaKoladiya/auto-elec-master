import { useEffect, useState } from "react";
import "../styles/admin-user.css";
import { axiosGet } from "../../../helper/genral-helper";

const perpage = 2;

const AdminUsers = ({relation}) => {
  const [userData, setuserData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axiosGet(`/${relation}`).then((res) => {
      setuserData(res.data);
    });
    return () => {
      setuserData([]);
    };
  }, []);

  return (
    <>
      <div className="table-container">
        <h1>{relation.charAt(0).toUpperCase() + relation.slice(1)}</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {userData.slice(page, page + perpage).map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{new Date(user.id).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          type="button"
          className="prev"
          onClick={() => setPage(page - perpage)}
          disabled={page == 0}
        >
          Previus
        </button>
        <button
          type="button"
          className="next"
          onClick={() => setPage(page + perpage)}
          disabled={page >= userData.length - perpage}
        >
          Next
        </button>

        {/* <button
          onClick={() => setPage(page + perpage)}
          disabled={page >= userData.length - perpage}
          className="paginationButton"
        >
          Load More
        </button> */}
      </div>
    </>
  );
};

export default AdminUsers;
