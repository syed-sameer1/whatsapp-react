import React, { Component } from "react";
import "./ContactList.css";
import axios from "axios";
class ContactList extends Component {
  state = {
    chats: []
  };

  componentDidMount() {
    axios.get("https://tk-whatsapp.herokuapp.com/messages").then(res => {
      const chats = res.data;
      this.setState({ chats });
    });
  }

  render() {
    return (
      <ul>
        {this.state.chats.map(item => (
          <li>
            <div className={item.isUnread ? "unseen" : "main"}>
              <div className="imgDiv">
                <img src={item.profilePic} alt="profilPic" />
              </div>
              <div className="detail">
                <div className="info">
                  <h2>{item.name}</h2>
                  <p className="number">{item.number}</p>
                  <p className="messege">{item.firstLine}</p>
                  <p className="time">{item.time}</p>
                </div>
                {item.isUnread ? (
                  <div className="unread">
                    <div>{item.numbUnread}</div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {};

export default ContactList;
