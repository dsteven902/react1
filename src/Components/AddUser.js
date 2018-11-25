import React, { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      Permission: ""
    };
  }

  isChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    // đóng gói thành đối tượng
    var item = {};
    item.id = this.state.id;
    item.name = this.state.name;
    item.tel = this.state.tel;
    item.Permission = this.state.Permission;
  };

  kiemTraTrangThai = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div className="col">
          <form method="POST">
            <div className="card border-primary mb-3">
              <div className="card-header">Thêm mới user vào hệ thống</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên user"
                    name="name"
                    onChange={event => this.isChange(event)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Điện thoại"
                    name="tel"
                    onChange={event => this.isChange(event)}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="custom-select"
                    name="Permission"
                    onChange={event => this.isChange(event)}
                    required
                  >
                    <option>Chọn quyền mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Modrator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <input
                  type="reset"
                  className="btn-block btn-primary"
                  onClick={() =>
                    this.props.getUserDataProps(
                      this.state.name,
                      this.state.tel,
                      this.state.Permission
                    )
                  }
                  value="Thêm mới"
                />
              </div>
            </div>
          </form>
        </div>
      );
    }
  };

  render() {
    // console.log(this.state);
    return <div>{this.kiemTraTrangThai()}</div>;
  }
}
