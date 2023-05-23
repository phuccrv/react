import { Button, Table } from "react-bootstrap";
import { BiEditAlt, BiTrash } from "react-icons/bi";

function ListToDo(props) {
  const { listToDo, searchTerm, onToggleModal, onDeleteData } = props;

  const filteredList = listToDo.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Table responsive="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Content</th>
          <th>Status</th>
          <th>Deadline</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredList.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.content}</td>
            <td>{item.status ? "Done" : "Unfinished"}</td>
            <td>{item.date}</td>
            <td>{item.type}</td>
            <td>
              <Button
                className="me-1 btn-primary"
                onClick={() => onToggleModal(true, "edit", item.id)}
              >
                <BiEditAlt />
              </Button>
              <Button className="btn-danger" onClick={() => onDeleteData(item.id)}>
                <BiTrash />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListToDo;
