import React from "react";
import { Form } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import tgfs from "src/api/tgfs";

export const Welcome = () => {
  const [baseURL, setBaseURL] = React.useState<string>(tgfs.getBaseURL());
  const [username, setUsername] = React.useState<string>(tgfs.getUsername());
  const [password, setPassword] = React.useState<string>(tgfs.getPassword());

  const handleBaseURLChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setBaseURL(event.target.value);
    },
    []
  );

  const handleUserNameChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    []
  );

  const handlePasswordChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    []
  );

  const handleSubmit = (event: React.SyntheticEvent) => {
    tgfs.setBaseURL(baseURL);
    tgfs.setUsername(username);
    tgfs.setPassword(password);
  };

  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit} action="/tasks">
          <TextField
            required
            id="base-url"
            label="API URL"
            defaultValue={baseURL}
            variant="filled"
            margin="dense"
            fullWidth
            onChange={handleBaseURLChange}
          />
          <TextField
            required
            id="username"
            label="Username"
            defaultValue={username}
            variant="filled"
            margin="dense"
            fullWidth
            onChange={handleUserNameChange}
          />
          <TextField
            required
            id="password"
            label="Password"
            defaultValue={password}
            variant="filled"
            type="password"
            margin="dense"
            fullWidth
            onChange={handlePasswordChange}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="text" type="submit">
              Connect
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
