import React, { Component } from "react";

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userEditObject.id,
      name: this.props.userEditObject.name,
      tel: this.props.userEditObject.tel,
      Permission: this.props.userEditObject.Permission
    };
  }

  isChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  saveButton = () => {
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.Permission = this.state.Permission;
    this.props.getUserEditInfo(info);
    this.props.changeEditUserStatus();
  };
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <form method="POST">
            <div className="card border-primary mb-3">
              <div className="card-header">Sửa thông tin</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên user"
                    name="name"
                    defaultValue={this.props.userEditObject.name}
                    onChange={event => this.isChange(event)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Điện thoại"
                    name="tel"
                    defaultValue={this.props.userEditObject.tel}
                    onChange={event => this.isChange(event)}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="custom-select"
                    name="Permission"
                    defaultValue={this.props.userEditObject.Permission}
                    onChange={event => this.onChange(event)}
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
                  value="Lưu"
                  onClick={() => this.saveButton()}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
