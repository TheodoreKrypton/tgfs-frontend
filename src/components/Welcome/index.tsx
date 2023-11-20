import React from "react";

import { Form, useLocation } from "react-router-dom";

import tgfs from "src/api/tgfs";

export const Welcome = () => {
  const [baseURL, setBaseURL] = React.useState<string>(tgfs.getBaseURL());

  const handleBaseURLChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setBaseURL(event.target.value);
    },
    []
  );

  const handleSubmit = (event: React.SyntheticEvent) => {
    tgfs.setBaseURL(baseURL);
  };

  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit} action="/tasks">
          <label htmlFor="base-url">Base URL</label>
          <input
            id="base-url"
            type="text"
            value={baseURL}
            onChange={handleBaseURLChange}
          />
          <input type="submit" value="Connect" />
        </Form>
      </div>
    </div>
  );
};
