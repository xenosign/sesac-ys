import TableColumn from './TableColumn';
function Table() {
  return (
    <div className="App">
      <table border="1">
        <tbody>
          <tr border="1">
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <TableColumn />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
