import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

class TableData extends Component {
  mappingDataUser = () =>
    this.props.dataUserProps.map((value, key) => (
      <TableDataRow
        deleteButtonClick={idUser => this.deleteButtonClick(idUser)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        editFunClick={user => this.props.editFun(value)}
        userName={value.name}
        key={key}
        stt={key}
        tel={value.tel}
        permission={value.Permission}
        id={value.id}
      />
    ));
  deleteButtonClick = idUser => {
    this.props.deleteUser(idUser);
  };
  render() {
    return (
      <div className="col">
        <table className="table table-striped table-hover">
          <thead className="thead-default">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}
export default TableData;
