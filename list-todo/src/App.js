import "./App.css";
import { Button, Container, Form, InputGroup, Nav } from "react-bootstrap";
import ModalForm from "./components/Modal";
import Control from "./components/Control";
import { useEffect, useState } from "react";
import ListToDo from "./components/ListToDo";

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [actionForm, setActionForm] = useState("");
  const [listToDo, setListToDo] = useState([]);
  const [dataItem, setDataItem] = useState({
    name: "",
    content: "",
    type: "",
    id: "",
    date: "",
  });

  const [filterData, setFilterData] = useState();
  const [dataFilter, setDataFilter] = useState(listToDo);
  const [searchTerm, setSearchTerm] = useState("");

  // Xử lý toggle modal
  const handleToggleModal = (status, action, id) => {
    if (action === "edit") {
      const data = listToDo.find((item) => item.id === id);
      setDataItem(data);
    }
    setActionForm(action);
    setToggleModal(status);
  };

  // Filter dữ liệu
  const handleFilter = (e) => {
    const type = e.target.value;
    setFilterData(type);
    if (type === "All word") {
      setDataFilter(listToDo);
    } else {
      const newData = listToDo.filter((item) => item.type === type);
      setDataFilter(newData);
    }
    setSearchTerm("");
  };

  // Xử lý tìm kiếm
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  // Xử lý submit modal
  const handleAddEditForm = (data) => {
    // Khi add mới (Không có id từ form)
    if (!data.id) {
      data.id = listToDo.length ? listToDo[listToDo.length - 1].id + 1 : 1;
      setListToDo([...listToDo, data]);
    } else {
      // Khi edit có id từ form
      const newData = listToDo.map((item) => {
        if (item.id === data.id) {
          return { ...item, ...data };
        }
        return item;
      });

      setListToDo(newData);
    }
  };

  const handleDelete = (id) => {
    const newData = listToDo.filter((data) => data.id !== id);
    setListToDo(newData);
  };

  useEffect(() => {
    setDataFilter(listToDo);
  }, [listToDo]);

  return (
    <>
      {/* Control */}
      <Control
        onToggleModal={handleToggleModal}
        onFilter={handleFilter}
        onSearch={handleSearch}
        searchTerm={searchTerm}
      />

      {/* Form Modal */}
      <ModalForm
        toggleModal={toggleModal}
        onToggleModal={handleToggleModal}
        onAddEditForm={handleAddEditForm}
        dataItem={dataItem}
      />

      {/* List to do */}
      <Container>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <input
              value="All word"
              onClick={handleFilter}
              className={filterData === "All word" ? "active" : ""}
              type="submit"
            />
          </Nav.Item>
          <Nav.Item>
            <input
              value="company"
              onClick={handleFilter}
              className={filterData === "company" ? "active" : ""}
              type="submit"
            />
          </Nav.Item>
          <Nav.Item>
            <input
              value="home"
              onClick={handleFilter}
              className={filterData === "home" ? "active" : ""}
              type="submit"
            />
          </Nav.Item>
        </Nav>
      </Container>

      <Container>
        <ListToDo
          listToDo={dataFilter}
          searchTerm={searchTerm}
          onToggleModal={handleToggleModal}
          onDeleteData={handleDelete}
        />
      </Container>
    </>
  );
}

export default App;
