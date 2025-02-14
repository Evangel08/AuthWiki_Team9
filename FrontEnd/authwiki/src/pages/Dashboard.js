import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllAuthLib } from "../store/authlib/authlibSlice";

const Dashboard = () => {
  const { isLoading, authlib } = useSelector((state) => state.authlib);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAuthLib());
  }, [dispatch]);

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (authlib.length > 0) {
    return (
      <ul>
        {authlib.map((item) => {
          return (
            <li key={item.id}>
              <h2>
                {item.name}
                <span>
                  <Link to={`/authlib/${item.id}`}> View</Link>
                </span>
              </h2>
            </li>
          );
        })}
      </ul>
    );
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
