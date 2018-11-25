import React, { Component } from "react";
import "./../App.css";
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import AddUser from "./AddUser";
import DataUser from "./Data.json";

class App extends Component {
  thongBao = () => {
    console.log("Kết nối thành công");
  };

  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      searchText: "",
      editUserStatus: false,
      userEditObject: {}
    };
  }

  componentWillMount() {
    //Kiểm tra dữ liệu localStorage có chưa? có thì kiểm tra cập nhật lại
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data: temp
      });
    }
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  };

  getTextSearch = dl => {
    this.setState({
      searchText: dl
    });
  };

  getNewUserData = (name, tel, Permission) => {
    var item = {};
    const uuidv1 = require("uuid/v1");

    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    var items = this.state.data;
    this.setState({
      data: items
    });
    items.push(item);
    localStorage.setItem("userData", JSON.stringify(items));
  };

  editUser = user => {
    this.setState({
      userEditObject: user
    });
  };
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  };
  getUserEditInfoApp = info => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    });
    localStorage.setItem("userData", JSON.stringify(this.state.data));
  };
  deleteUser = idUser => {
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data: tempData
    });
    localStorage.setItem("userData", JSON.stringify(tempData));
  };

  render() {
    var ketqua = [];
    this.state.data.forEach(item => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    });
    //console.log(this.state.data);
    return (
      <div className="App">
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfoApp={info => this.getUserEditInfoApp(info)}
                userEditObject={this.state.userEditObject}
                checkConnectProps={dl => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <TableData
                deleteUser={idUser => this.deleteUser(idUser)}
                dataUserProps={ketqua}
                editFun={user => this.editUser(user)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <AddUser
                getUserDataProps={(name, tel, Permission) =>
                  this.getNewUserData(name, tel, Permission)
                }
                hienThiForm={this.state.hienThiForm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
