/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  AppBar,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import "./App.css";

const App = () => {
  const socket = useMemo(
    () => io("http://localhost:3000", { withCredentials: true }),
    []
  );

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [socketID, setSocketId] = useState("");
  const [roomName, setRoomName] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message, room });
    setMessage("");
    setRoom("");
  };

  const joinRoomHandler = (e) => {
    e.preventDefault();
    socket.emit("join-room", roomName);
    setRoomName("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      // @ts-ignore
      setSocketId(socket.id);
      console.log("connected", socket.id);
    });

    socket.on("receive-message", (data) => {
      console.log(data);
      // @ts-ignore
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on("welcome", (s) => {
      console.log(s);
    });

    socket.on("online-users", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div className="app-container">
      {/* Left Sidebar */}
      <div className="left-sidebar">
        <Typography variant="h6" gutterBottom>
          User Profile
        </Typography>
        <Divider />
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText primary="User Name" secondary="user@example.com" />
          </ListItem>
        </List>
        <Typography variant="h6" gutterBottom>
          Navigation
        </Typography>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Chat Rooms" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Typography variant="h6" gutterBottom>
          Recent Chats
        </Typography>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Chat 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Chat 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Chat 3" />
          </ListItem>
        </List>
      </div>
      {/* Main Content */}
      <div className="main-content">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Socket Chat
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="sm">
          <Typography variant="h3" component="div" gutterBottom>
            Welcome to Live Class
          </Typography>

          <Typography variant="h6" component="div" gutterBottom>
            {socketID}
          </Typography>

          <form onSubmit={joinRoomHandler}>
            <Typography variant="h5" component="div" gutterBottom>
              Join Room
            </Typography>
            <TextField
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              id="outlined-basic"
              label="Room Name"
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
              Join
            </Button>
          </form>

          <form onSubmit={handleSubmit}>
            <Typography variant="h5" component="div" gutterBottom>
              Send Message
            </Typography>
            <TextField
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="outlined-basic"
              label="Message"
              variant="outlined"
            />
            <TextField
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              id="outlined-basic"
              label="Room"
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </form>

          <Stack>
            {messages.map((m, i) => (
              <Typography key={i} variant="h6" component="div" gutterBottom>
                {m}
              </Typography>
            ))}
          </Stack>
        </Container>
      </div>
      {/* Right Sidebar */}
      <div className="right-sidebar">
        <Typography variant="h6" gutterBottom>
          Online Users
        </Typography>
        <Divider />
        <List>
          {onlineUsers.map((user) => (
            <ListItem
              key={
                // @ts-ignore
                user.id
              }
            >
              <ListItemText
                primary={
                  // @ts-ignore
                  user.name
                }
              />
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" gutterBottom>
          Trending Topics
        </Typography>
        <Divider />
        <List>
          <ListItem>
            <ListItemText primary="#ReactJS" />
          </ListItem>
          <ListItem>
            <ListItemText primary="#WebDevelopment" />
          </ListItem>
          <ListItem>
            <ListItemText primary="#SocketIO" />
          </ListItem>
        </List>
      </div>
      {/* Footer */}
      <footer className="footer">
        <Typography variant="body1" align="center" gutterBottom>
          Socket Chat App
        </Typography>
      </footer>
    </div>
  );
};

export default App;
