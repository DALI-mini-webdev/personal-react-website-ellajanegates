import React, { Component } from 'react';
import "./Contact.css"
import firebase from '../../firebase/index.js';
import Message from "./Message.js";

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
          allMessages: [],
          firstName: '',
          lastName: '',
          id: 0,
          email: '',
          message: '',
          clicked: false,
        }
    }

    newNameFunction = (event) => {
        this.setState({ title: event.target.value });
    }
    newMessageFunction = (event) => {
        this.setState({ task: event.target.value });
    }

    saveNewMessage = () => { 
        firebase.db.collection('messages').add({
          firstName: this.state.firstName,
          message: this.state.message,
          id: this.state.id
        }).then(ref => {
          console.log('document reference ID', ref.id)
          this.setState({
            id: this.state.id + 1,
          });
          }).catch(error => {
        console.log(error.message)
        });
    }

    fetchMessages = () => {
        const messageList = [];
        firebase.db.collection('messages').get()
          .then(querySnapshot => {
            querySnapshot.forEach( doc => {
              console.log(doc.data());
              this.setState({
                allMessages: [doc.data()]
              })
              messageList.push(doc.data());
            })
          }).then(() => {
            this.setState({
              allMessages: messageList
            });
            console.log(this.state.allMessages);
          })
          .catch(err => {
            console.log(err.message)
          })
    }
    

    handleClick = () => {
        return(
            <div>
                {this.saveNewMessage}
                <p>Thanks! I'll get back to you soon.</p>
            </div>
        )
    }

    render() {
        const posts = this.state.allMessages;
        const allMessages = posts.map((message) => {
            return (
                <Message
                firstName={message.firstName}
                message={message.task}
                id={message.id}
                />
            );
        }
        );
        return (
            <div className="form">
                <p>Contact Me</p>
                <div>
                    <form action="/action_page.php">
                    <label>First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." value={this.state.newName} onChange={this.newNameFunction}/>

                    <label>Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>


                    <label>Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email"/>


                    <label>Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." value={this.state.newMessage} onChange={this.newMessageFunction}></textarea>

                    <input type="submit" value="Submit" onClick={() => this.handleClick}/>

                    <div className='allMessages'>
                        <button onClick={this.fetchMessages}> Show My Messages!</button>
                        {allMessages}
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Contact;